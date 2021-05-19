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
    <div v-else>
      Il n'y pas de livre encodé pour cette boites actuellement.<br>
      Mais vous pouvez toujours aller verifier et encoder les livres si il y en a
      <i class="far fa-smile-wink"></i>
    </div>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
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
        div:nth-child(1){
          width: 30%;
          flex-grow: 2;
        }
        div:nth-child(2){
          width: 30%;
          flex-grow: 2;
        }
        div:nth-child(3){
          width: 20%;
          flex-grow: 1;
        }
        div:nth-child(4){
          width: 20%;
          flex-grow: 1;
          text-align: right;
        }
      }
    }
  }
</style>
