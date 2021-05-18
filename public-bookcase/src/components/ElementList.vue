<template>
  <div class="element-list">
      <i class="fas fa-book"></i>
      <span>{{ bookcase.name }}</span>
      <SimpleButton
        @clickButton="clickButton"
        iconClass="fas fa-eye"
        title="Voir"
      />
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton.vue';

export default {
  name: 'ElementList',
  components: {
    SimpleButton,
  },
  props: {
    bookcase: Object,
  },
  methods: {
    clickButton: function clickButton() {
      this.$emit('openModal', this.bookcase);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .element-list{
    display: flex;
    align-items: center;
    border-bottom: 1px solid $text-color;
    padding: 5px 0;
    span{
      flex-grow: 2;
      padding: 2px 5px;
    }
  }
</style>
