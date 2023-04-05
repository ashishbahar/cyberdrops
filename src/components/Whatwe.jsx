import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_1 from "../assets/images/png/sec_5_img1.png";
import img_2 from "../assets/images/png/sec_5_img2.png";
import img_3 from "../assets/images/png/sec_5_img3.png";
import fade_img from "../assets/images/png/fade_img.png";
const Whatwe = () => {
  return (
    <section className="bg-black position-relative">
      <div className="circle_bg_3"></div>
      <img className="d-none d-xl-block position-absolute fade_position" src={fade_img} alt="fade_img" />
      <Container>
        <Row className=" justify-content-between align-items-center">
          <Col lg={5}>
            <Row>
              <Col sm={6} xs={6}>
                <img
                  className="w_xl_100 max_width_250"
                  src={img_1}
                  alt="img_1"
                />
              </Col>
              <Col sm={6} xs={6} className="img_transform_2">
                <img
                  className="w_xl_100 max_width_250"
                  src={img_2}
                  alt="img_2"
                />
              </Col>
              <Col sm={6} xs={6} className="img_transform mt-sm-4 mt-xl-0 ">
                <img
                  className="w_xl_100 max_width_250"
                  src={img_3}
                  alt="img_3"
                />
              </Col>
              <Col
                sm={6}
                xs={6}
                className=" img_transform img_transform_3 mt-sm-4  mt-xl-0 "
              >
                <img
                  className="w_xl_100 max_width_250"
                  src={img_3}
                  alt="img_4"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <h2 className="   ff_lato_700 fs_3xl color_white mt-4 mt-lg-0">
              What <span className="color_cream"> we do</span>
            </h2>
            <p className="ff_lato_400 fs_xsm color_white mt-3">
              1000 Cyber Drops will be dropping on Ethereum in March 2022. Each
              and every Cyber Drop is uniquely hand crafted. This is just the
              beginning of our journey. Owning a Cyber Drop will unlock monthly
              airdrops and future governance rights in addition to our
              revolutionary algorithm. We strive to always bring innovation and
              keep BUILDing. Cyber Drops is a community driven project and
              always will be that way. That’s our promise.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Whatwe;
