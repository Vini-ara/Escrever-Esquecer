import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Afetacao() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Afetação");

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

        <h2>Afetação</h2>
        <hr/>
        <p>
          A intenção deste texto talvez seja lançar um olhar para um <a href="https://www.youtube.com/watch?v=ykpJkf76X04"
          target="_blank" rel="noreferrer"><em>infamiliar</em></a>: algo que, 
          de tão intensa presença, tenha se feito esquecer ao longo dos tempos - e quando 
          reaparece, surge na forma de espanto. Ora, é evidente - e sobretudo óbvio no 
          conjunto destes textos - que o futebol é uma arte do corpo em presença. Será 
          necessário, então, dar alguns passos para além desta constatação: observar 
          que o jogo faz parte de um mundo de afecções que encontram o próprio corpo 
          como campo. Deixemos isso um pouco mais claro.
        </p>

        <p>
          Do futebol foi feito um terreno social consciente e ostensivamente 
          masculinizado: ele está, portanto, inserido numa lógica de aproximação 
          interpessoal baseada na abstração do corpo em prol de determinado 
          <em>logos</em>. Neste processo, funda-se um paradoxo insuportável - e naturalizado 
          ao ponto de tornar-se invisível - em que se pode falar de uma arte do 
          corpo sem citar o corpo - o discurso da honra, o clubismo cego, o tatiquês 
          tecnocrático convergem neste ponto assim como os códigos morais mais 
          rudimentares e seu presumido oposto, o neoliberalismo em seu ódio 
          pelo futebol. 
        </p> 

        <p>
          Mas se disséssemos que o futebol tem, justamente por sua vida corporal, um veio 
          inerentemente erótico, o que restaria do discurso mais tacanho sobre uma pretensa 
          função social que o esporte cumpriria? 
        </p>

        <p>
          Comecemos então com uma ideia de <em>erótico</em>. O conceito em jogo - que aqui funda-se 
          numa absoluta orelhada (a orelha é uma <a href="https://www.youtube.com/watch?v=LALA_0GbfQg"
          target="_blank" rel="noreferrer">parte do corpo</a>) - coloca a experiência física como 
          uma experiência afetiva. Além do sentido corrente do termo - <em>afetivo</em> como sentimental -, 
          o que se quer defender é justamente como o corpo é um ponto de afetação, isto é, do eco 
          de outras presenças, outros movimentos. Existe nisso uma lógica própria de racionalidade - 
          do jogo e não só - como a produção de ideias sobre o mundo e sobre o outro/si como resultado 
          de uma sensação ou impressão física. Pensar com a pele.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1T8CzcvbwK--4cTDHqgT5_mmLqVF_VgMX" alt="trombada de jogadores" />

        <p>
          Neste encontro entre carne e ideia funda-se, logo notamos, a própria psicanálise 
          - exatamente onde se funda também o futebol. Pensar o corpo como matriz de pulsões, 
          que se deslocam a esmo pelo mundo ordenado pela moral da sociedade, é pensar em sua 
          inerente erotização como litoral da experiência - algo que justamente foi e, pasme, 
          ainda é, alvo das críticas conservadoras sobre uma suposta <em>erotização da infância e 
          perversão da vida social</em>: note-se uma vez mais a tentativa de abstrair o corpo das 
          relações interpessoais, separar carne e sentido, enfim. Se o corpo é fonte incessante 
          de pulsões e se o futebol é essencialmente uma relação interpessoal pautada no corpo, 
          como seria possível conceber o futebol sem um espaço do/para o erotismo?
        </p>
        
        <p>
          Vejamos (com os olhos, também partes do corpo): grande parte do prazer do futebol pode ser 
          chamado de gozo. <a href="https://www.youtube.com/watch?v=iFgEQ0atB3U" target="_blank" rel="noreferrer">
            O gol é o gozo</a> - no grito que extrapola a língua,  
          fazendo-se excesso, na comemoração que exige o toque e que promove a aproximação;&nbsp; 
          <a href="https://www.youtube.com/watch?v=50PedXEjfw0" target="_blank" rel="noreferrer">
            o drible é o gozo</a> - 
          na constatação da finitude do alcance em quem toma, e da potência em que faz, 
          e na materialização do corpo como algo transponível e permeável;&nbsp; 
          <a href="https://www.youtube.com/watch?v=2yY2iDsKvGA&ab_channel=WingsOverScotlandWingsOverScotland" target="_blank" 
          rel="noreferrer">o título é o gozo</a> - na revelação de que à completude sucede a 
          incompletude outra vez, posto que a temporada sempre está fadada a recomeçar: 
          ninguém será para sempre campeão de nada.
        </p>

        <p>
          E é exatamente no ponto em que o futebol mostra-se como gozo que, 
          por anos a fio, surgiu sua estigmatização <a href="https://www.youtube.com/watch?v=lifwMuIDE18"
          target="_blank" rel="noreferrer">como mera alienação</a>. O 
          futebol aliena como o corpo aliena: isto é, escapa aos esquemas sociais 
          e à prolixidade possível da língua, ao pavimento feio da ideologia, 
          fazendo-se um <em>a mais</em>. É ideológico e mais do que isso. Como a psicologia 
          reformou as metafísicas do pensamento impondo-lhes um corpo (fazendo-as ontologia), 
          assim o futebol fez com a leitura política mais apressada que tentou ligá-lo - 
          por exemplo nos anos 1970 – a determinada ideologia ou campo social que 
          tentava se aproveitar de sua difusão. Mas direcionar o jogo seria como 
          forçar a pele a parar de desejar, ou como forçar os olhos a deixar de 
          ver formas: o futebol é irresumível a esquemas ideológicos justamente 
          como/porque o corpo dali também sempre escapará por meio das pulsões. 
          Uma sociedade que diz <em>ordem</em> - e que tenta responder a uma ordem com 
          outro desejo de ordem - reprimirá sempre o que lhe parece extrapolar 
          a coerência interna.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1-YJy9CdqheBoEP6yqss0t2SMQTmdk8YX" alt="homem caído no chão" />

        <p>
          Há muito de desejo em deixar-se ver em movimento. Há ainda mais no intuito de se colocar naquela posição, 
          para poder também ver. O excesso do discurso proposto pelo futebol é a posicionalidade que insistimos 
          em procurar, a relação necessária entre o outro e o si mesmo: não há <em>penso logo existo</em>, 
          como no racionalismo, mas <em>me situo logo posso vir a existir</em>. A perversidade do placar 
          - justamente a perversidade da lei - está em resumir a cenas, a lances importantes, a 
          intenções aquilo que só existe por ser relação, posição, em um mundo sem terceiro excluído. 
          Uma jogada é o resultado da relação entre corpos que se colocam em posição com relação a 
          outros corpos; um jogo inteiro é ele próprio uma sociedade vista de relance.
        </p>

        <p>
          E por ser sociedade, seu nexo primeiro - ou último - é a afetação. Por isso, o 
          futebol causa interesse - entre jogador e jogador, público e jogador, público e 
          público - na mesma medida em que produz a vontade de ver, de ouvir, de sentir, 
          de se colocar: a experiência do estádio atrai e é insubstituível por isso, assim 
          como jogar nunca será compensado com pensar no jogo. Que se ouça um jogador falar 
          sobre a diferença entre a partida com ou sem torcida; que se ouça o saudosismo dos 
          velhos estádios, naquilo que há ali de legítimo. Para o futebol, o desejo é princípio, 
          fim e meio: é, como a pulsão para o corpo, amplitude e limite. Todos queremos sentir 
          o jogo, e não apenas compreendê-lo - aqui o futebol também converge com a experiência 
          da arte, sendo, afinal, estética. 
        </p>

        <p>
          Contra a pornografia do jogo, a mercantilização que, à força, quer produzir a ilusão 
          de um conjunto de efeitos sem causa - luzes coloridas, jogos de câmeras em zoom, 
          ritmos quebrados -, e contra o cinismo da masculinização do campo social - já se 
          falou sobre isso por aqui -, a grande resposta está justamente no erotismo do futebol, 
          que mostra como a infinitude da partida se dá em/por suas incontáveis zonas erógenas. 
          Uma frase utilizada em discursos ralos de bravura em campo - <em>o futebol é um esporte 
          de contato!</em> - mostra-se, como um <em>infamiliar</em>, portadora justamente desta ideia que se 
          está aqui a defender: sim, é um esporte de contato: só jogamos porque sabemos amar.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1D-YivWh4qNGbvfGjsuQyQzvqWZ7xy0Ns" alt="comemoração" />
        
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}