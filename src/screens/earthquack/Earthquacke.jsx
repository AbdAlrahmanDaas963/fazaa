import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HeaderBanner2 from "../../components/banner2/banner2";

function Earthquacke() {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner2 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

Earthquacke.propTypes = {
  classes: PropTypes.object,
};

export default Earthquacke;
