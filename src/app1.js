import React, { useState } from "react";
import "./App.css";
import Salom from "./source";
import { Card, Butto, User } from "./componet";

function App() {
  const [text1, setText1] = useState("Assalomu aleykum");
  const toggleText1 = () => {
    setText1(text1 === "Assalomu aleykum" ? "Valeykum assalom" : "Assalomu aleykum");
  };

  const [bgColor, setBgColor] = useState("pink");
  const toggleColor = () => {
    setBgColor(bgColor === "pink" ? "red" : "pink");
  };

  const [job, setJob] = useState("Frontend Developer");
  const [showPass, setShowPass] = useState(false);
  const [password] = useState("123456");

  const togglePassword = () => setShowPass(!showPass);

  const [lang, setLang] = useState("hello");
  const toggleLang = () => setLang(lang === "hello" ? "salom" : "hello");

  const [harf, setHarf] = useState("frontend");
  const toggleCase = () => setHarf(harf === "frontend" ? "FRONTEND" : "frontend");

  const [boxSize, setBoxSize] = useState("100px");
  const toggleSize = () => setBoxSize(boxSize === "100px" ? "200px" : "100px");

  const [btnText, setBtnText] = useState("Yoqish");
  const toggleBtn = () => setBtnText(btnText === "Yoqish" ? "O‘chirish" : "Yoqish");

  const [salom, alik] = useState([
    { title: "Hoji", id: 1 },
    { title: "Javlonbek", id: 2 },
    { title: "Sasha", id: 3 },
    { title: "Sardor", id: 4 },
    { title: "Mustafo", id: 5 },
    { title: "Mansurbek", id: 6 }
  ]);

  const deletee = (id) => alik((pre) => pre.filter((e) => e.id !== id));

  return (
    <div style={{ padding: "30px" }}>

      <Salom />
      <Card />
      <Butto />
      <User />

      <h1>🔥 1. Matnni almashtirish</h1>
      <h2>{text1}</h2>
      <button onClick={toggleText1}>Almashtir</button>
      <hr />

      <h1>🎨 2. Rang almashtirish</h1>
      <div style={{ width: "150px", height: "80px", background: bgColor }}></div>
      <button onClick={toggleColor}>Rangni o‘zgartir</button>
      <hr />

      <h1>🤖 3. Ikki tugma</h1>
      <h2>{job}</h2>
      <button onClick={() => setJob("React Developer")}>React Developer</button>
      <button onClick={() => setJob("JavaScript Developer")}>JavaScript Developer</button>
      <hr />

      <h1>🔐 4. Parol</h1>
      <h2>{showPass ? password : "******"}</h2>
      <button onClick={togglePassword}>{showPass ? "Yashirish" : "Ko‘rsatish"}</button>
      <hr />

      <h1>🌍 5. Tilni almashtirish</h1>
      <h2>{lang}</h2>
      <button onClick={toggleLang}>Tilni o‘zgartir</button>
      <hr />

      <h1>🔠 6. Katta/kichik harf</h1>
      <h2>{harf}</h2>
      <button onClick={toggleCase}>O‘zgartir</button>
      <hr />

      <h1>📦 7. Box o‘lchami</h1>
      <div style={{ width: boxSize, height: boxSize, background: "lightblue" }}></div>
      <button onClick={toggleSize}>Hajmni o‘zgartir</button>
      <hr />

      <h1>🖲️ 8. Tugma matni</h1>
      <button onClick={toggleBtn}>{btnText}</button>
      <hr />

      <h1>🗑️ 9. O‘chirish</h1>
      {salom.map((sat) => (
        <div key={sat.id}>
          <h2>{sat.title}</h2>
          <button onClick={() => deletee(sat.id)}>O‘chirish</button>
        </div>
      ))}

      <Salo name="Hoji" />
      <Salo name="Javlonbek" />
    </div>
  );
}

export default App;


// ✔ Funksiya return TASHQARISIDA turadi
function Salo(props) {
  return <h1>Salom Dunyo, {props.name}</h1>;
}
