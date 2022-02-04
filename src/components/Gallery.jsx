import React, { useState } from "react";
import "./styles/Gallery.scss";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Gallery = ({ imageList }) => {
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        <img
          src={imageList[imageList.length - 1]}
          alt="image"
          className="gallery-img"
        />
        <MdOutlineArrowBackIosNew className="arrow left" />
        <MdOutlineArrowForwardIos className="arrow right" />
      </div>
      <div className="gallery-content">
        <h2 className="gallery-category">חופש</h2>
        <h2 className="gallery-title">הטבע הפראי של קוסטה ריקה</h2>
        <p className="gallery-text">
          {" "}
          גם אני מת לצאת כבר לחופש מהעבודה ולגור איזה חצי שנה בבונגלו מתחת לעץ
          קוקוס. רק צריך שהילדים יגיעו לגיל 10 ושאעבוד בעבודה מרחוק. סעמק
        </p>
        <h4 className="gallery-autor">מישהו שמבין</h4>
      </div>
    </div>
  );
};

export default Gallery;
