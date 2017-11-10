<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view
      class="view"
      keep-alive transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  export default {
    // components: {}
  }
</script>

<!-- css用scss写在文件中 -->
<style lang="scss">
  @import "./style/style";
</style>
