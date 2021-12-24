import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";


export function PronunciarOChao() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();

  const info = data["pronunciarOChao"].data

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
        src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect}/>



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Pronunciar o Chão</h2>
          <p>
            Os textos deste volume, pela primeira vez pensados como um conjunto, foram escritos entre os anos de 2018 e 2021.
            Desta forma, faz-se aqui um esforço para que eles, muitas vezes espaçados por anos,
            lugares e pelo testemunho dos mais diversos fatos, não se tornem nem redundantes nem meramente contraditórios,
            mas se espraiem como que induzidos por seus movimentos recíprocos.
            Se o futebol é uma teoria sobre o acontecimento, aqui se está também a jogar.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {info.map((e, index) => (
            <TextsPagination key={e.heading} data={e} isActive={page === index + 1} handleRedirect={handleRedirect}/>
          ))}
          <TextsPaginationNav  
            handleNavClick={handleNavClick} 
            activePage={page}
            pages={info}
          />
        </div>

      </section>
    </div>
  )
}