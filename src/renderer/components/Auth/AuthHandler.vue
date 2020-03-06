<template>
  <div style="height: 100vh">
    <v-img
      src="https://i.imgur.com/xNLs83T.png"
      width="50px"
      height="50px"
      class="ma-12"
    />
    <p style="font-size: 32px; font-weight: bold" class="ma-12"> Sign in with your Riot Account </p>
    <LoginForm />
    <FooterLinks />
  </div>
</template>

<script>
import FooterLinks from './FooterLinks'
import LoginForm from './LoginForm'

export default {
  components: {
    FooterLinks,
    LoginForm
  }
}
</script>

<style>
.textbox {
  width: 310px;
}
</style>
