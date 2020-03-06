<template>
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
          style="margin-right: 84px"
          :class="{ 'font-weight-black': hover }"
          class="text-uppercase text--secondary text-right caption ml-12 mt-12"
        >
          V0.0.1
        </h6>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
