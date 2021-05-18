<template>
  <div class="bookcase">

    <div class="onglets">
      <div>Dans la boite</div>
      <div>Historique de la boite</div>
    </div>

    <ModalBooksCurrent
      :books="books"
    />
    <ModalBooksHistory
      :books="books"
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
    text-align: left;
    margin-top: 10px;
    padding: 5px;
    background: $brand-color;
    color: $white;
  }
</style>
