<template>
  <div class="add-book">
    <div
      :class="{error: titleEmpty}"
    >
      <input
        type="text"
        class="form-control"
        id="inputTitle"
        placeholder="Titre"
        v-model="newBook.title"
        @keyup="fieldWatch"
        >
        <em class="error">* Champ obligatoire</em>
    </div>
    <div
      :class="{error: authorEmpty}"
    >
      <input
        type="text"
        class="form-control"
        id="inputAuthor"
        placeholder="Auteur"
        v-model="newBook.author"
        @keyup="fieldWatch"
        >
        <em class="error">* Champ obligatoire</em>
    </div>
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
        title: '',
        author: '',
        dateIn: null,
      },
      titleEmpty: false,
      authorEmpty: false,
      flag: false,
    };
  },
  props: {
  },
  computed: {
  },
  methods: {
    addBook: function addBook() {
      this.flag = true;
      this.titleEmpty = (this.newBook.title === '');
      this.authorEmpty = (this.newBook.author === '');
      if ((this.newBook.title !== '') && (this.newBook.author !== '')) {
        this.newBook.dateIn = Date.now();
        this.$emit('addBook', this.newBook);
        this.flag = false;
        this.newBook = {
          title: '',
          author: '',
          dateIn: null,
        };
      }
    },
    fieldWatch: function fieldWatch() {
      // TODO : check for use vue option watch, not keyup, with the Object newBook
      if (this.flag) {
        this.titleEmpty = (this.newBook.title === '');
        this.authorEmpty = (this.newBook.author === '');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .add-book{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-top: 5px solid $main-color;
    padding: 15px 10px;
    & > div{
      margin-right: 10px;
      flex-grow: 2;
      position: relative;
      input{
        width: 100%;
      }
      em{
        opacity: 1;
        z-index: 10;
        font-size: 10px;
        line-height: 1em;
        font-weight: 600;
        position :absolute;
        display: block;
        left: 0;
        bottom: -2px;
        transform: translateY(100%);
      }
    }
    .error{
      input{
        border-color: $alert;
      }
      em{
          opacity: 1;
          color: $alert;
        }
    }
  }
</style>
