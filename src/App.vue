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
  background: linear-gradient(135deg, #f5f5dc, #d9ead3);
}


#app > *:not(.side-menu) {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>