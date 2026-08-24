import { useEffect, useState } from 'react'
import pfp from "./assets/pfp.png"
import terminal_bg from "./assets/terminal_bg.png"
import pessam from "./assets/pessam.png"
import microconnect from "./assets/microconnet.png"
import portifolio from "./assets/portifolio.png"
import gd_logo from "./assets/gd_logo.png"
import ase_logo from "./assets/ase_logo.png"
import curriculo from "./assets/Currículo - Guilherme Oliveira.pdf"
import './App.css'

function App() {
  
  const logosImport = import.meta.glob("./assets/*_logo.svg", {
    eager: true,
    query: "?url",
    import: "default"
  })

  const logos = Object.fromEntries(
    Object.entries(logosImport).map(([path,url]) => {
      const nome = path
        .split("/")
        .pop()!
        .replace("_logo.svg", "")

      return [nome,url]
    })
  )
  
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
      <title>Guilherme Oliveira | Portifolio</title>
      <nav>
        <a href="#hero">Início</a>
        <a href='#tec'>Tecnologias</a>
        <a href="#proj">Projetos</a>
        <a href="#lu">Links Úteis</a>
      </nav>
      <div className='hero' id="hero">
        <img className='pfp' width={"300px"} src={pfp}></img>
        <h2 className='name'>Guilherme Oliveira</h2>
        <img className='terminal' src={terminal_bg}></img>
        <h1 className='typing'>
          {textoAtual}
          <span className='cursor'>|</span>
        </h1>
      </div>

      <h1 className='session' id="tec">Tecnologias</h1>
      <div className='tecnologias'>
        <div className='top'>
          <img className='icon' title="JavaScript" src={logos["js"]}></img>
          <img className='icon' title="C" src={logos["c"]}></img>
          <img className='icon' title="Python" src={logos["python"]}></img>
          <img className='icon' title="C++" src={logos["cpp"]}></img>
          <img className='icon' title="C#" src={logos["c-sharp"]}></img>
          <img className='icon' title="HTML" src={logos["html"]}></img>
        </div>
        <div className='bottom'>
          <img className='icon' title="TypeScript" src={logos["ts"]}></img>
          <img className='icon' title="React" src={logos["react"]}></img>
          <img className='icon' title="CSS" src={logos["css"]}></img>
          <img className='icon' title="Godot" src={logos["godot"]}></img>
          <img className='icon' title="Unity" src={logos["unity"]}></img>

        </div>
      </div>

      <h1 className='session' id="proj">Projetos</h1>

      <div className='projetos'>
        <div className='card'>
          <h1 className='title'>PESSAM - 2025</h1>
          <div className='body'>
            <img src={pessam}></img>
            <div className='right'>
              <p>Projeto desenvolvido em Godot para a Feira de Ciências do Colégio FAAT, em Atibaia/SP, com o objetivo de abordar saúde mental e apoio emocional de forma interativa e acessível.</p>
              <div className='bottom'>
                <button onClick={()=>window.location.href="https://github.com/guihPprt/PESSAM-godot-"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                        <path d="M20 0C17.3736 0 14.7728 0.516905 12.3463 1.5212C9.91982 2.5255 7.71504 3.99752 5.85786 5.85322C2.10714 9.60097 0 14.684 0 19.9841C0 28.8171 5.74 36.3112 13.68 38.969C14.68 39.1289 15 38.5094 15 37.9698V34.5925C9.46 35.7916 8.28 31.9146 8.28 31.9146C7.36 29.5965 6.06 28.977 6.06 28.977C4.24 27.738 6.2 27.7779 6.2 27.7779C8.2 27.9178 9.26 29.8363 9.26 29.8363C11 32.8739 13.94 31.9746 15.08 31.495C15.26 30.196 15.78 29.3167 16.34 28.8171C11.9 28.3175 7.24 26.5989 7.24 18.9849C7.24 16.7667 8 14.9881 9.3 13.5692C9.1 13.0696 8.4 10.9913 9.5 8.29341C9.5 8.29341 11.18 7.75384 15 10.3318C16.58 9.89214 18.3 9.67232 20 9.67232C21.7 9.67232 23.42 9.89214 25 10.3318C28.82 7.75384 30.5 8.29341 30.5 8.29341C31.6 10.9913 30.9 13.0696 30.7 13.5692C32 14.9881 32.76 16.7667 32.76 18.9849C32.76 26.6189 28.08 28.2975 23.62 28.7971C24.34 29.4166 25 30.6357 25 32.4942V37.9698C25 38.5094 25.32 39.1489 26.34 38.969C34.28 36.2912 40 28.8171 40 19.9841C40 17.3598 39.4827 14.7611 38.4776 12.3365C37.4725 9.91195 35.9993 7.70891 34.1421 5.85322C32.285 3.99752 30.0802 2.5255 27.6537 1.5212C25.2272 0.516905 22.6264 0 20 0Z" fill="white"/>
                  </svg>
                  <a>
                    GitHub
                  </a>
                </button>
                <div className='tecu'>
                  <h3>Tecnlogias Usadas</h3>
                  <div>
                    <img className='icon' title="GDScript" src={gd_logo}></img>
                    <img className='icon' title="Godot" src={logos["godot"]}></img>
                    <img className='icon' title="Aseprite" src={ase_logo}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='card'>
          <h1 className='title'>MicroConnect - 2026</h1>
          <div className='body'>
            <img src={microconnect}></img>
            <div className='right'>
              <p>Plataforma web criada para aproximar pequenos produtores rurais de compradores, desenvolvida com HTML, CSS e JavaScript.</p>
              <div className='bottom'>
                <button onClick={()=>window.location.href="https://github.com/guihPprt/projeto_integrador"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                        <path d="M20 0C17.3736 0 14.7728 0.516905 12.3463 1.5212C9.91982 2.5255 7.71504 3.99752 5.85786 5.85322C2.10714 9.60097 0 14.684 0 19.9841C0 28.8171 5.74 36.3112 13.68 38.969C14.68 39.1289 15 38.5094 15 37.9698V34.5925C9.46 35.7916 8.28 31.9146 8.28 31.9146C7.36 29.5965 6.06 28.977 6.06 28.977C4.24 27.738 6.2 27.7779 6.2 27.7779C8.2 27.9178 9.26 29.8363 9.26 29.8363C11 32.8739 13.94 31.9746 15.08 31.495C15.26 30.196 15.78 29.3167 16.34 28.8171C11.9 28.3175 7.24 26.5989 7.24 18.9849C7.24 16.7667 8 14.9881 9.3 13.5692C9.1 13.0696 8.4 10.9913 9.5 8.29341C9.5 8.29341 11.18 7.75384 15 10.3318C16.58 9.89214 18.3 9.67232 20 9.67232C21.7 9.67232 23.42 9.89214 25 10.3318C28.82 7.75384 30.5 8.29341 30.5 8.29341C31.6 10.9913 30.9 13.0696 30.7 13.5692C32 14.9881 32.76 16.7667 32.76 18.9849C32.76 26.6189 28.08 28.2975 23.62 28.7971C24.34 29.4166 25 30.6357 25 32.4942V37.9698C25 38.5094 25.32 39.1489 26.34 38.969C34.28 36.2912 40 28.8171 40 19.9841C40 17.3598 39.4827 14.7611 38.4776 12.3365C37.4725 9.91195 35.9993 7.70891 34.1421 5.85322C32.285 3.99752 30.0802 2.5255 27.6537 1.5212C25.2272 0.516905 22.6264 0 20 0Z" fill="white"/>
                  </svg>
                  <a>
                    GitHub
                  </a>
                </button>
                <div className='tecu'>
                  <h3>Tecnlogias Usadas</h3>
                  <div>
                    <img className='icon' title="CSS" src={logos["css"]}></img>
                    <img className='icon' title="JavaScript" src={logos["js"]}></img>
                    <img className='icon' title="HTML" src={logos["html"]}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='card'>
          <h1 className='title'>Guilherme Oliveira | Portifolio - 2026</h1>
          <div className='body'>
            <img src={portifolio}></img>
            <div className='right'>
              <p>Portfólio pessoal desenvolvido com React, TypeScript e Vite, criado para apresentar meus projetos, tecnologias e experiências na área de desenvolvimento de software de forma organizada e acessível.</p>
              <div className='bottom'>
                <button onClick={()=>window.location.href="https://github.com/guihPprt/projeto_integrador"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                        <path d="M20 0C17.3736 0 14.7728 0.516905 12.3463 1.5212C9.91982 2.5255 7.71504 3.99752 5.85786 5.85322C2.10714 9.60097 0 14.684 0 19.9841C0 28.8171 5.74 36.3112 13.68 38.969C14.68 39.1289 15 38.5094 15 37.9698V34.5925C9.46 35.7916 8.28 31.9146 8.28 31.9146C7.36 29.5965 6.06 28.977 6.06 28.977C4.24 27.738 6.2 27.7779 6.2 27.7779C8.2 27.9178 9.26 29.8363 9.26 29.8363C11 32.8739 13.94 31.9746 15.08 31.495C15.26 30.196 15.78 29.3167 16.34 28.8171C11.9 28.3175 7.24 26.5989 7.24 18.9849C7.24 16.7667 8 14.9881 9.3 13.5692C9.1 13.0696 8.4 10.9913 9.5 8.29341C9.5 8.29341 11.18 7.75384 15 10.3318C16.58 9.89214 18.3 9.67232 20 9.67232C21.7 9.67232 23.42 9.89214 25 10.3318C28.82 7.75384 30.5 8.29341 30.5 8.29341C31.6 10.9913 30.9 13.0696 30.7 13.5692C32 14.9881 32.76 16.7667 32.76 18.9849C32.76 26.6189 28.08 28.2975 23.62 28.7971C24.34 29.4166 25 30.6357 25 32.4942V37.9698C25 38.5094 25.32 39.1489 26.34 38.969C34.28 36.2912 40 28.8171 40 19.9841C40 17.3598 39.4827 14.7611 38.4776 12.3365C37.4725 9.91195 35.9993 7.70891 34.1421 5.85322C32.285 3.99752 30.0802 2.5255 27.6537 1.5212C25.2272 0.516905 22.6264 0 20 0Z" fill="white"/>
                  </svg>
                  <a>
                    GitHub
                  </a>
                </button>
                <div className='tecu'>
                  <h3>Tecnlogias Usadas</h3>
                  <div>
                    <img className='icon' title="CSS" src={logos["css"]}></img>
                    <img className='icon' title="JavaScript" src={logos["js"]}></img>
                    <img className='icon' title="HTML" src={logos["html"]}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <h1 className='session' id="lu">Links Úteis</h1>
      <div className='links'>
        <div className='top'>
          <button onClick={()=>window.location.href="https://github.com/guihPprt"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                  <path d="M20 0C17.3736 0 14.7728 0.516905 12.3463 1.5212C9.91982 2.5255 7.71504 3.99752 5.85786 5.85322C2.10714 9.60097 0 14.684 0 19.9841C0 28.8171 5.74 36.3112 13.68 38.969C14.68 39.1289 15 38.5094 15 37.9698V34.5925C9.46 35.7916 8.28 31.9146 8.28 31.9146C7.36 29.5965 6.06 28.977 6.06 28.977C4.24 27.738 6.2 27.7779 6.2 27.7779C8.2 27.9178 9.26 29.8363 9.26 29.8363C11 32.8739 13.94 31.9746 15.08 31.495C15.26 30.196 15.78 29.3167 16.34 28.8171C11.9 28.3175 7.24 26.5989 7.24 18.9849C7.24 16.7667 8 14.9881 9.3 13.5692C9.1 13.0696 8.4 10.9913 9.5 8.29341C9.5 8.29341 11.18 7.75384 15 10.3318C16.58 9.89214 18.3 9.67232 20 9.67232C21.7 9.67232 23.42 9.89214 25 10.3318C28.82 7.75384 30.5 8.29341 30.5 8.29341C31.6 10.9913 30.9 13.0696 30.7 13.5692C32 14.9881 32.76 16.7667 32.76 18.9849C32.76 26.6189 28.08 28.2975 23.62 28.7971C24.34 29.4166 25 30.6357 25 32.4942V37.9698C25 38.5094 25.32 39.1489 26.34 38.969C34.28 36.2912 40 28.8171 40 19.9841C40 17.3598 39.4827 14.7611 38.4776 12.3365C37.4725 9.91195 35.9993 7.70891 34.1421 5.85322C32.285 3.99752 30.0802 2.5255 27.6537 1.5212C25.2272 0.516905 22.6264 0 20 0Z" fill="white"/>
            </svg>
            <a>
              GitHub Pessoal
            </a>
          </button>
          <button onClick={()=>window.location.href="https://github.com/guiolizx"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                  <path d="M20 0C17.3736 0 14.7728 0.516905 12.3463 1.5212C9.91982 2.5255 7.71504 3.99752 5.85786 5.85322C2.10714 9.60097 0 14.684 0 19.9841C0 28.8171 5.74 36.3112 13.68 38.969C14.68 39.1289 15 38.5094 15 37.9698V34.5925C9.46 35.7916 8.28 31.9146 8.28 31.9146C7.36 29.5965 6.06 28.977 6.06 28.977C4.24 27.738 6.2 27.7779 6.2 27.7779C8.2 27.9178 9.26 29.8363 9.26 29.8363C11 32.8739 13.94 31.9746 15.08 31.495C15.26 30.196 15.78 29.3167 16.34 28.8171C11.9 28.3175 7.24 26.5989 7.24 18.9849C7.24 16.7667 8 14.9881 9.3 13.5692C9.1 13.0696 8.4 10.9913 9.5 8.29341C9.5 8.29341 11.18 7.75384 15 10.3318C16.58 9.89214 18.3 9.67232 20 9.67232C21.7 9.67232 23.42 9.89214 25 10.3318C28.82 7.75384 30.5 8.29341 30.5 8.29341C31.6 10.9913 30.9 13.0696 30.7 13.5692C32 14.9881 32.76 16.7667 32.76 18.9849C32.76 26.6189 28.08 28.2975 23.62 28.7971C24.34 29.4166 25 30.6357 25 32.4942V37.9698C25 38.5094 25.32 39.1489 26.34 38.969C34.28 36.2912 40 28.8171 40 19.9841C40 17.3598 39.4827 14.7611 38.4776 12.3365C37.4725 9.91195 35.9993 7.70891 34.1421 5.85322C32.285 3.99752 30.0802 2.5255 27.6537 1.5212C25.2272 0.516905 22.6264 0 20 0Z" fill="white"/>
            </svg>
            <a>
              GitHub Profissional
            </a>
          </button>
        </div>
        <div className='bottom'>
          <button onClick={()=>window.location.href="https://www.linkedin.com/in/guilherme-oliveira-5242643ab/"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path d="M36.1162 0.000272666H2.8838C2.51024 -0.00488427 2.13931 0.0631544 1.79221 0.200503C1.4451 0.337852 1.12861 0.54182 0.86082 0.80076C0.593027 1.0597 0.379174 1.36854 0.231473 1.70964C0.0837723 2.05074 0.00511707 2.41742 0 2.78873V36.2113C0.00511707 36.5826 0.0837723 36.9493 0.231473 37.2904C0.379174 37.6315 0.593027 37.9403 0.86082 38.1992C1.12861 38.4582 1.4451 38.6621 1.79221 38.7995C2.13931 38.9368 2.51024 39.0049 2.8838 38.9997H36.1162C36.4898 39.0049 36.8607 38.9368 37.2078 38.7995C37.5549 38.6621 37.8714 38.4582 38.1392 38.1992C38.407 37.9403 38.6208 37.6315 38.7685 37.2904C38.9162 36.9493 38.9949 36.5826 39 36.2113V2.78873C38.9949 2.41742 38.9162 2.05074 38.7685 1.70964C38.6208 1.36854 38.407 1.0597 38.1392 0.80076C37.8714 0.54182 37.5549 0.337852 37.2078 0.200503C36.8607 0.0631544 36.4898 -0.00488427 36.1162 0.000272666ZM11.8295 32.6428H5.94417V15.0931H11.8295V32.6428ZM8.88682 12.6361C8.07516 12.6361 7.29675 12.3156 6.72282 11.7451C6.14889 11.1746 5.82646 10.4009 5.82646 9.59414C5.82646 8.78736 6.14889 8.01363 6.72282 7.44315C7.29675 6.87267 8.07516 6.55218 8.88682 6.55218C9.31781 6.5036 9.75427 6.54605 10.1676 6.67675C10.581 6.80746 10.9619 7.02347 11.2854 7.31065C11.6089 7.59782 11.8678 7.94968 12.045 8.34319C12.2223 8.73671 12.3139 9.16299 12.3139 9.59414C12.3139 10.0253 12.2223 10.4516 12.045 10.8451C11.8678 11.2386 11.6089 11.5905 11.2854 11.8776C10.9619 12.1648 10.581 12.3808 10.1676 12.5115C9.75427 12.6422 9.31781 12.6847 8.88682 12.6361ZM33.0558 32.6428H27.1705V23.2244C27.1705 20.865 26.327 19.3245 24.1886 19.3245C23.5269 19.3293 22.8825 19.5356 22.3423 19.9157C21.8021 20.2957 21.3921 20.8312 21.1675 21.45C21.014 21.9083 20.9475 22.391 20.9713 22.8735V32.6233H15.086V15.0736H20.9713V17.55C21.506 16.6279 22.2836 15.8682 23.2204 15.3528C24.1572 14.8374 25.2177 14.5858 26.2877 14.6251C30.2113 14.6251 33.0558 17.1405 33.0558 22.542V32.6428Z" fill="white"/>
            </svg>
            <a>
              Linkedin
            </a>
          </button>
          <button onClick={()=>window.location.href=curriculo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="39" viewBox="0 0 33 39" fill="none">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M1.21 1.22572C1.98285 0.441858 3.03135 0.000977512 4.125 2.22159e-06H20.625C20.8057 -0.000324674 20.9847 0.0354273 21.1517 0.105214C21.3187 0.175001 21.4706 0.277454 21.5985 0.406716L32.5985 11.5496C32.7261 11.6792 32.8272 11.833 32.8961 12.0022C32.965 12.1714 33.0003 12.3527 33 12.5357V34.8214C33 35.9297 32.5654 36.9925 31.7918 37.7761C31.0182 38.5598 29.969 39 28.875 39H4.125C3.03098 39 1.98177 38.5598 1.20818 37.7761C0.434597 36.9925 0 35.9297 0 34.8214V4.17857C0 3.06986 0.4345 2.00572 1.21 1.22572ZM10.8762 11.0036C11.2461 11.0036 11.6122 10.9298 11.9539 10.7864C12.2955 10.6431 12.606 10.433 12.8675 10.1681C13.129 9.90319 13.3364 9.58872 13.4779 9.24263C13.6194 8.89654 13.6922 8.52561 13.6922 8.151C13.6922 7.7764 13.6194 7.40546 13.4779 7.05937C13.3364 6.71328 13.129 6.39881 12.8675 6.13393C12.606 5.86904 12.2955 5.65892 11.9539 5.51557C11.6122 5.37221 11.2461 5.29843 10.8762 5.29843C10.1294 5.29843 9.41314 5.59897 8.88504 6.13393C8.35693 6.66889 8.06025 7.39445 8.06025 8.151C8.06025 8.90755 8.35693 9.63311 8.88504 10.1681C9.41314 10.703 10.1294 11.0036 10.8762 11.0036ZM5.159 23.6786C5.159 22.7175 5.92625 21.9375 6.875 21.9375H26.125C26.5641 21.9619 26.9773 22.1557 27.2798 22.4789C27.5824 22.8022 27.7513 23.2305 27.752 23.6759C27.7527 24.1214 27.5851 24.5502 27.2836 24.8745C26.9821 25.1987 26.5695 25.3938 26.1305 25.4196H6.8805C6.42441 25.4196 5.98695 25.2363 5.66419 24.9099C5.34142 24.5834 5.15973 24.1406 5.159 23.6786ZM5.159 32.0357C5.159 31.0746 5.92625 30.2946 6.875 30.2946H17.875C18.3141 30.3191 18.7273 30.5128 19.0298 30.8361C19.3324 31.1593 19.5013 31.5876 19.502 32.0331C19.5027 32.4785 19.3351 32.9074 19.0336 33.2316C18.7321 33.5559 18.3195 33.7509 17.8805 33.7768H6.8805C6.42441 33.7768 5.98695 33.5934 5.66419 33.267C5.34142 32.9406 5.15973 32.4977 5.159 32.0357ZM10.879 12.909C8.954 12.909 7.19675 13.6416 5.8685 14.8479C5.07925 15.5638 5.69525 16.7143 6.754 16.7143H14.9985C16.06 16.7143 16.676 15.5638 15.8867 14.8479C14.5106 13.5964 12.7283 12.9056 10.879 12.909Z" fill="white"/>
            </svg>
            <a>
              Curriculo
            </a>
          </button>
        </div>
      </div>

      <footer>
        © 2026 Guilherme Oliveira
      </footer>
    </>
  )
}

export default App
