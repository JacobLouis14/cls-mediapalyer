import React from "react";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-4 p-4 ms-md-5">
          <FontAwesomeIcon icon={faVideo} beat className="text-warning ms-3" />
          <span className="text-warning ms-3 fs-5">Media Player</span>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            debitis blanditiis sit praesentium eligendi non tempore quod soluta
            temporibus repudiandae deleniti eveniet aliquid accusantium,
            possimus voluptates porro facilis consequuntur. Dicta!
          </p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
          <div>
            <h5>Links</h5>
            <p className="mt-5">
              <Link to={"/"}>Landing Page</Link>
            </p>
            <p>
              <Link to={"/home"}>Home</Link>
            </p>
            <p>
              <Link to={"/watch-history"}>Watch History</Link>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <h5>Guides</h5>
          <p className="mt-5">React</p>
          <p>React-Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-3">
          <h5>Contact Us</h5>
          <div className="mt-5 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Email Id"
            />
            <button className="btn btn-warning ms-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
