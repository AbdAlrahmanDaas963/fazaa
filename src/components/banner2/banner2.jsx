import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Earthquacke 2023</h1>
            <h4 className="subtitle font-light">
              كن اول من يساعد
              <br /> فزعة
            </h4>

            <Link
              to="/#coming"
              className="btn btn-md m-t-30 btn-info-gradiant font-14"
            >
              ابدأ الان
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner2;
