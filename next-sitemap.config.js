const siteUrl = 'https://www.haroldhill.org/'
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
  },
  sourceDir: 'dist/apps/haroldhill/.next',
  outDir: 'dist/apps/haroldhill/public',
}
