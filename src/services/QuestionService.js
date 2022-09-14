import axios from 'axios'

const apiCLient = axios.create({
  baseURL: 'https://drivng-backend.herokuapp.com/',
  // baseURL: 'http://127.0.0.1:8000',
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
    return apiCLient.get('/api/v1/questions/')
    // return apiCLient.get('/questions/')
  },

  getCourses() {
    return apiCLient.get('/api/v1/courses/')
  },

  postPayment() {
    return apiCLient.post('/api/v1/create-intent/', payload)
  }
}
