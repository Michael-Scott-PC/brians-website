'use strict';

/**
 * Landing.js controller
 *
 * @description: A set of functions called "actions" for managing `Landing`.
 */

module.exports = {

  /**
   * Retrieve landing records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.landing.search(ctx.query);
    } else {
      return strapi.services.landing.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a landing record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.landing.fetch(ctx.params);
  },

  /**
   * Count landing records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.landing.count(ctx.query);
  },

  /**
   * Create a/an landing record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.landing.add(ctx.request.body);
  },

  /**
   * Update a/an landing record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.landing.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an landing record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.landing.remove(ctx.params);
  }
};
