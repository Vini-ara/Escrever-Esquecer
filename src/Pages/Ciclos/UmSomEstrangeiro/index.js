import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";


export function UmSomEstrangeiro() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  const background = useRef();

  const info = data["umSomEstrangeiro"].data

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
        src="https://drive.google.com/uc?export=view&id=19uSXHFkmp443JoNUmXehLZzbZ8fbYoVT"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect} />



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Um som estrangeiro</h2>
          <p>
            <strong>Um som estrangeiro</strong> é um exercício livre de construção crítica sobre algumas genealogias 
            musicais. Longe da prática especializada, estes textos pretendem pensar a música como uma prática puramente 
            sensorial – portanto, política e ética: saída que dá conta da limitação de compreensão técnica e da inserção 
            destas palavras em contexto. Mote-e-glosa: a música também depõe para a maneira como os corpos se fabricam e 
            se deslocam, ritmicamente, no mundo.
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