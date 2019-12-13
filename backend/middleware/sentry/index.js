const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://d4394c619e6f43deac66bbd993dd45e0@sentry.io/1855829',
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
