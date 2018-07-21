<template>
  <v-snackbar
    v-model="snackbar.show"
    color=""
    :top="true"
    :bottom="false"
    :left="false"
    :right="false"
    :multi-line="true"
    :timeout="5000" :vertical="false">
    {{ snackbar.text }}
    <v-btn
      dark
      flat
      @click="HIDE_SNACKBAR()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'snackbar',
  computed: mapState(['snackbar']),
  methods: mapMutations(['HIDE_SNACKBAR'])
}
</script>
