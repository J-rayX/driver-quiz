<template>
  <div>
    <div class=" row card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">£ {{ course.deposit }}</h5>
          <p class="card-text text-left">You can make a deposit now</p>
          <button
            type="submit"
            @click="onClickDeposit"
            class="btn btn-primary float-md-left"
            value="Deposit"
            >Pay Deposit</button
          >
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">£ {{ course.fee }}</h5>
          <p class="card-text text-left">You can make full payment</p>
          <button
            type="submit"
            @click="onClickFull"
            class="btn btn-primary float-md-left"
            value="Full"
            >Pay Full</button
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

<style scoped>
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
}

button:hover {
  background-color: #0a3592;
}
button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
hr {
  border: 0.5px solid rgb(233, 233, 233);
  width: 90%;
  border-radius: 5px;
}
</style>