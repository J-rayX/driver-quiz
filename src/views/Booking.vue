<template>
  <div class="booking">
    <h1>Course Booking View</h1>
    <span>{{ welcome }}</span>
  </div>
</template>

<script>
export default {
  courseListStage: false,
  personalDetailStage: false,
  confirmationStage: false,
  paymentOptionStage: false,
  paymentStage: false,


  name: 'Booking',
  props: ['courseRecommended'],
  data() {
    return {
      welcome: 'This is the Booking page'
    }
  },
  mounted() {
    if (this.courseRecommended) {
      this.welcome = this.courseRecommended
    }
  }
}
</script>