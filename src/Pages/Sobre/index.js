import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export function Sobre() {
  const [transition, setTransition] = useState(false);
  const background = useRef();

  const navigation = useNavigate();

  function handleRedirect(path) {
    if (path === window.location.pathname) {
      return window.location.reload()
    } else {
      setTransition(true)
      setTimeout(() => navigation(path), 1000)
    }
  }

  // função para carregar a animação da imagem de fundo somente quando carregar ela
  function handleBackgroundLoad() {
    background.current.style.opacity = 0.15
  }

  return (
    <div className={`${styles.container} ${transition ? styles.transition : ''}`}>

      {/* imagem de fundo  */}
      <img
        className={styles.backgroundImg}
        src="https://drive.google.com/uc?export=view&id=1pHxD2H5dGk5KBjBQMMNAUG2wSaLnrjf9"
        alt="plano de fundo"
        ref={background}
        onLoad={() => handleBackgroundLoad()}
      />

      <Header handleRedirect={handleRedirect} />

      {/* div envolvendo o conteúdo */}
      <div className={styles.wrapper}>

        {/* dedicatória */}

       

        {/* texto principal da página */}
        <main className={styles.content}>
          <p>Para Zeca,</p>

          <p className={styles.end}><em>Pensarán vuestras mercedes ahora que es poco trabajo hinchar un perro?</em></p>

          <p>
            <strong>Escrever Esquecer</strong> é aquilo que permanece da voz de alguém que calhou chamar-se
            Vítor Ribeiro-Santos. Há aqui a forma possível que assumiram diversos processos,
            ciclos, ritos nos quais um corpo e suas condições mergulharam, juntos, desde 2014,
            como maneira de se fazer sentir, produzir e dizer o mundo. Escrever Esquecer é também
            parte de um título de Jeanne-Marie Gagnebin, em uma obra sobre Walter Benjamin:
            coincidência alguma nisso.
          </p>

          <p>
            <em>Escrever Esquecer</em>, além disso: Beatriz Calheta, Letícia Hayashi e Vinicius Araujo –
            editoras/criadoras e realizador/programador das formas de tudo que está aqui. A eles,
            simplesmente tudo.
          </p>

          <p>
            Nosso sítio está dividido em algumas seções: <em>Algumas cartas</em>, <em>Pronunciar o chão</em>, <em>olhos/água</em>
            , <em>No meio dia das coisas</em>, <em>Um som estrangeiro</em>, <em>Ter olhos pra ver</em>, <em>Toamasina</em>, <em>O Sistema Exu-Ogum</em>.
            Cada um desses ciclos diz respeito a um périplo
            crítico ou criativo diferente, oriundo de anos diferentes, com intenções diferentes e
            resultados distintos. Um continente em suas cidades. Por isso, mesmo como unidades
            autônomas, cada pedaço deste lugar funciona interdependentemente, pode ser acessado
            por novas estradas, pretende estar em relação àquilo que lhe é diferença – o botão <em>Leve-
              me a qualquer lugar</em>, as imagens e os hiperlinks são parte desta ideia modesta.
          </p>

          <p>
            Mas por que criar isso tudo aqui, a esta altura dos acontecimentos? Ora, esta pergunta
            não foi poucas vezes feita ao longo deste processo. E pra mais urgente das perguntas,
            talvez nenhuma resposta seja, de fato, necessária. Este Escrever Esquecer quer existir da
            mesma maneira como é possível que espécies chamem – de alguma forma – o abismo
            de casa. As raízes se afundam na escuridão, a acácias-rubras florescem, as pessoas
            soluçam: a vida persiste a contragosto de si, e dá seu próprio testemunho como
            caminho. Não há maiores pretensões sob o dia.
          </p>

          <p>Obrigado. E mais nada resta a falar.</p>

          <p>Criação de textos: emaildevitoribeiro@gmail.com</p>

          <p>Criação de vídeos e edição de imagens: escreveresquecer@gmail.com</p>

          <p>Criação e desenvolvimento do site: vinicius.ar02@gmail.com</p>
        </main>
      </div>
    </div>
  );
}