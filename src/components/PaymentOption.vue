<template>
  <div>
    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">£ {{ course.deposit }}</h5>
          <p class="card-text text-left">You can pay in deposit</p>
          <b-button
            type="submit"
            @click="onClickDeposit"
            class="btn btn--primary float-md-right"
            value="Deposit"
            >Pay Deposit</b-button
          >
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">£ {{ course.fee }}</h5>
          <p class="card-text text-left">You can make full payment</p>
          <b-button
            type="submit"
            @click="onClickFull"
            class="btn btn--primary float-md-right"
            value="Full"
            >Pay Full</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  },
  data() {
    return {
      courseChosen: this.course,
      deposit: Boolean
    }
  },
  methods: {
    onClickDeposit(evt) {
      evt.preventDefault()
      //  JSON.stringify(this.course)
      this.deposit = true
      this.$emit('depositPayment', this.deposit)
    },
    onClickFull(evt) {
      evt.preventDefault()
      //  JSON.stringify(this.course)
      this.deposit = false
      this.$emit('fullPayment', this.deposit)
    }
  }
}
</script>
