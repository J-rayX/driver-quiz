<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="First name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Email address:"
        label-for="input-3"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Phone:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.phone"
          required
          placeholder="Enter your phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Date to Start:"
        label-for="input-5"
      >
        <b-form-datepicker
          id="datepicker"
          v-model="form.dateToStart"
          class="mb-2"
          required
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group id="input-group-6" label="Post Code:" label-for="input-6">
        <b-form-input
          id="input-4"
          v-model="form.postCode"
          required
          placeholder="Enter your Post Code"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="form.contactMe"
            >You may Contact me about the Couse I have chosen</b-form-checkbox
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateToStart: null,
        postCode: '',
        checked: [],
        contactMe: false
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      JSON.stringify(this.form)
      this.$emit('form', this.form)
    }
  }
}
</script>
