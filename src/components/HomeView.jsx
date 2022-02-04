import React, { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import "./styles/HomeView.scss";

const HomeView = () => {
  const [imageList, setImageList] = useState([]);
  const [current, setCurrent] = useState(imageList.length - 1);
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [autor, setAutor] = useState("");
  return (
    <>
      <div className="homeview-container">
        <Form
          imageList={imageList}
          setImageList={setImageList}
          setCategory={setCategory}
          setTitle={setTitle}
          setSubtitle={setSubtitle}
          setAutor={setAutor}
          setColor={setColor}
          current={current}
          setCurrent={setCurrent}
        />
        <Gallery
          imageList={imageList}
          category={category}
          title={title}
          subtitle={subtitle}
          autor={autor}
          color={color}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
};

export default HomeView;
