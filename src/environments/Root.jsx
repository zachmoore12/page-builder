import PROD from './Root.prod';
import DEV from './Root.dev';

function loadModule() {
  let loadedModule;

  if (process.env.NODE_ENV === 'production') {
    loadedModule = PROD;
  } else {
    loadedModule = DEV;
  }

  return loadedModule;
}

export default loadModule();
