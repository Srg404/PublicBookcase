<template>
  <button
    v-on:click="$emit('clickButton')"
    class="btn-effect"
  >
    <i :class="iconClass"></i>
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    title: String,
    iconClass: String,
    value: String,
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  button{
    background: transparent;
    border: 1px solid $text-color;
    font-weight: 600;
    padding: 3px 6px;
    border-radius: 5px;
    white-space: nowrap;
    transition: color .5s ease;
    &:hover{
      color: $white;
    }
    i{
      margin-right: 3px;
    }
  }
</style>
