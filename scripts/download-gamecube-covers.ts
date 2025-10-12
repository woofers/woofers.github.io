#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Import directly from the covers TypeScript file
import { collection } from '../apps/site/src/app/(collect)/game/_covers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create output directory
const outputDir = path.join(__dirname, '../covers/gamecube');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download an image with retry logic and exponential backoff
async function downloadImage(url: string, filepath: string, retryCount = 0): Promise<void> {
  const maxRetries = 5;
  const baseDelay = 1000; // 1 second base delay
  
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 429) {
        // Rate limited - implement exponential backoff
        if (retryCount < maxRetries) {
          const delay = baseDelay * Math.pow(2, retryCount) + Math.random() * 1000; // Add jitter
          console.log(`Rate limited (429). Retrying in ${Math.round(delay)}ms... (attempt ${retryCount + 1}/${maxRetries})`);
          
          setTimeout(async () => {
            try {
              await downloadImage(url, filepath, retryCount + 1);
              resolve();
            } catch (error) {
              reject(error);
            }
          }, delay);
          return;
        } else {
          reject(new Error(`Rate limited (429) - max retries (${maxRetries}) exceeded for ${url}`));
          return;
        }
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to sanitize filename
function sanitizeFilename(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, '') // Remove invalid characters
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
}

// Function to get file extension from URL
function getFileExtension(url: string): string {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  return ext || '.jpg'; // Default to .jpg if no extension
}

interface DownloadResult {
  success: boolean;
  game: string;
  filename?: string;
  error?: string;
}

async function downloadGameCubeCovers(): Promise<void> {
  const gamecubeGames = collection.gamecube;
  const gamesWithImages = gamecubeGames.filter(game => game.img_path);
  
  console.log(`Found ${gamesWithImages.length} GameCube games with cover images`);
  
  // Process downloads sequentially to avoid overwhelming the API
  const results: DownloadResult[] = [];
  
  for (let index = 0; index < gamesWithImages.length; index++) {
    const game = gamesWithImages[index];
    
    try {
      // Use standardName if available, otherwise use name
      const gameName = game.standardName || game.name;
      const sanitizedName = sanitizeFilename(gameName);
      const fileExtension = getFileExtension(game.img_path!);
      const filename = `${sanitizedName}${fileExtension}`;
      const filepath = path.join(outputDir, filename);
      
      console.log(`[${index + 1}/${gamesWithImages.length}] Downloading: ${gameName}`);
      await downloadImage(game.img_path!, filepath);
      
      results.push({ success: true, game: gameName, filename });
      
      // Add a small delay between downloads to be respectful to the API
      if (index < gamesWithImages.length - 1) {
        const delay = 500 + Math.random() * 500; // 500-1000ms random delay
        console.log(`Waiting ${Math.round(delay)}ms before next download...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to download ${game.name}:`, errorMessage);
      results.push({ success: false, game: game.name, error: errorMessage });
    }
  }
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log('\n=== Download Summary ===');
  console.log(`Successfully downloaded: ${successful.length} covers`);
  console.log(`Failed downloads: ${failed.length} covers`);
  
  if (failed.length > 0) {
    console.log('\nFailed downloads:');
    failed.forEach(f => console.log(`- ${f.game}: ${f.error}`));
  }
  
  // Create a manifest file with all the downloaded covers
  const manifest = {
    totalGames: gamecubeGames.length,
    gamesWithCovers: gamesWithImages.length,
    downloadedCovers: successful.length,
    failedDownloads: failed.length,
    covers: successful.map(r => ({
      name: r.game,
      filename: r.filename
    }))
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`\nManifest saved to: ${path.join(outputDir, 'manifest.json')}`);
  console.log(`All covers saved to: ${outputDir}`);
}

// Run the script
downloadGameCubeCovers().catch(console.error);
