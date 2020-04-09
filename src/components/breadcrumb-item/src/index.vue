<template>
  <span class="sz-breadcrumb__item">
    <span
      :class="['sz-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="sz-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="sz-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
export default {
  name: 'SzBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean
  },
  data() {
    return {
      separator: '',
      separatorClass: ''
    };
  },

  inject: ['szBreadcrumb'],

  mounted() {
    this.separator = this.szBreadcrumb.separator;
    this.separatorClass = this.szBreadcrumb.separatorClass;
    const link = this.$refs.link;
    link.setAttribute('role', 'link');
    link.addEventListener('click', _ => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  }
};
</script>
