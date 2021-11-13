import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  // STATE
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log("title clicked", index);
    setActiveIndex(index);
  };

  // Renders each Item
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
