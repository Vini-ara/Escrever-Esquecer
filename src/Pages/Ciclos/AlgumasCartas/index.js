import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { data } from "../../../data/data";
import { MdPictureAsPdf, MdPlace } from "react-icons/md";
import { useTitle } from "../../../hooks/useTitle";


export function AlgumasCartas() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  const background = useRef();
  const imgContainer = useRef();

  const info = data["algumasCartas"].data

  useTitle("Algumas Cartas");

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
      <Header handleRedirect={handleRedirect} />

      <section className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.aboutHeading}>
            <h2>Algumas Cartas</h2>

            <button>
              <a href="https://drive.google.com/file/d/1arVwpg1UgEaLOY_u_ie1Mip_NypXrIAC/view?usp=sharing" target="_blank" rel="noreferrer">
                <MdPictureAsPdf size="2rem"/>
              </a>
            </button>
          </div>

          <p>
            <strong>Algumas Cartas</strong> é o resultado de um ciclo de textos iniciado em 2015, que surgiu com a intenção de tornar-se um romance. 
            Com o tempo, seu projeto mostrou não carregar tanto fôlego, e dos três eixos que ali havia restou apenas o presente. Neste trajeto pelas 
            cidades, este ciclo pretende operar na relação entre espaço e abstração, entre destruição e fazer, entre subjetivação e dissolução, 
            atravessando a quase dialética que o Brasil tem legado a si mesmo como modo de vida. Da tentativa de ver, restaram estas sete paisagens 
            na neblina.
          </p>
        </div>

        <div className={styles.contentWrapper}>

          <div className={styles.imgContainer} ref={imgContainer} onLoad={() => handleImgLoad(imgContainer, 1)}>
            <img src="https://drive.google.com/uc?export=view&id=1Y5XgKeADjkd_u4v7lhdcdbAplour4y1G" alt="mapa Bahia" />
            {
              info[0].content.map((e, index) => (
                <button className={styles[`pin${index + 1}`]}>
                  <MdPlace onClick={() => handleRedirect(e.href)} size="3rem" />
                </button>
              ))
            }
          </div>

        </div>

      </section>
    </div>
  )
}