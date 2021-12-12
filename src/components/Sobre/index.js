import { useRef } from "react";

import { NavLink } from "react-router-dom";

import Logo from "../../assets/flor.png";
import styles from "./styles.module.scss";

export function Sobre() {
  const background = useRef()

  // função para carregar a animação da imagem de fundo somente quando carregar ela
  function handleBackgroundLoad() {
    background.current.style.opacity = 0.15
  }

  return (
    <div className={styles.container}>

      {/* imagem de fundo  */}
      <img
        className={styles.backgroundImg}
        src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9"
        alt="plano de fundo"
        ref={background}
        onLoad={() => handleBackgroundLoad()}
      />

      {/* div envolvendo o conteúdo */}
      <div className={styles.wrapper}>

        {/* header com logo e texto */}
        <header className={styles.header}>
          <NavLink to="/home">
            <img src={Logo} alt="flamboyant" />
          </NavLink>
          <p>Para Zeca,</p>
        </header>

        {/* texto principal da página */}
        <main className={styles.content}>
          <p>
            Este texto foi criado a partir de gravações feitas na cidade de Candeias, Bahia,
            em 2014. Estes registros foram inicialmente destinados a um trabalho de análise
            linguística de seus enunciadores, tornando-se, ali, corpus. Com o tempo, as palavras se
            impuseram às intenções da pesquisa – que em si já era suficientemente desinteressada.
          </p>
          <p>
            Talvez alguns argumentem que não há justiça em fazer das palavras das pessoas
            algo tão diverso e alheio a suas intenções. O problema é que o próprio texto quer
            argumentar a este favor, não restando dúvida sobre o veredito final: falar é defender,
            com toda a razão, as mais torpes injustiças.
          </p>
          <p>
            Por isso, quando ser injusto torna-se o modelo das ações e do modo de vida
            daqueles que pautam os destinos dos debates neste país, a questão parece ser requisitar
            para as palavras sua própria injustiça essencial. Ela é o oposto do cinismo, ferramenta
            inútil de quem pretende disfarçar o mundo, o corpo, o nada.
          </p>
        </main>
      </div>
    </div>
  );
}