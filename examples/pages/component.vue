<template>
  <div class="page-component">
    <side-nav></side-nav>
    <div class="page-component-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from '../components/side-nav.vue'
export default {
  name: 'MainComponent',
  components: {
    SideNav
  },
  data() {
    return {

    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
  watch: {

  }
};
</script>

<style lang="scss" scoped>
  .page-component {
    width: 100%;
    height: 100%;
    display: flex;
    .side-nav {
      width: 200px;
      padding: 20px 20px 20px 0;
      border-right: 1px solid #ddd;
    }
    .side-nav:hover {
      overflow: auto;
    }
    .page-component-right {
      flex: 1;
      overflow: auto;
      padding: 20px;
      // min-width: 850px;
    }
  }
</style>
