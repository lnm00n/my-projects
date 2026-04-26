<template>
    <div class="music-page">
      <div class="content">
        
        <h1>Piano</h1>
        <p class="subtitle">
          A mix of practice, inspiration, and shows I’m attending.
        </p>
  
        <section class="section">
          <h2>Photos</h2>
          <div class="photo-grid">
            <div
              v-for="(photo, index) in photos"
              :key="index"
              class="photo-card"
            >
              <img :src="photo.src" :alt="photo.alt" />
            </div>
          </div>
        </section>

        <section class="section">
            <h2>Shows</h2>
            <div class="toggle">
                <button
                :class="{ active: activeTab === 'upcoming' }"
                @click="activeTab = 'upcoming'"
                >
                Upcoming
                </button>
                <button
                :class="{ active: activeTab === 'past' }"
                @click="activeTab = 'past'"
                >
                Past
                </button>
            </div>
            <div class="event-list">
                <div
                v-for="(event, index) in filteredEvents"
                :key="index"
                class="event-card"
                >
                <div class="event-title">{{ event.title }}</div>
                <div class="event-meta">
                    {{ event.date }} • {{ event.location }}
                </div>
                <div class="event-note">
                    {{ event.note }}
                </div>
                </div>
            </div>
            </section>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Music",
    data() {
    return {
      activeTab: "upcoming",
      events: [
       {
          title: "Max Richter",
          date: "June 19, 2026",
          location: "DPAC, Durham",
          note: "In a Landscape",
          status: "upcoming"
        },
        {
          title: "Ludovico Einaudi",
          date: "July 10, 2026",
          location: "O2 Arena, London",
          note: "with Anna Lapwood opening on the organ",
          status: "upcoming"
        },
        {
          title: "Itzhak Perlman",
          date: "September 29, 2025",
          location: "The Beacon Theatre, New York City",
          note: "80th Birthday Celebration",
          status: "past"
        },
        {
          title: "Ludovico Einaudi",
          date: "October 6, 2025",
          location: "The Met, Philadelphia",
          note: "Summer Protraits",
          status: "past"
        }
      ]
    };
  },

  computed: {
    filteredEvents() {
      return this.events.filter(
        e => e.status === this.activeTab
      );
    }
  }
};
  </script>
  
  <style lang="scss" scoped>
  @use '../styles/colors' as *;
  
  .music-page {
    min-height: 100vh;
    background: $color-green-light;
    display: flex;
    justify-content: center;
  }
  
  .content {
    max-width: 900px;
    width: 100%;
    padding: 3rem 2rem;
    text-align: center;
  }
  
  .section {
    margin-top: 2.5rem;
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .photo-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid #d7e6dc;
    transition: transform 0.2s ease;
  }
  
  .photo-card img:hover {
    transform: scale(1.03);
  }
  
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .event-card {
    background: #fff;
    border: 1px solid #d7e6dc;
    border-radius: 12px;
    padding: 1rem;
    text-align: left;
  }
  
  .event-title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .event-meta {
    font-size: 0.9rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }
  
  .event-note {
    margin-top: 0.5rem;
    font-size: 0.95rem;
  }

  .toggle {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.toggle button {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid #d7e6dc;
  background: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.toggle button.active {
  background: #1f2937;
  color: white;
  border-color: #1f2937;
}
</style>