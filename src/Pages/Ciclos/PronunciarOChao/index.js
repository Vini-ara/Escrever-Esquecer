import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";
import { useTitle } from "../../../hooks/useTitle";


export function PronunciarOChao() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();

  const info = data["pronunciarOChao"].data

  useTitle("Pronunciar o chão");

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
        src="https://drive.google.com/uc?export=view&id=1VSiVLdKYluQo7J3hNveKWCF_yOZyme0i"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect}/>



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Pronunciar o Chão</h2>

          <p className={styles.end}>
            <em>Est deus in nobis agitante calescimus illo</em> – Ovídio
          </p>

          <p>
            O futebol se situa na dobra movente da estética: ele é forma desinteressada, mas também se direciona a 
            algo; ele é corpo, mas também abstração em sentido; ele é presença, mas também evasão e dúvida; ele é 
            acontecimento, mas também defasagem. Eis, portanto, o interesse desses textos, escritos entre 2018 e 2021 
            e pela primeira vez reunidos como um conjunto: pensar-se como formas em movimento. O futebol, portanto, 
            escancara o óbvio que muitos teóricos das artes e da literatura insistem em negar, que é o fato de que – 
            como diz Ovídio – existe uma relação intrínseca entre deus e movimento, ou seja, entre sentido e incorporação.
          </p>

          <p>
            Corpo e palavra <em>são</em> e, ao mesmo tempo, <em>dizem</em>.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {info.map((e, index) => (
            <TextsPagination key={e.heading} data={e} isActive={page === index + 1} handleRedirect={handleRedirect}/>
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