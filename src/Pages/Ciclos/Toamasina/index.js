import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";


export function Toamasina() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  const background = useRef();

  const info = data["toamasina"].data

  function handleNavClick(pageNumber) {
    setPage(pageNumber)
  }

  function handleBackgroundLoad() {
    background.current.style.opacity = 0.15
  }


  function handleRedirect(path) {

    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }


  return (
    <div className={`${styles.container} ${transition ? styles.transition : ''}`}>
      <img
        className={styles.backgroundImg}
        src="https://drive.google.com/uc?export=view&id=1gV3lXRHm44I15qcfgL7eSfx-TRxqyBod"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect} />



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Toamasina</h2>
          <p>
            A ideia destes textos veio do amor pela figura de Charles Darwin, o maior dos viajantes. <i>Toamasina</i> –
            que também já se chamou <i>Flores Vermelhas</i> e <i>Ver Flores Vermelhas</i> – é a tentativa de compreender como
            a experiência do espaço é, ao mesmo tempo, histórica e a-histórica, sem que haja margem clara para
            se traçar esses limites. Olhar para a vida das plantas, como muitos têm feito com resultados impressionantes
            – de Timothy Morton a Emanuele Coccia – é, de fato, uma saída ética e política, pela porta da frente.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {info.map((e, index) => (
            <TextsPagination key={e.heading} data={e} isActive={page === index + 1} handleRedirect={handleRedirect} />
          ))}
           { info.length > 1 && <TextsPaginationNav
            handleNavClick={handleNavClick}
            activePage={page}
            pages={info}
          />}
        </div>

      </section>
    </div>
  )
}