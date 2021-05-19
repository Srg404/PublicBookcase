<template>
  <div class="current-book">
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
  .current-book{
    padding: 10px;
    ul{
      padding: 0;
      margin: 5px 0;
      list-style: none;;
      li{
        margin: 0;
        padding: 5px;
        border-bottom: 1px solid $text-color;
        &:nth-child(even){
          background: $semi-light-grey;
        }
        &:last-child{
          border: none;
        }
        display: flex;
        justify-content: space-between;
        text-align: left;
        div:nth-child(0){
          width: 30%;
        }
        div:nth-child(1){
          width: 30%;
        }
        div:nth-child(2){
          width: 20%;
        }
        div:nth-child(3){
          width: 20%;
        }
      }
    }
  }
</style>
