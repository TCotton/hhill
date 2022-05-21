// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

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
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      process: false,
      os: false,
      path: false
    }

    return config
  }
}

module.exports = withNx(nextConfig)
