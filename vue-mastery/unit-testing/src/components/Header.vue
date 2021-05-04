<template>
  <div>
    <button v-show="isLoggedIn">Logout</button>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isLoggedIn: false
      }
    },
  }
</script>
