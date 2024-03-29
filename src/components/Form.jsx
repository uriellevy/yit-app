import React, {useCallback} from "react";
import "./styles/Form.scss";
import { texts, colors } from "../consts";

const Form = ({
  setCategory,
  setTitle,
  setSubtitle,
  setAutor,
  setColor,
  currentImageToDisplay,
  setCurrentImageToDisplay,
  urlList,
  setUrlList,
}) => {
  
  const addNewInputHandler = (e) => {
    e.preventDefault();
    if (urlList.length <= 3 && urlList[urlList.length - 1]) {
      setUrlList([...urlList, ""]);
    }
  };

  const deleteHandler = (e, index) => {
    e.preventDefault();

    const list = [...urlList];
    list.splice(index, 1);
    setUrlList(list);
    if (list.length - 1 < index) {
      setCurrentImageToDisplay(index - 1);
    } else if (currentImageToDisplay !== index) {
      setCurrentImageToDisplay(currentImageToDisplay - 1);
    }
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

  const changeUrlHandler = (str, index) => {
    let regex =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      alert("Please enter valid URL.");
      return false;
    } else {
      const list = [...urlList];
      list[index] = str;
      setUrlList(list);
      setCurrentImageToDisplay(index);
      return true;
    }
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
                onClick={(e) => deleteHandler(e, index)}
              >
                {texts.FORM_BUTTON_DELETE}
              </button>
            )}

            <input
              className="image-input"
              dir="rtl"
              type="text"
              name="imageUrl"
              onChange={(e) => changeUrlHandler(e.target.value, index)}
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
          {colors.map((color, index) => (
            <option value={color[1]} key={index}>
              {color[0]}
            </option>
          ))}
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
          maxLength="45"
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
