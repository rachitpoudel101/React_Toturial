import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
// import Textform from './component/Textform';

function App() {
  return (
    <>
    <Navbar title="Navbar Icon" about="About Me" />
    <div className="container my-3">
      {/* <Textform heading ='Enter the text to analysis'/> */}
      <About/>
    </div>
    </>
  );
}


export default App;
