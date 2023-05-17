import React, { useState } from "react";
import ".//App.css";
function App() {
  const [result, setResult] = useState("");

  const clearHandler = () => {
    setResult("");
  };
  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };
  const removeLastElementHandler = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <h2 style={{ opacity: "0.2" }}>-CALCULATOR-</h2>
      <div className="box">{result}</div>

      <div className="calcubtn">
        <button style={{ width: "90px", height:"40px" }} className="danger" onClick={clearHandler}>
          Clear
        </button>
        <button onClick={removeLastElementHandler} className="btn btn-danger">CC</button>

        <button   value="/" onClick={clickHandler}>
          /
        </button>
        <br />
        <button   value="7" onClick={clickHandler}>
          7
        </button>
        <button  value="8" onClick={clickHandler}>
          8
        </button>

        <button   value="9" onClick={clickHandler}>
          9
        </button>
        <button  value="*" onClick={clickHandler}>
          *
        </button>
        <br />
        <button   value="4" onClick={clickHandler}>
          4
        </button>
        <button   value="5" onClick={clickHandler}>
          5
        </button>

        <button   value="6" onClick={clickHandler}>
          6
        </button>

        <button value="-" onClick={clickHandler}>
          -
        </button>
        <br />
        <button   value="1" onClick={clickHandler}>
          1
        </button>
        <button   value="2" onClick={clickHandler}>
          2
        </button>
        <button  value="3" onClick={clickHandler}>
          3
        </button>
        <button  value="+" onClick={clickHandler}>
          +
        </button>
        <br />
        <button   style={{ width: "105px" }} value="0" onClick={clickHandler}>
          0
        </button>
        <button   value="." onClick={clickHandler}>
          .
        </button>
        <button   value="=" onClick={calculate}>
          =
        </button>
      </div>
    </>
  );
}
export default App;
