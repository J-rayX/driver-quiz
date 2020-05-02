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
    <QuestionBox>

    </QuestionBox>
  </div>
</div>
</template>

<script>
import QuestionBox from '@/components/QuestionBox.vue';

export default {
  name: "Quiz",
  props: {
    introText: String
  },

  components: {
    QuestionBox
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
