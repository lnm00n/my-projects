<template>
    <nav class="top-nav">
      <div class="nav-container">
        <div class="logo">
          Leah Mooney
        </div>
  
        <ul class="nav-links">
          <router-link to="/" data-testid="nav-about">About</router-link>
          <li><router-link to="/projects">Full Stack Projects</router-link></li>
          <li><router-link to="/qa">QA</router-link></li>
          <li><router-link to="/latestHobbies" data-testid="nav-hobbies">Hobbies</router-link></li>
          <li><router-link to="/contact" data-testid="nav-contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    name: "TopNav"
}
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;

.top-nav {
  width: 100%;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: $color-green-dark;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover {
  color: $color-green-medium;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: $color-green-medium;
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

.router-link-active {
  color: $color-green-medium;
  border-bottom: 2px solid $color-green-medium;
  padding-bottom: 2px;
}
</style>