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
    const { gtmId, measurementId } = await request(`/${pluginId}/`, { method: 'GET' });
    if (measurementId) ReactGA.initialize(measurementId);
    if (gtmId) TagManager.initialize({ gtmId });
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
