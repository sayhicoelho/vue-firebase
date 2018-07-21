<template>
  <v-form @submit.prevent="submit()">
    <v-text-field
      type="email"
      name="email"
      data-vv-delay="300"
      label="Email"
      v-model="form.email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      solo
      :disabled="submitting"/>

    <v-btn
      type="submit"
      color="primary"
      block
      large
      class="mb-3"
      @click="submit()"
      :disabled="!isFormValid || submitting">SEND PASSWORD RESET LINK</v-btn>
    <v-btn
      block
      large
      :to="{ name: 'Login' }"
      :disabled="submitting">BACK</v-btn>
  </v-form>
</template>

<script>
import firebase from '@/config/firebase'
import { mapMutations } from 'vuex'

export default {
  name: 'password-recovery',
  data () {
    return {
      submitting: false,
      dictionary: {
        attributes: {
          email: 'e-mail address'
        }
      },
      form: {
        email: ''
      }
    }
  },

  computed: {
    isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid)
    }
  },

  methods: {
    ...mapMutations([
      'HIDE_SNACKBAR',
      'SHOW_SNACKBAR'
    ]),
    submit () {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.submitting = true
          this.HIDE_SNACKBAR()

          firebase.auth().sendPasswordResetEmail(this.form.email).then(response => {
            this.submitting = false
            this.form.email = ''
            this.fields.email.invalid = true
            this.SHOW_SNACKBAR('Password reset email sent.')
          }).catch(error => {
            this.submitting = false
            this.SHOW_SNACKBAR(error.message)
          })
        }
      })
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  }
}
</script>
