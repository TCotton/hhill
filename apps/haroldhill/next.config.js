// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
require('dotenv').config()
/**
 * @type {{webpack: (function(*): any), nx: {svgr: boolean}, webpack5: boolean}}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  webpack5: true,
  distDir: 'build',
  webpack: (config, { webpack }) => {
    if (config.name === 'client') {
      const envKeys = Object.keys(process.env).reduce((prev, key) => {
        if (key.startsWith('NEXT_PUBLIC_')) {
          prev[key] = JSON.stringify(process.env[key])
        }

        return prev
      }, {})

      config.plugins.push(
        new webpack.DefinePlugin({
          process: {
            env: {
              ...envKeys
            }
          }
        })
      )
    }

    return config
  }
}

module.exports = withNx(nextConfig)
