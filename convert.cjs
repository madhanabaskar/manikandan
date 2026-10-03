const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'assets');

fs.readdir(dir, async (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(dir, file);
      const outputFilename = path.basename(file, path.extname(file)) + '.webp';
      const outputPath = path.join(dir, outputFilename);
      
      try {
        await sharp(inputPath).webp().toFile(outputPath);
        console.log(`Converted ${file} to ${outputFilename}`);
        fs.unlinkSync(inputPath);
        console.log(`Deleted ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
});
