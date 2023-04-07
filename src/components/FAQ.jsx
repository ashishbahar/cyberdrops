import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import fade_img_3 from "../assets/images/png/fade_img3.png";
function BasicExample() {
  return (
    <section className="bg-black pb-5 position-relative">
      <div className="circle_bg end-0"></div>
      <img
        className="position-absolute bottom-50 start-0 d-none d-xl-block"
        src={fade_img_3}
        alt="fade_img_3"
      />
      <Container className="pb-lg-5">
        <h2 className=" ff_lato_700 fs_3xl color_cream text-center py-md-5 py-3">
          FAQ<span className="color_white">’s</span>
        </h2>
        <div className="max_width_1000 m-auto">
          <Accordion defaultActiveKey="0" className="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Egestas scelerisque duis quis aliquet. Consectetur?
              </Accordion.Header>
              <Accordion.Body className="color_white ff_lato_400 fs_xsm ">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-4">
              <Accordion.Header>
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </Accordion.Header>
              <Accordion.Body className="color_white ff_lato_400 fs_xsm">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2" className="mt-4">
              <Accordion.Header>
                Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                donec?
              </Accordion.Header>
              <Accordion.Body className="color_white ff_lato_400 fs_xsm">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3" className="mt-4">
              <Accordion.Header className="color_white">
                Porta amet tortor nec pulvinar urna. Et blandit sit id?
              </Accordion.Header>
              <Accordion.Body className="color_white ff_lato_400 fs_xsm">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header className="color_white">
                Tellus hendrerit fermentum ut hendrerit ac vestibulum?
              </Accordion.Header>
              <Accordion.Body className="color_white ff_lato_400 fs_xsm">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default BasicExample;
