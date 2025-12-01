import React, { useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(true);

  const [salom, setSalom] = useState([
    { title: "Hoji", id: 1 },
    { title: "Javlonbek", id: 2 },
    { title: "Sasha", id: 3 },
    { title: "Sardor", id: 4 },
    { title: "Mustafo", id: 5 },
    { title: "Mansurbek", id: 6 }
  ]);

  return (
    <div className="App">
      
      {/* Tugma joy almashadi */}
      {showContent ? (
        <button onClick={() => setShowContent(false)}>Yashirish</button>
      ) : (
        <button onClick={() => setShowContent(true)}>Ko‘rsatish</button>
      )}

      {/* Kontent */}
      {showContent &&
        salom.map((sat) => (
          <div key={sat.id}>
            <h1>{sat.title}</h1>
          </div>
        ))
      }

    </div>
  );
}

export default App;
