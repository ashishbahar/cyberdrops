import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import umberella from "../assets/images/png/sec_4_img1.png";
import umberella2 from "../assets/images/png/sec_4_img2.png";
import umberella3 from "../assets/images/png/sec_4_img3.png";

const OurAlgo = () => {
  return (
    <section className="bg-black py-5 position-relative">
      <div className="circle_bg_2"></div>
      <Container>
        <Row className="py-md-5 align-items-center justify-content-between flex-column-reverse flex-lg-row">
          <Col lg={6} className="mt-4 mt-lg-0">
            <h2 className=" ff_lato_700 fs_3xl color_white">
              Our <span className=" color_cream"> Algo</span>
            </h2>
            <p className="ff_lato_400 fs_xsm color_white mt-3">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>
          <Col lg={5}>
            <div className="d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row">
              <div className="d-flex flex-lg-column flex-sm-row flex-column me-lg-4">
                <img
                  className="mb-lg-4 w-100 border_linear_2 p-2 me-4 me-lg-0"
                  src={umberella}
                  alt="umberella"
                />
                <img
                  className=" w-100 border_linear_2 p-2 mt-4 mt-sm-0"
                  src={umberella2}
                  alt="umberella"
                />
              </div>
              <div>
                <img
                  className=" w-100  border_linear_2 p-2 mb-4 mb-lg-0 max_width_212"
                  src={umberella3}
                  alt="umberella"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurAlgo;
