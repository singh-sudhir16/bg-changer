import React, { useState } from 'react'

function BgChanger() {
    const [color,setColor]=useState("gray")
  return (
    <div id="div" className='w-full h-full' style={{backgroundColor:color}}>
        <button className='bg-red-500 text-white' onClick={()=>{
            setColor("red")
        }}>Red</button>
        <button className='bg-green-500 text-white' onClick={()=>{
            setColor("green")
        }}> Green</button>
        <button className='bg-yellow-500 text-white' onClick={()=>{
            setColor("yellow")
        }}>Yellow</button>
        <button className='bg-blue-500 text-white' onClick={()=>{
            setColor("blue")
        }}>Blue</button>
    </div>
  )
}

export default BgChanger