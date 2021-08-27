<template>
  <v-form @submit.prevent="registerMethod()">
    <v-row class="px-3 pb-3">
      <v-text-field
        label="First name"
        outlined
        id="firstname"
        clearable
        v-model="user.firstname"
        class="col-md-6 pr-1"
        hint="Set your first name."
        :error-messages="$store.state.errors.error.name"
      />
      <v-text-field
        label="Last name"
        id="lastname"
        outlined
        clearable
        v-model="user.lastname"
        class="col-md-6 pl-1"
        hint="Set your last name."
      />
    </v-row>
    <v-text-field
      label="Email"
      id="email"
      :disabled="$route.query.email != undefined"
      outlined
      clearable
      v-model="user.email"
      type="email"
      prepend-inner-icon="mdi-account"
      hint="Set your email."
      :error-messages="$store.state.errors.error.email"
    />
    <v-text-field
      label="Password"
      outlined
      id="password"
      clearable
      v-model="user.password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      prepend-inner-icon="mdi-lock"
      hint="Set your password account."
      :error-messages="$store.state.errors.error.password"
      @click:append="showPassword = !showPassword"
    />
    <v-text-field
      label="Password Confirmation"
      outlined
      id="password_confirmation"
      clearable
      v-model="user.password_confirmation"
      :type="showPassword_C ? 'text' : 'password'"
      :append-icon="showPassword_C ? 'mdi-eye' : 'mdi-eye-off'"
      prepend-inner-icon="mdi-lock"
      hint="Please, confirm your password account."
      @click:append="showPassword_C = !showPassword_C"
    />
    <v-card-actions class="justify-space-between align-center">
      <nuxt-link
        :to="{ name: 'accounts-login' }"
        v-ripple
        class="text-decoration-none"
        >Already have an account!
      </nuxt-link>
      <v-btn color="primary" large class="px-4" type="submit"> Sign up </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      showPassword_C: false,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    registerMethod() {
      this.$emit("loading", true);

      let regUser = {
        name: this.user.firstname + " " + this.user.lastname,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
      };

      this.$axios
        .post("/register", regUser)
        .then(() =>
          this.$auth
            .loginWith("laravelSanctum", { data: regUser })
            .then(() => this.$auth.redirect("home"))
        )
        .catch(() => this.$emit("loading", false));
    },
  },

  beforeDestroy() {
    this.$store.commit("errors/error", {});
  },
};
</script>