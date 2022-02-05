import React, { useState } from "react";
import "./styles/Form.scss";
import { texts } from "../consts";

const Form = ({
  setCategory,
  setTitle,
  setSubtitle,
  setAutor,
  setColor,
  setCurrentImageToDisplay,
  urlList,
  setUrlList,
}) => {
  const addNewInputHandler = (e) => {
    e.preventDefault();
    if (urlList.length <= 3 && urlList[urlList.length - 1].urlImage) {
      setUrlList([...urlList, { imageUrl: "" }]);
    }
  };

  const changeUrlHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...urlList];
    list[index][name] = value;
    setUrlList(list);
    setCurrentImageToDisplay(index);
  };
  // console.log(urlList);

  const deleteHandler = (index) => {
    setCurrentImageToDisplay(index - 1);
    const list = [...urlList];
    list.splice(index, 1);
    setUrlList(list);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const subtitleHandler = (e) => {
    setSubtitle(e.target.value);
  };

  const autorHandler = (e) => {
    setAutor(e.target.value);
  };

  const selectColorHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <form className="form-container">
      <div className="title-wrapper">
        <label htmlFor="images" className="images-title">
          {texts.FORM_HEADER}
        </label>
      </div>

      <ul className="image-control-wrapper">
        {urlList.map((currentUrl, index) => (
          <div className="image-control" key={index}>
            {urlList.length > 1 && (
              <button
                className="btn btn-delete"
                onClick={() => deleteHandler(index)}
              >
                {texts.FORM_BUTTON_DELETE}
              </button>
            )}

            <input
              className="image-input"
              dir="rtl"
              name="urlImage"
              value={currentUrl.u}
              onChange={(e) => changeUrlHandler(e, index)}
            />
          </div>
        ))}
      </ul>

      <button className="form-btn" onClick={addNewInputHandler}>
        {texts.FORM_BUTTON_ADD}
      </button>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          {texts.FORM_BG_COLOR}
        </label>
        <select
          name="colors"
          onChange={selectColorHandler}
          className="form-input"
          dir="rtl"
        >
          <option value="black">שחור</option>
          <option value="rgb(199, 39, 39)">אדום</option>
          <option value="#25D366">ירוק</option>
          <option value="rgb(218, 218, 59)">צהוב</option>
          <option value="#128C7E">כחול</option>
        </select>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          {texts.FORM_CATEGORY}
        </label>
        <input
          type="text"
          className="form-input"
          dir="rtl"
          onChange={categoryHandler}
          maxLength="15"
          placeholder="בחר קטגוריה"
        />
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          {texts.FORM_TITLE}
        </label>
        <textarea
          type="text"
          maxLength="50"
          className="form-input"
          dir="rtl"
          placeholder="בחר כותרת"
          onChange={titleHandler}
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          {texts.FORM_SUBTITLE}
        </label>
        <textarea
          type="text"
          maxLength="105"
          className="form-input"
          dir="rtl"
          placeholder=" בחר כותרת משנה"
          onChange={subtitleHandler}
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          {texts.FORM_AUTOR}
        </label>
        <input
          type="text"
          className="form-input"
          dir="rtl"
          maxLength="25"
          placeholder=" בחר את שם המחבר"
          onChange={autorHandler}
        />
      </div>
    </form>
  );
};

export default Form;
