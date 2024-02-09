import React from 'react'
import { VscCircleSmallFilled } from "react-icons/vsc";
import { useState } from 'react';

const Tree = ({month}) => {

    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    

    
  return (
    <div>
        <div  className="bg-[#1A3C46] rounded-md w-[16px] mx-auto"
        onClick={handleClick}
        >
          <VscCircleSmallFilled />
      </div>
      {showDetails && ( 
        <div className='bg-pink-200 p-4 flex flex-col'>
          <h3 className='bg-white rounded-md w-1/2 text-center text-1xl font-bold mx-auto'>{month}</h3>
          <br/>
          <p className=" bg-white rounded-lg w-1/2 text-center 
       text-1xl font-bold mx-auto">Rent: RS 4500</p>
          <br/>

          <p className=" bg-white rounded-lg w-1/2 text-center 
       text-1xl font-bold mx-auto">Electric bill: Upload image of your electric meter</p>

          <br/>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-1/2 text-center 
        text-1xl font-bold mx-auto">
            Pay Rent
          </button>
        </div>
        
      )}
    </div>
  )
}

export default Tree