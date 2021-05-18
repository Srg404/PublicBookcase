import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
