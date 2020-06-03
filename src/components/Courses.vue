<template>
  <b-container>
    <div v-for="(course, index) in courses[0].options" :key="index">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-title>{{ course.desc }}</b-card-title>
        <b-card-text>
          <!--  <label class="option" :for="'option' + index"> -->
          <span class="label">{{ course.type }}</span>
          <br />
          <span class="label">{{ course.transType }}</span>
        </b-card-text>

        <b-button href="#" @click="startBooking(index)" variant="primary">Book Now</b-button>
        <!-- <a @click="$emit('goToPayment', feeToBePaid)">Pay</a> -->
      </b-card>
    </div>

    <div v-for="(course, index) in courses[1].options" :key="'A' + index">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-title>{{ course.desc }}</b-card-title>
        <b-card-text>
          <!--  <label class="option" :for="'option' + index"> -->
          <span class="label">{{ course.type }}</span>
          <br />
          <span class="label">{{ course.transType }}</span>
        </b-card-text>

        <b-button href="#" variant="primary">Book Now</b-button>
      </b-card>
    </div>

    <div v-for="(course, index) in this.courses[2].options" :key="'B' + index">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-title>{{ course.desc }}</b-card-title>
        <b-card-text>
          <!--  <label class="option" :for="'option' + index"> -->
          <span class="label">{{ course.type }}</span>
          <br />
          <span class="label">{{ course.transType }}</span>
        </b-card-text>

        <b-button @click="startBooking(course)" variant="primary">Book Now</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    courses: Array
  },
  data() {
    return {
      courseChosen: {}
    }
  },

  methods: {
    startBooking(myKey) {
      // this.$emit('course', { course: this.course })
      // this.$emit('course', course)
      // console.log('sending love and light')
      if (myKey != undefined) {
        this.courseChosen = this.courses[myKey]
        console.log(this.courseChosen)
        this.$emit('course', course)
        console.log('sending love and light')
      } else {
        this.courseChosen = null
      }
    }
  }
}
</script>