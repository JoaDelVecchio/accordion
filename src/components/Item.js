import { useState } from "react";

const Item = ({ n, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className={`number`}>{n < 10 ? `0${n}` : n}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box text">{text}</div>}
    </div>
  );
};

export default Item;
