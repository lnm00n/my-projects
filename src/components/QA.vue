<template>
  <div class="page">

    <h1>QA Experience</h1>
    <p class="page-intro">
      Automated testing work using Playwright to ensure reliable user flows.
    </p>

    <div class="stack">

      <div class="card">
        <h2>Test Automation</h2>
        <p>
          Check out my Playwright automated test scripts that validate core user journeys.
        </p>
        <img :src="testFile" alt="Test file screenshot" class="test-file-image" />
      </div>

      <div class="card">
        <h2>Results</h2>
        <p>
          Below are results of a user's happy path on this portfolio site.
        </p>
        <img :src="happyPathResults" alt="Happy path results screenshot" class="results-image" />
      </div>

    </div>

  </div>
</template>
  
<script>
import happyPathResults from '../assets/happyPathResults.png'
import testFile from '../assets/testFile.png'

export default {
  name: "QA",
  data() {
    return {
      happyPathResults,
      testFile
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

.page-intro {
  color: $color-gray-light;
  margin-bottom: 2rem;
  max-width: 600px;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  border: 1px solid $color-off-white;
  border-radius: 12px;
  padding: 1.5rem;
  background: $color-white;
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.test-file-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  object-fit: contain;
}

.results-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  object-fit: contain;
}
</style>
