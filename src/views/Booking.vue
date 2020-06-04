<template>
  <div class="booking">
    <h1>Course Booking View</h1>
    <!-- <span>{{ course }}</span> -->

    <!-- <div v-if="courseListStage">
      <h3>Click to select any of the Listed courses one by one</h3>
      <Courses v-on:course="handleOption" />
    </div>

    <div v-if="personalDetailStage">
      <h3>Form to enter personal details while displaying the chosen course</h3>
      <PersonalDetailForm v-on:form="handleForm" />
    </div>

    <div v-if="confirmationStage">
      <h3>Check details filled in previous view form</h3>
      <ConfirmDetail
        :personalDetailFormData="personalDetailFormData"
        :courseListStage="false"
        :course="course"
        v-on:goBackToCourseList="confirmForm"
      />
    </div>-->

    <div v-if="paymentOptionStage">
      <h3>Pay deposit or full</h3>
    </div>

    <div v-if="paymentStage">
      <h3>Enter card details and book</h3>
    </div>
  </div>
</template>

<script>
import QuestionService from '@/services/QuestionService.js'
// import Courses from '@/views/booking/Courses.vue'
// import PersonalDetailForm from '@/views/booking/PersonalDetailForm.vue'
// import ConfirmDetail from '@/views/booking/ConfirmDetail.vue'

import Courses from '@/components/Courses.vue'
import PersonalDetailForm from '@/components/PersonalDetailForm.vue'
import ConfirmDetail from '@/components/ConfirmDetail.vue'

export default {
  name: 'Booking',
  props: ['courseRecommended'],
  components: {
    // Courses,
    // PersonalDetailForm,
    // ConfirmDetail
  },
  data() {
    return {
      courseListStage: false,
      personalDetailStage: false,
      confirmationStage: false,
      paymentOptionStage: false,
      paymentStage: false,
      course: {},
      courses: [],
      personalDetailFormData: {}
    }
  },
  created() {
    this.courseListStage = true
    // QuestionService.getCourses()
    //   .then(response => {
    //     this.courses = response.data
    //     this.courseListStage = true
    //   })
    //   .catch(error => {
    //     console.log('There was an error: ' + error.response)
    //   })
  },
  methods: {
    handleOption(e) {
      // this.$emit('option', { option: this.option })
      console.log('collected love and light ', e)
      this.course = e
      this.courseListStage = false
      this.personalDetailStage = true
    },
    handleForm(e) {
      // this.$emit('option', { option: this.option })
      console.log('accepting form entry ', e)
      this.personalDetailFormData = e
      this.personalDetailStage = false
      this.confirmationStage = true
    },
    confirmForm() {
      console.log('received e', e)
      this.courseListStage = e
      if (this.courseListStage) {
        this.courseListStage = true
        handleForm()
      } else this.confirmationStage = false
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
