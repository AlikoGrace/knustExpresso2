// Services.jsx

import React from 'react';
import Tab from '../../shared/Tab';
import ServicesCard from './ServicesCard';
import servicesDataStudents from './ServicesDataStudents';
import servicesDataLecturers from './ServicesDataLecturers';
import { useState } from 'react';

const Services = () => {
  const [toggle, setToggle]=useState(1)

  const handleToggleChange=(id)=>{
    setToggle(id)
  }
  return (
    <section id='services' className="flex flex-col bg-black text-white  items-center">
      <h1 className=" lg:text-4xl text-3xl leading-[40px] lg:leading-[50px] font-bold my-10 text-center">
        The ultimate platform for <br />
        all research enthusiasts
      </h1>
      <Tab onToggleChange={handleToggleChange}/>
      <div className={`flex flex-wrap ${toggle === 1 ? '' : 'toggle-content'}`}>
        {servicesDataStudents.map((service, index) => (
          <ServicesCard
            key={index}
            icon={<service.icon size={30} style={{ color: '#F5693D' }} />}
            title={service.title}
            message={service.message}
            className='w-1/3 lg:w-1/2 xl:w-1/3'
          />
        ))}
      </div>
      <div className={`flex flex-wrap ${toggle === 2 ? '' : 'toggle-content'}`}>
        {servicesDataLecturers.map((service, index) => (
          <ServicesCard
            key={index}
            icon={<service.icon size={30} style={{ color: '#F5693D' }} />}
            title={service.title}
            message={service.message}
            className='w-1/3 lg:w-1/2 xl:w-1/3'
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
