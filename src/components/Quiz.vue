<template>
<div>
  <div class="introStage">
    <h1>{{ introText }}</h1>
    <p>
      We could help you find a suitable driving course for you
    </p>
    <!-- <a href="#" @click="startQuiz">START!</a> <br /> -->
  </div>

  <div class="questionBox">
    <QuestionBox :questions="questions" @handle-answer="handleAnswer"></QuestionBox>
  </div>
</div>
</template>

<script>
import QuestionBox from '@/components/QuestionBox.vue';
import axios from 'axios'; 

export default {
  name: "Quiz",
  data() {
    return {
      questions: [],
      optionChosen: []
       //option: [],
      //total: 0
    }
  },

  props: {
    introText: String
  },

  components: {
    QuestionBox
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
    handleAnswer(e){
      console.log('I just entered the parent component now')
      console.log('option', e)
      this.optionChosen = e.option
      console.log('parent option are ' + this.optionChosen)

      //this.optionChosen.push(e);
      this.total = this.optionChosen.length
      console.log('number of asnwers is ' + this.total)
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
