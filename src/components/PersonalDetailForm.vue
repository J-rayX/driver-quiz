<template>
  <div class="form-stage">
    <form @submit="onSubmit">
      <div class="form-g">
        <h3 class="text-dark">Kindly fill in the following details</h3>
        <hr />
      </div>
      <div class="form-group">
        <label class="control-label col-sm-6" for="lastName">First name:</label>
        <div class="col-sm-12">
          <input
            type="text"
            placeholder="Enter first name"
            class="form-control"
            v-model="form.firstName"
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6" for="lastName">Last name:</label>
        <div class="col-sm-12">
          <input
            type="text"
            placeholder="Enter last name"
            class="form-control"
            v-model="form.lastName"
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-12" for="email">Email:</label>
        <div class="col-sm-12">
          <input
            type="email"
            placeholder="Enter email"
            class="form-control"
            v-model="form.email"
            description="We'll never share your email with anyone else."
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-12" for="phone">Phone:</label>
        <div class="col-sm-12">
          <input
            type="phone"
            placeholder="Enter phone number"
            class="form-control"
            v-model="form.phone"
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6" for="phone"
          >Preferred Starting Date:</label
        >
        <div class="col-sm-12">
          <input
            type="date"
            class="form-control"
            name="date"
            v-model="form.dateToStart"
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6" for="lastName">Post code:</label>
        <div class="col-sm-12">
          <input
            type="text"
            placeholder="Enter last name"
            class="form-control"
            v-model="form.postCode"
            required
          />
        </div>
      </div>

      <!-- <div class="form-group" id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="form.contactMe"
            >You may contact me about the Couse I have chosen</b-form-checkbox
          >
        </b-form-checkbox-group>
      </div> -->

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-12">
          <div class="checkbox">
            <label
              ><input
                type="checkbox"
                v-model="form.checked"
                value="form.contactMe"
                name="contactMe"
              />
              You may contact me about the course I have chosen</label
            >
          </div>
        </div>
      </div>

      <button
        class="text-white btn btn-dark primary-btn px-5 py-2"
        type="submit"
        variant="primary"
      >
        Submit
      </button>
    </form>

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
<style scoped>
.form-stage {
  text-align: left;
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
  box-shadow: rgb(215, 232, 253) 0px 4px 10px 1px;
}

button:hover {
  background-color: #0a3592;
}
button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
</style>
