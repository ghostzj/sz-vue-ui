<template>
  <transition name="sz-zoom-in-top" @after-leave="doDestroy">
    <ul class="sz-dropdown-menu sz-popper" :class="[size && `sz-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
import Popper from '../../../utils/vue-popper';

export default {
  name: 'SzDropdownMenu',

  componentName: 'SzDropdownMenu',

  mixins: [Popper],

  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      size: this.dropdown.dropdownSize
    };
  },

  inject: ['dropdown'],

  created() {
    this.$on('updatePopper', () => {
      if (this.showPopper) this.updatePopper();
    });
    this.$on('visible', val => {
      this.showPopper = val;
    });
  },

  mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.dropdown.$el;
    this.dropdown.initDomOperation();
  },

  watch: {
    'dropdown.placement': {
      immediate: true,
      handler(val) {
        this.currentPlacement = val;
      }
    }
  }
};
</script>
