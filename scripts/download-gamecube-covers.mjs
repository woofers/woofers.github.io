#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import GameCube games data from JSON
const { gamecube: gamecubeGames } = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'gamecube-covers.json'), 'utf8')
);

// Create output directory
const outputDir = path.join(__dirname, '../covers/gamecube');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
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
function sanitizeFilename(name) {
  return name
    .replace(/[<>:"/\\|?*]/g, '') // Remove invalid characters
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
}

// Function to get file extension from URL
function getFileExtension(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  return ext || '.jpg'; // Default to .jpg if no extension
}

async function downloadGameCubeCovers() {
  const gamesWithImages = gamecubeGames.filter(game => game.img_path);
  
  console.log(`Found ${gamesWithImages.length} GameCube games with cover images`);
  
  const downloadPromises = gamesWithImages.map(async (game, index) => {
    try {
      // Use standardName if available, otherwise use name
      const gameName = game.standardName || game.name;
      const sanitizedName = sanitizeFilename(gameName);
      const fileExtension = getFileExtension(game.img_path);
      const filename = `${sanitizedName}${fileExtension}`;
      const filepath = path.join(outputDir, filename);
      
      console.log(`[${index + 1}/${gamesWithImages.length}] Downloading: ${gameName}`);
      await downloadImage(game.img_path, filepath);
      
      return { success: true, game: gameName, filename };
    } catch (error) {
      console.error(`Failed to download ${game.name}:`, error.message);
      return { success: false, game: game.name, error: error.message };
    }
  });
  
  const results = await Promise.all(downloadPromises);
  
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
