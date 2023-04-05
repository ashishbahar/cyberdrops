import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playbit from "../assets/images/png/playbit.png";
import twentyfour from "../assets/images/png/twentyfour.png";
import blueish from "../assets/images/png/bluish.png";
import threeclr from "../assets/images/png/3clr.png";
const Partners = () => {
  return (
    <section className="bg-black pt-lg-5  ">
      <Container className="pt-lg-5">
        <h2 className=" pt-5 text-center ff_lato_700 fs_3xl color_white">
          Part<span className="color_cream">ners</span>
        </h2>
      </Container>
      <div className="bg_img_1 py-xxl-5">
        <Container className="py-lg-5 my_3xl_5 ">
          <Row className="py-lg-5 mt-lg-5 ">
            <Col lg={4} className="py-4">
              <div className="border_linear py-4 text-center">
                <img className="my-2" src={playbit} alt="playbit" />
              </div>
              <p className=" text-center mt-4 ff_lato_700 fs_sm color_black clr_white">
                Playbit
              </p>
            </Col>
            <Col lg={8} className="py-lg-4  ">
              <Row className=" justify-content-center">
                <Col lg={4} sm={6}>
                  <div className="border_linear text-center">
                    <img src={twentyfour} alt="twentyfour " />
                  </div>
                  <p className=" text-center mt-4 ff_lato_700 fs_sm color_black clr_white ">
                    24 Capital
                  </p>
                </Col>
                <Col lg={4} sm={6}>
                  <div className="border_linear text-center">
                    <img src={blueish} alt="bluish" />
                  </div>
                  <p className=" text-center mt-4 ff_lato_700 fs_sm color_black clr_white">
                    TradingHive
                  </p>
                </Col>
                <Col lg={4} sm={6}>
                  <div className="border_linear text-center">
                    <img src={threeclr} alt="threeclr" />
                  </div>
                  <p className=" text-center mt-4 ff_lato_700 fs_sm color_black clr_white">
                    Focus Group Equities
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <p className="text-center ff_lato_700 fs_xsm color_cream mb-0  ">
          For business and collaborations, contact us team@cyberdrops.finance
        </p>
      </div>
    </section>
  );
};

export default Partners;
