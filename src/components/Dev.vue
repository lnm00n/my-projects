<template>
    <section id="resume" class="resume-section">
        <h2>Resume</h2>
        <p>Check out my professional experience and skills below.</p>
    
        <a :href="resumeUrl" download class="download-btn" @click="handleDownload">
            <span v-if="!downloaded">⬇ Download Resume</span>
            <span v-else>Downloaded</span>
        </a>
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
  
  .resume-section {
    padding: 3rem 2rem;
    text-align: center;
  }
  
  .download-btn {
    display: inline-block;
    margin-top: 1.5rem;
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