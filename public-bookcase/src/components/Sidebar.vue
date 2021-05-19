<template>
  <div class="list-bookcase">
    <div class="search">
      <input
        type="search"
        class="form-search"
        id="search-list"
        aria-describedby="search Address"
        v-model="searchElement"
        placeholder="Recherche par adresse"
        >
        <button
          class="reset"
          @click="resetFilter"
        >
          <i class="fas fa-times"></i>
          <span>Effacer</span>
        </button>
    </div>
      <ul v-if="searchList.length">
        <li v-for="(el, index) in searchList" :key="index">
          <ElementList
            :bookcase="el"
            @openModal="openModal"
            />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ElementList from '@/components/ElementList.vue';

export default {
  name: 'Sidebar',
  components: {
    ElementList,
  },
  props: {

  },
  data() {
    return {
      searchElement: '',
    };
  },
  computed: {
    ...mapGetters(['getList']),
    searchList() {
      // TODO filtered need an Object not an Array !!!!
      return this.getList.filter((el) => {
        const filtered = el.name.toLowerCase().includes(this.searchElement.toLowerCase());
        return filtered;
      });
    },
  },
  methods: {
    clickBookcase: function clickBookcase(value) {
      this.$emit('openModal', value);
    },
    openModal(value) {
      this.$emit('openModal', value);
    },
    resetFilter() {
      this.searchElement = '';
    },
  },
  watch: {
    searchList: function searchList(value) {
      this.$emit('filter', value);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/abstracts";
  .list-bookcase{
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    .search{
      padding: 20px;
    }
    ul{
      overflow: auto;
      list-style: none;
      padding: 20px 20px 0;
      margin: 0;
      li{
        padding: 0;
        margin: 5px;
      }
    }
  }
  .search{
    width: 100%;
    position: relative;
    input{
      width: 100%;
      padding-right: 35px;
    }
    button{
      padding: 0;
      border: none;
      background: transparent;
      position: absolute;
      right: 20px;
      top: 20px;
      bottom: 20px;
      width: 30px;
    }
    span{
      display: none;
    }
  }
</style>
