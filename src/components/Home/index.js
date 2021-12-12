import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/flor.png";

import styles from './styles.module.scss';

export function Home() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  function handleRedirect(path) {
    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  return(
    <div className={`${styles.wrapper} ${transition ? styles.transition : ''}`}>
      <header className={styles.header}>
        <a onClick={() => handleRedirect("/sobre")}>sobre / contato</a>
        <NavLink to={''} className={styles.nav}>leve-me a qualquer lugar</NavLink>
      </header>
      <div className={styles.logoContainer}>
        <img src={logo} alt="flamboyant" />
      </div>
    </div>
  );
}