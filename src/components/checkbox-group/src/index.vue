<script>
import Emitter from '../../../mixins/emitter';

export default {
  name: 'SzCheckboxGroup',

  componentName: 'SzCheckboxGroup',

  mixins: [Emitter],

  inject: {
    szFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _szFormItemSize() {
      return (this.szFormItem || {}).szFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._szFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch('SzFormItem', 'sz.form.change', [value]);
    }
  }
};
</script>

<template>
  <div class="sz-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
