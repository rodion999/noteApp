<template>
  <div>
    <h1>
      Sorry, Page not found.
    </h1>
    <router-link :to="{ name: 'Home'}">
      Back to Home
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>