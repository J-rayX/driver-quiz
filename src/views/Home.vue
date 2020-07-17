ore<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <!-- <span>this is the homepGE</span> -->
    <!-- <div class="container banner text-center">
      <div class="row">
        <div class="col-md-7 col-sm-12 text-white text-center">
          <h1>PASS YOUR DRIVING TEST IN JUST ONE WEEK</h1>
          <p>
            7Days Driving School makes it easy and possible to learn how to
            drive and pass your driving test in 7 days
          </p>
          <button class="btn btn-light px-5 py-2 primary-btn">Start Now</button>
        </div>
        <div class="col-md-5 col-sm-12 h-25 text-center">
          <img src="../assets/illustration.png" alt="cars" class="header-img" />
        </div>
      </div>
    </div>-->

    <main>
      <!-- Section-1 BANNER -->
      <section class="section-1 banner">
        <div class="container">
          <div class="row d-flex">
            <div class="col-12 col-md-5 text-left justify-content-center align-self-center">
              <div class>
                <h1 class="display-4 text-white mt-2">PASS YOUR DRIVING TEST IN JUST ONE WEEK</h1>
                <p
                  class="text-white text-left"
                >7Days Driving School makes it easy and possible to learn how to drive and pass your driving test in 7 days</p>
                <button class="text-left btn btn-light px-5 py-2 primary-btn">Start Now</button>
              </div>
            </div>
            <div class="col-12 col-md-7 pt-5">
              <img src="../assets/illustration.png" alt="cars" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <!------------- Section-2  STEPS ------------->
      <section class="section-2 pl-4">
        <div class="container">
          <div class="text-center">
            <h1 class="text-dark">How it Works</h1>
            <p class="text-secondary">Three Steps To Get Your License</p>
          </div>
          <!-- <div class="text-center">
          <button class="btn btn-dark px-20 py-22 primary-btn">Book Now</button>
          </div>-->

          <div class="row">
            <div class="col-12 col-md-5 stepper">
              <!-- completed -->
              <div class="step completed">
                <div class="stepper-shapes">
                  <div class="circle">
                    <span class="step-number">01</span>
                  </div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  <h6>Select your Course</h6>
                  <p>
                    Select any of our courses based on your skill level. You may
                    also use our course recommender.
                  </p>
                </div>
              </div>
              <!-- active -->
              <div class="step active">
                <div class="stepper-shapes">
                  <div class="circle">
                    <span class="step-number">02</span>
                  </div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  <h6>Pay a Deposit of full fees</h6>
                  <p>
                    Using your credit or debit card, make payment for your
                    driving course.
                  </p>
                </div>
              </div>
              <!-- regular -->
              <div class="step">
                <div class="stepper-shapes">
                  <div class="circle">
                    <span class="step-number">03</span>
                  </div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  <h6>Book your Course</h6>
                  <p>Complete your booking and get started learning how to drive</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7">
              <img src="../assets/illustration.png" alt="cars" class="img-fluid" max-width="300px" />
            </div>
          </div>
          <div class="text-center pb-5">
            <div class="mt-5">
              <h3>Need help choosing a course?</h3>
              <button class="btn btn-light px-5 py-2 primary-btn">Use our Course Recommender</button>
            </div>
          </div>
        </div>
      </section>

      <!------------- Section-3   REASON ------------->

      <section class="area section-3">
        <h1 class="text-white text-center">Why Choose Us</h1>
        <p class="text-white text-center">Lorem ipsum dolor sit amet.</p>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-12 text-left">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <!-- <img src="../assets/info-bar-countries.svg" class="img-fluid border-radius p-4" alt="Member">  -->
                  <!-- <i class="fas fa-tachometer-alt" style="height: 200px; width: 200px;"></i> -->
                </div>
                <div class="card-body">
                  <img
                    src="../assets/info-bar-countries.svg"
                    class="img-fluid border-radius p-4"
                    alt="globe"
                  />
                  <h3 class="card-title text-left">Intensive Courses</h3>
                  <p class="card-text text-left">
                    No matter how much experience you’ve previously had, we can
                    help you to pass within weeks of booking in—even on a busy
                    schedule!
                  </p>
                  <!-- <a href="#" class="text-decoration-none">DISCOVER OUR COURSES</a> -->
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 text-left">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <!-- <img src="../assets/info-bar-countries.svg" class="img-fluid border-radius p-4" alt="Member">  -->
                  <!-- <i class="fas fa-tachometer-alt" style="height: 200px; width: 200px;"></i> -->
                </div>
                <div class="card-body">
                  <img
                    src="../assets/info-bar-customers.svg"
                    class="img-fluid border-radius p-4"
                    alt="customers"
                  />
                  <h3 class="card-title text-left">Expert Instruction</h3>
                  <p class="card-text text-left">
                    With our DVSA-approved instructors, you’re in safe hands.
                    They’ll teach you the skills you need to pass fast and
                    become a safe driver for life.
                  </p>
                  <!-- <a href="#" class="text-decoration-none">MEET OUR EXPERT INSTRUCTORS</a> -->
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 text-left">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <!-- <img src="../assets/info-bar-countries.svg" class="img-fluid border-radius p-4" alt="Member">  -->
                  <!-- <i class="fas fa-tachometer-alt" style="height: 200px; width: 200px;"></i> -->
                </div>
                <div class="card-body">
                  <img
                    src="../assets/info-bar-billions.svg"
                    class="img-fluid border-radius p-4"
                    alt="money"
                  />
                  <h3 class="card-title text-left">100% Money Back</h3>
                  <p class="card-text text-left">
                    If we can’t secure a suitable test date and instructor for
                    you within ten working days, you’re eligible for a full
                    refund. It’s as simple as that!
                  </p>
                  <!-- <a href="#" class="text-decoration-none">FIND OUT HOW IT WORKS</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="section-3">
        <div class="cover">
          <div class="container text-center">
            <h1 class="text-white">Why Choose Us</h1>
            <p class="text-secondary text-white">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="team row">
            <div class="col-md-4 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img
                    src="../assets/info-bar-countries.svg"
                    class="img-fluid border-radius p-4"
                    alt="Member"
                  />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Intensive Courses</h3>
                  <p class="card-text">
                    No matter how much experience you’ve previously had, we can
                    help you to pass within weeks of booking in—even on a busy
                    schedule!
                  </p>
                  <a href="#" class="text-decoration-none">DISCOVER OUR COURSES</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img
                    src="../assets/info-bar-customers.svg"
                    class="img-fluid border-radius p-4"
                    alt="Member"
                  />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Expert Instruction</h3>
                  <p class="card-text">
                    With our DVSA-approved instructors, you’re in safe hands.
                    They’ll teach you the skills you need to pass fast and
                    become a safe driver for life.
                  </p>
                  <a href="#" class="text-decoration-none">MEET OUR EXPERT INSTRUCTORS</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img
                    src="../assets/info-bar-billions.svg"
                    class="img-fluid border-radius p-4"
                    alt
                  />
                </div>
                <div class="card-body">
                  <h3 class="card-title">100% Money Back</h3>
                  <p class="card-text">
                    If we can’t secure a suitable test date and instructor for
                    you within ten working days, you’re eligible for a full
                    refund. It’s as simple as that!
                  </p>
                  <a href="#" class="text-decoration-none">FIND OUT HOW IT WORKS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->
      <img src="../assets/home_header_curve.svg" alt class="curve-bottom" />

      <!------------- Section-4     COURSES------------->

      <section class="section-4">
        <div class="container">
          <h1 class="text-dark text-center">Our Courses</h1>
          <p
            class="text-secondary text-center"
          >We offer a range of exciting courses for different skill levels</p>

          <div class="row">
            <div class="col-md-4 col-12 card-parent text-left">
              <div class="card mr-2 d-inline-block shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/UI-face-3.jpg"
                    class="img-fluid border-radius p-4"
                    alt="Member"
                  />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title text-left">Beginners</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, illo dolor soluta
                    assumenda minima quia velit officia sit exercitationem nam
                    ipsa, repellendus aut facilis quasi voluptas!
                  </p>
                  <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a> -->
                  <button class="btn btn-dark px-20 py-22 primary-btn">Go somewhere</button>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 text-center card-parent">
              <div class="card mr-2 d-inline-block shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/UI-face-3.jpg"
                    class="img-fluid border-radius p-4"
                    alt="Member"
                  />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title">Refreshers</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, illo dolor soluta
                    assumenda minima quia velit officia sit exercitationem nam
                    ipsa, repellendus aut facilis quasi voluptas!
                  </p>
                  <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a> -->
                  <button class="btn btn-dark px-20 py-22 primary-btn">Go somewhere</button>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-12 text-center card-parent">
              <div class="card mr-2 d-inline-block shadow">
                <div class="card-img-top">
                  <img src="../assets/UI-face-4.jpg" class="img-fluid border-radius p-4" alt />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title">Advanced</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, illo dolor soluta
                    assumenda minima quia velit officia sit exercitationem nam
                    ipsa, repellendus aut facilis quasi voluptas!
                  </p>
                  <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a> -->
                  <button class="btn btn-dark px-20 py-22 primary-btn">Go somewhere</button>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <h3>Need help choosing a course?</h3>
            <button class="btn btn-light px-5 py-2 primary-btn">Use our Course Recommender</button>
          </div>
        </div>
      </section>

      <!--------------------------------- Section-5    APPS---------------------------->

      <!-- <section class="section-5 p-0 text-center">
        <div class="container-fluid">
          <div class="col-md-12 col-sm-12">
            <h1>Get Started On Your Driving Plan</h1>
            <p>
              You can sign up through all platforms to get book a course and
              fixed a plan
            </p>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="desktop shadow-lg">
                <div class="d-flex flex-row justify-content-center">
                  <a href>
                    <span>
                      <img src="..//assets/website.svg" alt="Website" />
                    </span>
                  </a>
                  
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="desktop shadow-lg">
                <div class="d-flex flex-row justify-content-center">
                  <a href="#">
                    <span>
                      <img src="..//assets/store-apple.svg" alt="Download on App Store" />
                    </span>
                  </a>
                  <div class="text text-center"></div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="desktop shadow-lg">
                <div class="d-flex flex-row justify-content-center">
                  <a href="#">
                    <span>
                      <img src="..//assets/store-google.svg" alt="Download on Play Store" />
                    </span>
                  </a>
                  <div class="text text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->

      <!--------------------- Section-6   TESTIMONY ----------------------------------->

      <section class="section-6">
        <div class="container text-center">
          <h1 class="text-dark text-center">Our Customers</h1>
          <p class="text-secondary text-center">Hear what our customers have to say</p>
          <div class="row">
            <div class="col-md-4 col-12 mb-lg-0 card-parent text-center">
              <div class="card mr-2 d-inline-block shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/UI-face-1.jpg"
                    class="img-fluid rounded-circle w-50 p-4"
                    alt="Member"
                  />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Jasmine</h3>
                  <p class="card-text">
                    I have had so many problems driving and as soon as I had my
                    first lesson with him I felt better I felt safer I passed
                    with only 7 minors with only 20 hours driving lessons he is
                    the nicest instructor 🎊 1/6/2020
                  </p>
                  <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>-->
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center card-parent">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <div class="card mr-2 d-inline-block shadow">
                      <div class="card-img-top">
                        <img
                          src="../assets/UI-face-1.jpg"
                          class="img-fluid rounded-circle w-50 p-4"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Mohammed</h3>
                        <p class="card-text">
                          Ali Ibrahim has been an excellent instructor. He has
                          your best interest throughout the experience. I did an
                          intensive 7-day course and passed! 7Days Driving School
                          really provided me goog oportunity.
                        </p>
                        <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a> 
                        <p class="text-black-50">CEO at Google</p>-->
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card d-inline-block mr-2 shadow">
                      <div class="card-img-top">
                        <img
                          src="../assets/UI-face-2.jpg"
                          class="img-fluid rounded-circle w-50 p-4"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Amiel Barbara</h3>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint iure autem recusandae, veniam, illo dolor
                          soluta assumenda minima quia velit officia sit
                          exercitationem nam ipsa, repellendus aut facilis quasi
                          voluptas!
                        </p>
                        <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                        <p class="text-black-50">CEO at Google</p>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow">
                <div class="card-img-top">
                  <img src="../assets/UI-face-2.jpg" class="img-fluid rounded-circle w-50 p-4" alt />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Olivia Louis</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, illo dolor soluta
                    assumenda minima quia velit officia sit exercitationem nam
                    ipsa, repellendus aut facilis quasi!
                  </p>
                  <!-- <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!------------------------------------- Section-7   BLOG  -------------------->

      <section class="section-7">
        <div class="container">
          <h1 class="text-dark text-center">Updates from our Blog</h1>
          <p class="text-secondary text-center">Get informed on the latest from our blog</p>

          <div class="row">
            <div class="col-md-4 col-12">
              <div class="card mr-2 d-inline-block shadow-sm">
                <div class="card-img-top">
                  <img src="../assets/UI-face-6.jpeg" class="img-fluid p-0" alt="Member" />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title text-left">Our Pass Photo of the Week—Megan from Solihull!</h3>
                  <p class="text-black-50 text-left">6th November, 2019</p>
                  <p class="card-text text-left">
                    Time to reveal our top pass photo of the week—it's Megan
                    from Solihull! Find out how she came to earn her driving
                    licence with PassMeFast!
                  </p>
                  <a href="#" class="text-decoration-none">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-sm">
                <div class="card-img-top">
                  <img src="../assets/UI-face-3.jpg" class="img-fluid p-0" alt="Member" />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title text-left">Our Pass Photo of the Week—Megan from Solihull!</h3>
                  <p class="text-black-50 text-left">6th November, 2019</p>
                  <p class="card-text text-left">
                    Time to reveal our top pass photo of the week—it's Megan
                    from Solihull! Find out how she came to earn her driving
                    licence with PassMeFast!
                  </p>
                  <a href="#" class="text-decoration-none">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-sm">
                <div class="card-img-top">
                  <img src="../assets/UI-face-4.jpg" class="img-fluid p-0" alt />
                </div>
                <div class="card-body text-left">
                  <h3 class="card-title text-left">Our Pass Photo of the Week—Megan from Solihull!</h3>
                  <p class="text-black-50 text-left">6th November, 2019</p>
                  <p class="card-text text-left">
                    Time to reveal our top pass photo of the week—it's Megan
                    from Solihull! Find out how she came to earn her driving
                    licence with PassMeFast!
                  </p>
                  <a href="#" class="text-decoration-none">Contninue reading</a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button class="btn btn-light px-5 py-2 primary-btn">Read more from our Blog</button>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container-fluid p-0">
        <div class="row text-left">
          <div class="col-md-5 col-sm-5">
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
          <div class="col-md-5 col-sm-12">
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
          <div class="col-md-2 col-sm-12">
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
              <i
                class="fa fa-heart pulse"
                style="color: red;"
              ></i> by
              <span>JkayLight</span>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- <Quiz /> -->
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
    // Quiz
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
  /* .container {
  } */
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
