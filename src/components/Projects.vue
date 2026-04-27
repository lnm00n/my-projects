<template>
  <div class="page">
    <h1>Selected Work</h1>
    <p class="page-intro">
      A selection of engineering work and systems I’ve contributed to.
    </p>

    <div class="card-grid">
      <div
        class="card"
        v-for="(project, index) in projects"
        :key="project.title"
        :class="{ active: activeIndex === index }"
        @click="toggleCard(index)"
      >
        <h2 class="title">{{ project.title }}</h2>
        <p class="subtitle">{{ project.subtitle }}</p>
        <p class="overview">{{ project.overview }}</p>

        <div v-if="activeIndex === index" class="details">
          <div class="section">
            <h4>Key Contributions</h4>
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
  </div>
</template>

<script>
export default {
  name: "SelectedWork",
  data() {
    return {
      activeIndex: null,
      projects: 
      [
        {
          title: "Shared Digital Library",
          subtitle: "Reusable component system",
          overview: "Centralized library of reusable UI components shared across applications.",
          work: [
            "Maintained and refactored Vue 3 components for reuse across multiple applications",
            "Migrated components into a shared library to improve consistency and scalability",
            "Created Storybook documentation with interactive examples and usage guidelines",
            "Provided clear integration instructions for both Vue 3 and standard HTML implementations"
          ],
          tech: "Vue 3, Storybook",
          impact: "Improved development efficiency and consistency by enabling teams to reuse standardized components across projects"
        },
        {
          title: "OneUI",
          subtitle: "Modernized internal insurance platform",
          overview: "Unified legacy systems into a modern web platform.",
          work: [
            "Built reusable frontend components in Vue 3",
            "Supported migration from .NET Framework to .NET 8 services",
            "Worked within a BFF architecture for API communication"
          ],
          tech: "Vue 3, .NET 8, SQL",
          impact:
            "Improved maintainability and enabled support for multiple product lines"
        },
        {
          title: "Email Notification System",
          subtitle: "Automated transactional email pipeline",
          overview: "System for generating and sending policy-related emails.",
          work: [
            "Integrated SendGrid API for reliable email delivery",
            "Built backend triggers for policy lifecycle events",
            "Ensured consistency of data across services"
          ],
          tech: ".NET, SendGrid API, SQL",
          impact:
            "Reduced manual communication and improved delivery reliability"
        },
        {
          title: "Moratorium API",
          subtitle: "Moratorium management system",
          overview: "API for creating, updating, and removing moratoriums.",
          work: [
            "Designed RESTful endpoints for moratorium lifecycle management",
            "Integrated SQL database for persistence and validation",
            "Replaced legacy workflows with a scalable solution"
          ],
          tech: ".NET, SQL",
          impact:
            "Enabled multiple users to manage moratoriums simultaneously and removed reliance on legacy systems"
        },
        {
          title: "Aggregate Monitoring",
          subtitle: "Tracking aggregate limits",
          overview: "Monitoring system to ensure limits stayed within thresholds.",
          work: [
            "Performed daily system validation checks",
            "Used SQL to identify and resolve data discrepancies",
            "Tracked county limits and proactively flagged risks"
          ],
          tech: "SQL",
          impact:
            "Ensured aggregate limits were never exceeded, maintaining compliance"
        }
      ]
    };
  },
  methods: {
    toggleCard(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;
.page {
  max-width: 1100px;
}

.page h1 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}

.page-intro {
  color: $color-gray-light;
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1000px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid $color-off-white;
  border-radius: 16px;
  padding: 1.5rem;
  background: $color-white;
  cursor: pointer;
  transition: all 0.25s ease;
  height: fit-content;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.card.active {
  grid-column: span 2;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
}

.subtitle {
  font-size: 0.85rem;
  color: $color-gray-light;
  margin-bottom: 0.5rem;
}

.overview {
  font-size: 0.9rem;
  color: $color-gray-dark;
  margin-bottom: 1rem;
}

.details {
  margin-top: 1rem;
  animation: fadeIn 0.25s ease;
}

.section {
  margin-bottom: 1rem;
}

.section h4 {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: $color-gray-light;
  margin-bottom: 0.3rem;
}

.section ul {
  padding-left: 1.2rem;
}

.section li {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: $color-gray-darkest;
}

.section p {
  font-size: 0.9rem;
  color: $color-gray-darkest;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>