import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import pdfobject from "pdfobject";

import pdf from "../../../pdf/O Sistema Exu-Ogum.pdf"; 



export function OSistemaExuOgum() {
  
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();
  const pdfContainer = useRef(); 


console.log(pdfContainer.current)

  useEffect(() => {
    pdfobject.embed(pdf, pdfContainer.current, {
      height: "70vh"
    });
  }, [])

  

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
          <h2>O Sistema Exu-Ogum</h2>
          
          <p>
            Fruto de dois anos e meio de pesquisa, <strong>O Sistema Exu-Ogum</strong> (publicado com o título de Com Exu-Ogum, pelas Encruzilhadas) 
            é uma leitura crítica sobre a obra do poeta Ricardo Aleixo. Em verdade, é uma tentativa de observar como esta obra atravessa tempos, 
            lugares, pessoas, sendo motivada e motivando um conceito renovado de literatura – em que o corpo não esteja só implicado, mas seja 
            disputado e reconstruído pela experiência do sentido.
          </p>

          <p>
            Sim, de fato <em>ter escrito ainda não existe</em>.
          </p>
        </div>

        <div className={`${styles.contentWrapper} ${styles.pdfContainer}`} ref={pdfContainer}>
        </div>

      </section>
    </div>
  )
}