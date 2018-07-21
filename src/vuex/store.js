import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from '../config/firebase'

Vue.use(Vuex)

const state = {
  firstLoad: true,
  routing: false
}

const getters = { }

const mutations = {
  SET_FIRST_LOAD(state) {
    state.firstLoad = false
  },
  SET_ROUTING(state, payload) {
    state.routing = payload
  }
}

const actions = {
  FIRST_LOAD({ commit }) {
    commit('SET_FIRST_LOAD')
  },
  ROUTE_PENDING({ commit }) {
    commit('SET_ROUTING', true)
  },
  ROUTE_COMPLETE({ commit }) {
    commit('SET_ROUTING', false)
  },
  FETCH_AUTH({ state, dispatch }) {
    return new Promise(resolve => {
      if (state.firstLoad) {
        firebase.auth().onAuthStateChanged(user => {
          if (state.routing) {
            resolve(user)
          } else if (!state.routing && !user) {
            router.replace({
              name: 'Login',
              query: {
                redirect: window.location.hash.substr(1)
              }
            })
          }
        })

        dispatch('FIRST_LOAD')
      } else {
        resolve(firebase.auth().currentUser)
      }
    })
  }
}

export default new Vuex.Store({ state, getters, mutations, actions })
