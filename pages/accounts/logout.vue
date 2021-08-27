<template>
  <v-col cols="4">
    <NuxtLogo />

    <v-progress-linear indeterminate></v-progress-linear>

    <div class="my-4 font-weight-thin text-center">Please wait...</div>
  </v-col>
</template>

<script>
export default {
  created() {
    this.$auth.logout();
  },

  head() {
    return { title: "Logout" };
  },
};
</script>