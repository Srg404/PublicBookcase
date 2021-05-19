<template>
  <div class="history-book">
    <ul v-if="books.length">
      <li v-for="(el, index) in books" :key="index">
          <div>
            <i class="fas fa-bookmark"></i> <strong>{{el.title}}</strong>
          </div>
          <div>
            <i class="fas fa-feather-alt"></i> <span>{{el.author}}</span>
          </div>
          <div>
            <i class="far fa-calendar-plus"></i> <DateConverter :dateIn="el.dateIn" />
          </div>
          <div>
            <i class="far fa-calendar-minus"></i> <DateConverter :dateIn="el.dateOut" />
          </div>
      </li>
    </ul>
    <div v-else>
      L'historique de cette boite est vide.
      <i class="far fa-frown"></i>
    </div>
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
    padding: 10px;
    ul{
      padding: 0;
      margin: 5px 0;
      list-style: none;;
      li{
        margin: 0;
        padding: 5px;
        border-bottom: 1px solid $text-color;
        &:nth-child(odd){
          background: $verylight-grey;
        }
        &:nth-child(even){
          background: $semi-light-grey;
        }
        &:last-child{
          border: none;
        }
        display: flex;
        justify-content: space-between;
        text-align: left;
        div:nth-child(1){
          width: 40%;
        }
        div:nth-child(2){
          width: 40%;
        }
        div:nth-child(3){
          width: 10%;
          text-align: right;
        }
        div:nth-child(4){
          width: 10%;
          text-align: right;
        }
      }
    }
  }
</style>
