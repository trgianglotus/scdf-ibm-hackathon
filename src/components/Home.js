import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => (
  <React.Fragment>
    <div class="slider_area">
      <div class="single_slider d-flex align-items-center slider_bg_1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-7 col-md-6">
              <div class="slider_text">
                <h3
                  class="wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  Safety with a Home
                  <br />
                  Emergency Detection System (EDS)
                </h3>
                <p
                  class="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  An unintrusive smart home to notify users of critical events
                  like an elderly felling, leaving the gas stove on and more!
                </p>
                <div
                  class="video_service_btn wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  <Link className="boxed-btn3" to="/register">
                    Register Here
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-md-6">
              <div
                class="phone_thumb wow fadeInDown"
                data-wow-duration="1.1s"
                data-wow-delay=".2s"
              >
                <img src="img/ilstrator/phone.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div
              class="section_title text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".3s"
            >
              <h3>
                Keep your Home and Loved Ones Safe
                <br /> There's No Price for Safety
                {/* using applab */}
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div
              class="single_service text-center wow fadeInUp"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              <div class="thumb">
                <img src="img/icon/2.svg" alt="" />
              </div>
              <h3>
                State of the art AI <br />
                detecting potential incidents
              </h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div
              class="single_service text-center wow fadeInUp"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div class="thumb">
                <img src="img/icon/1.svg" alt="" />
              </div>
              <h3>
                Dashboard for sensors, <br />
                data, profile information
              </h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div
              class="single_service text-center wow fadeInUp"
              data-wow-duration=".8s"
              data-wow-delay=".6s"
            >
              <div class="thumb">
                <img src="img/icon/3.svg" alt="" />
              </div>
              <h3>
                Realtime notifications to <br />
                Whatsapp, Email and more
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service_area_2">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
            data-wow-duration=".4s"
            data-wow-delay=".5s"
          >
            <div class="man_thumb">
              <img src="img/ilstrator_img/man_walk.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-6">
            <div
              class="mobile_screen wow fadeInRight"
              data-wow-duration=".8s"
              data-wow-delay=".5s"
            >
              <img src="img/ilstrator_img/mobile_screen.png" alt="" />
            </div>
          </div>
        </div>
        <div class="service_content_wrap">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div
                class="single_service wow fadeInUp"
                data-wow-duration=".5s"
                data-wow-delay=".3s"
              >
                <span>01</span>
                <h3>Registration and payment</h3>
                <p>Register, select your tier and pay once</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div
                class="single_service wow fadeInUp"
                data-wow-duration=".6s"
                data-wow-delay=".4s"
              >
                <span>02</span>
                <h3>Hardware and Sensor Installation</h3>
                <p>We come to your house to install the necessary equipment</p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 wow fadeInUp"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div class="single_service">
                <span>03</span>
                <h3>Be notified for any potential issues</h3>
                <p>
                  Choose how you want to be notified, through WhatsApp, calls,
                  text, email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="productivity_area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-md-12 col-lg-6">
            <h3
              class="wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              Get started now! <br />
            </h3>
          </div>
          <div class="col-xl-5 col-md-12 col-lg-6">
            <div
              class="app_download wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <a href="#">
                <img src="img/ilstrator/app.svg" alt="" />
              </a>
              <a href="#">
                <img src="img/ilstrator/play.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
