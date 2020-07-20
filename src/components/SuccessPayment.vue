<template>
  <div>
    <div class="section-1 m-0">
      <div class="container ">
        <div class="row d-flex">
          <div
            class="col-12 col-md-6 text-left justify-content-center align-self-center"
          >
            <div class>
              <h2 class="display-5 text-white mt-0">
                Congratulations!
              </h2>
              <p class="text-white text-left">
                You just booked your driving course. We are so happy for you.
                Check your email for the confirmation and the receipt
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 pt-0"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row d-flex">
        <div
          class=" form-stage col-12 col-md-6 text-left justify-content-center align-self-center"
        >
          <h1 class="display-3">Full Payment Made</h1>
          <br />

          <router-link to="/" class="btn btn-primary"
            ><button>Go back to the home page</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-stage {
  text-align: center;
  margin: 0 auto;
  float: center;
  border: #123169 1px solid;
  border-radius: 8px;
  box-shadow: #ccc;
  /* height: auto;
  width: auto; */
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(184, 184, 184, 0.2),
    0 6px 16px 0 rgba(184, 184, 184, 0.2);
}

button {
  background-color: #123067;
  color: white;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgb(215, 232, 253) 0px 4px 10px 1px;
  border-radius: 25%;
}

button:hover {
  background-color: #0a3592;
}
button:active {
  background-color: #0a3592;
  box-shadow: 0 4px rgb(179, 179, 179);
  transform: translateY(4px);
}
</style>
