<template>
  <div class="map">
    <TheTitle
      title="Andenne"
      subTitle="Boites à livres"
    />
    <div class="sidebar">
      <Sidebar
        @openModal="openModal"
        @filter="filter"
      />
    </div>
    <div class="map-display">
      <MapDisplay
        @openModal="openModal"
        :filter="filteredList"
      />
    </div>
      <Modal
        :bookcase="currentBookcase"
        :isOpen="isOpen"
        v-on:close-modal="closeModal"
      />
  </div>
</template>

<script>
import MapDisplay from '@/components/MapDisplay.vue';
import Sidebar from '@/components/Sidebar.vue';
import TheTitle from '@/components/TheTitle.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    MapDisplay,
    Sidebar,
    TheTitle,
    Modal,
  },
  data() {
    return {
      isOpen: false,
      currentBookcase: {},
      filteredList: [],
    };
  },
  methods: {
    openModal: function openModal(value) {
      this.currentBookcase = value;
      this.isOpen = true;
    },
    closeModal: function closeModal() {
      this.currentBookcase = {};
      this.isOpen = false;
    },
    filter: function filter(value) {
      this.filteredList = value;
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
