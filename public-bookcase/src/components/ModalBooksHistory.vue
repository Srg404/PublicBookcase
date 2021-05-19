<template>
  <div class="history-book">
    <ul v-if="books.length">
      <li v-for="(el, index) in books" :key="index">
        <div>
          <strong>{{el.title}}</strong>
          &nbsp;-&nbsp;
          <span>{{el.author}}</span>
          &nbsp;-&nbsp;
          <DateConverter :dateIn="el.dateIn" />
          &nbsp;-&nbsp;
          <DateConverter :dateIn="el.dateOut" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DateConverter from '@/components/DateConverter.vue';

export default {
  name: 'ModalBooksHistory',
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
  .history-book{

  }
</style>
