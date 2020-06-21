import axios from 'axios'

const apiCLient = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
})

export default {
  getQuestions() {
    return apiCLient.get('/api/questions/')
    // return apiCLient.get('/questions/')
  },

  getCourses() {
    return apiCLient.get('/api/courses/')
  }
}
