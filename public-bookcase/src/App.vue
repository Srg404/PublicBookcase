<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./assets/scss/fonts";
  @import "./assets/scss/abstracts";
  @import "./assets/scss/main";

  #app {
    min-height: 100vh;
    font-family: $font-stack;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: $mid-grey;
    text-align: center;
    color: $text-color;
  }

  #nav {
    position: absolute;
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
