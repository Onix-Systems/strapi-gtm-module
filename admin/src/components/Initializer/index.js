import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4';
import { request } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';

function Initializer({ setPlugin }) {
  const ref = useRef();
  ref.current = setPlugin;

  const tgmInit = async () => {
    const {
      gtmId, measurementId, measurementOptions, gtmOptions,
    } = await request(`/${pluginId}/`, { method: 'GET' });
    if (measurementId) {
      ReactGA.initialize(measurementId, measurementOptions);
    }
    if (gtmId) {
      TagManager.initialize({ gtmId, ...gtmOptions });
    }
  };

  useEffect(() => {
    ref.current(pluginId);
    tgmInit();
  }, []);

  return null;
}

Initializer.propTypes = {
  setPlugin: PropTypes.func.isRequired,
};

export default Initializer;
