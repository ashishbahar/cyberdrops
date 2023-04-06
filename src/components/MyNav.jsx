import React, { useState } from "react";
import { Container } from "react-bootstrap";
import navlogo from "../assets/images/svg/navlogo.svg";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import m from "../assets/images/svg/m.svg";
import twiter from "../assets/images/svg/twiter.svg";
import cross from "../assets/images/svg/cross.svg";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className=" bg-black">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <ul className="m-0 p-0">
            <li>
              <a href="#">
                <img src={navlogo} alt="navlogo" />
              </a>
            </li>
          </ul>
          <ul
            className={
              first
                ? "m-0 p-0 d-flex align-items-center mobile_view hide "
                : "m-0 p-0 d-flex align-items-center mobile_view show  "
            }
          >
            <li className=" ms-lg-3">
              <a
                className=" ff_lato_400 fs_xsm color_white cream_hover link"
                href="#"
              >
                Home
              </a>
            </li>
            <li className=" ms-lg-3">
              <a
                className=" ff_lato_400 fs_xsm color_white cream_hover link"
                href="#"
              >
                About
              </a>
            </li>
            <li className=" ms-lg-3">
              <a 
                className=" ff_lato_400 fs_xsm color_white cream_hover link"
                href="#"
              >
                Team
              </a>
            </li>
            <li className=" ms-lg-3">
              <a
                className=" ff_lato_400 fs_xsm color_white cream_hover link"
                href="#"
              >
                Roadmap
              </a>
            </li>
            <li className=" ms-lg-3">
              <a
                className=" ff_lato_400 fs_xsm color_white cream_hover link"
                href="#"
              >
                Partners
              </a>
            </li>
            <li className="d-flex mx-lg-4">
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
                  className="m-2 max_width_28 position-relative  "
                  src={discord}
                  alt="discord"
                />
              </a>
              <a href="#" className="border_white mx-1 position-relative">
                <span className="img_shadow position-absolute"></span>
                <img
                  className="m-2 max_width_28 position-relative  "
                  src={twiter}
                  alt="twiter"
                />
              </a>
              <a href="#" className="border_white mx-1 position-relative">
                <span className="img_shadow position-absolute"></span>
                <img
                  className="m-2 max_width_28 position-relative  "
                  src={m}
                  alt="m"
                />
              </a>
            </li>
            <li>
              <a href="#" className="nav_ntn ff_lato_500 fs_xsm color_white ">
                Connect Wallet
              </a>
            </li>
            <img
              className=" position-absolute cross_position d-lg-none"
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
            />
          </ul>
          <div
            className=" mobile_icon d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="icon_line"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
