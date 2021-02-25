import React from "react";

const trainingDays = () => {
  return (
    <>
      <div className="container py-5 daysContainer">
        <div className="row ">
          <div className="col-6 circle-col py-5">
            <div className="circle mon">Monday</div>
            <div className="circle tue">Tuesday</div>
            <div className="circle wed">Wednesday</div>
            <div className="circle thu">Thursday</div>
            <div className="circle fri">Friday</div>
            <div className="circle sat">Satuarday</div>
            <div className="circle sun">Sunday</div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default trainingDays;
