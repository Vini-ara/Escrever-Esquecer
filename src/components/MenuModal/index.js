import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { MdClose } from "react-icons/md";
import { useWindowWidth } from "../../hooks/useWindowWidth"

import styles from "./styles.module.scss";

import { data } from "../../data/data"

export function MenuModal({handleRedirect, isActive, handleModalState}) {
  const [hasLevemeButton, setHasLevemeButton] = useState(false); // estado de layout do modal

  const navigation = useNavigate();
  const modalContent = useRef();
  const width = useWindowWidth();// constantemente atualiza o valor do viewport width

  // muda o layout de acordo com o tamanho da tela
  useEffect(() => {
    if(width <= 800) {
      setHasLevemeButton(true);
    } else {
      setHasLevemeButton(false);
    };
  }, [width]);

  // comportamento ao redirecionar para outra pagina
  function Redirect(route) {
    if (route === window.location.pathname) {
      return window.location.reload();
    };

    if(handleRedirect) {
      return handleRedirect(route);
    } else {
      return navigation(route);
    };
  };

  // fecha o modal quando clica fora dele
  function handleOverlayClick(e) {
    const area = modalContent.current.getBoundingClientRect(); // area ocupada pelo modal 

    const click = e.target.getBoundingClientRect(); // container que foi clicado 

    // se o container que foi clicado está mais para a esquerda do que o modal, o modal fecha
    if (click.left < area.left) {
      return handleModalState();
    };
    return;
  };

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
  
      return Redirect(`/${cicloHref}/${textHref}`) // redireciona para o texto
  
    }
  
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.modalActive : ''}`} onClick={handleOverlayClick}>

      {/* conteúdo   */}
  
      <div className={styles.modalContent} ref={modalContent}>
        <MdClose className={styles.modalClose} onClick={handleModalState}/> {/* fechar */}

        <h2>Menu de navegação</h2>

        {/* lista principal */}

        <ul>
          <li>
            <button onClick={() => Redirect("/sobre")}>Sobre</button>
          </li>
          
          <li>
            <button onClick={() => Redirect("/home")}>Ciclos</button>
            
            {/* sub-lista */}

            <ul>
              {Object.keys(data).map((dataKey) => (
                <li key={dataKey}>
                  <button onClick={() => Redirect(`/${data[dataKey].href}`)}>{data[dataKey].name}</button>
                </li>
              ))}
            </ul>
          </li>

          {hasLevemeButton && <li><button onClick={leveMeAQualquerLugar}>Leve-me a qualquer lugar</button></li> }
        </ul>
      </div>
    </div>
  )
}