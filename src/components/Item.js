const Item = ({ n, title, currOpen, setCurrOpen, onOpen, children }) => {
  const isOpen = currOpen === n;
  return (
    <div className={`item ${isOpen && "open"}`} onClick={() => onOpen(n)}>
      <p className={`number`}>{n < 10 ? `0${n}` : n}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && children}
    </div>
  );
};

export default Item;
