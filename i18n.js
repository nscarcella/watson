module.exports = {
  locales: ['en', 'ca', 'es'],
  defaultLocale: 'en',
  nsSeparator: '.',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) => import(`./locales/${lang}/${ns}.yaml`).then(_ => _.default),
  loggerEnvironment: 'both',
  logBuild: false,
}