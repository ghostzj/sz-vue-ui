<template>
  <div class="sz-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SzBreadcrumb',

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },

  provide() {
    return {
      szBreadcrumb: this
    };
  },

  mounted() {
    const items = this.$el.querySelectorAll('.sz-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  }
};
</script>
