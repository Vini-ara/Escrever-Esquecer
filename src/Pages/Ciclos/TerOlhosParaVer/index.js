import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";
import { useTitle } from "../../../hooks/useTitle";


export function TerOlhosParaVer() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  const background = useRef();

  const info = data["terOlhosParaVer"].data

  useTitle("Ter olhos para ver"); 

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
        src="https://drive.google.com/uc?export=view&id=1lrYAmcuG_zaYX-nOUZEZHdn-pu2LWx43"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect} />



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Ter Olhos para Ver</h2>
          <p>
            <strong>Ter Olhos para Ver</strong> reúne textos escritos em 2019 a convite de um site especializado em cinema: 
            por isso, nota-se, são textos breves e que pretendem acima de tudo funcionar como repositório 
            de referências e de relações entre obras para um público maior. A ideia desta seção é, portanto, 
            como na música de Nelson Cavaquinho de onde se extrai o título, realizar uma espécie de oração em 
            prol das coisas que são vistas, de como são vistas, do próprio ato de vê-las. Melhor fala Ricardo 
            Aleixo:
          </p>
          <p className={styles.smaller}>
            que eu não seja
            <br/>
            insensível
            <br/>
            a nenhuma
            <br/>
            beleza
            <br/>
            e que nunca
            <br/>
            me baste
            <br/>
            nem toda a
            <br/>
            beleza  
            <br/>
            que existe
            <br/>
            no mundo
            <br/>
            enquanto houver 
            <br/>
            mundo
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