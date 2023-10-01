import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };
  const Calculate = () => {
    let finalResult = transformExpression();
    setResult(eval(finalResult).toString());
  };
  const transformExpression = () => {
    let tmp = result.replace("÷", "/").replace("x", "*");
    return tmp.toString();
  };
  return (
    <div className="calculator">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value="C"
        className="button"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="+/-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="÷"
        className="button button2"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="x"
        className="button button2"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button button2"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button button2"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button button1"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="="
        className="button button2"
        onClick={Calculate}
      />
    </div>
  );
};

export default App;
