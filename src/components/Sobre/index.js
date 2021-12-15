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
            Escrever Esquecer é aquilo que permanece da voz de alguém que calhou chamar-se Vítor Ribeiro-Santos. 
            Há aqui a forma possível que assumiram diversos processos, ciclos, ritos nos quais um corpo e suas condições mergulharam, 
            juntos, desde 2014, como maneira de se fazer sentir e dizer o mundo. 
            Escrever Esquecer é também parte de um título de Jeanne-Marie Gagnebin, em um texto sobre a obra de Walter Benjamin: 
            coincidência alguma nisso.
          </p>
          <p>
            <i>Escrever Esquecer</i>, além disso: Beatriz Calheta, Letícia Hayashi e Vítor Rodrigues – 
            editoras/criadoras e realizador/criador das formas de tudo que está aqui. 
            A eles, simplesmente tudo.
          </p>
          <p>
          Nosso sítio está dividido em algumas seções: <i>Algumas cartas</i>, <i>Escrever com os pés</i>, <i>olhos/água</i>
          , <i>No meio dia das coisas</i>, <i>Prosa dos dias</i>, <i>Ter olhos pra ver</i>, <i>Toamasina</i>. 
          Cada uma dessas seções diz respeito a um ciclo crítico ou criativo diferente, oriundo de anos diferentes, 
          com intenções diferentes. Um continente em suas cidades. Por isso, mesmo como unidades autônomas, 
          cada pedaço deste lugar funciona interdependentemente, pode ser acessado por novas estradas – 
          o botão <i>Leve-me a qualquer lugar</i> é parte desta ideia modesta.
          </p>
          <p>
            Mas por que criar isto aqui, a esta altura dos acontecimentos? 
            Ora, sim. Pra mais urgente das perguntas, talvez nenhuma resposta seja necessária. 
            Escrever Esquecer quer existir da mesma maneira como é possível que espécies chamem 
            – de alguma forma – a escuridão abissal de casa. A vida persiste a contragosto de si. 
            Se você trouxe sua voz, se você está agora aqui, seu corpo diz ao mundo que, uma vez mais, prosseguimos.
          </p>
          <p>Obrigado. E mais nada resta a falar.</p>
        </main>
      </div>
    </div>
  );
}