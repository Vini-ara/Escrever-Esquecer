import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import styles from "./styles.module.scss";

import { data } from "../../data/data"

export function MenuModal({handleRedirect, isActive, handleModalState}) {

  const navigation = useNavigate()

  const modalContent = useRef();

  function Redirect(route) {
    console.log([window.location.pathname, route])
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

  console.log(Object.keys(data))
  
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.modalActive : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modalContent} ref={modalContent}>
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
        </ul>
      </div>
    </div>
  )
}