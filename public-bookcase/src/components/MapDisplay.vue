<template>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="(item, index) in allPins"
        v-on:click="triggerPin(item)"
        :key="index"
        :icon="icon"
        :lat-lng="[item.coordinates[1],item.coordinates[0]]"
        :name="item.name"
      />
    </l-map>
</template>

<script>
import L from 'leaflet';
import { mapGetters } from 'vuex';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import pinImg from '../assets/images/pin.svg';

export default {
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  props: {
    filter: Array,
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
    };
  },
  computed: {
    ...mapGetters(['getList']),
    allPins: function allPins() {
      console.log('filter : ', this.filter);
      if (!this.filter.length) {
        return this.getList;
      }
      return this.filter;
    },
  },
  methods: {
    triggerPin: function triggerPin(value) {
      this.$emit('openModal', value);
    },
  },
};
</script>
