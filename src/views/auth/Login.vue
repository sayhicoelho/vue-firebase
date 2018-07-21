<template>
  <v-form @submit.prevent="submit()">
    <v-text-field
      type="email"
      data-vv-name="email"
      data-vv-delay="300"
      label="Email"
      v-model="form.email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      solo
      :disabled="submitting"/>
    <v-text-field
      type="password"
      data-vv-name="password"
      data-vv-delay="300"
      label="Password"
      v-model="form.password"
      v-validate="'required|min:6'"
      :error-messages="errors.collect('password')"
      solo
      :disabled="submitting"/>
    <v-checkbox
      type="checkbox"
      value="1"
      data-vv-name="remember"
      data-vv-delay="300"
      label="Keep me logged in"
      v-model="form.remember"
      :error-messages="errors.collect('remember')"
      color="primary"
      :disabled="submitting"/>

    <v-btn
      type="submit"
      class="mb-3"
      color="primary"
      block
      large
      @click="submit()"
      :disabled="!isFormValid || submitting">LOGIN</v-btn>
    <v-btn
      color="indigo"
      class="mb-3"
      :dark="!submitting"
      block
      large
      :to="{ name: 'SignUp' }"
      :disabled="submitting">SIGN UP</v-btn>
    <v-btn
      block
      large
      :to="{ name: 'PasswordRecovery' }"
      :disabled="submitting">PASSWORD RECOVERY</v-btn>
  </v-form>
</template>

<script>
import firebase from '@/config/firebase'
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      submitting: false,
      dictionary: {
        attributes: {
          email: 'e-mail address'
        }
      },
      form: {
        email: '',
        password: '',
        remember: null
      }
    }
  },

  computed: {
    isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid)
    },
    firebasePersistence() {
      return this.form.remember
        ? firebase.auth.Auth.Persistence.LOCAL
        : firebase.auth.Auth.Persistence.SESSION
    }
  },

  methods: {
    ...mapMutations([
      'SHOW_SNACKBAR',
      'HIDE_SNACKBAR'
    ]),
    submit() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.submitting = true
          this.HIDE_SNACKBAR()

          firebase.auth().setPersistence(this.firebasePersistence).then(() => {
            return firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(response => {
              if (this.$route.query.redirect) {
                this.$router.replace({
                  path: this.$route.query.redirect
                })
              } else {
                this.$router.replace({
                  name: 'Home'
                })
              }
            }).catch(error => {
              this.submitting = false
              this.form.password = ''
              this.fields.password.invalid = true
              this.SHOW_SNACKBAR(error.message)
            })
          }).catch(error => {
            this.submitting = false
            this.form.password = ''
            this.fields.password.invalid = true
            this.SHOW_SNACKBAR(error.message)
          })
        }
      })
    }
  },

  mounted() {
    this.$validator.localize('en', this.dictionary)
  }
}
</script>
