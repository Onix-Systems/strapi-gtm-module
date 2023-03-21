'use strict';

module.exports = ({ strapi }) => ({
  getGTMId() {
    return strapi.config.get('plugin.gtm-module');
  },
});
