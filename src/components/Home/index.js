import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/flor.png";

import styles from './styles.module.scss';

export function Home() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  // função para atrasar o redirect da página para dar tempo de realizar a animação
  function handleRedirect(path) {
    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  return(
    <div className={`${styles.wrapper} ${transition ? styles.transition : ''}`}>
      {/* header com navegação */}
      <header className={styles.header}>
        <button onClick={() => handleRedirect("/sobre")}>sobre / contato</button>
        <button to={''} className={styles.nav}>leve-me a qualquer lugar</button>
      </header>
      {/* logo do site */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="flamboyant" />
      </div>
    </div>
  );
}