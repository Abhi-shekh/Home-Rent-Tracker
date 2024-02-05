import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

const CentrePanel = () => {
  return (
    <div className=' bg-[#d9d9d9] bg-opacity-50 flex justify-around items-center gap-[20%] w-3/4 mx-auto relative rounded-3xl top-32'>
        <LeftPart/>
        <RightPart/>     
    </div>
  )
}

export default CentrePanel