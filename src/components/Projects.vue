<template>
  <div class="page">
    <h1>Selected Work</h1>
    <p class="page-intro">
      A selection of professional engineering work and systems I’ve contributed to.
    </p>

    <div class="stack">
      <div class="card" v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <p class="subtitle">{{ project.subtitle }}</p>

        <div class="section">
          <h4>Overview</h4>
          <p>{{ project.overview }}</p>
        </div>

        <div class="section">
          <h4>What I worked on</h4>
          <ul>
            <li v-for="item in project.work" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="section">
          <h4>Tech</h4>
          <p>{{ project.tech }}</p>
        </div>

        <div class="section">
          <h4>Impact</h4>
          <p>{{ project.impact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedWork",
  data() {
    return {
      projects: [
        {
          title: "OneUI",
          subtitle: "Modernized internal insurance platform",
          overview: "Migration of legacy systems into a unified Vue 3 + .NET 8 architecture.",
          work: [
            "Built frontend components in Vue 3",
            "Supported migration from .NET Framework to .NET 8 services",
            "Worked with BFF architecture for API communication"
          ],
          tech: "Vue 3, .NET 8, SQL",
          impact: "Improved maintainability and enabled support for multiple product lines"
        },
        {
          title: "Email Notification System",
          subtitle: "Automated transactional email pipeline",
          overview: "System that generates and sends policy-related emails via SendGrid.",
          work: [
            "Integrated SendGrid API for email delivery",
            "Built backend triggers for policy lifecycle events",
            "Ensured data consistency across services"
          ],
          tech: ".NET, SendGrid API, SQL",
          impact: "Reduced manual communication and improved delivery reliability"
        },
        {
          title: "Moratorium API",
          subtitle: "Moratorium creation",
          overview: "Allow users to create, update, or remove an active moratorium",
          work: [
            "todo",
            "todo"
          ],
          tech: "todo",
          impact: "todo"
        },
        {
          title: "Aggregate Monitoring TODO edit",
          subtitle: "Tracking Aggregate Limits",
          overview: "Daily monitoring and reporting to confirm amounts were within threshold.",
          work: [
            "Ran daily system validation checks",
            "Used to SQL to inspect and resolve any data discrepencies",
            "Tracked county limits and closed if approaching"
          ],
          tech: "SQL",
          impact: "Guarenteed never exceeded county limits"
        }
      ]
    }
  }
}
</script>

<style>
.page {
  max-width: 900px;
}

.page h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.page-intro {
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 600px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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

.card h3 {
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.link {
  color: #4f7c5a;
  font-weight: 500;
  text-decoration: none;
}</style>