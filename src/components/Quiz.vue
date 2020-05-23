<template class="body">
  <div class="container">
    <div class="flex-container intro-stage" v-if="introStage">
      <h1>We could help you find the best course for you</h1>
      <p>
        Our course recommender will suggest the most suitable course based on
        your skills and preferences
      </p>
      <a @click="beginQuiz">Start</a>
    </div>

    <!-- <div class="introStage">
        <h1>{{ introText }}</h1>

        <a href="#" @click="startQuiz">START!</a>
        <br />
    </div>-->

    <div class="flex-container questionBox" v-if="questionStage">
      <QuestionBox
        :question="questions[currentQuestion]"
        v-on:option="handleOption"
        :question-number="currentQuestion + 1"
      ></QuestionBox>
    </div>

    <div v-if="finalStage">
      <div class="flex-container final-stage">
        <span
          style="font-weight: 600; font-size: 24px; color:  #0a3592;"
        >Enroll for {{ feeToBePaid.desc }} course</span>
        <hr />
        <h5 style="font-weight: bold;">About the Course</h5>
        <div v-for="(feature, index) in feeToBePaid.features" :key="index">
          <span>{{ feature }}</span>
        </div>
        <hr />
        <h5 style="font-weight: bold;">Duration</h5>
        <span>
          Takes {{ feeToBePaid.days }} and a total of
          {{ feeToBePaid.hours }}
        </span>
        <hr />
        <h5 style="font-weight: bold;">Cost</h5>
        <span>&#163;{{ feeToBePaid.fee }}</span>
        <a>Pay</a>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionBox from '@/components/QuestionBox.vue'
import QuestionService from '@/services/QuestionService.js'
// v-for="question in questions"
// :key="question.index"
// :questions="questions"
// v-on:optionChosen="handleOption"
// :question-number="currentQuestion + 1"

export default {
  name: 'Quiz',
  props: {
    introText: String
  },

  components: {
    QuestionBox
  },
  data() {
    return {
      introStage: false,
      questionStage: false,
      finalStage: false,
      questions: [], // to hold list of questions fetched from API
      currentQuestion: 0,
      options: [], // to hold user selection option emmitted from Child comp
      totalScore: 0,
      fee: 0,
      courses: [], // to hold list of courses fetched from API
      isManual: false
      //total: 0
    }
  },

  created() {
    QuestionService.getQuestions()
      .then(response => {
        this.questions = response.data
        this.introStage = true
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      }),
      QuestionService.getCourses()
        .then(response => {
          this.courses = response.data
        })
        .catch(error => {
          console.log('There was an error: ' + error.response)
        })
  },
  computed: {
    feeToBePaid() {
      if (this.totalScore <= 10) {
        //console.log(this.isManual)
        return this.isManual
          ? this.courses[0].options[0]
          : this.courses[0].options[1]
      } else if (this.totalScore > 10 && this.totalScore <= 20) {
        return this.isManual
          ? this.courses[0].options[2].fee
          : this.courses[0].options[3].fee
      } else if (this.totalScore > 20 && this.totalScore <= 30) {
        return this.isManual
          ? this.courses[0].options[4].fee
          : this.courses[0].options[5].fee
      } else if (this.totalScore > 30 && this.totalScore <= 40) {
        return this.isManual
          ? this.courses[0].options[6].fee
          : this.courses[0].options[7].fee
      } else if (this.totalScore > 40 && this.totalScore <= 50) {
        return this.isManual
          ? this.courses[1].options[0].fee
          : this.courses[1].options[1].fee
      } else if (this.totalScore > 50 && this.totalScore <= 60) {
        return this.isManual
          ? this.courses[1].options[2].fee
          : this.courses[1].options[3].fee
      } else if (this.totalScore > 60 && this.totalScore <= 70) {
        return this.isManual
          ? this.courses[2].options[0].fee
          : this.courses[2].options[1].fee
      } else if (this.totalScore > 70 && this.totalScore <= 85) {
        return this.isManual
          ? this.courses[2].options[2].fee
          : this.courses[2].options[3].fee
      } else {
        return this.isManual
          ? this.courses[0].options[4].fee
          : this.courses[0].options[5].fee
      }
    }
  },
  methods: {
    // Function to show the start of the app
    beginQuiz() {
      this.introStage = false
      this.questionStage = true

      console.log(
        'test ' + JSON.stringify(this.questions[this.currentQuestion])
      )
    },

    // Function to handle Display questions and options
    handleOption(e) {
      console.log('answer event ftw', e)
      this.options[this.currentQuestion] = e.option
      if (e.option.transType === 'transManual') {
        this.isManual = true
      }
      if (e.option.transType === 'transAuto') {
        this.isManual = false
      }

      // e.option.transType === 'transManual'
      //   ? this.isManual === true
      //   : this.isManual === false

      if (
        this.currentQuestion + 1 === this.questions.length ||
        e.option.endpoint === true
      ) {
        console.log('Done Finally, total score is ' + this.totalScore)
        this.finishQuiz()
        this.questionStage = false
        this.finalStage = true
      } else {
        this.totalScore = this.totalScore + e.option.score

        this.currentQuestion++
      }
    },

    // Function to handle the final results and display of answers
    finishQuiz() {
      console.log('The End!')
      // if (this.totalScore < 10) {
      //   console.log(this.courses[1].options[1].fee)
      //   //return this.courses[1].options[1].fee
      // } else {
      //   console.log(this.courses[1].options[4].fee)
      //   //return this.courses[1].options[4].fee
      // }
      //if(this.totalScore < 10) this.fee =
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container {
  margin-top: 18%;
  height: auto;
  display: flex;
}
.intro-stage {
  text-align: center;
  margin: 0 auto;
  float: center;
  border: #2196f3 1px solid;
  border-radius: 8px;
  box-shadow: #ccc;
  height: auto;
  width: auto;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(184, 184, 184, 0.2),
    0 6px 16px 0 rgba(184, 184, 184, 0.2);
}

.final-stage {
  text-align: center;
  margin: 0 auto;
  float: center;
  border: #2196f3 1px solid;
  border-radius: 8px;
  box-shadow: #ccc;
  height: auto;
  width: auto;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(184, 184, 184, 0.2),
    0 6px 16px 0 rgba(184, 184, 184, 0.2);
}

a {
  background-color: #0a3592;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.8;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgb(215, 232, 253) 0px 4px 10px 1px;
}
a:hover {
  opacity: 1;
}
a:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
hr {
  border: 0.5px solid rgb(199, 199, 199);
  width: 90%;
  border-radius: 5px;
}
</style>
