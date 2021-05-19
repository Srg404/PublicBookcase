<template>
  <div class="bookcase">

    <div class="onglets">
      <button
        @click="showHistory=false"
        :class="{active: !showHistory}"
      >Dans la boite</button>
      <button
        @click="showHistory=true"
        :class="{active: showHistory}"
      >Historique de la boite</button>
    </div>

    <ModalBooksCurrent
      v-if="!showHistory"
      :books="booksCurrent"
      @removeBook="removeBook"
    />
    <ModalBooksHistory
      v-else
      :books="booksHistory"
    />

    <ModalBooksAdd
      @addBook="addBook"
    />
  </div>
</template>

<script>
import firebase from 'firebase';
import ModalBooksCurrent from '@/components/ModalBooksCurrent.vue';
import ModalBooksHistory from '@/components/ModalBooksHistory.vue';
import ModalBooksAdd from '@/components/ModalBooksAdd.vue';

export default {
  name: 'ModalBooks',
  components: {
    ModalBooksCurrent,
    ModalBooksHistory,
    ModalBooksAdd,
  },
  data() {
    return {
      showHistory: false,
      dataFirestore: {
      },
    };
  },
  props: {
    bookcase: Object,
    isOpen: Boolean,
  },
  computed: {
    boxObjId: function boxObjId() {
      return `bookcase/boxid_${this.bookcase.recordid}`;
    },
    dbRefObjID: function dbRefObjID() {
      return firebase.database().ref(this.boxObjId);
    },
    books: function books() {
      if (this.dataFirestore.books === undefined) {
        return [];
      }
      return this.dataFirestore.books;
    },
    booksCurrent: function booksCurrent() {
      const filterByDate = function filterByDate(el) {
        if (el.dateOut === undefined) {
          return true;
        }
        return false;
      };
      return this.books.filter(filterByDate);
    },
    booksHistory: function booksHistory() {
      const filterByDate = function filterByDate(el) {
        if (el.dateOut !== undefined) {
          return true;
        }
        return false;
      };
      return this.books.filter(filterByDate);
    },
  },
  methods: {
    opened: function openModal() {
      console.log('firebase ON');
      this.dbRefObjID.get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log('Data available !');
          this.dataObserver();
        } else {
          console.log('No data available !');
          this.createData();
          this.dataObserver();
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    closed: function closeModal() {
      console.log('firebase observer OFF');
      this.dbRefObjID.off();
    },
    dataObserver: function dataObserver() {
      this.dbRefObjID.on('value', (snapshot) => {
        this.dataFirestore = snapshot.val();
      });
    },
    createData: function createData() {
      const dbBoxesData = {
        recordid: this.bookcase.recordid,
        name: this.bookcase.name,
        coordinates: this.bookcase.coordinates,
      };
      this.dbRefObjID.set(dbBoxesData);
    },
    addBook: function addBook(newBook) {
      console.log('newbook :', newBook);
      this.books.push(newBook);
      firebase.database().ref(`${this.boxObjId}/books`).set(this.books);
    },
    removeBook: function addBook(book) {
      const newBooks = [];
      this.books.forEach((el) => {
        if ((el.title === book.title && el.dateIn === book.dateIn)) {
          newBooks.push({
            title: el.title,
            author: el.author,
            dateIn: el.dateIn,
            dateOut: Date.now(),
          });
        } else {
          newBooks.push(el);
        }
      });
      firebase.database().ref(`${this.boxObjId}/books`).set(newBooks);
    },
  },
  created() {
    this.opened();
    console.log('current bookcase -> ', this.bookcase.recordid);
  },
  destroyed() {
    this.closed();
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .bookcase{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10px;
    padding: 5px;
    background: $brand-color;
    color: $white;
    [class*=-book]{
      background: $white;
      color: $text-color;
    }
  }
  .onglets{
    display: flex;
    button{
      flex-grow: 2;
      background: $brand-color;
      color: $white;
      font-size: 22px;
      font-weight:600;
      text-align: left;
      border: none;
      &.active{
        background-color: $white;
        color: $brand-color;
      }
    }
  }
</style>
