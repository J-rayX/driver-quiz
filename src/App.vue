<template>
  <div id="app">
    <header class="header">
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg">
          <router-link :to="{ name: 'home' }">
            <a class="navbar-brand active pl-0 pr-0" href="#">
              <!-- Nav-bar Icons -->
              <!-- <i class="fas fa-book-reader fa-2x mx-3"></i> -->
              <i class="pl-0 m-0">
                <img
                  src="@/assets/logo.png"
                  alt="steering logo"
                  width="14%"
                  height="14%"
                  class="d-inline-block align-top p-0"
                  max-width=""
                />
              </i>
              <!-- <img src="..//assets/logoo.png alt="Logo">  -->
              <span class=" navbar-brand pl-0"> 7Days Driving School</span>
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <button
            class="ml-0 navbar-toggler"
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
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-left">
              <li class="nav-item">
                <router-link :to="{ name: 'booking' }">
                  <a class="nav-link" href="#">Courses</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'course-recommender' }">
                  <a class="nav-link" href="#"
                    >Course Recommender</a
                  > </router-link
                >|
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'instructors' }">
                  <a class="nav-link" href="#">Instructors</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'faq' }">
                  <a class="nav-link" href="#">FAQ & Reviews</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'areas' }">
                  <a class="nav-link" href="#">Areas Covered</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'contact' }">
                  <a class="nav-link" href="#">Contact</a>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <!-- Router View is a canvas where the different parts of the app is displayed -->
    <router-view />

    <footer>
      <div class="container-fluid p-0">
        <div class="row text-left">
          <div class="col-md-5 col-sm-5 mt-2">
            <a href>
              <h4 class="text-light">Areas we cover</h4>
            </a>
            <a href>
              <h4 class="text-light">Contact us</h4>
            </a>
            <a href>
              <h4 class="text-light">Terms and Conditions</h4>
            </a>
            <a href>
              <h4 class="text-light">Privacy Policy</h4>
            </a>
            <p class="text-muted text-left">
              7 DAYS DRIVING SCHOOL LTD
              <br />
              <span class="text-muted">Company number: 9790469</span>
            </p>
          </div>
          <div class="col-md-5 col-sm-12 mt-2">
            <a href>
              <h4 class="text-light">Practical Test Centres</h4>
            </a>
            <a href>
              <h4 class="text-light">Instructors Needed</h4>
            </a>
            <a href>
              <h4 class="text-light">Careers & Vacancies</h4>
            </a>
            <a href>
              <h4 class="text-light">Help & Resources</h4>
            </a>
            <span></span>
            <a>
              <h4 class="text-light">Newsletter</h4>
            </a>
            <br />
            <!-- <img
                  src="@/assets/logo.png"
                  alt="steering logo"
                  class="header-logo img-fluid"
                  max-width="1%"
            />-->
            <img
              src="@/assets/logo-barklays-2.png"
              class="img-fluid"
              alt="Barclays Logo"
            />
            <!-- <p class="text-muted text-left">Stay Updated</p>
            <form class="form-inline">
              <div class="col pl-0">
                <div class="input-group pr-5 p-7">
                  <input
                    type="text"
                    class="form-control bg-dark text-white col-md-6"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Email"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>-->
          </div>
          <div class="col-md-2 col-sm-12 mt-2">
            <h4 class="text-light">Let us be social</h4>
            <p class="text-muted"></p>
            <div class="column text-light">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-12 text-center copyright">
            <p class="pt-4 text-muted">
              Copyright ©2020 All rights reserved | Made with
              <i class="fa fa-heart pulse" style="color: red;"></i> by
              <span>JkayLight</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
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
