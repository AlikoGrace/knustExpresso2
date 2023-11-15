// ServicesCard.jsx


import React from 'react';
import PropTypes from 'prop-types';

const ServicesCard = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-black text-white rounded-md overflow-hidden my-4">
      <div className="flex flex-col items-center p-4">
        <div className='flex items-center'>
            {props.icon}
            <h2 className="text-lg font-bold px-2">{props.title}</h2>
        </div>
        <p className="text-gray-600 text-center">{props.message}</p>
        {/* <div>
          {props.icon}
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-lg font-bold mb-2"><span>{props.icon}</span>{props.title}</h2>
          <p className="text-gray-600">{props.message}</p>
        </div> */}
      </div>
    </div>
  );
};



export default ServicesCard;

