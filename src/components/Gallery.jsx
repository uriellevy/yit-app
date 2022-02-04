import React, { useState } from "react";
import "./styles/Gallery.scss";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Gallery = ({
  imageList,
  category,
  title,
  subtitle,
  autor,
  color,
  current,
  setCurrent,
}) => {
  const length = imageList.length;

  const nextHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  // console.log(imageList);
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        {imageList.length === 0 ? (
          <img
            src="https://megatron.co.il/wp-content/uploads/2015/12/default-placeholder-1.png"
            alt="image"
            className="gallery-img-empty"
          />
        ) : (
          <div>
            {imageList.length > 1 ? (
              <div>
                <img
                  src={imageList[current]}
                  alt="image"
                  className="gallery-img"
                />
                <MdOutlineArrowBackIosNew
                  className="arrow left"
                  onClick={prevHandler}
                />
                <MdOutlineArrowForwardIos
                  className="arrow right"
                  onClick={nextHandler}
                />
              </div>
            ) : (
              <img
                src={imageList[imageList.length - 1]}
                alt="image"
                className="gallery-img"
              />
            )}
          </div>
        )}
      </div>
      <div className="gallery-content">
        <h2
          className="gallery-category"
          style={{ backgroundColor: !color ? "#000" : color }}
        >
          {!category ? "קטגוריה" : category}
        </h2>
        <h2 className="gallery-title">{!title ? "כותרת" : title}</h2>
        <p className="gallery-text">
          {!subtitle ? "נא להקליד כותרת משנה" : subtitle}
        </p>
        <h4 className="gallery-autor">{!autor ? "שם המחבר" : autor}</h4>
      </div>
    </div>
  );
};

export default Gallery;
