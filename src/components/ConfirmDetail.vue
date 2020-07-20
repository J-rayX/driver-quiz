<template>
  <div>
    <form @submit="onSubmit">
      <div class="card p-2">
        <h2>Confirmation</h2>
        <hr />
        <div class="">
          <h4 class="float-left">Your Details</h4>

          <router-link :to="{ name: 'booking', params: { course } }">
            <a @click="changeDetail" class="float-right link text-bold">Edit</a>
          </router-link>
        </div>
        <hr />
        <div class="form-group mt-30">
          <div class="row">
            <h5 class="col-6 col-md-3">Name</h5>
            <span class="col-6 col-md-9">
              {{ personalDetailFormHold.firstName }}
              {{ personalDetailFormHold.lastName }}
            </span>
          </div>
          <div class="row ">
            <h5 class="col-6 col-md-3">Postcode</h5>
            <span class="col-6 col-md-9">{{
              personalDetailFormHold.postCode
            }}</span>
          </div>
          <div class="row ">
            <h5 class="col-6 col-md-3 ">Email</h5>
            <span
              id="email_summary"
              class="col-6 col-md-9"
              style="word-break:break-word"
              >{{ personalDetailFormHold.email }}</span
            >
          </div>
          <div class="row ">
            <h5 class="control-label col-6 col-md-3">Phone</h5>
            <span id="phone_summary" class="col-6 col-md-9 ">{{
              personalDetailFormHold.phone
            }}</span>
          </div>
          <div class="row ">
            <h5 class="col-6 col-md-3">Start By</h5>
            <span id="date_summary" class="col-6 col-md-9">{{
              personalDetailFormHold.dateToStart
            }}</span>
          </div>
        </div>
      </div>

      <div class="card mt-4 p-2">
        <div class="d-block card-heading">
          <h3 class="d-inline float-left">
            <span class="heading-word-break">Your Course</span> Breakdown
          </h3>
        </div>
        <hr />

        <div class="row ">
          <div class="col-8 col-md-8 float-left">{{ course.desc }}</div>
          <div class="col-4 col-md-4 float-right">£{{ course.fee }}</div>

          <div class="alert-spacer"></div>
          <hr />

          <div class="col-8 col-md-8 float-left">Transmission:</div>
          <div class="col-4 col-md-4 float-right">{{ course.transType }}</div>
        </div>

        <div class="alert-spacer"></div>
        <hr />

        <div class="alert alert-success text-center">
          <span class="prefix">NOTE:</span>
          Only £ {{ course.deposit }} deposit is required
        </div>

        <div class="">
          <!-- <router-link :to="{ name: 'courses'}"> -->
          <button
            @click="changeCourse"
            class="btn btn-secondary float-left p-3"
          >
            Change Course
          </button>
          <!-- </router-link> -->

          <button
            type="submit"
            @click="onSubmit"
            class=" btn btn-primary float-right"
            value="Next"
          >
            Next
          </button>
        </div>
      </div>
    </form>
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
      //  console.log(this.courseListStageBoolean)
    },
    changeDetail() {
      this.personalDetailFormHold = true
      this.$emit('goBackToPersonalDetail', this.personalDetailStafeBoolean)
      //  console.log(this.personalDetailStafeBoolean)
    }
  }
}
</script>

<style scoped>
button {
  /* background-color: #123067; */
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

button:hover {
  /* background-color: #0a3592; */
}
button:active {
  /* background-color: #0a3592; */
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
hr {
  border: 0.5px solid rgb(233, 233, 233);
  width: 90%;
  border-radius: 5px;
}
</style>
