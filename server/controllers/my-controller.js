'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-gtm-module')
      .service('myService')
      .getGTMId();
  },
});
