import { useState } from "react";


// ---- ASOSIY APP ----
function App() {
  const [salom, alik] = useState([
    { title: "React", id: 1 },
    { title: "JSX", id: 2 },
    { title: "Props", id: 3 }
  ]);
  const royxat = (id) => alik((pre) => pre.filter((e) => e.id !== id));

  const [sal, al] = useState([
    { title: "Hojikbar", id: 1 },
    { title: "Javlonbek", id: 2 },
    { title: "Sasha", id: 3 },
    { title: "Sardor ", id: 4 }
  ]);
  const deletee = (id) => al((pre) => pre.filter((e) => e.id !== id));
  function ToggleText() {
    const [text, setText] = useState("4.Salom");
    return (
      <div>
        <h2>{text}</h2>
        <button
          onClick={() =>
            setText(
              text === "4.Salom"
                ? "4.Xayr!"
                : "4.Xayr"
            )
          }
        >
          Almashtir
        </button>
      </div>
    );

  }
 
  return (
    <div style={{ padding: "20px" }}>
             <h1>1 Reactga xush kelibsiz </h1>
             <hr />
             <ToggleText />
             <hr />
             <h1> 5 useState bilan ishlash</h1>
      {salom.map((sat) => (
        <div key={sat.id}>
          <li>{sat.title}</li>
        </div>
      ))}
      <hr />
      <h1> 6. O‘chirish</h1>
      {sal.map((sat) => (
        <div key={sat.id}>
          <h2>{sat.title}</h2>
          <button onClick={() => deletee(sat.id)}>O‘chirish</button>
        </div>
      ))}
      <hr />
      <Salo name="Hojikbar" />
      <Salo name="Javlonbek" />
      <Salo name="Sardor" />
      <hr />
      <Card name="title" />
      <Butto name="img" />
      <User name="text" />
      <hr />
      
    </div>
  );
}

export default App;
function Salo(props) {
  return <h1>3.Salom Name, {props.name}</h1>;
}
function Card(props) {
  return <li>7. {props.name}</li>;
}
function Butto(props) {
  return <li>{props.name}</li>;
}
function User(props) {
  return <li> {props.name}</li>;
}
