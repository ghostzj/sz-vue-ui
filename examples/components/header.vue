<template>
  <div :class="[`${cfg.prefix}-app-header`]">
    <div class="container">
      <h1 class="logo">
        <router-link to="/">
          <!-- <img src="../assets/images/element-logo.svg"/> -->
          <h2>SZ-VUE-UI</h2>
        </router-link>
      </h1>
      <!-- <ul class="nav">
        <li class="nav-item"><router-link active-class="active" to="/guide">指南</router-link></li>
        <li class="nav-item"><router-link active-class="active" to="/component/button">组件</router-link></li>
        <li class="nav-item"><router-link active-class="active" to="/theme">主题</router-link></li>
        <li class="nav-item"><router-link active-class="active" to="/github">GitHub</router-link></li>
        <li class="nav-item"><router-link active-class="active" to="/">版本</router-link></li>
        <li class="nav-item"><router-link active-class="active" to="/">中文</router-link></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
</style>
