import React, { useState } from 'react';

const Tab = ({ onToggleChange }) => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
    onToggleChange(id);
  };

  return (
    <div>
      <div className=' flex rounded-full bg-[#5F6265]'>
        <ul className='flex'>
          <div
            className={`px-10 py-3 rounded-full ${toggle === 1 ? 'bg-primary' : ''}`}
            onClick={() => updateToggle(1)}
          >
            <li>Students</li>
          </div>
          <div
            className={`px-10 py-3 rounded-full ${toggle === 2 ? 'bg-primary' : ''}`}
            onClick={() => updateToggle(2)}
          >
            <li>Professors</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
