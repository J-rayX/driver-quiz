<template>
  <div>
    <b-form @submit="onSubmit">
      <div class="card card--form-container">
        <h2>Confirmation</h2>

        <hr />

        <div class="d-block">
          <h3 class="d-inline float-left">Your Details</h3>
          <router-link :to="{ name: 'booking', params: { course } }">
            <a href="//book/step2" class="link--basic d-inline float-right"
              >Edit</a
            >
          </router-link>
        </div>

        <div class="form-group mt-30">
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Name</h4>
            <span id="name_summary" class="col-12 col-md-9 col-xl-10">
              {{ personalDetailFormData.firstName }}
              {{ personalDetailFormData.lastName }}
            </span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Postcode</h4>
            <span id="postcode_summary" class="col-12 col-md-9 col-xl-10">{{
              personalDetailFormData.postCode
            }}</span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Email</h4>
            <span
              id="email_summary"
              class="col-12 col-md-9 col-xl-10"
              style="word-break:break-word"
              >{{ personalDetailFormData.email }}</span
            >
          </div>
          <div class="row row--details">
            <h4 class="control-label col-12 col-md-3 col-xl-2">Phone</h4>
            <span id="phone_summary" class="col-12 col-md-9 col-xl-10">{{
              personalDetailFormData.phone
            }}</span>
          </div>
          <div class="row row--details">
            <h4 class="col-12 col-md-3 col-xl-2">Complete By</h4>
            <span id="date_summary" class="col-12 col-md-9 col-xl-10">{{
              personalDetailFormData.dateToStart
            }}</span>
          </div>
        </div>
      </div>

      <div class="card card--form-container">
        <div class="d-block card-heading">
          <h3 class="d-inline float-left">
            <span class="heading-word-break">Your Course</span> Breakdown
          </h3>
          <router-link :to="{ name: 'courses' }">
            <a @click="changeCourse" class="link--basic d-inline float-right"
              >Change</a
            >
          </router-link>
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
          <b-button
            type="submit"
            class="btn btn--primary float-md-right"
            value="Next"
            >Next</b-button
          >
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
    courseListStage: Boolean
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      JSON.stringify(this.course)
      this.$emit('courseToBePaidFor', this.course)
    },
    changeCourse() {
      this.courseListStage = truethis.emit(
        'goBackToCourseList',
        this.courseListStage
      )
    }
  }
}
</script>
