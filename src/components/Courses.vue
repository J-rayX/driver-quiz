<template>
  <div class>
    <div class="content">
      <div class="row p-0 m-0" v-for="chunk in coursesChunks" :key="chunk">
        <!-- <div class="card col-md-4 col-12 mt-3 mb-3">
        </div> -->

        <div
          class="col-md-4 col-12 text-left mt-3 mb-4"
          v-for="(course, index) in chunk"
          :key="index"
        >
          <div class="card mr-2 d-inline-block shadow ">
            <div class="card-img-top">
              <!-- <img src="../assets/info-bar-countries.svg" class="img-fluid border-radius p-4" alt="Member">  -->
              <!-- <i class="fas fa-tachometer-alt" style="height: 200px; width: 200px;"></i> -->
            </div>
            <div class="card-body">
              <img
                src="../assets/info-bar-countries.svg"
                class="img-fluid border-radius p-4"
                alt="globe"
              />
              <h4 class="card-title text-left">{{ course.desc }}</h4>
              <p class="card-text text-left">
                <span class="text-alert">{{ course.courseType }}</span> <br />
                We can help you to pass within weeks of booking in—even on a
                busy schedule!
              </p>
              {{ course.transType }}<br />
              <a
                href="#"
                class="btn btn-primary"
                @click="startBooking(index)"
                variant="primary"
                >Book Now</a
              >
              <!-- <a href="#" class="text-decoration-none">DISCOVER OUR COURSES</a> -->
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="columns" v-for="(course, index) in courses" :key="index">
        <div class="card col-md-4 col-12">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=25"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ course.desc }}</h5>
            <p class="card-text">{{ course.courseType }}</p>
            <span class="label">{{ course.transType }}</span>
            <a
              href="#"
              class="btn btn-primary"
              @click="startBooking(index)"
              variant="primary"
              >Book Now</a
            >
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import QuestionService from '@/services/QuestionService.js'

export default {
  props: {
    // courses: Array
  },
  data() {
    return {
      courseChosen: {},
      courses: [],
      course: {},
      dt: {
        amount: 1099, //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: 'ppt',
        description: 'delamo'
      }
    }
  },

  created() {
    QuestionService.getCourses()
      .then(response => {
        // console.log(response.data)
        this.courses = response.data

        // console.log(this.courses)
      })
      .catch(error => {
        // console.log('There was an error: ' + error.response)
      })
  },
  computed: {
    coursesChunks() {
      return _.chunk(Object.values(this.courses), 3)
    }
  },

  methods: {
    startBooking(messageToBeSent) {
      // this.course = this.courses[messageToBeSent]
      // console.log('na the payload be this so ', this.course)

      if (messageToBeSent != undefined) {
        this.courseChosen = this.courses[messageToBeSent]

        // console.log(this.courseChosen)
        // console.log('sending love and light')
        this.$emit('course', this.courseChosen)
      } else {
        this.courseChosen = null
      }
    }
  }
}
</script>

<style scoped>
.card {
  margin-left: em;
  margin-right: em;
}
</style>
