import React, { useState } from 'react';
import { VscCircleSmallFilled } from "react-icons/vsc";

const FeeStructure = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [shoefeb, setshowFeb] = useState(false);


  const handleHover = () => {
    setShowDetails(true);
  };
  const febHandler = () => {
    setshowFeb(true);
  }


  const handleLeave = () => {
    setShowDetails(false);
  };

  const febAdd = () => {
    setshowFeb(false);
  }

  const clickedhandler = () => {
    setShowDetails(true);
  };
  
  // const febClick = () => {
  //   setshowFeb(false);
  // }

  return (
    
    <div className=' w-full h-full bg-neutral-600 gap-10'>
      <h2 className=" text-slate-300 rounded-lg w-1/2 text-center 
       text-1xl font-bold mx-auto">Fee Structure</h2>

      <div  className=" bg-white rounded-md w-[16px] mx-auto"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={clickedhandler}
        >
          <VscCircleSmallFilled />
      </div>
        
        
      {showDetails && ( 
        <div className='bg-pink-200 p-4 flex flex-col'>
          <h3 className='bg-white rounded-md w-1/2 text-center text-1xl font-bold mx-auto'>January</h3>
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
      

      <div  className=" bg-white rounded-md w-[16px] mx-auto"
        onMouseEnter={febHandler}
        onMouseLeave={febAdd}
        // onClick={febClick}
        >
          <VscCircleSmallFilled />
      </div>
        
        
      {setshowFeb && ( 
        <div className='bg-pink-200 p-4 flex flex-col'>
          <h3 className='bg-white rounded-md w-1/2 text-center text-1xl font-bold mx-auto'>FEB</h3>
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
  );
};

export default FeeStructure;

