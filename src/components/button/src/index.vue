<template>
  <button
    @click="handleClick"
    class="sz-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? `sz-button--${type}`: '',
      buttonSize ? `sz-button--${buttonSize}` : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="sz-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'SzButton',

  inject: {
    szForm: {
      default: ''
    },
    szFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _szFormItemSize() {
      return (this.szFormItem || {}).szFormItemSize;
    },
    buttonSize() {
      return this.size || this._szFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.szForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
