<template>
  <b-card
    class="w-75 m-auto"
    title="Not Found"
  >
    <b-card-text>
      This page not found.
    </b-card-text>
    <router-link
      to="/"
      class="card-link"
    >
      Click to go home
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style>

</style>
