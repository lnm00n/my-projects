<template>
  <div class="page">

    <h1>QA Experience TODO</h1>
    <p class="page-intro">
      Automated testing work using Playwright to ensure reliable user flows.
    </p>

    <div class="stack">

      <div class="card">
        <h2>Test Automation</h2>
        <p>
          Check out my Playwright automated test scripts that validate core user journeys.
        </p>
      </div>

      <div class="card">
        <h2>Results</h2>
        <p>
          Below are results of a user's happy path on the PGA Superstore site.
        </p>
      </div>

    </div>

  </div>
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

.page-intro {
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 600px;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  background: white;
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
</style>
