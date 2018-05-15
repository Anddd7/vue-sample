<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <transition name="slide-fade">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>
  export default {};
</script>

<!-- css用scss写在文件中 -->
<style lang="scss">
  @import "./style/style";
</style>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
