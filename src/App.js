import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { helloworld, add, fibonacci, greet, print, fetch_data } from "wasm-lib";

function fibonacciInJs(n) {
  if (n <= 1) return n;
  return fibonacciInJs(n - 1) + fibonacciInJs(n - 2);
}

function App() {
  const [hello, setHello] = useState("");
  const [ans, setAns] = useState(0);
  const [fib, setFib] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setHello(helloworld());
    setAns(add(1, 1));
    print();
  }, []);

  const handleFib = () => {
    const num = 20;

    console.time("Fibonnaci in rust");
    const fibRust = fibonacci(num);
    console.timeEnd("Fibonnaci in rust");

    console.time("Fibonnaci in JS");
    const fibJS = fibonacciInJs(num);
    console.timeEnd("Fibonnaci in JS");

    setFib(`Fib ${num}: ${fibRust}(rust), ${fibJS}(js)`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch_data(input);
    console.log("fetch_data res", res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{hello}</p>
        <p>1 + 1 = {ans}</p>
        <p>
          <button onClick={handleFib}>run fibonacci</button>
        </p>
        <p>{fib}</p>
        <p>
          <button
            onClick={() => {
              greet("gabe");
            }}
          >
            alert hello
          </button>
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              fetch:
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.currentTarget.value);
                }}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
