import React from "react";
import "./App.css";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";

  function MeuPlano() {
    return (
      <main className="main-container">
        <h1>Home</h1>
        <div className="saldos">
          <h2 className="entradas">Total Entradas: 6350</h2>
          <h2 className="saidas">Total Saídas: 4140</h2>
          <h2 className="saldo">Saldo Atual: 2210</h2>
        </div>
      </main>
    );
  }

function App() {
  return (
    <div>
      <Header />
      <MeuPlano />
      <Footer />
    </div>
  );
}

export default App;