/* eslint-disable prettier/prettier */
<template>
  <b-container>
    <div class="container">
      <div class="row">
        <div v-for="(course, index) in courses" :key="index">
          <div class="card col-md-4 col-12" style="width: 18rem;">
            <img
              class="card-img-top"
              src="https://picsum.photos/600/300/?image=25"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ course.desc }}</h5>
              <p class="card-text">{{ course.courseType }}</p>
              <span class="label">{{ course.transType }}</span>
              <a
                href="#"
                class="btn btn-primary"
                @click="startBooking(index)"
                variant="primary"
                >Book Now</a
              >
            </div>
          </div>
        </div>
        <!-- <a @click="$emit('goToPayment', feeToBePaid)">Pay</a> -->
        <!-- </div>
    <div v-for="(course, index) in courses[1].options" :key="'A' + index">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-title>{{ course.desc }}</b-card-title>
        <b-card-text>
        
          <span class="label">{{ course.type }}</span>
          <br />
          <span class="label">{{ course.transType }}</span>
        </b-card-text>

        <b-button href="#" variant="primary">Book Now</b-button>
        </b-card>-->
      </div>
    </div>
  </b-container>
</template>

<script>
import QuestionService from '@/services/QuestionService.js'

export default {
  props: {
    // courses: Array
  },
  data() {
    return {
      courseChosen: {},
      courses: [],
      course: {},
      dt: {
        amount: 1099, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'ppt',
        description: 'delamo'
      }
    }
  },

  created() {
    QuestionService.getCourses()
      .then(response => {
        // console.log(response.data)
        this.courses = response.data

        // console.log(this.courses)
      })
      .catch(error => {
        // console.log('There was an error: ' + error.response)
      })
  },

  methods: {
    startBooking(messageToBeSent) {
      // this.course = this.courses[messageToBeSent]
      // console.log('na the payload be this so ', this.course)

      if (messageToBeSent != undefined) {
        this.courseChosen = this.courses[messageToBeSent]

        // console.log(this.courseChosen)
        // console.log('sending love and light')
        this.$emit('course', this.courseChosen)
      } else {
        this.courseChosen = null
      }
    }
  }
}
</script>
