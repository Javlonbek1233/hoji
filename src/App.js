import { useState } from "react";

// 1-vazifa: 3 ta component
function Header() {
  return <h2>Bu Header qismi</h2>;
}

function Content() {
  return <p>Bu Content qismi</p>;
}

function Footer() {
  return <h3>Bu Footer qismi</h3>;
}

// 2-vazifa: Product component
function Product({ name, price }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Narxi: {price} so'm</p>
    </div>
  );
}

// 3-vazifa: Student component
function Student({ name, age }) {
  return (
    <div style={{ margin: "5px", border: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Yosh: {age}</p>
    </div>
  );
}

// 6-vazifa: Matn almashish
function ToggleText() {
  const [text, setText] = useState("Assalomu alaykum");
  return (
    <div>
      <h2>{text}</h2>
      <button
        onClick={() =>
          setText(
            text === "Assalomu alaykum"
              ? "Xush kelibsiz!"
              : "Assalomu alaykum"
          )
        }
      >
        Almashtir
      </button>
    </div>
  );
}

// 7-vazifa: Like button
function LikeButton() {
  const [like, setLike] = useState(0);
  return <button onClick={() => setLike(like + 1)}>Like {like}</button>;
}

// 10-vazifa Card
function Card({ img, title }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

// ---- ASOSIY APP ----
function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"} style={{ padding: "20px" }}>

      <h1>3 ta vazifa birlashtirilgan web sahifa</h1>

      {/* 1-vazifa */}
      <Header />
      <Content />
      <Footer />

      <hr />

      {/* 2-vazifa */}
      <h2>Mahsulotlar</h2>
      <Product name="Olma" price={5000} />
      <Product name="Banan" price={20000} />
      <Product name="Gilos" price={18000} />
      <Product name="Anor" price={15000} />
      <Product name="Nok" price={9000} />

      <hr />

      {/* 3-vazifa */}
      <h2>Studentlar</h2>
      <Student name="Ali" age={20} />
      <Student name="Vali" age={22} />
      <Student name="Hasan" age={19} />

      <hr />

      {/* 4-vazifa */}
      <h2>10 ta raqam</h2>
      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}

      <hr />

      {/* 5-vazifa */}
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <hr />

      {/* 6-vazifa */}
      <ToggleText />

      <hr />

      {/* 7-vazifa */}
      <LikeButton />

      <hr />

      {/* 8-vazifa */}
      <section className="box">
        <h2>8-Vazifa: Foydalanuvchi ismini chiqarish</h2>
        <input
          type="text"
          placeholder="Ismingizni yozing..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Salom, {name || "..."}</p>
      </section>

      <hr />

      {/* 9-vazifa */}
      <section className="box">
        <h2>9-Vazifa: Dark / Light Mode</h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </section>

      <hr />

      {/* 10-vazifa */}
      <section className="box">
        <h2>10-Vazifa: Props orqali rasm chiqarish</h2>
        <div className="cards">
          <Card img="https://picsum.photos/200?1" title="Rasm 1" />
          <Card img="https://picsum.photos/200?2" title="Rasm 2" />
          <Card img="https://picsum.photos/200?3" title="Rasm 3" />
        </div>
      </section>

    </div>
  );
}

export default App;
