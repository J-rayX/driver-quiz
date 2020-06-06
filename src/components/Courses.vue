<template>
  <b-container>
    <div v-for="(course, index) in courses" :key="index">
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
          <!--  <label class="option" :for="'option' + index"> -->
          <span class="label">{{ course.type }}</span>
          <br />
          <span class="label">{{ course.transType }}</span>
        </b-card-text>

        <b-button href="#" @click="startBooking(index)" variant="primary"
          >Book Now</b-button
        >
        <!-- <a @click="$emit('goToPayment', feeToBePaid)">Pay</a> -->
      </b-card>
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
      course: {}
    }
  },

  created() {
    QuestionService.getCourses()
      .then(response => {
        this.courses = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  },

  methods: {
    startBooking(messageToBeSent) {
      if (messageToBeSent != undefined) {
        this.courseChosen = this.courses[messageToBeSent]
        console.log(this.courseChosen)
        console.log('sending love and light')
        this.$emit('course', this.courseChosen)
      } else {
        this.courseChosen = null
      }
    }
  }
}
</script>
