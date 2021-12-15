import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

export function Ciclos() {
  const [showCiclos, setShowCiclos] = useState(false);

  const CardContainer = useRef()

  function handleScroll(e) {
    const target = CardContainer.current
    const scrollPos = target.scrollLeft + e.deltaY / 2.5

    target.scroll({
      top: 0,
      left: scrollPos
    })
  }

  return (
    <div className={styles.wrapper}>

      <header className={styles.header}>
        <NavLink to="/home">
          <img src={Logo} alt="flamboyant" />
          <h1>
            ESCREVER <strong>ESQUECER</strong>
          </h1>
        </NavLink>
        <nav>
          <NavLink to="/sobre">
            sobre / contato
          </NavLink>
          <NavLink to="">
            leve-me a qualquer lugar
          </NavLink>
        </nav>
      </header>

      <img
        className={`${styles.backgroundImg}
        ${showCiclos ? styles.backgroundImgActive : ''}`
        }
        onClick={() => setShowCiclos(true)}
        src={Logo}
        alt="flamboyant"
      />

      {showCiclos && (
        <div className={styles.content} onWheel={handleScroll} ref={CardContainer}>
        <div className={`${styles.card} ${styles.card1}`} onWheel={handleScroll}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>Pronunciar o Chão</h2>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>Algumas Cartas</h2>

            <p>
              Os textos que compõem este ciclo faziam parte de um processo que se chamou <i>Beatriz / Cartas</i> ,
              até ser dissolvido. Ele era inicialmente constituído de três grandes roteiros – Paris, São Paulo,
              Bahia – em que se pretendia intercambiar a experiência da destruição de si a partir da iminência da
              destruição do mundo ou do vínculo social. Infelizmente, por minhas próprias restrições de escrita,
              o projeto teve que ser abandonado. Restam aqui, portanto, suas gloriosas ruínas: o ciclo baiano de cartas,
              girando ao redor de si.
            </p>
            <p>Glosa: um corpo precisa existir para enunciar seu próprio fim.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>Ter Olhos pra Ver</h2>
            <p>
              O verso de Nelson Cavaquinho para lembrar de como a experiência do cinema é uma experiência do corpo.
              <i>Ter olhos para ver</i> é um ciclo de textos que foram encomendados inicialmente para tratar de tópicos do cinema
              brasileiro: mas muito além de críticas, temos aqui declarações verborrágicas de amor.
            </p>
            <p>
              Nas revisões para além de seu contexto inicial, esta seção está em vias de tornar-se outra coisa.
              Abrir-se para um discurso sobre a experiência sensível que o cinema não cessa de possibilitar.
            </p>
            <p>Vamos ver o que vai dar.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card4}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>Um som estrangeiro</h2>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card5}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>O Sistema Exu-Ogum</h2>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card6}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>Toamasina</h2>
            <p>
              A ideia destes textos veio do amor pela figura de Charles Darwin, o maior dos viajantes. <i>Toamasina</i> –
              que também já se chamou <i>Flores Vermelhas</i> e <i>Ver Flores Vermelhas</i> – é a tentativa de compreender como
              a experiência do espaço é, ao mesmo tempo, histórica e a-histórica, sem que haja margem clara para
              se traçar esses limites. Olhar para a vida das plantas, como muitos têm feito com resultados impressionantes
              – de Timothy Morton a Emanuele Coccia – é, de fato, uma saída ética e política, pela porta da frente.
            </p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card7}`} onWheel={(e) => handleScroll(e)}>
          <img src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" alt="card" />
          <div className={styles.cardContent}>
            <h2>No meio-dia das coisas</h2>
            <p>
              Aqui está um ciclo estético ainda vivente, atualizado, falível.
              Esta seção diz respeito a textos novos, que giram em torno das formas de manifestação de objetos,
              na relação tensa entre o íntegro e o falso, o puro e o impuro, a unidade e o conjunto.
              Daquilo que faz com que uma coisa não sejam duas. E do que se mostra como invenção da visão pelo ponto de vista.
            </p>
            <p>Está claro que estamos na dobra da palavra.</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}