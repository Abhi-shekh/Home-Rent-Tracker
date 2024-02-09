import React, { useState } from 'react';
import { VscCircleSmallFilled } from "react-icons/vsc";
import Navbar from '../components/Navbar';
import Tree from '../components/tree/Tree';

const FeeStructure = () => {
  // const [showDetails, setShowDetails] = useState(false);
  const [shoefeb, setshowFeb] = useState(false);


  // const handleHover = () => {
  //   setShowDetails(true);
  // };
  // const febHandler = () => {
  //   setshowFeb(true);
  // }


  // const handleLeave = () => {
  //   setShowDetails(false);
  // };
  // const febAdd = () => {
  //   setshowFeb(false);
  // }

  // const clickedhandler = () => {
  //   !showDetails ? setShowDetails(true) : setShowDetails(false);
  // };
  // const febClick = () => {
  //   setshowFeb(false);
  // }

  return (
    <div className=' relative bg-[#1A3C46]'>
      <Navbar/>
      <div className=' w-full h-full bg-[#1A3C46] gap-[20%] absolute top-14'>
    
      <h2 className=" text-slate-300 rounded-lg w-1/2 text-center 
       text-1xl font-bold mx-auto">Fee Structure</h2>

      <div className=' flex flex-col gap-4'>
        <Tree month={"January"}/>
        <Tree month={"February"}/>
        <Tree month={"March"}/>
      </div>
        
        
      
      

      {/* <div  className=" bg-white rounded-md w-[16px] mx-auto"
        onMouseEnter={febHandler}
        onMouseLeave={febAdd}
        // onClick={febClick}
        >
          <VscCircleSmallFilled />
      </div>
         */}
        
      {/* {setshowFeb && ( 
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
        
      )} */}
    </div>
    </div>
    
  );
};

export default FeeStructure;

