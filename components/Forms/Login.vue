<template>
  <v-form @submit.prevent="login">
    <v-text-field
      label="Email"
      id="email"
      prepend-inner-icon="mdi-account"
      outlined
      clearable
      hint="Type your email."
      :disabled="loading"
      v-model="credentials.email"
      :error-messages="$store.state.errors.error.email"
    />
    <v-text-field
      label="Password"
      id="current-password"
      prepend-inner-icon="mdi-lock"
      outlined
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      clearable
      hint="Type your password."
      @click:append="showPassword = !showPassword"
      v-model="credentials.password"
      :error-messages="$store.state.errors.error.password"
      :disabled="loading"
    />
    <v-checkbox
      label="Remember me?"
      :error-messages="$store.state.errors.error.remember"
      class="mt-0 pt-0"
      dense
      id="remember"
      :disabled="loading"
      ripple
      v-model="credentials.remember"
    />
    <nuxt-link
      :to="{ name: 'accounts-forgot' }"
      v-ripple
      class="text-decoration-none mt-2 px-3"
      >Forgot your password?
    </nuxt-link>

    <v-card-actions class="justify-center">
      <v-btn color="dark" plain @click.prevent="loginWith('google')">
        <v-icon class="mr-2">mdi-google</v-icon> Google
      </v-btn>
      <v-btn color="dark" plain @click.prevent="loginWith('github')">
        <v-icon class="mr-2">mdi-github</v-icon> Github
      </v-btn>
      <v-btn color="primary" plain @click.prevent="loginWith('facebook')">
        <v-icon class="mr-2">mdi-facebook</v-icon> facebook
      </v-btn>
    </v-card-actions>

    <v-card-actions class="col-12 justify-end">
      <v-btn
        color="white"
        class="primary--text"
        nuxt
        :to="{ name: 'accounts-signup' }"
        :disabled="loading"
        large
        >Sign up</v-btn
      >
      <v-btn
        color="primary"
        type="submit"
        class="ml-4"
        :disabled="loading"
        :loading="loading"
        large
        >Login</v-btn
      >
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      showPassword: false,
      credentials: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },

  methods: {
    login() {
      this.$emit("loading", (this.loading = !this.loading));

      this.$auth
        .loginWith('laravelSanctum',{ data: this.credentials })
        .then(() => this.$auth.redirect('home'))
        .catch(() => this.$emit("loading", (this.loading = !this.loading)));
    },

    loginWith(provider) {
      console.log(provider);

      // window.location.replace(
      //   `http://api.localhost:8000/v1/authorize/${provider}/redirect`
      // );
    },
  },

  beforeDestroy() {
    this.$store.commit("errors/error", {});
  },
};
</script>