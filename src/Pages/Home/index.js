import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";

export function Home() {
  const [showCiclos, setShowCiclos] = useState(false);
  const [transition, setTransition] = useState(false);

  const CardContainer = useRef();

  const navigation = useNavigate();

  function handleScroll(e) {
    const target = CardContainer.current
    const scrollPos = target.scrollLeft + e.deltaY / 2.5

    target.scroll({
      top: 0,
      left: scrollPos
    })
  }

  function handleRedirect(path) {
    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  return (
    <div className={`${styles.wrapper} ${transition ? styles.transition : ''}`}>

      <Header handleRedirect={handleRedirect} />

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
          <Card cardNumber={1} onWheel={handleScroll} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9">
            <h2>Pronunciar o Chão</h2>
          </Card>
          <Card cardNumber={2} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
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
          </Card>
          <Card cardNumber={3} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
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

          </Card>
          <Card cardNumber={4} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
            <h2>Um som estrangeiro</h2>
          </Card>
          <Card cardNumber={5} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
            <h2>O Sistema Exu-Ogum</h2>
          </Card>
          <Card cardNumber={6} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
            <h2>Toamasina</h2>
            <p>
              A ideia destes textos veio do amor pela figura de Charles Darwin, o maior dos viajantes. <i>Toamasina</i> –
              que também já se chamou <i>Flores Vermelhas</i> e <i>Ver Flores Vermelhas</i> – é a tentativa de compreender como
              a experiência do espaço é, ao mesmo tempo, histórica e a-histórica, sem que haja margem clara para
              se traçar esses limites. Olhar para a vida das plantas, como muitos têm feito com resultados impressionantes
              – de Timothy Morton a Emanuele Coccia – é, de fato, uma saída ética e política, pela porta da frente.
            </p>
          </Card>
          <Card cardNumber={7} imgSrc="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9" onWheel={handleScroll}>
            <h2>No meio-dia das coisas</h2>
            <p>
              Aqui está um ciclo estético ainda vivente, atualizado, falível.
              Esta seção diz respeito a textos novos, que giram em torno das formas de manifestação de objetos,
              na relação tensa entre o íntegro e o falso, o puro e o impuro, a unidade e o conjunto.
              Daquilo que faz com que uma coisa não sejam duas. E do que se mostra como invenção da visão pelo ponto de vista.
            </p>
            <p>Está claro que estamos na dobra da palavra.</p>
          </Card>
        </div>
      )}
    </div>
  );
}