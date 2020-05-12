<template>

  <div>
    <div class="introStage">
      <h1>{{ introText }}</h1>
      <p>
        Take Quiz to become an Expert!
      </p>
      <!-- <a href="#" @click="startQuiz">START!</a> <br /> -->
    </div>

    <div class="questionBox">
      <!-- <QuestionBox
        v-for="question in questions" :key="question.id"
        :question="question"
       >
      </QuestionBox> -->

      <QuestionBox
        :question="questions[currentQuestion]"
        v-on:option="handleOption"
        :question-number="currentQuestion+1"
      >
      </QuestionBox>
      <span></span>
    </div>
  </div>
</template>

<script>
import QuestionBox from '@/components/QuestionBox.vue';
import axios from 'axios';

// v-for="question in questions"
// :key="question.index"
// :questions="questions"
// v-on:optionChosen="handleOption"
// :question-number="currentQuestion + 1"


export default {
  name: "Quiz",
    props: {
    introText: String
  },

  components: {
    QuestionBox
  },
  data() {
    return {
      questions: [],
      optionChosen: [],
      currentQuestion: 0,
      options: [],
      //total: 0
    }
  },

  created() {
    axios
      .get('http://localhost:3000/questions')
      .then(response => {
        this.questions = response.data
      })
      .catch(error => {
        console.log("There was an error: " + error.response)
      })
  },
  methods: {
   
    handleOption(e){
      //console.log(this.questions)
      console.log('answer event ftw', e)
      this.options[this.currentQuestion] = e.option
      //this.questionIterator(this.questions)

      //check if option chosen has a type:doubleOption
      //display as question

      if((this.currentQuestion+1) === this.questions.length) {
        console.log("Done Finally")
      }else{
        this.currentQuestion++
      }
    }
  }
};
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



