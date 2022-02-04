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

          {hasLevemeButton && <li><button onClick={() => Redirect("/sobre")}>Leve-me a qualquer lugar</button></li> }
        </ul>
      </div>
    </div>
  )
}