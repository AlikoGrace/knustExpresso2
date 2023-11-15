// ServicesCard.jsx

// ServicesCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ServicesCard = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-black text-white rounded-md overflow-hidden my-4">
      <div className="flex items-center p-4">
        <div>
          {props.icon} {/* Render the icon passed as a prop */}
        </div>
        <div className="flex flex-col pl-4">
          <h2 className="text-lg font-bold mb-2">{props.title}</h2>
          <p className="text-gray-600">{props.message}</p>
        </div>
      </div>
    </div>
  );
};



export default ServicesCard;

