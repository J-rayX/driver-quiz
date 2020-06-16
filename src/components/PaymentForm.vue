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
      <div class="col-sm-12">
        <h1>Ready to buy?</h1>
        <hr />
        <router-link to="/" class="btn btn-primary">Back Home</router-link>
        <br />
      </div>
    </div>

    <!-- <div class="col-sm-6">
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
    </div>-->

    <div class="row">
      <form id="payment-form" class="w-75 px-5 d-flex flex-column align-items-center">
        <div ref="card" class="form-control m-2">
          <!-- A Stripe Element will be inserted here. -->
        </div>
        <input
          :disabled="lockSubmit"
          class="btn btn-primary shadow-sm"
          type="submit"
          value="Pay"
          v-on:click.prevent="makePayment"
        />
      </form>
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
      stripePublishableKey:
        'pk_test_51GrazpAvPywucau1IhcJNBX74gsRIYy5RmthiIxpt1dd8JJ9spvzHglHNS2AFO0f19iffxmxobO17LKmb53J4r5300wP5Of8A1',
      feeToBePaidFinal: this.finalFee,
      courseToBeTakenFinal: this.course,
      personalDetailOfCustomer: this.personalDetailFormData,

      stripe: undefined,
      card: undefined,
      payAmount: this.feeToBePaidFinal,
      lockSubmit: false,
      api: 'http://localhost:8000/api/'
      //errors: []
    }
  },
  mounted() {
    var self = this
    self.stripe = Stripe(self.stripePublishableKey)
    self.card = self.stripe.elements().create('card')
    self.card.mount(self.$refs.card)
  },
  methods: {
    makePayment() {
      var self = this
      self.lockSubmit = true

      self.stripe
        .createToken(self.cardNumber)
        .then(function(result) {
          if (result.error) {
            alert(result.error.message)
            self.$forceUpdate() // Forcing the DOM to update so the Stripe Element can update
            self.lockSubmit = false
            return
          } else {
            self.processTransaction(result.token.id)
          }
        })
        .catch(err => {
          alert('error: ' + err.message)
          self.lockSubmit = false
        })
    },

    processTransaction(transactionToken) {
      var self = this
      dt = {
        //payAmount: self.payAmount,
        amount: self.stripCurrency(self.payAmount), //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'GBP',
        description: this.courseToBeTakenFinal.desc,
        token: transactionToken
      }
      var route = self.api + '/charge/'
      self.$http
        .post(route, dt, {
          headers: {}
        })
        .then(response => {
          if (response.status == 200) {
            alert('Transaction succeeded')
            self.lockSubmit = false
          } else {
            throw new Error('Failed payment')
          }
        })
        .catch(err => {
          alert('error: ' + err.message)
          self.lockSubmit = false
        })
    },
    stripCurrency(val) {
      return val.replace(',', '').replace('.', '')
    }
  }

  // createToken() {
  //   this.lockSubmit = true
  //   window.Stripe.stripePublishableKey(this.stripePublishableKey)
  //   window.Stripe.createToken(this.card, (status, response) => {
  //     if (response.error) {
  //       this.erros.push(response.error.message)
  //       console.error(response)
  //     } else {
  //       const payload = {
  //         course: this.courseToBeTakenFinal,
  //         token: response.id
  //       }
  //       const path = 'http://localhost:5000/charge'
  //       axios
  //         .post(path, payload)
  //         .then(() => {
  //           this.$router.push({ path: '/' })
  //         })
  //         .catch(error => {
  //           console.errorr(error)
  //         })

  //       // QuestionService.getCourses()
  //       //   .then(response => {
  //       //     this.courses = response.data
  //       //     this.courseListStage = true
  //       //   })
  //       //   .catch(error => {
  //       //     console.log('There was an error: ' + error.response)
  //       //   })
  //     }
  //   })
  // }
}
</script>
