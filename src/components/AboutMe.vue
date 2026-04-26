<template>
  <div class="page">

    <div class="about-container">
      <div class="text-section">
        <h1>Leah Mooney</h1>
        <h2>Software Engineer</h2>
        <p>
          I’m a software engineer focused on building clean, user-friendly applications
          with Vue and .NET. I enjoy creating intuitive experiences and solving real-world problems.
        </p>
      </div>

      <div class="image-section">
        <img :src="cowImage" alt="Profile photo" />
      </div>
    </div>

    <section class="experience-section">
      <h2>Experience & Background</h2>

      <div class="info-grid">
        <div class="info-card">
          <h3>Resume</h3>
          <p>Download my resume to learn more about my experience.</p>

          <a
            :href="resumeUrl"
            download
            class="primary-btn"
            @click="handleDownload"
          >
            <span v-if="!downloaded">↓ Download Resume</span>
            <span v-else>Downloaded ✓</span>
          </a>
        </div>

        <div class="info-card">
          <h3>Education</h3>
          <p>Master’s in Computer Science (Cybersecurity focus).</p>
          <a href="https://www.cs.tufts.edu" target="_blank" class="link">
            View Program →
          </a>
        </div>
      </div>

    </section>

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
      drawnKeyboardImage,
      downloaded: false,
      resumeUrl: new URL('../assets/MooneyResume_Philly.pdf', import.meta.url).href
    }
  },
  methods: {
    handleDownload() {
      this.downloaded = true;

      setTimeout(() => {
        this.downloaded = false;
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;

.about-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.experience-section {
  margin-top: 8rem;
}

.text-section h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}

.text-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #4f7c5a;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
}
</style>