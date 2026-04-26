<template>
    <div class="input-group">
      <label v-if="label">{{ label }}</label>
  
      <input
        :type="inputType"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
      />
  
      <span v-if="error" class="error">{{ error }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "TextInput",
    props: {
      modelValue: String,
      type: {
        type: String,
        default: "text"
      },
      label: String,
      placeholder: String
    },
    data() {
      return {
        error: ""
      }
    },
    computed: {
      inputType() {
        if (this.type === "email") return "email"
        return "text"
      }
    },
    methods: {
      handleInput(event) {
        let value = event.target.value
  
        if (this.type === "phone") {
          value = this.formatPhone(value)
        }
  
        this.validate(value)
  
        this.$emit("update:modelValue", value)
      },
  
      formatPhone(value) {
        const digits = value.replace(/\D/g, "").slice(0, 10)
  
        if (digits.length <= 3) return digits
        if (digits.length <= 6)
          return `(${digits.slice(0,3)}) ${digits.slice(3)}`
        return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
      },
  
      validate(value) {
        this.error = ""
  
        if (this.type === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (value && !emailRegex.test(value)) {
            this.error = "Invalid email"
          }
        }
  
        if (this.type === "phone") {
          const digits = value.replace(/\D/g, "")
          if (digits.length > 0 && digits.length < 10) {
            this.error = "Enter 10-digit phone"
          }
        }
      }
    }
  }
  </script>
  
<style lang="scss" scoped>
@use '../styles/colors' as *;

label {
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  color: $color-gray-dark;
  text-align: left;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  max-width: 280px;
  width: 100%;
}
  
input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid $color-gray-lightest;
}
  
.error {
  color: $color-error;
  font-size: 0.8rem;
}
</style>