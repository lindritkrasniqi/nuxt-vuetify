<template>
  <v-card
    class="elevation-15 col-md-5 mx-auto pa-0"
    :loading="loading"
    :disabled="loading"
    outlined
  >
    <v-card-title>
      <div class="font-weight-thin mx-auto">Reset your password</div>
    </v-card-title>
    <v-divider />

    <NuxtLogo />

    <v-card-text>
      <FormsReset @loading="loading = $event" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  auth: false,

  middleware: ["reset"],

  data() {
    return {
      loading: false,
    };
  },

  head() {
    return { title: "Reset password" };
  },
};
</script>