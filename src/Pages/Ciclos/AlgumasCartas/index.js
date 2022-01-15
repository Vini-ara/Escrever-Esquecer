import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { data } from "../../../data/data";
import { MdPlace } from "react-icons/md";


export function AlgumasCartas() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate(); 

  const background = useRef();
  const imgContainer = useRef(); 

  const info = data["algumasCartas"].data

  function handleImgLoad(ref, opacity) {
    ref.current.style.opacity = opacity
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
        onLoad={() => handleImgLoad(background, 0.15)}
      />
      <Header handleRedirect={handleRedirect}/>

      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Algumas Cartas</h2>
          
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

        <div className={styles.contentWrapper}>

          <div className={styles.imgContainer} ref={imgContainer} onLoad={() => handleImgLoad(imgContainer, 1)}>
            <img src="https://drive.google.com/uc?export=view&id=1Y5XgKeADjkd_u4v7lhdcdbAplour4y1G" alt="mapa Bahia" />
            {
              info[0].content.map((e, index) => (
                <button className={styles[`pin${index + 1}`]}>
                  <MdPlace  onClick={() => handleRedirect(e.href)} size="3rem"/>
                </button>
              ))
            }
          </div>

        </div>

      </section>
    </div>
  )
}