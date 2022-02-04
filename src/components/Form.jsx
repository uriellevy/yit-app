import React, { useState } from "react";
import "./styles/Form.scss";

const Form = ({
  imageList,
  setImageList,
  setCategory,
  setTitle,
  setSubtitle,
  setAutor,
  setColor,
  color,
  current,
  setCurrent,
}) => {
  const [url, setUrl] = useState([{ url: "" }]);

  const addUrlHandler = (e) => {
    e.preventDefault();
    if (url.length <= 4 && imageList.length === url.length) {
      setUrl([...url, { url: "" }]);
    }
    console.log(imageList);
  };

  const addImageHandler = (e) => {
    setImageList([...imageList, e.target.value]);
    setCurrent(imageList.length - 1);
    console.log(current);
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

  const colorHandler = (e) => {
    setColor(e.target.value);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form className="form-container">
      <label htmlFor="images" className="images-title">
        תמונות
      </label>

      <ul>
        {url.map((url, index) => (
          <div className="image-control" key={index}>
            <button className="btn btn-delete" onClick={deleteHandler}>
              מחק
            </button>
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
        <select
          name="colors"
          onChange={colorHandler}
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
          שם קטגוריה
        </label>
        <input
          type="text"
          className="form-input"
          dir="rtl"
          onChange={categoryHandler}
          maxlength="15"
          placeholder="בחר קטגוריה"
        />
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          כותרת
        </label>
        <textarea
          type="text"
          maxlength="50"
          className="form-input"
          dir="rtl"
          placeholder="בחר כותרת"
          onChange={titleHandler}
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          כותרת משנה
        </label>
        <textarea
          type="text"
          maxlength="120"
          className="form-input"
          dir="rtl"
          placeholder=" בחר כותרת משנה"
          onChange={subtitleHandler}
        ></textarea>
      </div>
      <div className="form-category">
        <label htmlFor="background-color" className="form-label">
          שם המחבר
        </label>
        <input
          type="text"
          className="form-input"
          dir="rtl"
          maxlength="25"
          placeholder=" בחר את שם המחבר"
          onChange={autorHandler}
        />
      </div>
    </form>
  );
};

export default Form;
