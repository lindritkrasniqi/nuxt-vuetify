<template>
  <v-card
    class="elevation-15 col-md-5 mx-auto pa-0"
    :loading="loading"
    :disabled="loading"
    outlined
  >
    <v-card-title>
      <div class="font-weight-thin mx-auto">Login</div>
    </v-card-title>
    <v-divider />

    <NuxtLogo />

    <v-card-text>
      <FormsLogin @loading="loading = $event" />
    </v-card-text>

    <v-divider></v-divider>

    <div class="d-flex justify-end align-center mx-2">
      <Theme />
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },

  head() {
    return { title: "Login" };
  },
};
</script>