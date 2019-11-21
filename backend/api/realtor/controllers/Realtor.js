'use strict';

/**
 * Realtor.js controller
 *
 * @description: A set of functions called "actions" for managing `Realtor`.
 */

module.exports = {

  /**
   * Retrieve realtor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.realtor.search(ctx.query);
    } else {
      return strapi.services.realtor.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a realtor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.realtor.fetch(ctx.params);
  },

  /**
   * Count realtor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.realtor.count(ctx.query);
  },

  /**
   * Create a/an realtor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.realtor.add(ctx.request.body);
  },

  /**
   * Update a/an realtor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.realtor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an realtor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.realtor.remove(ctx.params);
  }
};
