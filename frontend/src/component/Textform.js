import React,{ useState } from 'react'
export default function Textform(props) {
  const handleUpclick =()=>{
    // console.log(text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handlelowclick =()=>{
    // console.log(text)
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }
  const cleartext =()=>{
    let newText = '';
    setText(newText)  
  }
  const handleOnChnage =(event)=>{
    // console.log("On Chnage");
    setText(event.target.value);
  }
  const [text, setText] =useState('Enter text Here'); 
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':"black"}}>
        <div classNmae="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode === 'light'? 'grey':'white',color :props.mode === 'dark'? 'white':"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpclick}>Change to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handlelowclick}>Change to Lowcase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={cleartext}>Clear Text</button>
    </div>
    <div className='container my-2' style={{color: props.mode === 'dark'? 'white':"black"}}>
    <h1> Yours text summary </h1>
    <p> {text.split(" ").length} words and {text.length} character</p> 
    <p> {0.008 *text.split(" ").length} Minutes</p> 
    <h4> Preview</h4>
    <p>{text}</p>
    </div>
    </>
  )
}
