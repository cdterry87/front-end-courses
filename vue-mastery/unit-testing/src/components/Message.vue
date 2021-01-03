<template>
  <p v-if="error" data-test-id="error">{{ error }}</p>
  <p v-else data-test-id="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios'
export default {
  name: 'Message',
  data() {
    return {
      message: {},
      error: null
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>