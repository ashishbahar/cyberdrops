import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec_2_img from "../assets/images/png/section_2img.png";
const OurMission = () => {
  return (
    <section className="bg-black position-relative">
      <div className="circle_bg"></div>
      <Container>
        <Row className="align-items-center py-5 ">
          <Col className="text-center text-lg-start">
            <img
              className="w-100 max_width_440"
              src={sec_2_img}
              alt="sec_2_img"
            />
          </Col>
          <Col lg={5} className=" mt-4 mt-lg-0">
            <h2 className=" ff_lato_700 fs_3xl color_white">
              Our <span className="color_cream"> Mission</span>
            </h2>
            <p className="ff_lato_400 fs_xsm color_white mt-3">
              We understand that one of the biggest concerns for early-stage
              investors is that it can quickly become stressful, overwhelming,
              and especially extremely time consuming. It isn’t easy to balance
              a full time job, family, and an active investment portfolio,
              especially when just starting out.
            </p>
            <button className="simlier_btn ff_lato_600 fs_md color_white border-0 mt-lg-5 mt-3">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMission;
