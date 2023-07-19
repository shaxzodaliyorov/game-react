import { useState } from "react";
import Card from "./card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/images/1.jpg", stat: "" },
      { id: 1, img: "/images/1.jpg", stat: "" },
      { id: 2, img: "/images/2.jpg", stat: "" },
      { id: 2, img: "/images/2.jpg", stat: "" },
      { id: 3, img: "/images/3.jpg", stat: "" },
      { id: 3, img: "/images/3.jpg", stat: "" },
      { id: 4, img: "/images/4.jpg", stat: "" },
      { id: 4, img: "/images/4.jpg", stat: "" },
      { id: 5, img: "/images/5.jpg", stat: "" },
      { id: 5, img: "/images/5.jpg", stat: "" },
      { id: 6, img: "/images/6.jpg", stat: "" },
      { id: 6, img: "/images/6.jpg", stat: "" },
      { id: 7, img: "/images/7.jpg", stat: "" },
      { id: 7, img: "/images/7.jpg", stat: "" },
      { id: 8, img: "/images/8.png", stat: "" },
      { id: 8, img: "/images/8.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (items[current].id == items[prev].id) {
      items[current].stat = "carrect";
      items[prev].stat = "carrect";
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };

  const clickHandle = (id) => {
    items[id].stat = "active";
    setItems([...items]);
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => {
        return (
          <Card clickHandle={clickHandle} id={index} key={index} item={item} />
        );
      })}
    </div>
  );
};

export default Cards;
