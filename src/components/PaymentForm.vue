<template>
  <div>
    <span>£ {{ feeToBePaidFinal }}</span>
    <hr />
    <div>{{ courseToBeTakenFinal }}</div>
    <hr />
    <div>{{ personalDetailOfCustomer }}</div>
  </div>
</template>

<script>
export default {
  props: {
    finalFee: Number,
    course: Object,
    personalDetailFormData: Object
  },
  data() {
    return {
      feeToBePaidFinal: this.finalFee,
      courseToBeTakenFinal: this.course,
      personalDetailOfCustomer: this.personalDetailFormData
    }
  },
  methods: {}
}
</script>
