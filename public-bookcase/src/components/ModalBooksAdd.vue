<template>
  <div class="add-book">
    <input
      type="text"
      class="form-control"
      id="inputTitle"
      placeholder="Titre"
      v-model="newBook.title"
      >

    <input
      type="text"
      class="form-control"
      id="inputAuthor"
      placeholder="Auteur"
      v-model="newBook.author"
      >

    <SimpleButton
        v-on:clickButton="addBook"
        iconClass="fas fa-plus-square"
        title="Ajouter un livre"
      />
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton.vue';

export default {
  name: 'ModalBooksAdd',
  components: {
    SimpleButton,
  },
  data() {
    return {
      newBook: {
        title: null,
        author: null,
        dateIn: null,
      },
    };
  },
  props: {
  },
  computed: {
  },
  methods: {
    addBook: function addBook() {
      this.newBook.dateIn = Date.now();
      this.$emit('addBook', this.newBook);
      this.newBook = {
        title: null,
        author: null,
        dateIn: null,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .add-book{
    display: flex;
    justify-content: space-between;
    background: white;
    border-top: 5px solid $brand-color;
    padding: 10px;
    input{
      margin-right: 10px;
      flex-grow: 2;
    }
  }
</style>
