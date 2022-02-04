import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdMenu } from "react-icons/md"

import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";
import { MenuModal } from "../MenuModal";

import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import { data } from "../../data/data";


export function Header({handleRedirect}) {
  const location = useLocation();
  const navigation = useNavigate();
  const width = useWindowWidth(); // constantemente atualiza o valor do viewport width

  const [pathHasMenu, setPathHasMenu] = useState(() => {
    if(location.pathname === "/home" || location.pathname === "/sobre") {
      return false;
    } else {
      return true;
    }
  }); // define se a rota deve ou não ter o menu modal

  const [modalActive, setModalActive] = useState(false); // define o estado do menu modal

  // define as rotas e as larguras de tela em que o menu modal aparece
  useEffect(() => {
    if(width <= 800) {
      setPathHasMenu(true);
    } else if(location.pathname === "/home" || location.pathname === "/sobre") {
      setPathHasMenu(false);
    } else if(location.pathname !== "/home" || location.pathname !== "/sobre") {
      setPathHasMenu(true);
    } else {
      setPathHasMenu(false);
    }
  }, [width, location.pathname]);

  // define o comportamento após um redirecionamento
  function Redirect(route) {
    if (route === window.location.pathname) {
      return window.location.reload(); // recarrega a página
    }

    if(handleRedirect) {
      return handleRedirect(route); 
    } else {
      return navigation(route);
    };
  };


  // abre e fecha o modal 
  function handleModalState() {
    setModalActive((prevState) => !prevState); 
  }

  // redireciona o usuário para um texto aleatório
  function leveMeAQualquerLugar() {
    const objectLength = Object.keys(data).length; // tamanho do objeto que contém os ciclos 

    const randomCicloIndex = Math.floor(objectLength * Math.random()); // gera um index aleatório para acessar um ciclo

    const ciclo = data[Object.keys(data)[randomCicloIndex]]; // acessa um ciclo aleatório

    const cicloHref = ciclo.href; // guarda a rota referente a esse ciclo

    // se o ciclo for o "O Sistema Exu-Ogum" ele não tem textos, então redireciona para a página do ciclo
    if(!ciclo?.data) {
      return navigation(`/${cicloHref}`)
    }

    const dataRandomIndex = Math.floor(ciclo.data.length * Math.random()); // gera um index aleatório para acessar um objeto dentro do array data

    const dataObjectContent = ciclo.data[dataRandomIndex].content; // acessa esse objeto aleatório

    const randomDataObjectContentIndex = Math.floor(dataObjectContent.length * Math.random()); // gera um index para um texto aleatório

    const textHref = dataObjectContent[randomDataObjectContentIndex].href; // pega a rota do texto aleatório

    return navigation(`/${cicloHref}/${textHref}`) // redireciona para o texto

  }

  return (
    <>
      <header className={styles.header}>

        {/* Logo que redireciona para a home Page */}

        <button className={styles.Logo} onClick={() => Redirect("/home")}>
          <img src={Logo} alt="flamboyant" />
          <h1>
            ESCREVER <strong>ESQUECER</strong>
          </h1>
        </button>

        {/* Navegação */}

        <nav>
          {!pathHasMenu && <button className={styles.about} onClick={() => Redirect("/sobre")}>Sobre</button>}
          <button className={styles.random} onClick={leveMeAQualquerLugar}>Leve-me a qualquer lugar</button>

          {pathHasMenu && <MdMenu className={styles.menuIcon} onClick={handleModalState}/>}
        </nav>
      </header>

      {/* Modal */}

      {pathHasMenu && <MenuModal handleRedirect={handleRedirect} isActive={modalActive} handleModalState={handleModalState}/>}
    </>
  )
}