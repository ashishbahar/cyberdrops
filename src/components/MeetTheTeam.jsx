import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import silder_img_1 from "../assets/images/png/slider_1.png";
import silder_img_2 from "../assets/images/png/slider_2.png";
import fade_img2 from "../assets/images/png/fade_img2.png";
import discord2 from "../assets/images/svg/discord2.svg";
import m2 from "../assets/images/svg/m2.svg";
import twiter2 from "../assets/images/svg/twiter2.svg";
const MeetTheTeam = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section className="bg-black  position-relative start-0">
      <img
        className=" position-absolute top_23 d-none d-xl-block  start-0"
        src={fade_img2}
        alt="fade_img2"
      />{" "}
      <img
        className=" position-absolute bottom_50 d-none d-xl-block  end-0"
        src={fade_img2}
        alt="fade_img2"
      />
      <h2 className="ff_lato_700  fs_3xl color_white text-center">
        Meet The <span className="color_cream">Team</span>
      </h2>
      <Container className="m-0 m-auto py-md-5 pb-5">
        <Row className="py-5 w-100">
          <Slider {...settings} className="m-0">
            <Col lg={6} className="px-4">
              <div className=" bg-white rounded-5">
                {" "}
                <Row className="align-items-center">
                  <Col xs={12} sm={6} className="m-auto">
                    <img
                      className="w-100"
                      src={silder_img_1}
                      alt="silder_img_1"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="text-center mt-3 mt-sm-0">
                    <h2>Varun Muthu</h2>
                    <p>Marketing Director</p>
                    <p>https: // www.linkedin.com /in /varunmuthu1</p>
                    <div className="d-flex justify-content-center pb-4 pb-sm-0">
                      <img src={discord2} alt="linkimg" />
                      <img className="mx-3" src={twiter2} alt="linkimg" />
                      <img src={m2} alt="linkimg" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>{" "}
            <Col lg={6} className="px-4">
              <div className=" bg-white rounded-5">
                {" "}
                <Row className="align-items-center">
                  <Col xs={12} sm={6} className="m-auto">
                    <img
                      className="w-100"
                      src={silder_img_2}
                      alt="silder_img_2"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="text-center mt-3 mt-sm-0">
                    <h2>Shubh Sharma</h2>
                    <p>Operations Director</p>
                    <p>https: // www.linkedin.com /in /shubhsharma01/</p>{" "}
                    <div className="d-flex justify-content-center pb-4 pb-sm-0">
                      <img src={discord2} alt="linkimg" />
                      <img className="mx-3" src={twiter2} alt="linkimg" />
                      <img src={m2} alt="linkimg" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>{" "}
            <Col lg={6} className="px-4 ">
              <div className=" bg-white rounded-5">
                {" "}
                <Row className="align-items-center">
                  <Col xs={12} sm={6} className="m-auto">
                    <img
                      className="w-100"
                      src={silder_img_1}
                      alt="silder_img_1"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="text-center mt-3 mt-sm-0">
                    <h2>Varun Muthu</h2>
                    <p>Marketing Director</p>
                    <p>https: // www.linkedin.com /in /varunmuthu1</p>{" "}
                    <div className="d-flex justify-content-center pb-4 pb-sm-0">
                      <img src={discord2} alt="linkimg" />
                      <img className="mx-3" src={twiter2} alt="linkimg" />
                      <img src={m2} alt="linkimg" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default MeetTheTeam;
