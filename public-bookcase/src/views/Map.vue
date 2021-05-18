<template>
  <div class="map">
    <TheTitle
      title="Andenne"
      subTitle="Boites à livres"
    />
    <div class="sidebar">
      <Sidebar v-on:openModal="openModal"/>
    </div>
    <div class="map-display">
      <MapDisplay v-on:openModal="openModal"/>
    </div>
  </div>
</template>

<script>
import MapDisplay from '@/components/MapDisplay.vue';
import Sidebar from '@/components/Sidebar.vue';
import TheTitle from '@/components/TheTitle.vue';

export default {
  components: {
    MapDisplay,
    Sidebar,
    TheTitle,
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
    display: flex;
    align-items: stretch;
    align-content: stretch;
    z-index: 1;
    height: 100vh;
    width: 100vw;
  }
  .sidebar{
    height: 100vh;
    width: 30%;
    position: relative;
    z-index: 1;
  }
  .map-display{
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  .title{
    position: absolute;
    z-index: 20;
    right: 15px;
    bottom: 15px;
    font-size: 4px;
  }
</style>
