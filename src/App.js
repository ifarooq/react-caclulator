import {
  useState,
  useRef
} from "react"; 
import "./App.css";
// Bootstrap CSS
//import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value =''
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult((result) => 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p>
         <div className="form-group">
      <input className="form-control"
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />  
        </div>
    
        <button className="btn btn-light col-md-1 mr-6" onClick={plus}>Add</button> 
        <button className="btn btn-light col-md-1" onClick={minus}>Sub</button>
          <button className="btn btn-light col-md-1" onClick={times}>Multiply</button> 
        <button className="btn btn-light col-md-1" onClick={divide}>Devide</button>
          <button className="btn btn-warning col-md-1" onClick={resetInput}>Reset Input</button> 
          <button className="btn btn-warning col-md-1" onClick={resetResult}>Reset Result</button> 
     
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
