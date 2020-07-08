<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Ready to Pay?</h1>

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
        <div id="card-element" ref="card" class="form-control m-2">
          <!-- A Stripe Element will be inserted here. -->
        </div>
        <!-- We'll put the error messages in this element -->
        <div id="card-errors" role="alert"></div>
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
import QuestionService from '@/services/QuestionService.js'
import axios from 'axios'

export default {
  name: 'PaymentForm',
  props: {
    finalFee: Float32Array,
    course: Object,
    personalDetailFormData: Object
  },

  data() {
    return {
      lockSubmit: false,

      stripePublishableKey:
        'pk_test_51GrazpAvPywucau1IhcJNBX74gsRIYy5RmthiIxpt1dd8JJ9spvzHglHNS2AFO0f19iffxmxobO17LKmb53J4r5300wP5Of8A1',
      amount: this.finalFee,

      payload: {
        amount: 1099, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'gbp',
        description: '10HR Beginners'
      },

      stripe: undefined,
      elements: undefined,
      card: undefined,
      result: undefined

      //api: 'http://localhost:8000/api/v1'
      //errors: []
    }
  },

  mounted() {
    this.stripe = Stripe(
      'pk_test_51GrazpAvPywucau1IhcJNBX74gsRIYy5RmthiIxpt1dd8JJ9spvzHglHNS2AFO0f19iffxmxobO17LKmb53J4r5300wP5Of8A1'
    )
    this.elements = this.stripe.elements()
    this.card = this.stripe.elements().create('card')
    this.card.mount(this.$refs.card)
    this.lockSubmit = false
    console.log(this.lockSubmit)
    console.log(this.finalFee)
    console.log(this.personalDetailFormData)
  },

  methods: {
    onSubmit() {
      // const dt = {
      //   amount: this.payload.amount, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
      //   currency: this.payload.currency,
      //   description: this.payload.description
      // }
      // this.makePayment(dt)
    },
    makePayment() {
      this.lockSubmit = true
      // this.result = this.stripe.confirmCardPayment('clientSecret', {
      //   payment_method: {
      //     card: this.card,
      //     billing_details: {
      //       name:
      //         this.personalDetailFormData.firstName +
      //         this.personalDetailFormData.lastName
      //     }
      //   }
      // })
      // console.log('na the amount be this so ' + this.payload.amount)

      //console.log('na the amount be this so ' + dt.currency)
      console.log('na the payload be this so ', this.payload)

      // console.log('na the dt be this oo ' + this.dt)
      let path = 'http://localhost:8000/api/v1/create-intent/'
      //console.log('na the payload be this so ' + this.payload)

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'JWT fefege...'
      }

      axios
        .post(path, this.payload, { headers: headers })
        .then(console.log('the payload returned is ', this.payload))
        .catch(error => {
          //console.log('payload contains' + this.payload)
          alert('transaction error: ' + error.message)
          this.lockSubmit = false
        })

      // axios
      //   .post(path, this.payload)
      //   .catch(err => {
      //     //console.log('payload contains' + this.payload)
      //     alert('transaction error: ' + err.message)
      //     this.lockSubmit = false
      //   })
      //   .finally(console.log('the payload returned is ' + amount))

      // axios
      //   .post(path, dt)
      //   .then(response => {
      //     console.log('the payment Intent returned is ' + response.data)
      //     if (response.status == 200) {
      //       alert('Transaction succeeded')
      //       this.lockSubmit = false
      //     } else {
      //       throw new Error('Failed payment')
      //     }
      //   })
      //   .catch(err => {
      //     //console.log('payload contains' + this.payload)
      //     alert('transaction error: ' + err.message)
      //     this.lockSubmit = false
      //   })

      // this.stripe
      //   .createToken(this.card)
      //   .then(function(result) {
      //     if (result.error) {
      //       alert('token error is' + result.error.message)
      //       this.$forceUpdate() // Forcing the DOM to update so the Stripe Element can update
      //       this.lockSubmit = false
      //       return
      //     } else {
      //       //processTransaction(result.token.id)
      //     }
      //   })
      //   .catch(err => {
      //     alert('outer error: ' + err.message)
      //     this.lockSubmit = false
      //   })
    },
    stripCurrency(val) {
      return val.replace(',', '').replace('.', '')
    }

    // processTransaction(transactionToken) {
    //    this.payload = {
    //           //payAmount: self.payAmount,
    //           amount: 123.0, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
    //           currency: 'GBP',
    //           description: '10HR Beginners',
    //           token: transactionToken
    //           // token: result.id
    //         }

    //         var path = 'http://localhost:8000/api/v1/create-intent/'
    //         axios
    //           .post(path, payload)
    //           .then(response => {
    //             if (response.status == 200) {
    //               alert('Transaction succeeded')
    //               this.lockSubmit = false
    //             } else {
    //               throw new Error('Failed payment')
    //             }
    //           })
    //           .catch(err => {
    //             console.log('payload contains' + this.payload)
    //             alert('transaction error: ' + err.message)
    //             this.lockSubmit = false
    //           })
    // }
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

  //
  // }
}
</script>
