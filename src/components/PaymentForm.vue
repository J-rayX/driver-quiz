<!-- <template>
  <div>
    <span>£ {{ feeToBePaidFinal }}</span>
    <hr />
    <div>{{ courseToBeTakenFinal }}</div>
    <hr />
    <div>{{ personalDetailOfCustomer }}</div>
  </div>


</template> -->

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Ready to buy?</h1>
        <hr />
        <router-link to="/" class="btn btn-primary">Back Home</router-link>
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-sm-6">
            <div>
              <h4>You are buying:</h4>
              <ul>
                <li>
                  Book Title:
                  <em>{{ courseToBeTakenFinal.desc }}</em>
                </li>
                <li>
                  Amount:
                  <em>$ {{ courseToBeTakenFinal.fee }}</em>
                </li>
              </ul>
            </div>
            <div>
              <h4>Use this info for testing:</h4>
              <ul>
                <li>Card Number: 4242424242424242</li>
                <li>CVC Code: any three digits</li>
                <li>Expiration: any date in the future</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <h3>One time payment</h3>
            <br />
            <form>
              <div class="form-group">
                <label>Credit Card Info</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="XXXXXXXXXXXXXXXX"
                  v-model="card.number"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="CVC"
                  v-model="card.cvc"
                  required
                />
              </div>
              <div class="form-group">
                <label>Card Expiration Date</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="MM/YY"
                  v-model="card.exp"
                  required
                />
              </div>
              <button class="btn btn-primary btn-block" @click.prevent="validate">Submit</button>
            </form>
            <div v-show="errors">
              <br />
              <ol class="text-danger">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      personalDetailOfCustomer: this.personalDetailFormData,
      card: {
        number: '',
        cvc: '',
        exp: ''
      },
      errors: [],
      stripePublishableKey:
        'pk_test_51GrazpAvPywucau1IhcJNBX74gsRIYy5RmthiIxpt1dd8JJ9spvzHglHNS2AFO0f19iffxmxobO17LKmb53J4r5300wP5Of8A1',
      stripeCheck: false
    }
  },
  methods: {
    validate() {
      this.errors = [] //making errors empty everytime the validate button is clicked
      let valid = true

      if (!this.card.number) {
        valid = false
        this.errors.push('Card Number is required')
      }
      if (!this.card.cvc) {
        valid = false
        this.errors.push('CVC is required')
      }
      if (!this.card.exp) {
        valid = false
        this.errors.push('Expiration date is required')
      }
      if (valid) {
        this.createToken()
      }
    },

    createToken() {
      this.stripeCheck = true
      window.Stripe.stripePublishableKey(this.stripePublishableKey)
      window.Stripe.createToken(this.card, (status, response) => {
        if (response.error) {
          this.erros.push(response.error.message)
          console.error(response)
        } else {
          const payload = {
            course: this.courseToBeTakenFinal,
            token: response.id
          }
          const path = 'http://localhost:5000/charge'
          axios
            .post(path, payload)
            .then(() => {
              this.$router.push({ path: '/' })
            })
            .catch(error => {
              console.errorr(error)
            })

          // QuestionService.getCourses()
          //   .then(response => {
          //     this.courses = response.data
          //     this.courseListStage = true
          //   })
          //   .catch(error => {
          //     console.log('There was an error: ' + error.response)
          //   })
        }
      })
    }
  }
}
</script>
