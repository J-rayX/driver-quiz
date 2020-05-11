<template>
  <div>
    <!-- <strong>Question {{ question.id }}:</strong><br/>
      <strong>{{ question.desc }} </strong> -->

    <!-- <div v-if="question.type === 'doubleOption'"> -->
    <!-- <span> {{ question }}</span>
    <div v-for="(doubleAnswer,index) in question.options" :key="index">
      <input type="radio" :id="'option' + index" name="currentQuestion" 
        v-model="option" :value="doubleAnswer">
      <label :for="'option' + index">{{ doubleAnswer }}</label>
      <br />
    </div> -->

    <!-- </div> -->

    <div v-if="question.type === 'doubleOption'">
      <div v-for="(doubleAnswer, index) in question.options" :key="index">
        <input type="radio" :id="'option'+index" 
          name="currentQuestion" 
          v-model="option" :value="doubleAnswer">
        <label :for="'option'+index">{{ doubleAnswer }}</label><br/>
      </div>
    </div>

    <button @click="submitAnswer">Answer</button>
  </div>
</template>

<script>
// import OptionSelect from '@/components/OptionSelect.vue';
// import axios from 'axios';

export default {
  data() {
    // optionChosen: {}
    return {
      option: Object
      //option: Array
      //   desc: '',
      //   score: ''
      // }
    }
  },

  props: {
    question: Object
    // options: {
    //   type: String
    // }
  },

  components: {
    //OptionSelect
  },

  methods: {
    submitAnswer() {
      // this.optionChosen.push(
      //   this.doubleAnswer
      // )
      //console.log(this.question)
      //console.log('fuck child option is ' + this.questions)
      this.$emit('option', { option: this.option })
      //console.log(this.doubleAnswer)
      this.option = null
    }
  }
};
</script>
