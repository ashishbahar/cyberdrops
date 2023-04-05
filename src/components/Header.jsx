import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerimg from "../assets/images/png/header_img.png";
const Header = () => {
  return (
    <header className="bg-black position-relative">
      <div className="circle_bg"></div>
      <Container className=" pt-md-5">
        <Row className="py-lg-5 py-3 flex-column-reverse flex-lg-row">
          <Col lg={6} className="pt-lg-5 pt-md-4 pt-3">
            <div className="pe-lg-5">
              {" "}
              <h1 className=" ff_lato_800 fs_4xl color_white">
                Welcome to <span className="color_cream">Cyber Drops</span>
              </h1>
              <p className=" ff_lato_400 fs_xsm color_white mt-4">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <button className="simlier_btn ff_lato_600 fs_md color_white border-0 mt-lg-5 mt-4  ">
                Explore Now
              </button>
            </div>
          </Col>
          <Col lg={6} className="text-lg-end text-center">
            <img
              className="w-100 max_width_440"
              src={headerimg}
              alt="headerimg"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
