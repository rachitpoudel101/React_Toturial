import { useState, useSyncExternalStore } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert ({
        msg : message,
        type: type
      })
  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="Navbar Icon" about="About Me" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Textform heading ='Enter the text to analysis' mode={mode}/>
      <About/>
    </div>
    </>
  );
}


export default App;
