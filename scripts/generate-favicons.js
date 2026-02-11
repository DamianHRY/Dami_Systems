import jimp from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = path.join(__dirname, '../public/Logo_zonder_Dami_Systems.png');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generateFavicons() {
    console.log('Starting favicon generation (Phase 5: Absolute Prominence - Transparent - Fix)...');

    try {
        const image = await jimp.read(SOURCE_IMAGE);
        console.log('Image loaded.');

        // 1. Precise Autocrop: Find the exact pixel boundaries
        console.log('Removing all empty space (Zero-Padding)...');
        image.autocrop();

        const height = image.bitmap.height;
        const width = image.bitmap.width;

        // 2. Maximum Square Crop
        // We force a 1:1 ratio centered on the core gear.
        const squareSize = Math.min(width, height);
        const xOffset = Math.floor((width - squareSize) / 2);
        const yOffset = Math.floor((height - squareSize) / 2);

        console.log(`Cropping to ${squareSize}x${squareSize} (Full-Bleed Center)`);
        image.crop(xOffset, yOffset, squareSize, squareSize);

        const sizes = [
            { width: 180, height: 180, name: 'favicon-180x180.png' },
            { width: 32, height: 32, name: 'favicon-32x32.png' },
            { width: 16, height: 16, name: 'favicon-16x16.png' }
        ];

        for (const size of sizes) {
            // Re-read or clone carefully
            const cloned = image.clone();

            // 3. High-Quality Resize (Lanczos3)
            // Filling 100% of the canvas - ZERO padding.
            // Note: We use the enum directly from jimp if possible, or the string 'lanczos3'
            cloned.resize(size.width, size.height, jimp.RESIZE_LANCZOS3);

            // 4. Convolute Sharpening (Manual Fix for prototype issues)
            // This is a standard 3x3 sharpening kernel
            console.log(`Processing ${size.name}...`);
            cloned.convolute([
                [0, -1, 0],
                [-1, 5, -1],
                [0, -1, 0]
            ]);

            const outputPath = path.join(PUBLIC_DIR, size.name);
            await cloned.writeAsync(outputPath);
            console.log(`Generated Ultra-Large Icon: ${size.name}`);
        }

        console.log('Success! Your logo is now maximized for transparency and prominence.');
        console.log('Please Hard Refresh (Ctrl+F5) to see the massive difference!');
    } catch (error) {
        console.error('Error in generation script:', error);
        process.exit(1);
    }
}

generateFavicons();
