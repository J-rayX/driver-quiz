<template>
  <div>
    <div v-if="introStage">
      <h1>Welcome to the Course Recommender</h1>
      <p>This is a new offering from 7days</p>
      <a @click="beginQuiz">Start</a>
    </div>

    <!-- <div class="introStage">
        <h1>{{ introText }}</h1>

        <a href="#" @click="startQuiz">START!</a>
        <br />
    </div>-->

    <div class="questionBox" v-if="questionStage">
      <!-- <QuestionBox
        v-for="question in questions" :key="question.id"
        :question="question"
       >
      </QuestionBox>-->

      <QuestionBox
        :question="questions[currentQuestion]"
        v-on:option="handleOption"
        :question-number="currentQuestion + 1"
      ></QuestionBox>

      <span></span>
    </div>

    <!-- <div v-if="finalStage">You are to pay $ {{}} for {{}} course</div> -->
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
      courses: [] // to hold list of courses fetched from API
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
      // this.totalScore = this.totalScore + e.option.score
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
      //if(this.totalScore < 10) this.fee =
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
</style>
