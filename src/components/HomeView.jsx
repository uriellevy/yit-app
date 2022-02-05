import React, { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import "./styles/HomeView.scss";

const HomeView = () => {
  const [urlList, setUrlList] = useState([{}]);
  const [currentImageToDisplay, setCurrentImageToDisplay] = useState(
    urlList.length - 1
  );
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [autor, setAutor] = useState("");
  return (
    <>
      <div className="homeview-container">
        <Form
          setCategory={setCategory}
          setTitle={setTitle}
          setSubtitle={setSubtitle}
          setAutor={setAutor}
          setColor={setColor}
          currentImageToDisplay={currentImageToDisplay}
          setCurrentImageToDisplay={setCurrentImageToDisplay}
          urlList={urlList}
          setUrlList={setUrlList}
        />
        <Gallery
          category={category}
          title={title}
          subtitle={subtitle}
          autor={autor}
          color={color}
          currentImageToDisplay={currentImageToDisplay}
          setCurrentImageToDisplay={setCurrentImageToDisplay}
          urlList={urlList}
        />
      </div>
    </>
  );
};

export default HomeView;
