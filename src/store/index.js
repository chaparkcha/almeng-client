import { createStore, createLogger } from 'vuex';
// import temp from './modules/temp';
import envs from './modules/envs';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    envs,
    // temp,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
