import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function OFutebolASerEscrito() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>O futebol a ser escrito</h2>
        <hr/>

        <p>
          Escrever <i>sobre</i> futebol é algo tão impossível quanto escrever <i>sobre</i> qualquer outra coisa.
          Isso porque não existe, nem pode vir a existir, alguma forma de coincidência exata entre
          palavra e objeto: os objetos se relacionam entre si de forma diferente a como as palavras
          também se relacionam. Mais do que isso: esses dois campos de diferenças encontram-se também
          mutuamente em diferença. Um texto, portanto, nunca será <i>sobre</i> alguma coisa, assim como um objeto
          não pode ser <i>sobre</i> um texto, tampouco é possível acabar com o litígio que a palavra promove com
          relação ao seu possível real: o que é uma <i>goleada</i>, um <i>golaço</i>, uma <i>agressão</i>, um <i>vexame</i>? Os referentes
          de qualquer palavra nunca estão dados de antemão, mas compõem um jogo que se reinicia todos os dias.
        </p>

        <p>
          Por isso, longe de qualquer misticismo, note-se que, no fim das contas, todo texto pauta-se exclusivamente em si mesmo
          , na ordem de suas palavras. Todas as lacunas de suas referências são, assim, invariavelmente preenchidas por algo chamado 
          sentido, por aquilo que desponta do campo do significado ao campo do sensível, neste espaço que chamamos, afinal, de corpo.
        </p>

        <p>
          Aproximar-se do futebol com palavras é, portanto, (re)inventá-lo: é o mesmo que descrever uma casa em que nunca se esteve: 
          não importa, fora do pacto realista, que o relato não se pareça com um referente <i>real</i> - isto é, um objeto que 
          supostamente existe no mundo de maneira objetiva: o que importa não é que o texto produza uma casa, mas a sensação de uma 
          casa, o contexto de uma casa, a ideia de uma casa - ou de um jogo de futebol, no nosso caso - e que induza algo comparável, 
          mas distinto, daquilo que foi inicialmente pensado. Você pode chutar uma bola para frente sem saber aonde ela irá chegar: 
          sua única garantia é que é pouco provável – não se diz aqui impossível – que ela vá para trás. Você pode escrever mirando 
          em um jogo como o futebol: há aí a ideia de que não se sentirá/entenderá algo como <i>nuvens cobrem o Estado do Arizona</i>,&nbsp;
          <a href="https://www.youtube.com/watch?v=1Vqmm3vNH3E" target="_blank" rel="noreferrer">provavelmente</a>. Mas o jogo deve ser jogado - o texto deve ser escrito 
          - e as certezas por aí param.
        </p>

        <p>
          Daí a distância que há entre o futebol e a linguagem técnica usada para explicá-lo ou 
          comentá-lo. Todas as piadas com termos como <i>falso 9</i>, <i>pivote</i>, <i>box-to-box</i>, <i>winger</i>, <i>target man</i>, 
          <i>jogador de contenção</i> - além é claro de todas aquelas variantes de números como 4-1-4-1, 4-2-3-1, 3-4-3 – dizem 
          respeito justamente à impossibilidade de se limitar o fluxo do jogo à sua abstração linguística/ideológica. A escrita 
          tecnocrática do futebol, assim como o palavrório pretensamente engajado de sua crônica esportiva (salvo raras exceções, 
          como Tostão, é claro) peca justamente por aquilo que tem fadado nossa sociedade ao gozo dos engravatados: a crença de 
          que a linguagem é um meio, nunca um fim. Com isso, a pretensa limpeza do vocabulário técnico do futebol, em sua 
          especificidade que se logra gradativamente, tenta mascarar o hiato que há entre o mundo e sua experiência, e entre 
          essa experiência e sua partilha.
        </p>

        <p>
          É necessário escrever pelo/no/para o futebol sabendo-se que este trajeto nunca terá fim, e que ele precisará se valer 
          de diversas outras formas, áreas, regiões para fazer-se ressoar. A soberania da escrita de Nelson Rodrigues na 
          crônica esportiva é a prova disso: a permanência de seus textos para muito além dos jogos sobre os quais o autor 
          debruçara está justamente em sua capacidade de transformar o jogo em <i>evento</i>, isto é, em narrativas, personagens, 
          valores, entidades. <a href="https://www.youtube.com/watch?v=T-qiJEnm_0Q" target="_blank" rel="noreferrer">É preciso ficcionalizar o jogo para enunciá-lo</a>: 
          e como uma ficção não anula outra ficção, este processo também calha de não ter fim.
        </p>

        <p>
          A palavra está para o texto como a bola está para o jogo: ninguém dirá que um existe para o outro, nem que se esgotam 
          mutuamente. A palavra está para o jogo como a bola está para o texto: a relação constrói-se em ato, não está dada de 
          antemão. Metáforas, dribles, catimba, analogias: tudo isso preenche a distância impercorrível que vai da parte para 
          o todo, do real para a ideia, e vice-versa. O que está em jogo - na escrita e na partida de futebol - são inúmeras 
          tentativas de aproximação entre elementos <i>infinitamente</i> distintos. Dois textos podem ser comparados na mesma medida em 
          que dois gols podem ser comparados: como parte de um mesmo esquema geral, como compartilhando algum elemento de saída 
          ou ordem. E apenas. Pois quem dirá que todo gol é o mesmo objeto, posto que se constitui sempre da imagem de uma bola 
          atravessando uma linha? Ninguém que o tenha um dia comemorado.
        </p>

        <p>
          A vida do sentido e a vida do jogo são experiências corporais, e nisso compartilham a necessidade do movimento em que 
          se colocam em relação objetos distintos (enunciados, jogadores, signos, campeonatos). Quando estas vidas são colocadas 
          lado-a-lado, mais um plano desta dialética está dada: o movimento entre movimentos, em que tem-se infinitas perdas 
          (todo lance é a infinidade de lances não-feitos, toda palavra é a infinidade de palavras não escolhidas) para infinitos 
          ganhos (todo passe é o princípio inevitável de algo, todo texto gera alguma forma de sentido em quem o lê). Pensar que a 
          linguagem deva <i>descrever</i> o jogo ou que deva ser técnica e específica para explicá-lo seria submeter o futebol a uma lógica 
          alheia tanto a ele quanto às palavras. Seria desmentir-se em ato.
        </p>

        <p>
          Aí estão os termos, enfim, de uma insondável separação/coincidência: futebol é escrever com os pés, escrever é chutar 
          ideias. Que isso se sinta como possível aqui/aí.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1I5_CjnWhHRzTiwIeYFq5dknT5kxgmnbr" alt="gol" />  
          
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}