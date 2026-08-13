import { useEffect, useState } from 'react'
import pfp from "./assets/pfp.png"
import terminal_bg from "./assets/terminal_bg.png"
import './App.css'

function App() {
  
  const textos = [
    "Front-End Developer",
    "Back-End Developer",
    "Software Developer",
    "Game Developer"
  ];

  const [textoAtual, setTextoAtual] = useState("");
  const [indiceTexto, setIndiceTexto] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
  const textoCompleto = textos[indiceTexto];

  const timeout = setTimeout(() => {
    if (!apagando) {
      setTextoAtual(
        textoCompleto.substring(0, textoAtual.length + 1)
      );

      if (textoAtual === textoCompleto) {
        setTimeout(() => {
          setApagando(true);
        }, 1200);
      }

    } else {
      setTextoAtual(
        textoCompleto.substring(0, textoAtual.length - 1)
      );

      if (textoAtual === "") {
        setApagando(false);
        setIndiceTexto((indiceTexto + 1) % textos.length);
      }
    }
  }, apagando ? 50 : 100);

  return () => clearTimeout(timeout);

}, [textoAtual, apagando, indiceTexto]);

  return (
    <>
    
      <nav>
        <a>Início</a>
        <a>Tecnlogoias</a>
        <a>Projetos</a>
        <a>Links Úteis</a>
      </nav>
      <div className='hero'>
        <img className='pfp' width={"300px"} src={pfp}></img>
        <h2 className='name'>Guilherme Oliveira</h2>
        <img className='terminal' src={terminal_bg}></img>
        <h1 className='typing'>
          {textoAtual}
          <span className='cursor'>|</span>
        </h1>
      </div>
    </>
  )
}

export default App
