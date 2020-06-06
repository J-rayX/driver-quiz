<template>
  <div class="booking">
    <h1>Course Booking View</h1>
    <!-- <span>{{ course }}</span> -->

    <div v-if="courseListStage">
      <h3>Click to select any of the Listed courses one by one</h3>
      <Courses
        v-on:course="handleCourseChosen"
      /><!-- listening to select course chosen by customer then passed & saved into the this.course Object-->
    </div>

    <div v-if="personalDetailStage">
      <h3>Form to enter personal details while displaying the chosen course</h3>
      <PersonalDetailForm v-on:form="handleDetailForm" />
    </div>

    <div v-if="confirmationStage">
      <h3>Check details filled in previous view form</h3>
      <ConfirmDetail
        :personalDetailFormData="personalDetailFormData"
        :courseListStage="false"
        :course="course"
        v-on:goBackToCourseList="confirmCourse"
        v-on:goBackToPersonalDetail="confirmDetail"
        v-on:courseToBePaidFor="handleConfirmedData"
      /><!-- Passed in this.course Object and details inputed by customer in previous stage then wait to recieve any changes made  -->
    </div>

    <div v-if="paymentOptionStage">
      <h3>Pay deposit or full</h3>
      <PaymentOption
        :course="course"
        v-on:depositPayment="handleDepositPayment"
        v-on:fullPayment="handleFullPayment"
      />
      <!-- Still passing in Course object which is the course selected by customer -->
    </div>

    <div v-if="paymentStage">
      <h3>Enter card details and book</h3>
      <PaymentForm
        :finalFee="finalFee"
        :course="course"
        :personalDetailFormData="personalDetailFormData"
      />
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
import PaymentOption from '@/components/PaymentOption.vue'
import PaymentForm from '@/components/PaymentForm.vue'

export default {
  name: 'Booking',
  props: ['courseRecommended'],
  components: {
    Courses,
    PersonalDetailForm,
    ConfirmDetail,
    PaymentOption,
    PaymentForm
  },
  data() {
    return {
      courseListStage: false,
      personalDetailStage: false,
      confirmationStage: false,
      paymentOptionStage: false,
      paymentStage: false,
      course: {}, // variable holding the course chosen by customer
      courses: [], // variable holding the courses dbase fetched by Axios
      personalDetailFormData: {}, // variable holding the Personal Details of customer supplied in the Personal Detail form
      finalFee: 0 // final fee gotten from paymentOption handler methods, be it deposit fee or full fee
    }
  },
  created() {
    this.courseListStage = true
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
    // funtion to recieve the particular course chosen by Customer in CourselistStage
    handleCourseChosen(e) {
      // this.$emit('option', { option: this.option })
      console.log('collected love and light, courseChosen ', e)
      this.course = e
      this.courseListStage = false
      this.personalDetailStage = true
    },

    // function to receive the perosnal detail supplied by the user inside the PersonalDetailStage form
    handleDetailForm(e) {
      // this.$emit('option', { option: this.option })
      console.log('accepting personal detail input ', e)
      this.personalDetailFormData = e
      this.personalDetailStage = false
      this.confirmationStage = true
    },

    // function to recieve fully confirmed data from user
    handleConfirmedData(e) {
      console.log('you have finally made up your mind ', e)
      this.course = e
      console.log(
        'check your personals to be very very very very sure ',
        this.personalDetailFormData
      )
      this.confirmationStage = false
      this.paymentOptionStage = true
    },

    // 2 functions to recieve the user choice of payment option, be it deposit or full payment

    // function 1: receives deposit payment info
    handleDepositPayment(e) {
      console.log('we can only pay deposit first ', e)
      this.deposit = e
      this.finalFee = this.course.deposit
      console.log("so we'll pay ", this.finalFee)
      this.paymentOptionStage = false
      this.paymentStage = true
    },

    // function 1: receives full payment info
    handleFullPayment(e) {
      console.log('we paying full altogether', e)
      this.deposit = e
      this.finalFee = this.course.deposit
      console.log("so we'll pay ", this.finalFee)
      this.paymentOptionStage = false
      this.paymentStage = true
    },

    confirmCourse(e) {
      console.log('request to course change e', e)
      this.courseListStage = e
      if ((this.courseListStage = true)) {
        this.confirmationStage = false
        this.courseListStage = true
        // this.personalDetailStage = false
        //this.confirmationStage = false
        //this.handleForm()
      } else this.confirmationStage = false
    },
    confirmDetail(e) {
      console.log('request to detail change e', e)
      this.personalDetailStage = e
      if ((this.personalDetailStage = true)) {
        //this.confirmationStage = true
        this.confirmationStage = false
        this.personalDetailStage = true

        //this.handleOption()
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
