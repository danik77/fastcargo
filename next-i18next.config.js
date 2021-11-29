module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
  },
  /*
   backend: {
    backends: [
    //  FSBackend,
     // HttpBackend
    ],
    backendOptions: [{ // make sure public/locales_cache/en and public/locales_cache/de exists
      loadPath: './public/locales_cache/{{lng}}/{{ns}}.json',
      addPath: './public/locales_cache/{{lng}}/{{ns}}.json',
      expirationTime: 1000 // 7 days
    }, {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }]
  },
  use: [ChainedBackend],
  ns: ['common', 'navigation', 'forms', 'icons'],
  serializeConfig: false, // because of the custom use i18next plugin
  */
};