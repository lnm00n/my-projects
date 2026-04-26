<template>
  <section class="contact-section">
    <div class="contact-card">
      <h2>Let's connect!</h2>
      <div class="contact-info">

        <div class="info-item">
          <span class="label">Phone</span>
          <span class="value">(215) 317-9745</span>
        </div>

        <div class="info-item">
          <span class="label">Email</span>
          <a href="mailto:lnmooney@comcast.net" class="value">
            lnmooney@comcast.net
          </a>
        </div>

        <div class="info-item">
          <span class="label">LinkedIn</span>
          <a 
            href="https://www.linkedin.com/in/leah-mooney-661709126" 
            target="_blank"
            class="value"
          >
            View Profile
          </a>
        </div>
      </div>

      <p class="intro">
        Feel free to reach out directly or use the form below
      </p>

      <TextInput v-model="name" label="Name" />

      <TextInput
        v-model="email"
        type="email"
        label="Email"
      />

      <TextInput
        v-model="phone"
        type="phone"
        label="Phone"
      />

      <button 
        :disabled="!name || !email || !phone" 
        :class="{ active: name && email && phone }"
        @click="handleSubmit"
      >
        Submit
      </button>

      <p v-if="submitted" class="success">
        Contact submitted!
      </p>
    </div>
  </section>
</template>

<script>
import TextInput from './TextInput.vue'
import { supabase } from "../lib/supabase"

export default {
  components: { TextInput },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      submitted: false
    }
  },
  methods: {
    async handleSubmit() {
      // basic validation
      if (!this.name || !this.email) {
        alert("Please fill out name and email")
        return
      }

      const { error } = await supabase
        .from("contacts")
        .insert([
          {
            name: this.name,
            email: this.email,
            phone: this.phone
          }
        ])

      if (error) {
        console.error(error)
        alert("Something went wrong")
        return
      }

      this.submitted = true
      // reset form
      this.name = ""
      this.email = ""
      this.phone = ""
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;

.contact-section {
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
}

.contact-card {
  background: $color-white-translucent;
  padding: 3rem 4rem;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
}

button {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: not-allowed;
  transition: all 0.2s ease;
  color: $color-white;
  background-color: $color-green-light;
}

button.active {
  background-color: $color-green-primary;
  cursor: pointer;
}

button.active:hover {
  opacity: 0.9;
}

.success {
  color: $color-success;
  margin-top: 0.5rem;
}

.contact-info {
  width: 100%;
  text-align: left;
  margin-bottom: 0.75rem;
  padding-bottom: 1rem;
}

.intro {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: $color-gray-dark;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.label {
  font-size: 0.8rem;
  color: $color-gray-light;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  font-size: 0.9rem;
  color: $color-gray-darkest;
}

.info-item a.value {
  color: $color-green-primary;
  text-decoration: none;
  font-weight: 500;
}

.info-item a.value:hover {
  text-decoration: underline;
}
</style>