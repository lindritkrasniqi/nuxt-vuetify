<template>
  <v-form @submit.prevent="forgot">
    <v-text-field
      label="Your email address"
      prepend-inner-icon="mdi-account"
      outlined
      id="email"
      clearable
      hint="Type your email."
      v-model="credentials.email"
      :error-messages="$store.state.errors.error.email"
    />

    <v-card-actions class="justify-space-between align-center">
      <nuxt-link
        :to="{ name: 'accounts-login' }"
        v-ripple
        class="text-decoration-none"
        >I think, I remember my password.
      </nuxt-link>
      <v-btn color="primary" type="submit" large>Send</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
      },
    };
  },
  methods: {
    forgot() {
      this.$emit("loading", true);

      this.$axios
        .post("/forgot", this.credentials)
        .then(() => this.$router.push({ name: "index" }))
        .catch(() => this.$emit("loading", false));
    },
  },

  beforeDestroy() {
    this.$store.commit("errors/error", {});
  },
};
</script>