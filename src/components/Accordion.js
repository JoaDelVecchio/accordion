import Item from "./Item.js";
function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item key={i} n={i + 1} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
}

export default Accordion;
