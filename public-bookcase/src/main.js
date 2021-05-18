import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';
import router from './router';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyDewB0NWYgFeb-txgGtbfe71sRFKpfBN2U',
  authDomain: 'thebookboxes-a1656.firebaseapp.com',
  databaseURL: 'https://thebookboxes-a1656-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'thebookboxes-a1656',
  storageBucket: 'thebookboxes-a1656.appspot.com',
  messagingSenderId: '397643038463',
  appId: '1:397643038463:web:1527308c8bd2a46f6b56c',
};

firebase.initializeApp(firebaseConfig);

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
