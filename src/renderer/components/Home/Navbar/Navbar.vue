<template>
  <v-app-bar
    absolute
    height="100px"
    align-center
    justify-center
  >
    <v-toolbar-items>
      <v-img
        src="https://i.imgur.com/xNLs83T.png"
        width="50px"
        height="50px"
        style="margin-top: 24px;"
      />
      <v-btn text style="margin-right: 75px;">
        Play
      </v-btn>
      <v-btn
        v-for="(page, i) in pages"
        :key="i"
        text
      >
        {{ page }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="(icon, j) in icons"
        :key="j"
        text
      >
        <v-icon> {{ icon }} </v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-divider vertical />
    <CurrencyHandler />
    <PlayerCard />
  </v-app-bar>
</template>

<script>
import CurrencyHandler from './CurrencyHandler'
import PlayerCard from './PlayerCard'

export default {
  components: {
    CurrencyHandler,
    PlayerCard
  },
  data: () => ({
    pages: ['Home', 'Profile', 'Collection', 'TFT', 'Clash'],
    icons: ['mdi-treasure-chest', 'mdi-database']
  })
}
</script>

<style>

</style>
