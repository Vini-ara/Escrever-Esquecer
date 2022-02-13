import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsMenuPagination";
import { TextsPaginationNav } from "../../../components/TextsMenuPaginationNav";
import { data } from "../../../data/data";
import { useTitle } from "../../../hooks/useTitle";
import { MdPictureAsPdf } from "react-icons/md";


export function OlhosAgua() {
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();

  const info = data["olhosAgua"].data

  useTitle("Olhos/Água")

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
          <div className={styles.aboutHeading}>
            <h2>Olhos/Água</h2>

            <button>
              <MdPictureAsPdf size="2rem"/>
            </button>
          </div>
          
          <p>
            Os texto de <strong>olhos/água</strong> são testemunho do começo deste esforço em dizer. Datados de 2014, mas constantemente 
            operados e reoperados, tem-se aqui o espólio de um projeto de livro que pretendia trazer em si um ritmo da 
            violência como formador de uma experiência, algo que parece caracterizar nossa maneira de lidar com o real 
            aqui pelas margens das luzes. Dos 19 textos iniciais ficaram menos da metade, e do projeto apenas o ímpeto 
            da tentativa: a dissolução dá campo a si.
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