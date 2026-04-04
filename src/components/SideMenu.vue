<template>
    <nav class="side-menu">
      <ul>
        <li>
          <router-link to="/">
            <span class="icon">👋</span> About Me
          </router-link>
        </li>
        <li>
          <router-link to="/devFun">
            <span class="icon">💻</span> Dev Fun
          </router-link>
        </li>
        <li>
          <router-link to="/qaFun">
            <span class="icon">🧪</span> QA Fun
          </router-link>
        </li>
        <li>
          <router-link to="/latestHobbies">
            <span class="icon">🎨</span> Latest Hobbies
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <span class="icon">✉️</span> Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "SideMenu"
  }
  </script>
  
  <style lang="scss" scoped>
  @use '../styles/colors' as *;

  .side-menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 220px;
    background: #9eb995;
    padding-top: 1.5rem;
    box-shadow: 2px 0 8px rgba(0,0,0,0.15);
    font-family: 'Segoe UI', sans-serif;
  }
  
  .side-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .side-menu li {
    margin: 0.5rem 0;
  }
  
  .side-menu a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: $primary-green-dark;
    font-weight: 600;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  
  .side-menu a:hover {
    color: $primary-tan-light; /* darker green on hover */
  }
  
  .icon {
    margin-right: 0.5rem;
  }
  </style>