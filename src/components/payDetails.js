import React from "react";
import "../components/style.css";

function payDetails() {
  return (
    <div className="container-fluid bg-vector">
      <div className="row py-5">
        <div className="col-1"></div>
        <div className="col-3 card">
          <div className="card-cover">
            <div className="card-header">
              <h2>Popular Plan</h2>
              <p>
                <span className="icon-rupee"> ₹</span>
                <span> 276</span>/session
              </p>
            </div>
            <div className="card-body">
              <span>Buy 12 Sessions</span>

              <button>Save 8%</button>
            </div>
          </div>
        </div>
        <div className="col-3 card-center">
          <div className="card-cover">
            <div className="card-header-center">
              <h2>Starter Plan</h2>
              <p>
                <span className="icon-rupee"> ₹</span>
                <span> 276</span>/session
              </p>
            </div>
            <div className="card-body-center">
              <span>Buy 5 Sessions</span>
            </div>
          </div>
        </div>
        <div className="col-3 card">
          <div className="card-cover">
            <div className="card-header">
              <h2>Best Value Plan</h2>
              <p>
                <span className="icon-rupee"> ₹</span>
                <span> 255 </span>/session
              </p>
            </div>
            <div className="card-body">
              <span>Buy 24 Sessions</span>

              <button>Save 15%</button>
            </div>
          </div>
        </div>
        <div className="col-1 "></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 timming-block">
          <ul>
            <li>6:00 AM TO 7:00 AM</li>
            <li>8:00 AM TO 9:00 AM</li>
            <li>10:00 AM TO 11:00 AM</li>

            <li>4:00 PM TO 5:00 PM</li>
            <li>6:00 PM TO 7:00 PM</li>
            <li>7:00 PM TO 8:00 PM</li>
          </ul>
          <p>
            <span>Note:</span>Above charge are for in-person training. It does
            not include group discount. Moreover, price for online training is
            20% less than in-person training.
          </p>
          <div className="money-div">
            <span className="moneyBack"> * Money Back Guarantee * </span>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default payDetails;
