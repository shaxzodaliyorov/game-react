const Card = ({ item, clickHandle, id }) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card " + itemClass} onClick={() => clickHandle(id)}>
      <img src={item.img} alt="" />
    </div>
  );
};

export default Card;
