<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Quiz />
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'
// import axios from 'axios';
export default {
  data() {
    return {}
  },

  components: {
    Quiz
  }
}
</script>

<style>
.home {
  margin-left: 0%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.7px;
  line-height: 1.25;
  margin-bottom: 0.7em;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
p {
  font-family: 'Montserrat', sans-serif;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .flex-container {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  .flex-container > h1,
  p {
    text-align: left;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .flex-container {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  .flex-container > h1,
  p {
    text-align: left;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .flex-container {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-container > h1,
  p {
    text-align: center;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .flex-container {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container {
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .flex-container {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
