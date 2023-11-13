// ToggleSwitch.js

import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isStudents, setIsStudents] = useState(true);

  const handleToggle = () => {
    setIsStudents(!isStudents);
  };

  return (
    <div className="flex items-center space-x-4">
      <span
        onClick={() => setIsStudents(true)}
        className={`toggle-label cursor-pointer ${
          isStudents ? 'text-white bg-yellow-500' : 'text-gray-800 bg-gray-200'
        }`}
      >
        Students
      </span>
      <div className="relative w-20 h-10">
        <input
          type="checkbox"
          checked={isStudents}
          onChange={handleToggle}
          className="toggle-switch-checkbox sr-only"
        />
        <span className="toggle-switch-slider absolute w-20 h-10 bg-gray-400 rounded-full cursor-pointer transition-all duration-300">
          <span
            className={`toggle-switch-knob absolute w-10 h-10 bg-white rounded-full shadow-md transform ${
              isStudents ? '' : 'translate-x-full'
            } transition-all duration-300`}
          ></span>
        </span>
      </div>
      <span
        onClick={() => setIsStudents(false)}
        className={`toggle-label cursor-pointer ${
          !isStudents ? 'text-white bg-blue-500' : 'text-gray-800 bg-gray-200'
        }`}
      >
        Lecturers
      </span>
    </div>
  );
};

export default ToggleSwitch;
