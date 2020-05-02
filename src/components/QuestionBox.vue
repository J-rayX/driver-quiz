<template>
  <div>
      
      <h4 >{{ questions.desc  }}</h4>
    <!-- <ul>
      <li class="option-select" v-for="(answer, index) in question.answers" :key="index">
        <input type="radio" id="option" name="" />
            <label for="(answer, index) in question.answers">Answer: {{ answer.option }} </label>    
        <div class="check"></div>
      </li> 
     </ul>
     -->

      <!-- 
      <li class="option-select" v-for="(answer, index) in question.answers" :key="index">
        <input type="radio" id="option" name="" />
            <label for="(answer, index) in question.answers">Answer: {{ answer.option }} </label>    
        <div class="check"></div>
      </li> 
      -->
   
  </div>
</template>

<script>
// import OptionSelect from '@/components/OptionSelect.vue';
import axios from 'axios';

export default {
data() {
    return {
      questions: [],
     
      /* question: {
        desc: 'What trasnmission do you want?',
        answers: [
          { option: 'Manual' },
          { option: 'Auto' }, 
          { option: 'Hybrid' }
        ] */
    }
  },

  components: {
    //OptionSelect
  },
    created() {
    axios
      .get('http://localhost:3000/questions')
      .then(response => {
          this.questions = response.data 
      })
      .catch(error => {
        console.log("There was an error: " + error.response)
      });
  }
};
</script>

<style>
.option-select {
  display: block;
  position: relative;
  margin: 40px auto;
  height: auto;
  width: 500px;
  padding: 20px;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: blue 1px solid;
  border-radius: 4px;
}
.option-select:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.option-select > .title {
  margin: 0;
}

ul.option-select {
  list-style: none;
  margin: 0;
  padding: 0;
	overflow: auto;
}

.container ul li{
  color: #AAAAAA;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
  margin: 4%;
}

input[type=radio] {
  position: absolute;
  visibility: hidden;
}


ul li label{
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.35em;
  padding: 25px 25px 0px 80px;
  margin: 0px auto;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
}

ul li:hover label{
	color: rgb(3, 47, 129);
}

ul li .check{
  display: block;
  position: absolute;
  border: 5px solid #AAAAAA;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 30px;
  left: 20px;
  z-index: 5;
  transition: border .25s linear;
  -webkit-transition: border .25s linear;
}

ul li:hover .check {
  border: 5px solid rgb(3, 47, 129);
  background-color: rgb(132, 189, 255);
  
}

ul li .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 5px;
  left: 5px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

input[type=radio]:checked ~ .check {
  border: 5px solid  rgb(3, 47, 129);
}

input[type=radio]:checked ~ .check::before{
  background: rgb(3, 47, 129);
}

input[type=radio]:checked ~ label{
  color: rgb(3, 47, 129);
}

</style>
