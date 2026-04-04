<template>
  <div class="contact-container">
    <h2>Let's conntect!</h2>

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

    <button :disabled="!name || !email">Submit</button>

    <p v-if="submitted" class="success">
      Contact submitted!
    </p>
  </div>
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

      // reset form (optional)
      this.name = ""
      this.email = ""
      this.phone = ""
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/colors' as *;

.contact-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

button {
  margin-top: 1rem;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  background: $secondary-green-light;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* disabled state (lighter green) */
button:disabled {
  background: $primary-green;
  cursor: not-allowed;
  opacity: 0.8;
}

/* hover only when enabled */
button:not(:disabled):hover {
  opacity: 0.9;
}

.success {
  margin-top: 1rem;
  color: green;
}
</style>