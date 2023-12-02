// parseRedirects.js
const fs = require('fs');
const parse = require('csv-parser');

function parseCSV(file) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(file)
      .pipe(parse())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', reject);
  });
}

module.exports = parseCSV;
