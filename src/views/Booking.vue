<template>
  <div class="booking">
    <h1>Course Booking View</h1>
    <!-- <span>{{ course }}</span> -->

    <div v-if="courseListStage">
      <h3>Click to select any of the Listed courses one by one</h3>
      <b-container>
        <div
          v-for="(course, index) in courses[0].options"
          :key="index"
          @click="selectAnswer(index)"
        >
          <b-row>
            <b-col lg="4">
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
                  <span class="label">{{ course.type }}</span> <br />
                  <span class="label">{{ course.transType }}</span>
                </b-card-text>

                <b-button href="#" variant="primary">Book Now</b-button>
              </b-card>
            </b-col>
          </b-row>
        </div>

        <div
          v-for="(course, index) in courses[1].options"
          :key="index"
          @click="selectAnswer(index)"
        >
          <b-row>
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
                <span class="label">{{ course.type }}</span> <br />
                <span class="label">{{ course.transType }}</span>
              </b-card-text>

              <b-button href="#" variant="primary">Book Now</b-button>
            </b-card>
          </b-row>
        </div>

        <div
          v-for="(course, index) in courses[2].options"
          :key="index"
          @click="selectAnswer(index)"
        >
          <b-row>
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
                <span class="label">{{ course.type }}</span> <br />
                <span class="label">{{ course.transType }}</span>
              </b-card-text>

              <b-button href="#" variant="primary">Book Now</b-button>
            </b-card>
          </b-row>
        </div>
      </b-container>
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
import QuestionService from '@/services/QuestionService.js'

export default {
  name: 'Booking',
  props: ['courseRecommended'],
  data() {
    return {
      course: {},
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
        console.log('courses table goten from dbase')
        this.courseListStage = true
        console.log('aktivating template')
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  }
  // mounted() {
  //   if (this.courseRecommended) {
  //     this.course = this.courseRecommended
  //     console.log(this.course)
  //   }
  //}
}
</script>
