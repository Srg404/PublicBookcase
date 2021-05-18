<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
      v-for="(item, index) in circles"
      v-on:click="doClick"
      :key="index"
      :icon="icon"
      :lat-lng="item.center"
      :options="item.options"
    />
    </l-map>

  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import pinImg from '../assets/images/pin.svg';

export default {
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [50.489, 5.095],
      icon: L.icon({
        iconUrl: pinImg,
        iconSize: [32, 40],
        iconAnchor: [16, 40],
      }),
      circles: [{
        center: [50.489, 5.095],
        options: {
          name: 'rue truc muche',
          id: '786513213',
        },
      },
      {
        center: [50.488, 5.097],
        options: {
          name: 'rue truc',
          id: 'aaaaaaaaaaa786513213',
        },
      }],
    };
  },
  methods: {
    doClick: function triggerButton(value) {
      // console.log('v -> ', value);
      console.log('v -> ', value.sourceTarget.options.id);
      console.log('v -> ', value.sourceTarget.options.name);
    },
  },
};
</script>

<style scoped lang="scss">
  .map{
    position: relative;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    margin: auto;
    border: 2px solid red;
  }
</style>
