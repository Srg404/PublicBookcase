<template>
  <div class="current-book">
    <ul v-if="books.length">
      <li v-for="(el, index) in books" :key="index">
        <div>
          <strong>{{el.title}}</strong>
          &nbsp;-&nbsp;
          <span>{{el.author}}</span>
          &nbsp;-&nbsp;
          <DateConverter :dateIn="el.dateIn" />
          &nbsp;-&nbsp;
          <SimpleButton
              v-on:clickButton="removeBook(el)"
              iconClass="fas fa-minus-square"
              title="suppprimer le livre"
            />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton.vue';
import DateConverter from '@/components/DateConverter.vue';

export default {
  name: 'ModalBooksCurrent',
  components: {
    DateConverter,
    SimpleButton,
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
    removeBook: function removeBook(el) {
      this.$emit('removeBook', el);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
</style>
