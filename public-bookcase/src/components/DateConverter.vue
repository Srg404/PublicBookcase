<template>
  <span>{{DateOut}}</span>
</template>

<script>
export default {
  name: 'DateConverter',
  props: {
    dateIn: Number,
  },
  computed: {
    DateOut: function DateOut() {
      const theDate = new Date(this.dateIn);
      return `${theDate.getDate()}/${theDate.getMonth() + 1}/${theDate.getFullYear()}`;
    },
  },
};
</script>
