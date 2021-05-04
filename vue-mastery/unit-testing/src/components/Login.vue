<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" data-test-id="name-input">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      onSubmit () {
        this.$emit('formSubmitted', { name: this.name })
      }
    },
  }
</script>
