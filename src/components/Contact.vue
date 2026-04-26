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
  color: green;
  margin-top: 0.5rem;
}
</style>