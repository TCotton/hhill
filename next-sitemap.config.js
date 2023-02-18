const siteUrl = 'https://jsonplaceholder.typicode.com/'
// https://articles.wesionary.team/how-to-implement-sitemap-in-next-js-using-next-sitemap-77ca7bb56544
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],

/*    additionalPaths: async (config) => [
      await config.transform(config, '/comments')
    ]*/
  }
}
