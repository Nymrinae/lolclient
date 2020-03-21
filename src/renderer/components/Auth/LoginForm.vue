<template>
  <div>
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

</style>
