import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { useTitle } from "../../hooks/useTitle";

import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";

export function Home() {
  const [showCiclos, setShowCiclos] = useState(false);
  const [transition, setTransition] = useState(false);

  useTitle("Home");

  const CardContainer = useRef();

  const navigation = useNavigate();

  function handleRedirect(path) {

    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  return (
    <div className={`${styles.wrapper} ${transition ? styles.transition : ''}`}>

      <Header handleRedirect={handleRedirect} />

      <img
        className={`${styles.backgroundImg}
        ${showCiclos ? styles.backgroundImgActive : ''}`
        }
        onClick={() => setShowCiclos(true)}
        src={Logo}
        alt="flamboyant"
      />

      {showCiclos && (
        <div className={styles.content} ref={CardContainer}>

          <button className={`${styles.card} ${styles.card1}`} onClick={() => { handleRedirect("/pronunciar-o-chao") }}>
            <h2>Pronunciar o Chão</h2>
          </button>

          <button className={`${styles.card} ${styles.card2}`} onClick={() => { handleRedirect("/algumas-cartas")}} >
            <h2>Algumas Cartas</h2>
          </button>

          <button className={`${styles.card} ${styles.card3}`} onClick={() => { handleRedirect("/ter-olhos-para-ver")}} >
            <h2>Ter Olhos pra Ver</h2>
          </button>

          <button className={`${styles.card} ${styles.card4}`} onClick={() => { handleRedirect("/um-som-estrangeiro")}} >
            <h2>Um som estrangeiro</h2>
          </button>
         
          <button className={`${styles.card} ${styles.card5}`} onClick={() => {handleRedirect("/o-sistema-exu-ogum")}} >
            <h2>O Sistema Exu-Ogum</h2>
          </button>

          <button className={`${styles.card} ${styles.card6}`} onClick={() => {handleRedirect("/toamasina")}}>
            <h2>Toamasina</h2>
         </button>  

          <button className={`${styles.card} ${styles.card7}`} onClick={() => {handleRedirect("/no-meio-dia-das-coisas")}}>
            <h2>No meio-dia das coisas</h2>
          </button>

          <button className={`${styles.card} ${styles.card8}`} onClick={() => {handleRedirect("/olhos-agua")}}>
            <h2>Olhos/Água</h2>
          </button> 
        </div>
      )}
    </div>
  );
}