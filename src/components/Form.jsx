import React, { useState } from "react";
import "./styles/Form.scss";

const Form = ({ imageList, setImageList }) => {
  const [url, setUrl] = useState([{ url: "" }, { url: "" }]);

  const addUrlHandler = (e) => {
    e.preventDefault();
    if (url.length <= 4) {
      setUrl([...url, { url: "" }]);
    }
  };

  const addImageHandler = (e) => {
    console.log(e.target.value);
    setImageList([...imageList, e.target.value]);
  };

  console.log(imageList);
  // console.log(url);
  return (
    <form className="form-container">
      <label htmlFor="images" className="images-title">
        תמונות
      </label>

      <ul>
        {url.map((url, index) => (
          <div className="image-control" key={index}>
            <button className="btn btn-delete">מחק</button>
            <input
              className="image-input"
              dir="rtl"
              onChange={addImageHandler}
            />
          </div>
        ))}
      </ul>

      <button className="form-btn" onClick={addUrlHandler}>
        הוסף תמונה
      </button>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          צבע רקע - שם קטגוריה
        </label>
        <select name="colors" className="form-input" dir="rtl">
          <option value="red">אדום</option>
          <option value="blue">כחול</option>
          <option value="black">שחור</option>
          <option value="yellow">צהוב</option>
        </select>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          שם קטגוריה
        </label>
        <input type="text" className="form-input" dir="rtl" />
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          כותרת
        </label>
        <textarea
          type="text"
          maxlength="30"
          className="form-input"
          dir="rtl"
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          כותרת משנה
        </label>
        <textarea
          type="text"
          maxlength="60"
          className="form-input"
          dir="rtl"
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          שם המחבר
        </label>
        <input type="text" className="form-input" dir="rtl" />
      </div>
      {/* <button className="form-btn form-submit">הוסף לגלריה</button> */}
    </form>
  );
};

export default Form;
