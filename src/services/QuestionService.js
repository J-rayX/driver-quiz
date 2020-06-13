import axios from 'axios'

const apiCLient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'aplication/json',
    'Content-Type': 'application/json'
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
})

export default {
  getQuestions() {
    return apiCLient.get('/questions')
  },
  getCourses() {
    return apiCLient.get('/courses')
  }
}
