import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='flex flex-col gap-10 h-full my-20'>
        <div className='flex gap-10'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='flex gap-10'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        
    </div>
  )
}

export default Cards