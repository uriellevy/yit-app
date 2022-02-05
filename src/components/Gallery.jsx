import React, { useState } from "react";
import "./styles/Gallery.scss";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Gallery = ({
  category,
  title,
  subtitle,
  autor,
  color,
  currentImageToDisplay,
  setCurrentImageToDisplay,
  urlList,
}) => {
  const length = urlList.length;

  const nextHandler = () => {
    setCurrentImageToDisplay(
      currentImageToDisplay === length - 1 ? 0 : currentImageToDisplay + 1
    );
  };

  const prevHandler = () => {
    setCurrentImageToDisplay(
      currentImageToDisplay === 0 ? length - 1 : currentImageToDisplay - 1
    );
  };
  // console.log(currentImageToDisplay);
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        {!urlList[0].urlImage && urlList.length === 1 && (
          <img
            src="https://megatron.co.il/wp-content/uploads/2015/12/default-placeholder-1.png"
            alt="image"
            className="gallery-img-empty"
          />
        )}

        {urlList[0].urlImage && urlList.length === 1 && (
          <img src={urlList[0].urlImage} alt="image" className="gallery-img" />
        )}

        {urlList.length > 1 && urlList[urlList.length - 1].urlImage && (
          <div>
            <img
              src={urlList[currentImageToDisplay].urlImage}
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
        )}

        {urlList.length === 2 && !urlList[urlList.length - 1].urlImage && (
          <div>
            <img
              src={urlList[urlList.length - 2].urlImage}
              alt="image"
              className="gallery-img"
            />
          </div>
        )}

        {urlList.length > 2 && !urlList[urlList.length - 1].urlImage && (
          <div>
            <img
              src={urlList[urlList.length - 2].urlImage}
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
