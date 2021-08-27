<template>
  <v-card
    class="elevation-15 col-md-5 mx-auto pa-0"
    outlined
    :loading="loading"
    :disabled="loading"
  >
    <v-card-title>
      <div class="mx-auto font-weight-thin">Sign up</div>
    </v-card-title>

    <v-divider />

    <NuxtLogo />

    <v-card-text>
      <FormsSignUp @loading="loading = $event" />
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
    return { title: "Sign up" };
  },
};
</script>