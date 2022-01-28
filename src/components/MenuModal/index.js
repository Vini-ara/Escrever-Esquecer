import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { MdClose } from "react-icons/md";
import { useWindowWidth } from "../../hooks/useWindowWidth"

import styles from "./styles.module.scss";

import { data } from "../../data/data"

export function MenuModal({handleRedirect, isActive, handleModalState}) {
  const [hasLevemeButton, setHasLevemeButton] = useState(false);


  const navigation = useNavigate()

  const modalContent = useRef();

  const width = useWindowWidth();

  useEffect(() => {
    if(width <= 800) {
      setHasLevemeButton(true);
    } else {
      setHasLevemeButton(false);
    }
  }, [width])

  function Redirect(route) {
    if (route === window.location.pathname) {
      console.log("equal")
      return window.location.reload();
    }

    if(handleRedirect) {
      return handleRedirect(route)
    } else {
      return navigation(route)
    }
  }

  function handleOverlayClick(e) {
    const area = modalContent.current.getBoundingClientRect();
    const click = e.target.getBoundingClientRect();
    if (click.left < area.left) {
      return handleModalState()
    }
    return
  }
  
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.modalActive : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modalContent} ref={modalContent}>
        <MdClose className={styles.modalClose} onClick={handleModalState}/>

        <h2>Menu de navegação</h2>

        <ul>
          <li>
            <button onClick={() => Redirect("/sobre")}>Sobre</button>
          </li>
          
          <li>
            <button onClick={() => Redirect("/home")}>Ciclos</button>

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