const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://7292d50849b748de9188bb893af27253@sentry.io/1855645',
  environment: strapi.config.environment
});

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          Sentry.captureException(error);
          throw error;
        }
      });
    }
  };
};
