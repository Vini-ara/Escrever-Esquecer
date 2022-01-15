import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdMenu } from "react-icons/md"

import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";
import { MenuModal } from "../MenuModal";

import { useWindowWidth } from "../../hooks/useWindowWidth.js";


export function Header({handleRedirect}) {
  const location = useLocation()
  const navigation = useNavigate()
  
  const width = useWindowWidth()

  const [pathHasMenu, setPathHasMenu] = useState(() => {
    if(location.pathname === "/home" || location.pathname === "/sobre") {
      return false;
    } else {
      return true;
    }
  })

  const [modalActive, setModalActive] = useState(false)

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
  }, [width, location.pathname])

  function Redirect(route) {
    if (route === window.location.pathname) {
      return window.location.reload();
    }

    if(handleRedirect) {
      return handleRedirect(route)
    } else {
      return navigation(route)
    }
  }

  function handleModalState() {
    setModalActive((prevState) => !prevState)
  }

  return (
    <>
      <header className={styles.header}>
        <button className={styles.Logo} onClick={() => Redirect("/home")}>
          <img src={Logo} alt="flamboyant" />
          <h1>
            ESCREVER <strong>ESQUECER</strong>
          </h1>
        </button>
        <nav>
          {!pathHasMenu && <button className={styles.about} onClick={() => Redirect("/sobre")}>Sobre</button>}
          <button className={styles.random}>Leve-me a qualquer lugar</button>

          {pathHasMenu && <MdMenu className={styles.menuIcon} onClick={handleModalState}/>}
        </nav>
      </header>

      {pathHasMenu && <MenuModal handleRedirect={handleRedirect} isActive={modalActive} handleModalState={handleModalState}/>}
    </>
  )
}