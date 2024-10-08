import React,{ useState } from 'react'
export default function Textform(props) {
  const handleUpclick =()=>{
    // console.log(text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChnage =(event)=>{
    // console.log("On Chnage");
    setText(event.target.value);
  }
  const [text, setText] =useState('Enter text Here'); 
  return (
    <div>
        <div classNmae="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChnage} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpclick}>Change to Uppercase</button>
    </div>
  )
}
