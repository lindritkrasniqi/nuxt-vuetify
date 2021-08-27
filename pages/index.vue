<template>
  <v-row v-if="$auth.loggedIn" justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Dashboard </v-card-title>

        <v-card-text>
          <p>
            A simple
            <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
            application build with
            <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>
            and runs in
            <a href="https://laravel.com/docs/8.x/sanctum" target="_blank">
              Laravel Sanctum</a
            >!
          </p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; {{ $auth.user.email }}</small>
            </em>
          </div>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn color="error" nuxt :to="{ name: 'accounts-logout' }">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-row v-else justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card
        class="pa-4 d-flex justify-space-around align-center flex-wrap"
        outlined
        shaped
      >
        <NuxtLogo class="mb-6" />

        <FormsLogin />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "loggedIn",

  auth: false,

  head() {
    return { title: this.$auth.loggedIn ? "Welcome" : "NuxtJS with Vuetify" };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
