<template>
  <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="closeModal">
          <div class="my-modal">
            <button
              v-on:click="closeModal"
            >close Modal</button>
            <h1>{{bookcase.name}}</h1>
            <p>Coordonées {{bookcase.coordinates[1]}}° Nord, {{bookcase.coordinates[0]}}° Est<br>
            <small><i>{{bookcase.recordid}}</i></small></p>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    bookcase: Object,
    isOpen: Boolean,
  },
  computed: {
  },
  methods: {
    closeModal: function closeModal() {
      console.log('Modal closed !');
      this.$emit('close-modal');
    },
    openModal: function openModal() {
      console.log('Modal open !');
    },
  },
  watch: {
    isOpen: function isOpen(value) {
      if (value) {
        this.openModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts";

.my-modal {
  max-width: 90vw;
  width: $max-width;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  z-index: 100;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.85);
  z-index: 999;
  transition: opacity 0.2s ease;
}

</style>
