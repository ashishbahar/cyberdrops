import React from "react";
import { Container } from "react-bootstrap";


const RoadMap = () => {
  return (
    <section className="bg_img bg-black pt-5">
      <p className="ff_lato_700 fs_3xl color_white text-center pb-5">
        Road<span className="color_cream">Map</span>
      </p>
      <Container>
        <div className="max_width_825 mx-auto">
          <div class="timeline">
            <div class="container_roadmap right">
              <div class="content max_width_299 ms-sm-5 ms_sm_0">
                <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="container_roadmap2 pt-5  left text-end">
              <div class="content_left">
                <div className="padding_right  text_sm_left">
                  <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div class="container_roadmap3 right">
              <div class="content max_w_30 0 ms-sm-5 ms_sm_0">
                <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Creation of Treasury
                </p>
              </div>
            </div>
            <div class="container_roadmap4 pt-5 ms_50  left text-end">
              <div class="content_left">
                <div className="padding_right text_sm_left">
                  <h2 className="ff_lato_600 fs_lg color_white">April 2022</h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    Our First Airdrop
                  </p>
                </div>
              </div>
            </div>
            <div class="container_roadmap5   right">
              <div class="content max_w_30 0 ms-sm-5 ms_sm_0">
                <h2 className="ff_lato_600 fs_lg color_white">June 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">Major Collabs</p>
              </div>
            </div>
            <div class="container_roadmap6 pt-5 left ms_50 text-end">
              <div class="content_left">
                <div className="padding_right text_sm_left">
                  <h2 className="ff_lato_600 fs_lg color_white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    Cyber Celebs come on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div class="container_roadmap7 right">
              <div class="content max_w_30 0 ms-sm-5 ms_sm_0">
                <h2 className="ff_lato_600 fs_lg color_white">
                  Sometime in Q3
                </h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Streetwear + Merch
                </p>
              </div>
            </div>
          </div>
          <div class="container_roadmap8 pt-5 ms_50 left text-end">
            <div class="content_left">
              <div className="padding_right text_sm_left">
                <h2 className="ff_lato_600 fs_lg color_white">
                  Sometime in Q4
                </h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Enhanced Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
