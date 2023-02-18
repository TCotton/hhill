// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
require('dotenv').config()
/**
 * @type {{redirects(): Promise<*>, webpack: (function(*, {webpack: *}): *), reactStrictMode: boolean, nx: {svgr: boolean}}}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false
  },
  async redirects() {
    return [
      {
        source:
          '/chapter-four/page-five-hippies-freaks-and-the-summer-of-love.htm',
        destination: '/hippies-freaks-summer-of-love-6HqgZqmFW9sj1D2gqyYYtY',
        permanent: true
      },
      {
        source: '/section_two/never_again!.htm',
        destination:
          '/never-again-aneurin-bevan-housing-harold-hill-1b21LOPo0KqHkyPSmSPY11',
        permanent: true
      },
      {
        source: '/section_two/now_we_must_rebuild.htm',
        destination:
          '/now-we-must-rebuild-greater-london-plan-1944-49DC9U0ISBznSXhKHkCrAC',
        permanent: true
      },
      {
        source: '/section_five/section_five_page_five.htm',
        destination: '/hippies-freaks-summer-of-love-6HqgZqmFW9sj1D2gqyYYtY',
        permanent: true
      },
      {
        source:
          '/chapter-one/never-again-aneurin-bevan-housing-and-harold-hill.htm',
        destination:
          '/never-again-aneurin-bevan-housing-harold-hill-1b21LOPo0KqHkyPSmSPY11',
        permanent: true
      },
      {
        source:
          '/chapter-four/page-four-the-albemarle-report-leads-to-the-first-youth-club.htm',
        destination:
          '/1960s-albemarle-report-leads-to-first-youth-club-6g2RT84Nsgt2BQ5a0K48Kb',
        permanent: true
      },
      {
        source: '/section_four/section_four_page_five.htm',
        destination:
          '/margaret-thatcher-reggae-royalty-riots-ppMJYR1Z4I02E8A5tYy0O',
        permanent: true
      },
      {
        source: '/chapter-three/margaret-thatcher-reggae-royalty-riots.htm',
        destination:
          '/margaret-thatcher-reggae-royalty-riots-ppMJYR1Z4I02E8A5tYy0O',
        permanent: true
      }
    ]
  }, /// section_two/never_again!.htm
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
