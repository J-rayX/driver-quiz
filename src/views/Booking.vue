<template>
  <div>
    <div class="m-0 ">
      <div v-if="courseListStage">
        <!-- Section-1 BANNER -->
        <section class="section-1 m-0">
          <div class="container ">
            <div class="row d-flex">
              <div
                class="col-12 col-md-6 text-left justify-content-center align-self-center"
              >
                <div class>
                  <h1 class="display-5 text-white mt-0">
                    Here are our range of courses
                  </h1>
                  <p class="text-white text-left">
                    7Days Driving School makes it easy and possible to learn how
                    to drive and pass your driving test in 7 days
                  </p>
                  <router-link :to="{ name: 'booking' }">
                    <button
                      class="text-left btn btn-light px-5 py-2 primary-btn"
                    >
                      Start Now
                    </button>
                  </router-link>
                </div>
              </div>
              <div class="col-12 col-md-6 pt-0"></div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row ">
            <Courses v-on:course="handleCourseChosen"></Courses>
          </div>
        </div>

        <!-- listening to select course chosen by customer then passed & saved into the this.course Object-->
      </div>

      <div v-if="personalDetailStage">
        <div class="section-1 m-0">
          <div class="container ">
            <div class="row d-flex">
              <div
                class="col-12 col-md-6 text-left justify-content-center align-self-center"
              >
                <div class>
                  <h2 class="display-5 text-white mt-0">
                    Let's get to know you
                  </h2>
                  <p class="text-white text-left">
                    Kindly enter your personal details. We promise to never
                    share the info you are trusting us with.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 pt-0"></div>
            </div>
          </div>
        </div>

        <div>
          <div class="container">
            <div class="row pt-5 pb-5">
              <div class="col col-md-6 col-12  offset-md-3">
                <PersonalDetailForm v-on:form="handleDetailForm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="confirmationStage">
        <div class="section-1 m-0">
          <div class="container ">
            <div class="row d-flex">
              <div
                class="col-12 col-md-6 text-left justify-content-center align-self-center"
              >
                <div class>
                  <h2 class="display-5 text-white mt-0">
                    Just a minute!
                  </h2>
                  <p class="text-white text-left">
                    Kindly check the details filled in previous view form
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 pt-0"></div>
            </div>
          </div>
        </div>

        <div>
          <div class="container">
            <div class="row pt-5 pb-5">
              <div class="col col-md-6 col-12  offset-md-3">
                <ConfirmDetail
                  :personalDetailFormData="personalDetailFormData"
                  :courseListStage="false"
                  :course="course"
                  v-on:goBackToCourseList="confirmCourse"
                  v-on:goBackToPersonalDetail="confirmDetail"
                  v-on:courseToBePaidFor="handleConfirmedData"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Passed in this.course Object and details inputed by customer in previous stage then wait to recieve any changes made  -->
      </div>

      <div v-if="paymentOptionStage">
        <div class="section-1 m-0">
          <div class="container ">
            <div class="row d-flex">
              <div
                class="col-12 col-md-6 text-left justify-content-center align-self-center"
              >
                <div class>
                  <h2 class="display-5 text-white mt-0">
                    Select how you want to pay
                  </h2>
                  <p class="text-white text-left">
                    We have two payment options. You can either pay a deposit of
                    the course fee or pay in full
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 pt-0"></div>
            </div>
          </div>
      </div>
        <div>
          <div class="container">
            <div class="row pt-5 pb-5">
              <div class="col col-md-6 col-12  offset-md-3">
                <PaymentOption
                  :course="course"
                  v-on:depositPayment="handleDepositPayment"
                  v-on:fullPayment="handleFullPayment"
                />
              </div>
            </div>
          </div>
        </div>
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
      finalFee: Float32Array, // final fee gotten from paymentOption handler methods, be it deposit fee or full fee
      holdCourseRecommended: this.courseRecommended
    }
  },
  created() {
    // check if this.courseCourseRecommended is filled
    if (this.holdCourseRecommended != null) {
      //  console.log('to confirm course', this.holdCourseRecommended)
      this.personalDetailStage = true
      //  console.log('personal detail stage', this.personalDetailStage)
      // let this.course = holdCourseRecommended
      this.course = this.holdCourseRecommended
      //  console.log('course chosen', this.course)
      // if filled, let courseListStage= false
      // this.courseListStage = false
      // let personal detial stage = true
    }
    // else this.courseListStage =
    else {
      this.courseListStage = true
      //  console.log('course list stage', this.courseListStage)
      //this.courseListStage = true
      QuestionService.getCourses()
        .then(response => {
          this.courses = response.data
          this.courseListStage = true
        })
        .catch(error => {
          //      console.log('There was an error: ' + error.response)
        })
    }
  },
  //  mounted() {
  //     // check if this.courseCourseRecommended is filled
  //     if (this.holdCourseRecommended) {
  //       // let this.course = holdCourseRecommended
  //       this.course = this.holdCourseRecommended
  //       // if filled, let courseListStage= false
  //       this.courseListStage = false
  //       // let personal detial stage = true
  //       this.personalDetailStage = true
  //     }
  //     // else this.courseListStage =
  //     else {
  //       this.courseListStage = true
  //     }
  //   },
  methods: {
    // funtion to recieve the particular course chosen by Customer in CourselistStage
    handleCourseChosen(e) {
      // this.$emit('option', { option: this.option })
      //  console.log('collected love and light, courseChosen ', e)
      this.course = e
      this.courseListStage = false
      this.personalDetailStage = true
    },

    // function to receive the perosnal detail supplied by the user inside the PersonalDetailStage form
    handleDetailForm(e) {
      // this.$emit('option', { option: this.option })
      //  console.log('accepting personal detail input ', e)
      this.personalDetailFormData = e
      this.personalDetailStage = false
      this.confirmationStage = true
    },

    // function to recieve fully confirmed data from user
    handleConfirmedData(e) {
      //  console.log('you have finally made up your mind ', e)
      this.course = e
      // console.log(
      //   'check your personals to be very very very very sure ',
      //   this.personalDetailFormData
      // )
      this.confirmationStage = false
      this.paymentOptionStage = true
    },

    // 2 functions to recieve the user choice of payment option, be it deposit or full payment

    // function 1: receives deposit payment info
    handleDepositPayment(e) {
      //  console.log('we can only pay deposit first ', e)
      this.deposit = e
      this.finalFee = this.course.deposit
      //  console.log("so we'll pay ", this.finalFee)
      this.course.fee = this.finalFee
      //  console.log(this.course.fee)
      this.paymentOptionStage = false
      this.paymentStage = true
    },

    // function 1: receives full payment info
    handleFullPayment(e) {
      //  console.log('we paying full altogether', e)
      this.deposit = e
      // check here check here check here check here check here
      this.finalFee = this.course.fee
      //  console.log("so we'll pay ", this.finalFee)
      this.course.fee = this.finalFee
      //  console.log(this.course.fee)
      this.paymentOptionStage = false
      this.paymentStage = true
    },

    confirmCourse(e) {
      //  console.log('request to course change e', e)
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
      //  console.log('request to detail change e', e)
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

<style scoped>
.section-1 {
  padding-top: 4em;
  padding-bottom: 4em;
  background-color: #123067;
  font-family: “Cantarell”;
}

button {
  background-color: #123067;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgb(215, 232, 253) 0px 4px 10px 1px;
}

button:hover {
  background-color: #0a3592;
}
button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
</style>
