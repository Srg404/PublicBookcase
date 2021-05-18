<template>
  <div class="current-book">
    <ul v-if="books.length">
      <li v-for="(el, index) in books" :key="index">
        <div>
          {{el.title}}<br>
          {{el.author}}<br>
          <DateConverter :dateIn="el.dateIn" /><br>
          {{el.dateOut}}<br>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DateConverter from '@/components/DateConverter.vue';

export default {
  name: 'ModalBooksCurrent',
  components: {
    DateConverter,
  },
  data() {
    return {
    };
  },
  props: {
    books: Array,
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .current-book{

  }
</style>
