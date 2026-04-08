<template>
  <div class="about-page-wrapper">
    <div class="about-card">
      <div class="profile-container">
        <img :src="cowImage" alt="KeyboardGirl" class="about-photo" />
        <div class="profile-text">
          <h1>
            KeyboardLeah 
            <img :src="drawnKeyboardImage" alt="Custom keyboard" class="keyboard-image"/>
          </h1>
          <p>
            I'm a junior software developer passionate about building intuitive, user-friendly apps. 
            Nature lover, classical music player, golfer, runner, traveler, and snacker.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cowImage from '../assets/cows.jpg'
import drawnKeyboardImage from '../assets/drawnKeyboard.png'

export default {
  name: "AboutMe",
  data() {
    return {
      cowImage, 
      drawnKeyboardImage
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;

.about-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-container {
  display: flex;
  gap: 4rem;
}

.about-card {
  background: $white-translucent;
  padding: 4rem 4rem 4rem 6rem;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  max-width: 900px;
  width: 100%;
}

.profile-text h1 {
  margin: 0;
  font-size: 3rem;
  color: $primary-green;
  font-family: 'Segoe UI', sans-serif;
}

.profile-text p {
  margin-top: 1.5rem;
  font-size: 1.3rem;
  color: $primary-green-dark;
  line-height: 1.7;
  max-width: 500px;
  font-family: 'Segoe UI', sans-serif;
}

.about-photo {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid $secondary-green-medium;
}

#app {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, $primary-tan-light, #d9ead3);
}

.main-content {
  margin-left: 220px;
  padding: 3rem;
}

.keyboard-container {
  width: 120px;
}

.keyboard-image {
  width: 14%;
  height: auto;
}
</style>