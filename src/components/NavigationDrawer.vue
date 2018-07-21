<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile :to="{ name: 'Home' }" ripple exact>
          <v-list-tile-action>
            <v-icon>equalizer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Settings' }" ripple>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="toggleLogoutDialog()" ripple>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile disabled>
          <v-list-tile-content>
            <v-list-tile-title>&copy; 2018 Renan Coelho</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <toolbar v-on:toggle="drawer = !drawer"/>

    <v-dialog v-model="logoutDialog" @keydown.esc="toggleLogoutDialog()" max-width="290">
      <v-card>
        <v-card-title>Are you sure you want to logout?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click="toggleLogoutDialog()">
            No
          </v-btn>
          <v-btn color="primary" flat="flat" @click="logout()">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
import { mapMutations } from 'vuex'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'navigation-drawer',
  data () {
    return {
      drawer: false,
      logoutDialog: false
    }
  },

  watch: {
    logoutDialog (active) {
      if (!active) {
        this.drawer = true
      }
    }
  },

  methods: {
    ...mapMutations([
      'SHOW_SNACKBAR',
      'HIDE_SNACKBAR',
    ]),
    toggleLogoutDialog () {
      this.logoutDialog = !this.logoutDialog
      this.drawer = !this.drawer
    },
    logout () {
      this.HIDE_SNACKBAR()

      firebase.auth().signOut().then(response => {
        this.$router.replace({
          name: 'Login'
        })
      }).catch(error => {
        this.SHOW_SNACKBAR(error.message)
      })
    }
  },

  components: {
    Toolbar
  }
}
</script>
