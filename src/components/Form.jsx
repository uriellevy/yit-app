import React, { useState } from "react";
import "./styles/Form.scss";

const Form = () => {
  // const [url, setUrl] = useState([{ url: "" }, { url: "" }]);
  return (
    <div className="form-container">
      <label htmlFor="images" className="images-title">
        תמונות
      </label>

      <div className="image-control">
        <button className="btn btn-delete">מחק</button>
        <input className="image-input" />
      </div>

      <button className="form-btn">הוסף תמונה</button>
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
    </div>
  );
};

export default Form;
