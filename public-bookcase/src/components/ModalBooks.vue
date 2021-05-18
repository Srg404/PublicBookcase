<template>
  <div class="bookcase">
    {{ bookcase.name }}<br>
    {{ bookcase.recordid }}
  </div>
</template>

<script>
export default {
  name: 'ModalBooks',
  props: {
    bookcase: Object,
  },
  computed: {
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .bookcase{
    text-align: left;
    margin-top: 10px;
    padding: 5px;
    background: $brand-color;
    color: $white;
  }
</style>
