import React from 'react'
import Template from './Template'

const LeftPart = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='h-36 w-36 bg-[#9AB8BC] rounded-lg'>

      </div>
      <div className='h-36 mx-auto text-white ml-1'>
        <Template/>
      </div>
    </div>
  )
}

export default LeftPart