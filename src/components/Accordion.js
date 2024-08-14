import { useState } from "react";
import Item from "./Item.js";
function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);
  const handleToggle = (n) => {
    setCurrOpen(n);
  };
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item
          key={i}
          n={i + 1}
          title={faq.title}
          onOpen={handleToggle}
          currOpen={currOpen}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

export default Accordion;
