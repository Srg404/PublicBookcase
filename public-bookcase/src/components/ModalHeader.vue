<template>
  <div class="header">
    <i class="fas fa-book"></i>
    <div class="group-h1">
      <h1>{{ name }}</h1>
      <p>Coordonnées : {{ lng }}° Nord, {{ lat }}° Est</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalHeader',
  props: {
    name: String,
    coordinates: String,
  },
  computed: {
    lng: function lng() {
      return parseFloat(this.coordinates[0]).toFixed(2);
    },
    lat: function lng() {
      return parseFloat(this.coordinates[1]).toFixed(2);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .header{
    display: flex;
    align-items: center;
    i{
      font-size: 64px;
      color: $brand-color;
    }
  }
  .group-h1{
    flex-grow: 2;
    text-align: left;
    padding: 0 10px;
    h1, p{
      margin:0;
      padding:0;
    }
    h1{
      text-transform: uppercase;
      color: $brand-color;
      font-size: 48px;
      font-weight: 800;
    }
  }

</style>
