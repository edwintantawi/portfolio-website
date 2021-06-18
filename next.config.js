const withPwa = require('next-pwa');

module.exports = withPwa({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
});
