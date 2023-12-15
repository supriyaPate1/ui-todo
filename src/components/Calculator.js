import React, { useState } from 'react'

export default function Calculator() {
    const [ques,setQues]=useState('');
    const [ans,setAns]=useState('');
    const handleInputClick=(e)=>{
        const value =e.target.value;
        setQues(ques+value)
    }
    const calculateResult=()=>{
        if(ques!==""){
            let cal='';
           cal=eval(ques)
           if(cal!==undefined){
            setAns(cal)
           }else{
            setAns("Math Error")
           }
        }
    }
  return (
    <>
    
    {ans!==""?<div className='answer'>{ans}</div>:<div className='question'>{ques}</div>}
    <div>
        <input onClick={(e)=>handleInputClick(e)} type="button" value={1}/>
        <input type="button" value="2" onClick={(e)=>handleInputClick(e)} />
        <input type="button" value="3" onClick={(e)=>handleInputClick(e)} />
        <input type="button" value="+" onClick={(e)=>handleInputClick(e)} />
    </div>
     <div>
     <input type="button" value="4" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="5" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="6" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="-" onClick={(e)=>handleInputClick(e)} />
 </div>
 <div>
     <input type="button" value="7" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="8" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="9" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="*" onClick={(e)=>handleInputClick(e)} />
 </div>
 <div>
     <input type="button" value="." onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="0" onClick={(e)=>handleInputClick(e)} />
     <input type="button" value="=" onClick={()=>calculateResult()} />
     <input type="button" value="/" onClick={(e)=>handleInputClick(e)} />
 </div>
 </>
  )
}
