<template>
  <div class="about">
    <h1>This is our about page</h1>
    <span>{{ welcome }}</span>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['courseRecommended'],
  data() {
    return {
      welcome: 'THis is the about page'
    }
  },
  mounted() {
    if (this.courseRecommended) {
      this.welcome = this.courseRecommended
    }
  }
}
</script>