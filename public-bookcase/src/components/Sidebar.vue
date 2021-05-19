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
  },
  watch: {
    searchList: function searchList(value) {
      console.log('getlist: ', this.getList);
      console.log('filter: ', value);
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
  .form-search{
    width: 100%;
  }
</style>
