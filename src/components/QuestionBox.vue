<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form v-on:submit.prevent="handleSubmit(submitAnswer)">
      <div class="container flex-container question-box">
        <strong>Question {{ question.id }}:</strong>
        <br />
        <strong>{{ question.desc }}</strong>

        <!-- HTML Rendering of 2 Options Questions -->
        <div v-if="question.typeOfQuestion === 'doubleOption'">
          <div
            v-for="(doubleAnswer, index) in question.options"
            :key="index"
            @click="selectAnswer(index)"
          >
            <label class="option" :for="'option' + index">
              <span class="label">{{ doubleAnswer.desc }}</span>
              <input
                type="radio"
                :id="'option' + index"
                name="currentQuestion"
                v-model="option"
                :value="doubleAnswer"
              />
              <span class="checkmark"></span>
            </label>
            <br />
          </div>
        </div>

        <!-- HTML Rendering of 3 Options Questions -->
        <div v-if="question.typeOfQuestion === 'tripleOption'">
          <div
            v-for="(tripleAnswer, index) in question.options"
            :key="index"
            @click="selectAnswer(index)"
          >
            <label class="option" :for="'option' + index">
              <span class="label">{{ tripleAnswer.desc }}</span>
              <input
                type="radio"
                :id="'option' + index"
                name="currentQuestion"
                v-model="option"
                :value="tripleAnswer"
              />
              <span class="checkmark"></span>
            </label>
            <br />
          </div>
        </div>

        <!-- HTML Rendering of 4 Options Questions -->
        <div v-if="question.typeOfQuestion === 'quadOption'">
          <div
            v-for="(quadAnswer, index) in question.options"
            :key="index"
            @click="selectAnswer(index)"
          >
            <label class="option" :for="'option' + index">
              <span class="label">{{ quadAnswer.desc }}</span>
              <input
                type="radio"
                :id="'option' + index"
                name="currentQuestion"
                v-model="option"
                :value="quadAnswer"
              />
              <span class="checkmark"></span>
            </label>
            <br />
          </div>
        </div>

        <!-- HTML Rendering of 5 Options Questions -->
        <div v-if="question.typeOfQuestion === 'fiveOption'">
          <div
            v-for="(fiveAnswer, index) in question.options"
            :key="index"
            @click="selectAnswer(index)"
          >
            <label class="option" :for="'option' + index">
              <span class="label">{{ fiveAnswer.desc }}</span>
              <input
                type="radio"
                :id="'option' + index"
                name="currentQuestion"
                v-model="option"
                :value="fiveAnswer"
              />
              <span class="checkmark"></span>
            </label>
            <br />
          </div>
        </div>

        <!-- <button :disabled="isOptionChosen" @click.prevent="submitAnswer()" type="submit">Next</button> -->
        <button type="submit" :disabled="selectedIndex === null">Next</button>

        <!-- <button @click="submitAnswer">Answer</button> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
// import OptionSelect from '@/components/OptionSelect.vue';
// import axios from 'axios';

import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
export default {
  data() {
    // optionChosen: {}
    return {
      option: Object,
      selectedIndex: null,
      answered: false
    }
  },

  props: {
    question: Object
  },
  computed: {},

  methods: {
    selectAnswer(index) {
      this.selectedIndex = index
      console.log(this.selectedIndex)
    },
    submitAnswer() {
      this.$emit('option', { option: this.option })
      //console.log(this.doubleAnswer)
      this.option = null
      this.selectedIndex = null
    }
  }
  // mounted() {
  //   this.submitAnswer()
  // }
}
</script>

<style scoped>
.question-box {
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

.option {
  display: block;
  position: relative;
  margin: 30px auto;
  height: auto;
  width: 350px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 35px;
  padding-right: 35px;
  float: left;
  margin-top: 24px;
  margin-right: 12px;
  margin-bottom: 24px;

  transition: all 0.2s linear;
  cursor: pointer;
  border: blue 1px solid;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-size: 22px;
}
.option:hover {
  transform: scale(1.01);
  background-color: rgb(191, 224, 243);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
/* Hiding browser's default radio button */
.option input[type='radio'] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
/* position the rendering of label text */
.option > .label {
  position: relative;
  padding-left: 24px;
}
/* Create a custom radio button */
.checkmark {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin-right: 10px;
  margin-left: 20px;
  margin-top: 20px;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
/* On mouse-over, add a grey background color */
.option:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the radio button is checked, add a blue background */
.option input:checked ~ .checkmark {
  background-color: #2196f3;
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
.option input:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
.option .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

input[type='submit'] {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

input[type='submit']:hover {
  opacity: 1;
}

button {
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
button:hover {
  opacity: 1;
}
button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
</style>
