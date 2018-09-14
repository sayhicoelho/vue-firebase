<template>
  <v-app>
    <v-content :class="{ 'has-alert': !isOnline }">
      <v-alert :value="!isOnline" type="warning" transition="slide-y-transition" class="alert">
        You are offline. Trying to reconnect...
      </v-alert>
      <v-layout align-center justify-center row fill-height v-if="routing">
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate/>
      </v-layout>
      <snackbar/>
      <router-view v-show="!routing"/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Snackbar from '@/components/snackbar'

export default {
  name: 'app',
  computed: mapState(['routing']),
  components: {
    Snackbar
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0;
  z-index: 999;
}

.has-alert {
  padding: 64px 0px 0px !important;
}
</style>
