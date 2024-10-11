import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  const [mode, setMode] =useState('light');
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Navbar Icon" about="About Me" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <Textform heading ='Enter the text to analysis'/>
      <About/>
    </div>
    </>
  );
}


export default App;
