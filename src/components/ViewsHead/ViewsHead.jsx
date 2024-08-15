import React from 'react';
import './ViewsHead.css';

const ViewsHead = ({ allViews, setView }) => {

  const handleClick = (viewName) => {
    setView(viewName);
  };

  return (
    <div>
      {Object.keys(allViews).map(viewName => (
        <span
          key={viewName}
          className="viewName"
          onClick={() => handleClick(viewName)}
        >
          {viewName}
        </span>
      ))}
    </div>
  );
};

export default ViewsHead;
