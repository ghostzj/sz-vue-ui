<template>
  <div id="app" :class="[`${cfg.prefix}-app`]">
    <main-header></main-header>
    <div :class="[`${cfg.prefix}-app-container`]">
      <div :class="[`${cfg.prefix}-app-container-wrap`]">
        <div :class="[`${cfg.prefix}-page-container`]">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from './components/header.vue';
export default {
  name: 'Header',
  components: {
    MainHeader
  }
}
</script>
