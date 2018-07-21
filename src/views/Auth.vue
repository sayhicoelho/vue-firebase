<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <img src="/static/img/logo/96x96.png" alt="Logo" class="mb-2"/>
        <p>
          Vue Firebase by <a href="https://coelhodeveloper.com.br">Renan Coelho</a>
        </p>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'auth'
}
</script>
