<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Quiz introText="Welcome to our Course Recommender" />
     
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from "@/components/Quiz.vue";
// import axios from 'axios';
export default {
  data() {
    return {
      
    }
  },

  components: {
    Quiz
  },

};
</script>
