<template>
  <div>
    <main>
      <!------------- Section-1 ------------->
      <div class="section-1 m-0">
        <div class="container ">
          <div class="row d-flex">
            <div
              class="col-12 col-md-6 text-left justify-content-center align-self-center"
            >
              <div class="">
                <h2 class="display-5 text-white mt-0">
                  Reach out to us
                </h2>
                <p class="text-white text-left">
                  We are available for inquirires, complaints and suggestions
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 pt-0">
              <img
                src="../assets/illustration.png"
                alt="cars"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <section class="contact">
        <div class="container text-left">
          <div class="row contact-area">
            <div class="col-6 col-md-6">
              <img
                src="..//assets/send-email.png"
                alt="IMG"
                height="300px"
                width="560px"
              />
            </div>

            <div class="col-6 col-md-6">
              <form class="">
                <!-- <span class="contact1-form-title">
                    Get in touch
                    </span> -->

                <div class="validate-input" data-validate="Name is required">
                  <input
                    class="input1"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div
                  class="validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input1"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div class="" data-validate="Subject is required">
                  <input
                    class="input1"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div class="" data-validate="Message is required">
                  <textarea
                    class="input1"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <span class="shadow-input1"></span>
                </div>

                <div class="container-contact1-form-btn">
                  <input type="submit" value="Send Email" />

                  <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i>   -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
