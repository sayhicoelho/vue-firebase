// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import VueOnlinePlugin from 'vue-navigator-online'
import store from './vuex/store'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(VueOnlinePlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
