import { createApp } from 'vue';
import App from './App.vue';
//  Vue UI Library
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

// vue 페이지 이동
import router from './router';

// vue 내부 전역 변수
import store from './store';

loadFonts();

createApp(App).use(vuetify).use(router).use(store).mount('#app');
