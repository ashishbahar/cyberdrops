import React from "react";
import { Container } from "react-bootstrap";
import footer_img from "../assets/images/png/footer_img.png";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import m from "../assets/images/svg/m.svg";
import twiter from "../assets/images/svg/twiter.svg";

const Footer = () => {
  return (
    <section className="bg-black ">
    
      <Container>
        <div className="text-center py-3  position-relative">
          <div className="circle_bg_2 top-50"></div>
          <img src={footer_img} alt="footer_img" />
          <h3 className=" ff_lato_600 fs_2xl color_cream">Cyber Drops</h3>
          <p className=" max_width_440 m-auto ff_lato_400 fs_xsm color_white ">
            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl.
            Mattis maecenas libero lacinia accumsan amet.
          </p>
          <li className="d-flex mx-lg-4 justify-content-center mt-4">
            <a href="#" className="border_white mx-1 position-relative">
              <span className="img_shadow position-absolute"></span>
              <img
                className="m-2 max_width_28 position-relative  "
                src={boat}
                alt="boat"
              />
            </a>
            <a href="#" className="border_white mx-1 position-relative">
              <span className="img_shadow position-absolute"></span>
              <img
                className="m-2 max_width_28 position-relative "
                src={discord}
                alt="discord"
              />
            </a>{" "}
            <a href="#" className="border_white mx-1 position-relative">
              <span className="img_shadow position-absolute"></span>
              <img
                className="m-2 max_width_28 position-relative "
                src={twiter}
                alt="twiter"
              />
            </a>{" "}
            <a href="#" className="border_white mx-1 position-relative">
              <span className="img_shadow position-absolute"></span>
              <img
                className="m-2 max_width_28 position-relative "
                src={m}
                alt="m"
              />
            </a>
          </li>
        </div>
      </Container>
      <div className="footer_line"></div>
      <p className=" ff_lato_400 fs_xsm color_darkgrey m-0 py-3 text-center">
        Copyright By 2022
      </p>
    </section>
  );
};

export default Footer;
