import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import QuestionService from '@/services/QuestionService.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    courses: []
  },
  actions: {
    loadCourses() {
      axios
        .get('http://localhost:3000/courses')
        .then(response => {
          this.courses = response.data
        })
        .catch(error => {
          console.log('There was an error: ' + error.response)
        })
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
