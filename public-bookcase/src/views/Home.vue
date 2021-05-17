<template>
  <div class="home">
    <div class="home-container">
      <TheTitle
        title="Andenne"
        subTitle="Boites à livres"
      />
      <p>Autogestion citoyennes des boites a livres sur la region d’andennes</p>

      <div
        class="btn loading"
        v-if="getStatusList === 'waiting'">
        <i class="fas fa-spinner"></i> Chargement
      </div>

      <router-link
        to="/map"
        class="btn btn-effect"
        v-if="getStatusList === 'done'">
        Afficher la carte
      </router-link>

      <div
        class="alert-warning"
        role="alert"
        v-if="getStatusList === 'error'">
        Une erreur s'est produite, veuillez réessayer plus tard
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from '@/components/TheTitle.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    TheTitle,
  },
  computed: {
    ...mapGetters(['getStatusList']),
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .home{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .home-container{
    width: 380px;
    @include respond-to(small) {
      width: 600px;
    }
    max-width: 90%;
    height: auto;
  }

  .btn{
    width: auto;
    display: inline-block;
    line-height: normal;
    padding: 1em 2em;
    margin: 1em 0;
    color: $white;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    border: 1px solid $text-color;
    border-radius: 5px;
    background: $text-color;
  }
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .loading{
    background: rgba($text-color, .75);
    i{
      animation: rotate 2s linear infinite;
    }
  }

</style>
