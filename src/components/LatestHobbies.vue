<template>
  <div class="hobbies-page">
    <div class="content">
      <h1>Latest Hobbies</h1>
      <p class="subtitle">
        Things I’ve been enjoying outside of engineering lately.
      </p>

      <div class="hobby-grid">
        <router-link to="/music" class="hobby-frame">Music</router-link>
        <router-link to="/golf" class="hobby-frame">Golf</router-link>
        <router-link to="/travel" class="hobby-frame">Travel</router-link>
        <router-link to="/animals" class="hobby-frame">Animals</router-link>
        <router-link to="/snacking" class="hobby-frame">Snacking</router-link>
        <router-link to="/running" class="hobby-frame">Running</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
name: "LatestHobbies",
}
</script>
  
<style lang="scss" scoped>
@use '../styles/colors' as *;
.hobbies-page {
  min-height: 100vh;
  background: $color-green-light;
  display: flex;
  justify-content: center;
}

.content {
  max-width: 900px;
  width: 100%;
  padding: 3rem 2rem;
  text-align: center;
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.hobby-frame {
  background: #ffffff;
  border: 1px solid #d7e6dc;
  border-radius: 14px;

  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;
  color: #1f2937;

  transition: all 0.2s ease;
}

.hobby-frame:hover {
  transform: translateY(-5px);
  border-color: $color-green-primary;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

</style>