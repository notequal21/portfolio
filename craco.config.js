const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@services': resolvePath('./src/services'),
      '@styles': resolvePath('./src/style/style.scss')
    }
  },
}