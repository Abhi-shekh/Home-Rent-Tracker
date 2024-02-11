import React from 'react';
import { VscCircleSmallFilled } from "react-icons/vsc";
import Navbar from '../components/Navbar';
import Tree from '../components/tree/Tree';

const FeeStructure = () => {
  
  return (
    
    <div>

       <div className=' text-white flex gap-4 text-1xl font-bold'>
        Fee Structure
        </div>
        <Navbar />

    <div className=' bg-[#1A3C46] w-[95vw] h-full relative flex flex-col items-center justify-center '>
      <br/>
      <br/>
      <br/>
      <br/> 
      <div className='flex flex-col gap-2'>
          <Tree month={"January"} />
          <Tree month={"February"} />
          <Tree month={"March"} />
          <Tree month={"April"} />
          <Tree month={"May"} />
          <Tree month={"June"} />
          <Tree month={"July"} />
          <Tree month={"August"} />
          <Tree month={"September"} />
          <Tree month={"October"} />
          <Tree month={"November"} />
          <Tree month={"December"} />
        </div>
      
    </div>
    </div>

  );
};

export default FeeStructure;
