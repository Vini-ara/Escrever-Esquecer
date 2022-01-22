import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function NovaRedencao() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  function handleRedirect(path) {
    
    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className={`${styles.container} ${transition ? styles.transition : ''}`}>

      <Header handleRedirect={handleRedirect}/>

      
      <section className={styles.wrapper}>
      
        <div className={styles.backLink} onClick={() => handleRedirect('/algumas-cartas')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Nova Redenção, ______________________.</h2>
        <hr/>

        <p>
          _____,
        </p>

        <p>
          a serenidade latente das coisas é o que o fim nos oferta em troca.
        </p> 

        <p className={styles.oneFourth}>
          o mar é sim sereno em toda a sua violência.
        </p>

        <p className={styles.oneFourth}>
          está aí a resposta,
        </p>

        <p className={styles.threeFourths}>
          ___,
        </p>

        <p>
          esta consciência da vida
        </p>
        
        <p className={styles.center}> 
          que vive na inconsciência da morte
        </p>

        <p className={styles.oneFourth}>
          que vive nos mitos, que vive naqueles que creem nos mitos.
        </p>

        <br />
        <br />

        <p className={styles.center}>
          uma lagarta.
        </p>

        <p>
          uns olhos.
        </p>

        <p className={styles.flex}>
          <span>pés. &nbsp;&nbsp;&nbsp;pés.</span>	  	 		mão. 				<span>mão. &nbsp;ouvidos.&nbsp;</span>
        </p>

        <br />
        <br />

        <p className={styles.oneFourth}>
          tua voz sempre teve a certeza disso
        </p>

        <p>
          mesmo que você nem sempre a tivesse
        </p>

        <br />
        <br />

        <p className={styles.end}>
          árvores balançando vento fresco frio estrada de terra dissolver-se em tudo
        </p>

        <br />
        <br />

        <p className={styles.end}>
          e/ou calar.
        </p>

        <br />
        <br />

        <p className={styles.oneFourth}>
          _____.
        </p>

        <br />
        <br />

        <p>
          o mar é o final de qualquer estrada
        </p>

        <p className={styles.threeFourths}>
          em sua presença ou em sua falta.
        </p>

        <br />
        <br />

        <p className={styles.center}>
          não.
        </p>

        <p className={styles.oneFourth}>
          eu não venci 
        </p>

        <p className={styles.almostCenter}>
          e no entanto a história. 
        </p>

        <p className={styles.oneFourth}>
          ninguém pode vencer.
        </p>

        <p>
          a quem compensaria?
        </p>

        <p className={styles.oneFourth}>
          e não se poderia nomeá-los
        </p>

        <p className={styles.center}>
          o que isto expia?
        </p>

        <p className={styles.threeFourths}>
          a ninguém, a nada
        </p>

        <br />
        <br />

        <p className={styles.end}>
          que tenha passado
        </p>

        <p className={styles.end}>
         por dentro desses olhos 
        </p>

        <p className={styles.end}>
          que temos carregado
        </p>

        <br />
        <br />

        <p className={styles.end}>
          e
        </p>

        <br />
        <br />

        <p className={styles.oneFourth}>
          talvez a ti só se nomeie
        </p>

        <p className={styles.almostCenter}>
          em verdade
        </p>

        <p className={styles.almostCenter}>
          por
        </p>

        <p className={styles.almostCenter}>
          já ser imagem o teu corpo e
        </p>

        <p  className={styles.oneFourth}>
          agora
        </p>

        <p className={styles.oneFourth}>
          escorrer entre os dedos 
        </p> 

        <p className={styles.oneFourth}>
          escorrer entre os dentes
        </p>

        <p>
          sim
        </p>

        <br />
        <br />

        <p className={styles.end}>
          o dia deve ser recusado
        </p>

        <p className={styles.end}>
          para que se possa ser parte do tempo
        </p>

        <p className={styles.flex}>
          <span>parte de tudo</span> 		    		____				<span>que possa ter</span>
        </p>

        <p>
          existido
        </p>

        <p className={styles.end}>
          nalgum país
        </p>

        <p className={styles.end}>
          que se tenha deixado
        </p>

        <p className={styles.end}>
          ao longo do caminho.
        </p>

        <br />
        <br />

        <p className={styles.center}>
          e pensar que se escrevam palavras.
        </p>
        
        <p>
          e pensar que algumas cartas ficarão 
        </p>

        <p className={styles.almostCenter}>
          ao lado 
        </p>

        <p className={styles.almostPastCenter}>
          da última sombra 
        </p>

        <p className={styles.almostPastCenter}>
          do último corpo
        </p>

        <p>
          ainda à espera de que.
        </p>

        <br />
        <br />

        <p  className={styles.center}>
          talvez toda a civilização
        </p>

        <p>
          avistada de relance
        </p>

        <p className={styles.oneFourth}>
          conflua para este momento
        </p>

        <p className={styles.oneFourth}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tão distante
        </p>

        <p className={styles.center}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de qualquer instante calculável
        </p>

        <p className={styles.center}> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tão real 
        </p>

        <p className={styles.center}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          toda vez que.
        </p>

        <p>
          a urgência
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          as fronteiras
        </p>

        <p className={styles.oneFourth}>
          os jornais
        </p>

        <p className={styles.center}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          nada  nada disso agora, nada
        </p>

        <p className={styles.center}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          por tanto ter sido, e tanto seguir sendo
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          mas 
        </p>

        <p>
          tão sólidas têm se mostrado
        </p>

        <p className={styles.end}>
          cada uma das
        </p>

        <p>
          possíveis ideias 
        </p>

        <p className={styles.center}>
          das 
        </p>

        <p className={styles.almostPastCenter}> 
          possíveis respostas mas
        </p>

        <p className={styles.oneFourth}>
          por que se
        </p>

        <p>
          tão finos
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;
          permanecem sendo
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;
          cada um dos poros
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          de cada um dos homens
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          em cada um dos prados?
        </p>

        <p className={styles.center}>
          não.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>

        <p className={styles.oneFourth}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;
          eu não tenho uma resposta
        </p>

        <br />
        <br />

        <p>
          pois
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          sou menor que tudo que umas mãos possam ter tocado
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ao longo desta viagem
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          feita com os olhos
        </p>

        <p className={styles.center}>
          arregalados.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>

        <p className={styles.flex}>
          <span>não me escreva nunca mais.</span> 		____		<span>por favor agora me escreva.</span> 
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          e mesmo que 
        </p>

        <p>
          não se possa ver
        </p>

        <p>
          daqui ou daí em diante agora se não
        </p>

        <p>
          me escreva.
        </p>

        <br />
        <br />

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          mesmo que 
        </p>

        <p>
          daqui a
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          deus sabe e pouco apenas
        </p>

        <p>
          um eu dia te peça que
        </p>

        <p>
          possa.
        </p>

        <br />
        <br />

        <p className={styles.oneFourth}>
          _____
        </p>

        <br />
        <br />

        <p className={styles.center}>
          responda 
        </p>

        <br />
        <br />

        <p>
          furiosa e &nbsp;&nbsp;&nbsp; pacientemente
        </p>

        <br />
        <br />

        <p>
          responda
        </p>

        <br />
        <br />

        <p>
          a cada uma destas cartas que
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          jamais
        </p>

        <br />
        <br />

        <p className={styles.oneFourth}>
          ou mesmo algo algum um dia
        </p>

        <br />
        <br />

        <p className={styles.end}>
          um eu
        </p>

        <p>
          e ainda mais um eu que um eu
        </p>

        <br />
        <br />

        <p>
          te &nbsp;&nbsp;&nbsp;&nbsp;	env &nbsp;&nbsp;	ia
        </p>

        <p>
          ri
        </p>

        <br />
        <br />

        <p>
          a
        </p>

      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}