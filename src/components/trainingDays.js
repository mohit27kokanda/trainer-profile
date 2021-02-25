import React from "react";

const trainingDays = () => {
  return (
    <>
      <div className="container py-5 daysContainer">
        <div className="row ">
          <div className="col-6 circle-col ">
            <div className="circle mon">Monday</div>
            <div className="circle tue">Tuesday</div>
            <div className="circle wed">Wednesday</div>
            <div className="circle thu">Thursday</div>
            <div className="circle fri">Friday</div>
            <div className="circle sat">Saturday</div>
            <div className="circle sun">Sunday</div>
          </div>
          <div className="col-6 people-div">
            <div className="note">
              <h3>People I love training with</h3>
              <div class="">
                <a href="#" class="btn btn1">
                  WOMEN
                </a>
                <a href="#" class="btn btn2">
                  MEN
                </a>
                <a href="#" class="btn btn3">
                  SENIOR CITIZEN
                </a>
                <a href="#" class="btn btn4">
                  OVERWEIGHT/OBESE
                </a>
                <a href="#" class="btn btn5">
                  BRIDE TO BE
                </a>
                <a href="#" class="btn btn6">
                  YOUTH
                </a>
                <a href="#" class="btn btn7">
                  MODEL
                </a>
                <a href="#" class="btn btn8">
                  WOMEN PRE-MENOPAUSE
                </a>
                <a href="#" class="btn btn9">
                  WOMEN POST-MENOPAUSE
                </a>
                <a href="#" class="btn btn10">
                  PREGNANT WOMEN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default trainingDays;
