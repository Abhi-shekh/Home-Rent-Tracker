import React from 'react';
import { VscCircleSmallFilled } from 'react-icons/vsc';
import { useState } from 'react';

const Tree = ({ month }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showMonth, setShowMonth] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleShow = () => {
    setShowMonth(true);
  };

  const handleHide = () => {
    setShowMonth(false);
  };

  return (
    <div>
      <div
        className="bg-[#344975a8] rounded-md w-[50px] h-[50px] mx-auto border border-black"
        onClick={handleClick}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
      >
        <VscCircleSmallFilled />
      </div>

      <div className=' flex mx-auto h-[10vw]'>
        {showDetails && (
          <div>
            <h3 className='bg-white rounded-md w-1/2 text-center text-1xl font-bold mx-auto mt-3'>{month}</h3>
            <br/>
            <p className="bg-white rounded-lg w-1/2 text-center text-1xl font-bold mx-auto">Rent: RS 4500</p>
            <br/>
            <input
              className="bg-white rounded-lg w-1/2 text-center text-1xl font-bold mx-auto"
              placeholder='enter your latest unit here e.g.. 564'
            />
            <br/>
            <button className='bg-white rounded-md w-1/2 text-center text-1xl font-bold mx-auto mt-3'>
              Pay Rent
            </button>
          </div>

        )}
         </div>
         {showMonth && (
  <div className="fixed bottom-4 right-4 text-xl text-black bg-white p-4 rounded-md box">
    {month}
  </div>
)}

      </div>
   
  );
};

export default Tree;
