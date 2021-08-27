<template>
  <v-form @submit.prevent="reset">
    <v-text-field
      label="New password"
      prepend-inner-icon="mdi-lock"
      outlined
      id="password"
      clearable
      :type="password ? 'text' : 'password'"
      :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="password = !password"
      hint="Type your new password."
      v-model="credentials.password"
      :error-messages="$store.state.errors.error.password"
    />
    <v-text-field
      label="Repeat your password"
      prepend-inner-icon="mdi-lock"
      outlined
      id="password_confirmation"
      :type="newPassword ? 'text' : 'password'"
      :append-icon="newPassword ? 'mdi-eye' : 'mdi-eye-off'"
      clearable
      hint="Type once more."
      @click:append="newPassword = !newPassword"
      v-model="credentials.password_confirmation"
    />
    <v-card-actions class="justify-end">
      <v-btn color="primary" type="submit" large>Reset</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      password: false,
      newPassword: false,
      credentials: {
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    reset() {
      this.$emit("loading", true);

      this.credentials.email = this.$route.query.email;
      this.credentials.token = this.$route.query.token;

      this.$axios
        .post("/reset", this.credentials)
        .then(() => this.$router.push({ name: "accounts-login" }))
        .catch((e) => {
          this.$emit("loading", false);

          if (e.response.status === 503)
            this.$router.push({ name: "accounts-forgot" });
        });
    },
  },

  beforeDestroy() {
    this.$store.commit("errors/error", {});
  },
};
</script>