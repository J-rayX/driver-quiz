<template>
  <div class="booking">
    <h1>Course Booking View</h1>
    <!-- <span>{{ course }}</span> -->

    <div v-if="courseListStage">
      <h3>Click to select any of the Listed courses one by one</h3>
      <Courses :courses="courses" v-on:course="handleOption" />
    </div>

    <div v-if="personalDetailStage">
      <h3>Form to enter personal details while displaying the chosen course</h3>
    </div>

    <div v-if="confirmationStage">
      <h3>Display editable details filled in previous view for,</h3>
    </div>

    <div v-if="paymentOptionStage">
      <h3>Pay deposit or full</h3>
    </div>

    <div v-if="paymentStage">
      <h3>Enter card details and book</h3>
    </div>
  </div>
</template>

<script>
import Courses from '@/components/Courses.vue'
import QuestionService from '@/services/QuestionService.js'

export default {
  name: 'Booking',
  props: ['courseRecommended'],
  components: {
    Courses
  },
  data() {
    return {
      course: {},
      courses: [],
      courseListStage: false,
      personalDetailStage: false,
      confirmationStage: false,
      paymentOptionStage: false,
      paymentStage: false
    }
  },
  created() {
    QuestionService.getCourses()
      .then(response => {
        this.courses = response.data
        this.courseListStage = true
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  },
  methods: {
    handleOption(e) {
      // this.$emit('option', { option: this.option })
      console.log('collected love and light ', e)
    }
  }
  // mounted() {
  //   if (this.courseRecommended) {
  //     this.course = this.courseRecommended
  //     console.log(this.course)
  //   }
  //}
}
</script>
