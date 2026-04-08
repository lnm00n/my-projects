<template>
  <div id="app">
    <SideMenu />
    <div class="main-content">
      <router-view />
    </div>
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
}

.main-content {
  margin-left: 220px;
  padding: 3rem;
  flex: 1;
}
</style>