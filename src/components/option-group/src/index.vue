<template>
  <ul class="sz-select-group__wrap" v-show="visible">
    <li class="sz-select-group__title">{{ label }}</li>
    <li>
      <ul class="sz-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
import Emitter from '../../../mixins/emitter';

export default {
  mixins: [Emitter],

  name: 'SzOptionGroup',

  componentName: 'SzOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: true
    };
  },

  watch: {
    disabled(val) {
      this.broadcast('SzOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange() {
      this.visible = this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some(option => option.visible === true);
    }
  },

  created() {
    this.$on('queryChange', this.queryChange);
  },

  mounted() {
    if (this.disabled) {
      this.broadcast('SzOption', 'handleGroupDisabled', this.disabled);
    }
  }
};
</script>
