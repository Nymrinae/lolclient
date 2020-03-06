<template>
  <div style="height: 100vh">
    <v-img
      src="https://i.imgur.com/xNLs83T.png"
      width="50px"
      height="50px"
      class="ma-12"
    />
    <p style="font-size: 32px; font-weight: bold" class="ma-12"> Sign in with your Riot Account </p>
    <v-text-field
      v-model="username"
      class="textbox ml-12"
      label="Username"
      filled
    />
    <v-text-field
      v-model="password"
      class="textbox ml-12"
      label="Password"
      :type="show ? 'text' : 'password'"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      filled
      @click:append="show = !show"
    />
    <v-checkbox
      class="ml-12 mt-n2"
      label="Stay signed in"
      color="red"
    />
    <div class="text-center mt-6">
      <v-btn
        fab
        x-large
        color="red"
        :disabled="!password.length"
        :dark="password.length > 0"
      >
        <v-icon> mdi-arrow-right </v-icon>
      </v-btn>
    </div>
    <div>
      <v-row>
        <v-col cols="6">
          <v-hover v-slot:default="{ hover }">
            <h6
              :class="{ 'font-weight-black': hover }"
              class="text-uppercase text--secondary caption ml-12 mt-7"
            >
              Create Account
            </h6>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
            <h6
              :class="{ 'font-weight-black': hover }"
              class="text-uppercase text--secondary caption ml-12"
            >
              Can't sign in ?
            </h6>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot:default="{ hover }">
            <h6
              style="margin-right: 92px"
              :class="{ 'font-weight-black': hover }"
              class="text-uppercase text--secondary text-right caption ml-12 mt-12"
            >
              V0.0.1
            </h6>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
    show: false
  })
}
</script>

<style>
.textbox {
  width: 300px;
}
</style>
