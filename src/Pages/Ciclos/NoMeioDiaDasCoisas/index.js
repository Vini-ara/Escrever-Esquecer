import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";
import { useTitle } from "../../../hooks/useTitle";


export function NoMeioDiaDasCoisas() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();

  const info = data["noMeioDiaDasCoisas"].data

  useTitle("No meio-dia das coisas")

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
        src="https://drive.google.com/uc?export=view&id=1VwhNL_hwn_tsMPr_QwctqEA2tOnWhQ4M"
        alt="plano de fundo"
        ref={background}
        onLoad={handleBackgroundLoad}
      />
      <Header handleRedirect={handleRedirect}/>



      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>No meio-dia das Coisas</h2>
          
          <p>
            <em>No meio-dia das Coisas</em> foi criado a partir de gravações feitas na cidade de Candeias, Bahia, em 2014. Tais registros foram inicialmente 
            destinados a um trabalho de análise linguística de seus enunciadores, tornando-se, ali, <em>corpus</em>. Com o tempo, as palavras se impuseram às 
            intenções da pesquisa – que em si já era suficientemente desinteressada.
          </p>

          <p>
	          Talvez alguns argumentem que não há justiça em fazer das palavras das pessoas algo tão diverso e alheio a suas intenções. O problema é que 
            o próprio texto quer argumentar a este favor, não restando então dúvida sobre o veredito final: falar é defender, com toda a razão, as mais 
            torpes injustiças.
          </p>

          <p>
	          Por isso, quando ser injusto torna-se o modelo das ações e do modo de vida daqueles que pautam os destinos dos debates neste país, a 
            questão parece ser requisitar para as palavras sua própria <em>injustiça essencial</em>. Ela é o oposto do cinismo, ferramenta inútil 
            de quem pretende disfarçar a existência do mundo, do corpo, do nada.
          </p>

          <p className={styles.end}>[2021]</p>
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