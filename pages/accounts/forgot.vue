<template>
  <v-card
    class="elevation-15 col-md-5 mx-auto pa-0"
    :loading="loading"
    :disabled="loading"
    outlined
  >
    <v-card-title>
      <div class="font-weight-thin mx-auto">Recover your account</div>
    </v-card-title>

    <v-divider />

    <NuxtLogo />

    <v-card-text>
      <FormsForgot @loading="loading = $event" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  auth: false,

  data() {
    return {
      loading: false,
    };
  },

  head() {
    return { title: "Forgot password" };
  },
};
</script>