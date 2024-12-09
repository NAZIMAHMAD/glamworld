import fs from 'fs';
import { SitemapStream } from 'sitemap'; // No need for 'streamToPromise' or 'createGzip'

// Define your routes
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/About', changefreq: 'daily', priority: 0.7 },

  { url: '/Services', changefreq: 'daily', priority: 0.3 },
  { url: '/Gallery', changefreq: 'daily', priority: 0.5 },
  { url: '/Contact', changefreq: 'daily', priority: 0.7 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://jawedhabibsalonjehanabad.in/' });

const writeStream = fs.createWriteStream('./public/sitemap.xml');

// Pipe the sitemap to the write stream
sitemap.pipe(writeStream);

// Write URLs to the sitemap
pages.forEach(page => sitemap.write(page));
sitemap.end();

// Handle finish event to confirm writing
writeStream.on('finish', () => {
  console.log('Sitemap has been written to public/sitemap.xml');
});

// Handle error event
writeStream.on('error', (err) => {
  console.error('Error writing sitemap file:', err);
});
