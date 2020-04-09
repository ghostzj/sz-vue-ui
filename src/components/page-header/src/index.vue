<template>
  <div class="sz-page-header">
    <div class="sz-page-header__left" @click="$emit('back')">
      <i class="sz-icon-back"></i>
      <div class="sz-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="sz-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from '../../../locale';
export default {
  name: 'SzPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('sz.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
