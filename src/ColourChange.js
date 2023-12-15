import React, { useState } from 'react'

export default function ColourChange() {
    const [color,setColor]=useState("Red");
    const colour=["Red","Blue","Green","Yellow","Black","Grey"];
    const clickHandle=()=>{
        let upDate;
        let len=colour.length;
        upDate=Math.floor(Math.random()*len);
        console.log(upDate);
        setColor(colour[upDate]);
    }
  return (
    <div className='mydiv' style={{backgroundColor:`${color}`,width:"100vw",height:"100vh"}}>
    <div>ColourChange on Button Click</div>
     <button  onClick={clickHandle}>Change Colour</button>
    </div>

  )
}
