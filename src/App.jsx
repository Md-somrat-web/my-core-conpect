import "./App.css";
import Counter from "./counter";
import BatsMan from "./batsman";
function App() {
  function handelClick() {
    alert("Iam Clicked.");
  }

  const handels5 = (num) => {
    const NewNum = num + 5;
    alert(NewNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <BatsMan></BatsMan>
      <Counter></Counter>

      <button onClick={handelClick}>Click me</button>
      <button onClick={() => alert("clicked")}>Click me</button>
      <button onClick={() => alert("offffs")}>Click hear</button>

      <button onClick={() => handels5(12)}>click add 5</button>
    </>
  );
}

export default App;
