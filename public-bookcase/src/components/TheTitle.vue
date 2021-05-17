<template>
  <div class="title">
    <h1>
      <strong><span>{{ title }}</span></strong>
      <span>{{ subTitle }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TheTitle',
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/abstracts";
.title{
  overflow: hidden;
  padding-top: 2em;
  font-size: 8px;
  @include respond-to(small) {
    font-size: 14px;
  }
  h1 {
    line-height: 1em;
    border: solid $text-color;
    border-width: 0 .45em .45em;
    position: relative;
    strong {
      display: inline-block;
      line-height: 1em;
      position: relative;
      margin-top: 0;
      font-weight: 800;
      &::before{
        content: "";
        border: solid $text-color;
        border-width: .45em 0 0;
        width: 1000%;
        position: absolute;
        right: 105%;
        top: 0;
      }
      &::after{
        content: "";
        border: solid $text-color;
        border-width: .45em 0 0;
        width: 1000%;
        position: absolute;
        left: 105%;
        top: 0;
      }
      & > span{
        text-transform: uppercase;
        font-size: 3em;
      }
    }
    & > span {
      font-size: 1em;
      display: block;
      font-weight: 300;
      padding: .5em 0;
    }
  }
}
</style>
