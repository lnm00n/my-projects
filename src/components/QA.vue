<template>
    <section id="quality" class="quality-section">
      <div class="experience-card">
        <div class="test-experience-block">
          <h2>QA Experience</h2>
          <p>Check out my Playwright automated test scripts</p>
        </div>

        <div class="results-block">
          <h2>Results</h2>
          <p>Below are results of a user's happy path on the PGA Superstore Site</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "QA",
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

  .results-block {
    margin-top: 3rem;
  }

</style>