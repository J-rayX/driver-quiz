<template>
  <div id="app">
    <header class="header">
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <!-- Nav-bar Icons -->
            <!-- <i class="fas fa-book-reader fa-2x mx-3"></i> -->
            <i>
              <img
                src="@/assets/logo.png"
                alt="steering logo"
                class="header-logo"
                max-width="1%"
              />
            </i>
            <!-- <img src="..//assets/logoo.png alt="Logo">  -->
            7Days Driving School
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-right text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link :to="{ name: 'home' }">
                  <a class="nav-link" href="#">
                    HOME
                    <span class="sr-only">(current)</span>
                  </a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'booking' }">
                  <a class="nav-link" href="#">COURSES</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'course-recommender' }">
                  <a class="nav-link" href="#"
                    >COURSE-RECOMMENDER</a
                  > </router-link
                >|
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'instructors' }">
                  <a class="nav-link" href="#">INSTRUCTORS</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'course-recommender' }">
                  <a class="nav-link" href="#">FAQ AND REVIEWS</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'course-recommender' }">
                  <a class="nav-link" href="#">AREAS COVERED</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'course-recommender' }">
                  <a class="nav-link" href="#">CONTACT</a>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <!-- Router View is a canvas where the different parts of the app is displayed -->
    <router-view />
  </div>
  <!-- 
    <div id="nav">   
    <router-link :to="{ name: 'booking' }">Booking</router-link>
  </div>-->
</template>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: 'Montserrat', 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
/* #app {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px 20px;
  margin: 0 auto;
}
h6 {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}*/
</style>
