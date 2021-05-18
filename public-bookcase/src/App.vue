<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      baseURL: 'https://www.odwb.be/explore/dataset/emplacements-des-boites-a-livres-dandenne/download/?format=json&timezone=Europe/Berlin&lang=fr',
    };
  },
  methods: {
    getList() {
      axios.get(this.baseURL)
        .then((response) => {
          this.$store.commit('setList', this.convertData(response.data));
          this.$store.commit('setStatusList', 'done');
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.$store.commit('setStatusList', 'error');
        })
        .then(() => {
          // always executed
        });
    },
    convertData(data) {
      const cleanData = [];
      console.log('list ---> ', data);
      data.forEach((el) => {
        cleanData.push({
          recordid: el.recordid,
          name: el.fields.name,
          coordinates: el.geometry.coordinates,
        });
      });
      console.log('clean list ---> ', cleanData);
      return cleanData;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/fonts";
  @import "./assets/scss/abstracts";
  @import "./assets/scss/main";

  [id=app] {
    min-height: 100vh;
    font-family: $font-stack;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: $mid-grey;
    text-align: center;
    color: $text-color;
  }

  [id=nav] {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    padding: 30px;
    text-align: right;
    a {
      font-weight: bold;
      color: $text-color;

      &.router-link-exact-active {
        color: $link-color;
      }
    }
  }
</style>
