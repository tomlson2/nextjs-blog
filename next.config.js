// next.config.js
const parseCSV = require('./parseRedirects');

module.exports = {
  async redirects() {
    const redirectData = await parseCSV('public/links.csv');
    return redirectData.map(row => ({
      source: row.source,
      destination: row.destination,
      permanent: false,
    }));
  },
}
