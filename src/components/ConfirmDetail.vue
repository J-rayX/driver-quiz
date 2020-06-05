<template>
  <div>
    <b-form @submit="onSubmit">
      <div class="card card--form-container">
        <h2>Confirmation</h2>

        <hr />

        <div class="d-block">
          <h3 class="d-inline float-left">Your Details</h3>
          <router-link :to="{ name: 'booking', params: { course } }">
            <a @click="changeDetail" class="link--basic d-inline float-right">Edit</a>
          </router-link>
        </div>

        <div class="form-group mt-30">
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Name</h4>
            <span id="name_summary" class="col-12 col-md-9 col-xl-10">
              {{ personalDetailFormHold.firstName }}
              {{ personalDetailFormHold.lastName }}
            </span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Postcode</h4>
            <span
              id="postcode_summary"
              class="col-12 col-md-9 col-xl-10"
            >{{ personalDetailFormHold.postCode }}</span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Email</h4>
            <span
              id="email_summary"
              class="col-12 col-md-9 col-xl-10"
              style="word-break:break-word"
            >{{ personalDetailFormHold.email }}</span>
          </div>
          <div class="row row--details">
            <h4 class="control-label col-12 col-md-3 col-xl-2">Phone</h4>
            <span
              id="phone_summary"
              class="col-12 col-md-9 col-xl-10"
            >{{ personalDetailFormHold.phone }}</span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Complete By</h4>
            <span
              id="date_summary"
              class="col-12 col-md-9 col-xl-10"
            >{{ personalDetailFormHold.dateToStart }}</span>
          </div>
        </div>
      </div>

      <div class="card card--form-container">
        <div class="d-block card-heading">
          <h3 class="d-inline float-left">
            <span class="heading-word-break">Your Course</span> Breakdown
          </h3>
          <!-- <router-link :to="{ name: 'courses'}"> -->
          <button @click="changeCourse" class="link--basic d-inline float-right">Change</button>
          <!-- </router-link> -->
        </div>

        <div class="row--breakdown first">
          <div class="breakdown-description float-left">{{ course.desc }}</div>
          <div class="breakdown-fee float-right">£{{ course.fee }}</div>

          <div class="alert-spacer"></div>
          <hr />

          <div class="breakdown-description float-left">Transmission:</div>
          <div class="breakdown-value float-right">{{ course.transType }}</div>
        </div>

        <div class="alert-spacer"></div>
        <hr />

        <div class="alert alert-success text-center">
          <span class="prefix">NOTE:</span>
          Only £{{ course.deposit }} deposit required
        </div>

        <div class="col-12 col-md-6 order-first order-md-2">
          <b-button type="submit" class="btn btn--primary float-md-right" value="Next">Next</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    personalDetailFormData: Object,
    course: Object,
    courseListStage: Boolean,
    personalDetailStage: Boolean
  },
  data() {
    return {
      personalDetailFormHold: this.personalDetailFormData,
      courseListStageBoolean: this.courseListStage,
      personalDetailStafeBoolean: this.personalDetailStage
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      JSON.stringify(this.course)
      this.$emit('courseToBePaidFor', this.course)
    },
    changeCourse() {
      this.courseListStageData = true
      this.$emit('goBackToCourseList', this.courseListStageBoolean)
      console.log(this.courseListStageBoolean)
    },
    changeDetail() {
      this.personalDetailFormHold = true
      this.$emit('goBackToPersonalDetail', this.personalDetailStafeBoolean)
      console.log(this.personalDetailStafeBoolean)
    }
  }
}
</script>
