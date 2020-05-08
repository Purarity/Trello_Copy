import React, { useState, useEffect } from "react";
import ListView from "../components/ListView";
import { list } from "./../fakeService/cardList";

function Main(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(list);
  }, []);

  return (
    <>
      <ListView list={lists} />
    </>
  );
}

export default Main;
