<template>
  <div class="form-stage">
    <div class="row">
      <div class="col-md-12 col-12 course-details">
        <h5>Book the {{ course.desc }}</h5>
        <p>£{{ finalFee }}</p>
      </div>
    </div>

    <div class="row">
      <div class=" col-12 col-md-12 course-details ">
        <form id="payment-form" class=" col-md-12 col-12 align-items-center">
          <div id="card-element" ref="card" class="form-control">
            <!-- A Stripe Element will be inserted here. -->
          </div>
          <!-- We'll put the error messages in this element -->
          <div id="card-errors" role="alert"></div>
          <div class="row">
            <input
              :disabled="lockSubmit"
              class="button btn btn-primary text-center shadow-sm col-md-8 offset-md-2 col-4 mt-2"
              type="submit"
              value="Pay"
              v-on:click.prevent="makePayment"
            />
          </div>
        </form>
      </div>
    </div>
    <!-- <div v-show="isModalVisible">
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Thanks for booking with us!</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <router-link :to="{ name: 'home' }">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      </div>-->
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
        amount: this.finalFee, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'gbp',
        description: this.course.desc,
        receipt_email: this.personalDetailFormData.email
        // course: this.course // new
      },

      stripe: undefined,
      elements: undefined,
      card: undefined,
      result: undefined,
      paymentComplete: false,
      customer: {},
      isModalVisible: false

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
    // console.log(this.lockSubmit)
    // console.log(this.finalFee)
    // console.log(this.personalDetailFormData)
  },

  methods: {
    onSubmit() {},
    showModal() {
      this.isModalVisible = true
    },
    makePayment() {
      this.lockSubmit = true

      this.payload = {
        amount: this.stripCurrency(this.finalFee), //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'gbp',
        description: this.course.desc,
        receipt_email: this.personalDetailFormData.email
        // course: this.course // new
      }
      // console.log('na the payload be this so ', this.payload)

      // console.log('na the dt be this oo ' + this.dt)

      let path =
        'https://blooming-atoll-85720.herokuapp.com/api/v1/create-intent'
      //  let path = 'http://localhost:8000/api/v1/create-intent/'
      //console.log('na the payload be this so ' + this.payload)

      const headers = {
        'Content-Type': 'application/json'
        //Authorization: 'JWT things...'
      }

      axios
        .post(path, this.payload, { headers: headers })
        .then(response => {
          if (response.status == 200) {
            this.lockSubmit = false
            alert('Transaction succeeded')
            const clientSecret = response.data.clientSecret
            // console.log('take the secret', clientSecret)
            const stripeKeyFromBackend = response.data.publishableKey
            // console.log('the key from backend na', stripeKeyFromBackend)

            this.stripe
              .confirmCardPayment(clientSecret, {
                payment_method: {
                  card: this.card,
                  //console.log('card details', card)
                  billing_details: {
                    name:
                      this.personalDetailFormData.firstName +
                      this.personalDetailFormData.lastName,
                    email: this.personalDetailFormData.email
                    //phone: this.personalDetailFormData.phone
                  }
                }
              })
              .then(result => {
                if (result.error) {
                  // Show error to customer (e.g., insufficient funds)
                  alert(result.error.message)
                } else {
                  // The payment has been processed!
                  // if (result.paymentIntent.status === "succeeded") {

                  this.customer = {
                    firstName: this.personalDetailFormData.firstName,
                    lastName: this.personalDetailFormData.lastName,
                    email: this.personalDetailFormData.email,
                    phone: this.personalDetailFormData.phone,
                    startDate: this.personalDetailFormData.dateToStart,
                    postCode: this.personalDetailFormData.postCode,
                    courseChosen: this.course.desc
                  }
                  //console.log('customer to add', this.customer)
                  axios
                    .post(
                      ' https://blooming-atoll-85720.herokuapp.com/api/v1/customers/',
                      this.customer
                    )
                    .then(response => {
                      this.paymentComplete = true
                      alert('Transaction ending')
                      //showModal()
                      this.$router.push('/')
                    })
                  // There's a risk of the customer closing the window before callback
                  // execution. Set up a webhook or plugin to listen for the
                  // payment_intent.succeeded event that handles any business critical
                  // post-payment actions.
                  // }
                }
              })
          } else {
            throw new Error('Failed payment')
          }
          // console.log('the payload returned is ', this.payload)
        })
        .catch(error => {
          //console.log('payload contains' + this.payload)
          alert('transaction error: ' + error.message)
          this.lockSubmit = false
        })

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
  }
}
</script>

<style scoped>
.card {
  border: 2px solid rgb(219, 219, 219);
  border-radius: 4px;
  /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); */
}

.form-stage {
  text-align: center;
  margin: 0 auto;
  float: center;
  border: #123169 1px solid;
  border-radius: 8px;
  box-shadow: #ccc;
  /* height: auto;
  width: auto; */
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(184, 184, 184, 0.2),
    0 6px 16px 0 rgba(184, 184, 184, 0.2);
}
/* 
.button {
  Reset text link default
  text-decoration: none;
  background-color: rebeccapurple;
  color: #fff; 
  padding: 0.5em 1em;
  border-radius: 4px;
} */

.button {
  background-color: #123067;
  color: white;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgb(215, 232, 253) 0px 4px 10px 1px;
}

.button:hover {
  background-color: #0a3592;
}
.button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
</style>
