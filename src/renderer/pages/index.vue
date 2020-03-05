<template>
  <v-row>
    <v-col cols="4" class="pa-0 ma-0">
      <AuthHandler />
    </v-col>
    <v-col cols="8" class="pa-0 ma-0">
      <v-img
        src="https://www.gamosaurus.com/wp-content/uploads/League-of-Legends/Guides/S10/Vignettes/lol-guide-renekton-top-s10-objets-sorts-contres-conseils-astuces.jpg"
        style="height: 100vh"
        cover
      />
    </v-col>
  </v-row>
</template>

<script>
import { AuthHandler } from '@/components'
export default {
  layout: 'auth',
  components: {
    AuthHandler
  },
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
  }
}
</script>

<style>
::-webkit-scrollbar {
  display: none
}
body {
  overflow-x: hidden;
}
</style>
