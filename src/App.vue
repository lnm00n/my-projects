<template>
  <div id="app">
    <SideMenu />
    <router-view />
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  components: { SideMenu }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  /* page gradient */
  background: linear-gradient(135deg, #f5f5dc, #d9ead3);
}

/* main content fills remaining space next to side nav */
#app > *:not(.side-menu) {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>