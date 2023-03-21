'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('gtm-module')
      .service('myService')
      .getGTMId();
  },
});
