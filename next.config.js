const withPwa = require('next-pwa');

module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
});
