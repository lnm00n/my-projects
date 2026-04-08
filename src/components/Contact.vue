<template>
  <section class="contact-section">
    <div class="contact-card">
      <h2>Let's connect!</h2>

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
    handleSubmit() {
      // basic validation
      if (!this.name || !this.email) {
        alert("Please fill out name and email")
        return
      }

      // simulate sending data
      console.log("Form submitted:", {
        name: this.name,
        email: this.email,
        phone: this.phone
      })

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
  background: $white-translucent;
  padding: 3rem 4rem;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

button {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: not-allowed;
  transition: all 0.2s ease;
  color: white;
  background-color: $secondary-green-light;
}

button.active {
  background-color: $primary-green;
  cursor: pointer;
}

button.active:hover {
  opacity: 0.9;
}

.success {
  color: green;
  margin-top: 0.5rem;
}
</style>