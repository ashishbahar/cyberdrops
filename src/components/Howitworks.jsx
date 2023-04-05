import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Howitworks = () => {
  return (
    <section className="bg-black py-5">
      <h2 className=" ff_lato_700 pt-md-5 mt-lg-5 fs_3xl color_white text-center ">
        How it <span className="color_cream">works</span>
      </h2>
      <Container>
        <Row className="mt-lg-5 pt-lg-3 pt-2 pb-lg-5 mb-lg-5">
          <Col sm={6} lg={3} className="mt-4">
            <div className="text-center border_linear_3 pt-5 box_hover">
              <span className=" ff_lato_700 fs_xl color_white p-3   no_modify">
                01
              </span>
              <h5 className=" ff_lato_700 fs_md color_white pt-5">Mint NFT</h5>
              <p className=" ff_lato_400 fs_xsm color_white pb-3 pt-2 px-3 px-lg-0">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mt-4">
            {" "}
            <div className="text-center border_linear_3 pt-5 box_hover">
              <span className=" ff_lato_700 fs_xl color_white p-3   no_modify">
                02
              </span>
              <h5 className=" ff_lato_700 fs_md color_white pt-5">
                Verify NFT Ownership
              </h5>
              <p className=" ff_lato_400 fs_xsm color_white pb-3 pt-2 ">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mt-4">
            {" "}
            <div className="text-center border_linear_3 pt-5 box_hover">
              <span className=" ff_lato_700 fs_xl color_white p-3   no_modify">
                03
              </span>
              <h5 className=" ff_lato_700 fs_md color_white pt-5">
                Link API to your account
              </h5>
              <p className=" ff_lato_400 fs_xsm color_white pb-3 pt-2 ">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mt-4">
            {" "}
            <div className="text-center border_linear_3 pt-5 box_hover">
              <span className=" ff_lato_700 fs_xl color_white p-3   no_modify">
                04
              </span>
              <h5 className=" ff_lato_700 fs_md color_white pt-5">
                Passive Income for life
              </h5>
              <p className=" ff_lato_400 fs_xsm color_white pb-3 pt-2 ">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Howitworks;
