import React from "react";
import hindi from "../assets/hindi.png";
import english from "../assets/english.png";
import gujrati from "../assets/gujrati.png";
import bengali from "../assets/bengali.png";
import punjabi from "../assets/punjabi.png";

const language = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 language py-5">
            <ul>
              <li>
                <img src={hindi}></img>
                <p> Hindi</p>
              </li>
              <li>
                <img src={english}></img>
                <p>English</p>
              </li>
              <li>
                <img src={gujrati}></img>
                <p>Gujrati</p>
              </li>
              <li>
                <img src={bengali}></img>
                <p> Bengali</p>
              </li>
              <li>
                <img src={punjabi}></img>
                <p>Punjabi</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default language;
