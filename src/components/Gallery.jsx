import React from "react";
import "./styles/Gallery.scss";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1552980870-139c7b393f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
