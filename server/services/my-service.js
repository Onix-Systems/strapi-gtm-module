'use strict';

module.exports = ({ strapi }) => ({
  getGTMId() {
    return strapi.config.get('plugin.strapi-gtm-module');
  },
});
