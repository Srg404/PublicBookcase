<template>
  <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="closeModal">
          <div class="my-modal">
            <ModalHeader
              :name="bookcase.name"
              :coordinates="bookcase.coordinates"
            />
            <button
              class="close-bt"
              v-on:click="closeModal"
            ><span>fermer</span></button>

            <ModalBooks
              :bookcase="bookcase"
              :isOpen="isOpen"
            />

          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import ModalHeader from '@/components/ModalHeader.vue';
import ModalBooks from '@/components/ModalBooks.vue';

export default {
  name: 'Modal',
  components: {
    ModalHeader,
    ModalBooks,
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
  max-height: 90vh;
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

.close-bt{
  span{
    display: none;
  }
  border:none;
  background: $black;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  color: $white;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  &::before,
  &::after{
    content: "";
    display: block;
    width: 60%;
    border-top: 6px solid currentColor;
    position: absolute;
    top: calc(50% - 3px);
    left: 20%;
    right: 20%;
    transition: transform .25s ease;
  }
  &::before{
      transform: rotate(-45deg);
    }
    &::after{
      transform: rotate(45deg);
    }
  &:hover{
    &::before{
      transform: rotate(45deg);
    }
    &::after{
      transform: rotate(-45deg);
    }
  }
}

</style>
