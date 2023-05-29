import { useState } from "react";
import "./App.css";


function App() {
  //state varibales 
  const [count, setCount] = useState(0);
  const [errorVisiblity, setErrorVisiblity] = useState(false);

  //onClick handler functions

  const increaseController=()=>{
    setErrorVisiblity(false);
    setCount(count + 1)
  }

  const decreaseController=()=>{
    setErrorVisiblity(false);
    setCount(count -1)
  }

  return (
    <>
      <h2>Count : {count}</h2>
      {errorVisiblity && <p className="error-message">sorry count bound reached!</p>}
      <button
        onClick={() =>
          count < 10 ? increaseController() : setErrorVisiblity(true)
        }
      >
        increase
      </button>
      <button
        onClick={() =>
          count > 0 ? decreaseController() : setErrorVisiblity(true)
        }
      >
        decrease
      </button>
    </>
  );
}

export default App;
