import React, { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import "./styles/HomeView.scss";

const HomeView = () => {
  const [cardList, setCardList] = useState([
    {
      img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "freedom",
      title: "bla bla bla bla",
      subtitle: "freedom subtitle",
      autor: "israeli",
      bg: "red",
    },
    {
      img: "https://images.unsplash.com/photo-1552980870-139c7b393f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "freedom2",
      title: "bla bla bla bla222222",
      subtitle: "freedom subtitle2222",
      autor: "israeli22222",
      bg: "blue",
    },
  ]);
  console.log(cardList);
  return (
    <>
      <div className="homeview-container">
        <Form />
        <Gallery />
      </div>
    </>
  );
};

export default HomeView;
