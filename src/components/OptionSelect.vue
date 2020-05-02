<template>
  <div class="container">
      <li class="option-select">
        <input type="radio" id="f-option" name="selector">
        <label for="f-option">This question is <slot></slot></label>
        <div class="check"></div>
      </li>
    
    <!-- Double Options question -->
    <!-- <div class="question-box" v-if="question.type === 'double'">
      <div v-for="(doubleOption, index) in question.options" :key="index">
        <input type="radio" name="" v-model="option" value="doubleOption" />
        <label :for="'doubleOption.desc'"> This question is {{ doubleOption.desc }}</label><br />
      </div>
    </div> -->

    <!-- Triple Options question -->
    <!-- <div class="question-box" v-if="question.type === 'triple'">
      <div v-for="(tripleOption, index) in question.options" :key="index">
        <input type="radio" name="" v-model="option" value="triple" />
        <label :for="'tripleOption'"> {{ tripleOption.desc }}</label><br />
      </div>
    </div> 
    -->

    <!-- Quad Options question -->
    <!-- <div class="question-box" v-if="question.type === 'quad'">
      <div v-for="(quadOption, index) in question.options" :key="index">
        <input type="radio" name="" v-model="option" value="quad" />
        <label :for="'quadOption'"> {{ quadOption.desc }}</label><br />
      </div>
    </div>-->

    <!-- Five Options question -->
    <!-- <div class="question-box" v-if="question.type === 'five'">
      <div v-for="(fiveOption, index) in question.options" :key="index">
        <input type="radio" name="" v-model="option" value="five" />
        <label :for="'fiveOption'"> {{ fiveOption.desc }}</label><br />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'What trasnmission do you want?'
    };
  }
};
</script>

<style scoped>
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
  background:  rgb(3, 47, 129);
}

input[type=radio]:checked ~ label{
  color:  rgb(3, 47, 129);
}

/*#0DFF92*/
/*rgb(9, 72, 167)*/

</style>
