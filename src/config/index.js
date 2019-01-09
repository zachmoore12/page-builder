import extender from 'object-extender';

import base from './base.json';
import development from './development.json';
import test from './test.json';
import staging from './staging.json';
import production from './production.json';
import local from './local.json';

function loadConfig() {
  const env = process.env.NODE_ENV || 'development';

  let envJson = {};

  switch (env) {
    case 'development':
      envJson = development;
      break;
    case 'test':
      envJson = test;
      break;
    case 'staging':
      envJson = staging;
      break;
    case 'production':
      envJson = production;
      break;
    default:
      envJson = development;
      break;
  }

  return extender.merge(base, envJson, local);
}

export default loadConfig();
