<template>
  <div id="app">
    <TopNav />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import TopNav from './components/NavBar.vue'

export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
@use './styles/colors' as *;
#app {
  min-height: 100vh;
  background: $color-white;
  font-family: 'Segoe UI', sans-serif;
}

.main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
}
</style>