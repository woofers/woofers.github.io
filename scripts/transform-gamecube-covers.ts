#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Input and output directories
const inputDir = path.join(__dirname, '../covers/gamecube');
const outputDir = path.join(__dirname, '../covers/gamecube-transformed');
const referenceFile = path.join(__dirname, '../apps/site/public/ssbm.jpg');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to get all image files from input directory
function getImageFiles(dir: string): string[] {
  return fs.readdirSync(dir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => path.join(dir, file));
}

// Function to get reference image dimensions and properties
async function getReferenceProperties(referencePath: string) {
  const metadata = await sharp(referencePath).metadata();
  return {
    width: metadata.width!,
    height: metadata.height!,
    format: metadata.format
  };
}

// Template positioning constants
const TEMPLATE_CONFIG = {
  cropWidth: 2156,
  cropHeight: 3226,
  cropX: 147,  // X position from left edge
  cropY: 0     // Y position from top edge
};


// Function to transform a single cover image
async function transformCover(inputPath: string, outputPath: string, referenceProps: any): Promise<void> {
  try {
    console.log(`Transforming: ${path.basename(inputPath)}`);
    
    // Get input image metadata
    const inputMetadata = await sharp(inputPath).metadata();
    const inputWidth = inputMetadata.width!;
    const inputHeight = inputMetadata.height!;
    
    console.log(`  📐 Input: ${inputWidth}x${inputHeight}, Target: ${TEMPLATE_CONFIG.cropWidth}x${TEMPLATE_CONFIG.cropHeight}`);
    
    // First, prepare the cover image (resize and rotate)
    const coverBuffer = await sharp(inputPath)
      .rotate(90) // Rotate 90 degrees clockwise
      .resize(TEMPLATE_CONFIG.cropWidth, TEMPLATE_CONFIG.cropHeight, {
        fit: 'inside',
      })
      .jpeg({ quality: 90 })

      .toBuffer();
    
    // Check if reference file exists
    if (!fs.existsSync(referenceFile)) {
      throw new Error(`Reference file not found: ${referenceFile}`);
    }
    
    // Get reference image dimensions
    const refMetadata = await sharp(referenceFile).metadata();
    console.log(`  📍 Reference image: ${refMetadata.width}x${refMetadata.height}`);
    console.log(`  📍 Cover size: ${TEMPLATE_CONFIG.cropWidth}x${TEMPLATE_CONFIG.cropHeight}`);
    console.log(`  📍 Placing cover at position (${TEMPLATE_CONFIG.cropX}, ${TEMPLATE_CONFIG.cropY}) on template`);
    
    // Check if the position is within bounds
    if (TEMPLATE_CONFIG.cropX + TEMPLATE_CONFIG.cropWidth > refMetadata.width! || 
        TEMPLATE_CONFIG.cropY + TEMPLATE_CONFIG.cropHeight > refMetadata.height!) {
      console.log(`  ⚠️  Warning: Cover extends beyond reference image bounds!`);
      console.log(`  ⚠️  Reference: ${refMetadata.width}x${refMetadata.height}, Cover end: (${TEMPLATE_CONFIG.cropX + TEMPLATE_CONFIG.cropWidth}, ${TEMPLATE_CONFIG.cropY + TEMPLATE_CONFIG.cropHeight})`);
    }
    
    // Now composite it onto the reference template
    await sharp(referenceFile)
      .composite([{
        input: coverBuffer,
        left: TEMPLATE_CONFIG.cropX,
        top: TEMPLATE_CONFIG.cropY
      }])
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`✅ Transformed: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Failed to transform ${path.basename(inputPath)}:`, error);
    throw error;
  }
}

// Main transformation function
async function transformAllCovers(): Promise<void> {
  try {
    console.log('🎮 GameCube Cover Transformer');
    console.log('============================');
    
    // Display template configuration
    console.log('📏 Template Configuration:');
    console.log(`  Crop dimensions: ${TEMPLATE_CONFIG.cropWidth}x${TEMPLATE_CONFIG.cropHeight}`);
    console.log(`  Template position: X:${TEMPLATE_CONFIG.cropX}, Y:${TEMPLATE_CONFIG.cropY}`);
    
    // Get all image files
    const imageFiles = getImageFiles(inputDir);
    console.log(`Found ${imageFiles.length} cover images to transform`);
    
    if (imageFiles.length === 0) {
      console.log('❌ No image files found in input directory');
      return;
    }
    
    // Transform each cover
    const results = [];
    for (let i = 0; i < imageFiles.length; i++) {
      const inputPath = imageFiles[i];
      const filename = path.basename(inputPath);
      const outputPath = path.join(outputDir, filename);
      
      console.log(`\n[${i + 1}/${imageFiles.length}] Processing: ${filename}`);
      
      try {
        await transformCover(inputPath, outputPath, null);
        results.push({ success: true, file: filename });
      } catch (error) {
        console.error(`Failed to process ${filename}:`, error);
        results.push({ 
          success: false, 
          file: filename, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }
    
    // Generate summary
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log('\n📊 Transformation Summary');
    console.log('=========================');
    console.log(`✅ Successfully transformed: ${successful.length} covers`);
    console.log(`❌ Failed transformations: ${failed.length} covers`);
    
    if (failed.length > 0) {
      console.log('\nFailed files:');
      failed.forEach(f => console.log(`  - ${f.file}: ${f.error}`));
    }
    
    // Create manifest
    const manifest = {
      totalFiles: imageFiles.length,
      successful: successful.length,
      failed: failed.length,
      templateConfig: TEMPLATE_CONFIG,
      transformedFiles: successful.map(r => r.file),
      failedFiles: failed.map(r => ({ file: r.file, error: r.error }))
    };
    
    fs.writeFileSync(
      path.join(outputDir, 'transformation-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log(`\n📁 Transformed covers saved to: ${outputDir}`);
    console.log(`📋 Manifest saved to: ${path.join(outputDir, 'transformation-manifest.json')}`);
    
  } catch (error) {
    console.error('❌ Transformation failed:', error);
    process.exit(1);
  }
}

// Run the transformation
transformAllCovers().catch(console.error);
