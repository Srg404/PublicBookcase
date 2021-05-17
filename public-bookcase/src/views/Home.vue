<template>
  <div class="home">
    <div class="home-container">
      <TheTitle
        title="Andenne"
        subTitle="Boites à livres"
      />
      <p>Autogestion citoyennes des boites a livres sur la region d’andennes</p>
      <div class="loading">Chargement</div>
      <button class="button">Afficher la carte</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from '@/components/TheTitle.vue';

export default {
  name: 'Home',
  components: {
    TheTitle,
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
</style>
