import React from "react";
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

  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        {urlList.length === 1 && (
          <div>
            {!urlList[0] ? (
              <img
                src="https://megatron.co.il/wp-content/uploads/2015/12/default-placeholder-1.png"
                alt="image"
                className="gallery-img-empty"
              />
            ) : (
              <img src={urlList[0]} alt="image" className="gallery-img" />
            )}
          </div>
        )}

        {urlList.length === 2 && urlList[urlList.length - 1] === "" && (
          <div>
            <img src={urlList[0]} alt="image" className="gallery-img" />
          </div>
        )}

        {urlList.length > 1 && (
          <div>
            {urlList[urlList.length - 1] !== "" ? (
              <img
                src={urlList[currentImageToDisplay]}
                alt="image"
                className="gallery-img"
              />
            ) : (
              <img
                src={urlList[urlList.length - 2]}
                alt="image"
                className="gallery-img"
              />
            )}

            {urlList[1] !== "" && (
              <div>
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
