<template>
    <section id="experience" class="experience-section">
      <div class="experience-card">
        <div class="resume-block">
          <h2>Resume</h2>
          <p>Check out my professional experience and skills below.</p>

          <a :href="resumeUrl" download class="download-btn" @click="handleDownload">
            <span v-if="!downloaded">⬇ Download Resume</span>
            <span v-else>Downloaded</span>
          </a>
        </div>

        <div class="education-block">
          <h2>Education</h2>
          <p>Check out my course load at Tufts below. #GoJumbos! 🐘</p>
          <a href="https://www.cs.tufts.edu" target="_blank" class="link">
            Tufts Computer Science
          </a> 
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Dev",
    data() {
      return {
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
  
  .experience-card {
    background: $white-translucent;
    padding: 3rem 4rem;
    border-radius: 20px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);

    text-align: center;
    max-width: 600px;
    width: 100%;
  }

  .education-block {
    margin-top: 3rem;
  }
  
  .download-btn {
    display: inline-block;
    margin-top: 0.75rem;
    padding: 0.85rem 1.75rem;
    background-color: $primary-green;
    color: white;
    text-decoration: none;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.25s ease;
  }
  
  .download-btn:hover {
    background-color: $primary-green;
    transform: translateY(-2px);
  }
</style>