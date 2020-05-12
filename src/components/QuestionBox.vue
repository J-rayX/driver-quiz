<template>
  <form @submit.prevent="submitAnswer">
    <div>
      <strong>Question {{ question.id }}:</strong><br/>
        <strong>{{ question.desc }} </strong>

      <!-- <div v-if="question.type === 'doubleOption'"> -->
      <!-- <span> {{ question }}</span>
      <div v-for="(doubleAnswer,index) in question.options" :key="index">
        <input type="radio" :id="'option' + index" name="currentQuestion" 
          v-model="option" :value="doubleAnswer">
        <label :for="'option' + index">{{ doubleAnswer }}</label>
        <br />
      </div> -->

      <!-- </div> -->
      <!-- HTML Rendering of 2 Options Questions -->
      <div v-if="question.type === 'doubleOption'"> <!-- code can't read type -->
        <div v-for="(doubleAnswer, index) in question.options" :key="index">
          <input type="radio" :id="'option'+index" 
            name="currentQuestion" 
            v-model="option" :value="doubleAnswer">
          <label :for="'option'+index">{{ doubleAnswer }}</label><br/>
        </div>
      </div>

      <!-- HTML Rendering of 4 Options Questions -->
      <div v-if="question.type === 'quadOption'">
        <div v-for="(quadAnswer, index) in question.options" :key="index">
          <input type="radio" :id="'option'+index" 
            name="currentQuestion" 
            v-model="option" :value="quadAnswer">
          <label :for="'option'+index">{{ quadAnswer }}</label><br/>
        </div>
      </div>

      <!-- HTML Rendering of 6 Options Questions -->
      <div v-if="question.type === 'sixOption'">
        <div v-for="(sixAnswer, index) in question.options" :key="index">
          <input type="radio" :id="'option'+index" 
            name="currentQuestion"
            v-model="option" :value="sixAnswer">
          <label :for="'option'+index">{{ sixAnswer }}</label><br/>
          

        </div>
      </div>

      <!-- <div v-if="question.options.type = []">
        <div  v-for="(option,index) in question.options.options" :key="index">
          {{ option.desc }}
        </div>
      </div> -->

      <button type="submit">Next</button>
      <!-- <button @click="submitAnswer">Answer</button> -->
    </div>
  </form>
</template>

<script>
// import OptionSelect from '@/components/OptionSelect.vue';
// import axios from 'axios';

export default {
  data() {
    // optionChosen: {}
    return {
      option: Object
      
    }
  },

  props: {
    question: Object
  },

  methods: {
    submitAnswer() {
      this.$emit('option', { option: this.option })
      //console.log(this.doubleAnswer)
      this.option = null
    }
  }
};
</script>
