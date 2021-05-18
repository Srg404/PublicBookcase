<template>
  <div class="map">
    <MapDisplay v-on:openModal="openModal"/>
  </div>
</template>

<script>
import MapDisplay from '@/components/MapDisplay.vue';

export default {
  components: {
    MapDisplay,
  },
  data() {
    return {
      isOpen: false,
      currentBookcase: {},
    };
  },
  methods: {
    openModal: function openModal(value) {
      this.currentBookcase = value;
      this.isOpen = true;
      console.log('Open Modal data -> ', value);
    },
    closeModal: function closeModal() {
      this.currentBookcase = {};
      this.isOpen = false;
      console.log('Close Modal');
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
  }
</style>
