import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Pe() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();
  
  useTitle("Pé")

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

        <h2>Pé</h2>
        <hr/>

        <p className={styles.end}>
          <em>O que ele quer é pé, é isso que ele quer.</em>
        </p>

        <p>
          É particularmente interessante o ímpeto de algumas torcidas, estádios ou países 
          em viver o futebol <em>de pé</em>. À diferença dos grandes centros do esporte 
          alegadamente civilizado, nas regiões mais para baixo do globo as cadeiras 
          e assentos parecem se tornar meros detalhes ou empecilhos para uma experiência 
          completa do que significa estar realmente próximo a seu time: o esforço físico, 
          em países como Argentina, Turquia ou Grécia, é <em>dividido</em> entre aqueles 
          que estão dentro e fora de campo – algo que o período pandêmico pareceu escancarar 
          como instante de verdade de um esporte que foi, a fórceps, ali reinventado.
        </p>

        <p>
          Em verdade, o futebol parece ser o único dos esportes de massa que constantemente 
          convida seu público a colocar-se na mesma postura que seus atletas, isto é, sustentar-se 
          em seus pés – caso os códigos e burocracias o permitam, é claro. Assim como os jogadores, 
          os torcedores no futebol são convocados ao desgaste físico ao pular, ficar <em>em pé</em> em 
          tribunas ou se arremessar uns contra os outros para compor um grau a mais à exigência 
          que o jogo faz ao corpo como presença. Esta exigência parece ter sido inerente à formação 
          das torcidas ao redor do jogo, como imagens antigas parecem aclarar: naquelas pessoas <em>de pé</em> 
          e alinhadamente vestidas nos anos 30, 40 ou 50 ressoa uma espécie de potência pronta a 
          irradiar no advento da Geral em anos subsequentes. E é esta potência que, afinal, foi 
          (deliberadamente) contida com a arenização dos estádios, que promoveu justamente como 
          diferencial o <em>conforto</em> como parte da vida do futebol: a arena diferencia-se 
          do estádio essencialmente na convocação do público a sentar-se em silêncio, salvo nas 
          regiões em que se permita – ou não se proíba – algo distinto.
        </p>

        <p>
          A mudança estrutural nos estádios compõe, assim – e este é afinal o argumento 
          deste texto –, um movimento amplo ao redor do futebol que resulta e parte da abstração do 
          corpo, ou, mais precisamente, do <em>pé</em> como local essencial a este esporte, por mais 
          estúpido que isso possa soar. 
        </p>

        <p>
          Partamos uma vez mais, e do princípio – nas duas acepções da palavra. Se pensarmos praticamente, 
          o sucesso do futebol como esporte é algo absolutamente antinatural na genealogia das criações 
          modernas do homem: ele é o único dos inventos contemporâneos de alcance global que parece ainda 
          deslocar seu principal eixo <em>da</em> cabeça <em>aos</em> pés. O que os meios de transporte velozes, 
          a informática em geral, o agronegócio, a urbanização das cidades ou o entretenimento como 
          fetiche fizeram ao longo do século XX foi, justamente, um esforço para transformar a vida em 
          metaesquemas abstratos e lógicos, deixando seus experienciadores – diríamos, distraídos, 
          sujeitos – na mais confortável posição para uma imersão completa, que decomponha os termos 
          conflituosos do real. Este é um processo de domesticação do corpo, resultando, afinal, no 
          conforto daquilo que pretende apartar o homem de sua própria materialidade: calçados contra 
          o chão, janelas contra a paisagem, cadeiras contra as pernas, ideias contra afecção.
        </p>

        <p>
          E nada disso é o futebol em seus meios e princípios. Contra o monopólio do <em>polegar opositor 
          altamente desenvolvido</em> que possibilitou que o ser-humano pretensamente triunfasse sobre o
          s objetos, o pé se mostra no futebol como algo a ser constantemente pensado, já que sua 
          domesticação – sua <em>sapatização</em>, se me permite – o transformou em um simples pedestal do 
          homem moderno – e quem já tentou jogar futebol sabe que a causalidade entre ideia e execução é, 
          quando se trata do pé, uma larga distância. Como um local em que a verdade deste processo se 
          revela contra a farsa do discurso, crianças seguem a perder o tampão do dedo em pedras na rua, 
          estrelas milionárias jogam pênaltis no espaço, zagueiros aguerridos empurram a bola contra as 
          próprias redes, e aos grandes passes diz-se que parecem ter sido feitos <em>com a mão</em>: a 
          popularização do futebol parece ser consequência de um desrecalque dos baixos corporais, neste 
          caso os mais baixos possíveis. E o pé, em sua anatomia cerceada, é um símbolo de como os corpos 
          são resultantes de processos sociais, não existindo antes deles, mas sendo moldados ao longo de 
          sua execução.
        </p>

        <p>
          Seria possível contar a história do futebol a partir de uma história dos pés, na tensa relação 
          entre sua abstração e sua revelação súbita em contextos os mais diversos. O tatiquês, 
          por exemplo, é uma maneira de transformar o insondável do jogo em dado a ser computado, 
          sendo o corpo um simples meio para um fim. Já as chuteiras são tecnológicas, coloridas, 
          caras e complexas, mas parecem ter feito este nó justamente para que se tornassem, neste 
          ponto do século XXI, o mais leves e aderentes ao pé quanto seja possível – isto é, 
          deixando a maior sensação ao jogador de que ele, como quando começou a jogar na infância, 
          está de fato descalço.
        </p>

        <p>
          (Se a metáfora central das línguas e religiões ocidentais é a da ascese – o subir para 
          vencer ou se salvar do que está abaixo, do que é o limbo ou o inferno – o pé retoma a 
          ideia de que a vida humana funda-se, literalmente, no chão – algo que o axé e os pés de 
          Exu parecem ter entendido há muitos em nossas religiões de matriz africana, nas quais o 
          solo é um ponto pivotante e permeável entre futuro, presente e passado. Nitidamente, o 
          futebol está bem mais perto, em sua gestualidade, desta última genealogia).
        </p>

        <p>
          O futebol pauta-se, portanto, em movimentos nos quais se deveria tentar esconder, 
          na visão de alguns, aquilo que aparentemente o negaria: sua ligação com o risco, 
          com o ruído. O que se vê no esforço de transformar os campos de várzea das periferias 
          em experiências <em>sintéticas</em> é um duplo do esforço em disfarçar a própria existência 
          dos pés, ao mesmo tempo em que o jogo só é, paradoxalmente, permitido <em>por meio</em> deles: 
          como se a lei precisasse esconder a si mesma para que ninguém encontrasse as falhas 
          constitutivas a seu texto – falhas que afinal são apenas a admissão de que existe um real, 
          e de que nenhum sistema é fechado em si. A experiência da várzea – que se constituía até 
          então não só no jogo, mas no conhecimento das imperfeições, qualidades e características 
          do campo – tem se nivelado a partir da planificação e artificialização que transformam 
          (ou gostariam de transformar) todo jogo em uma variação abstrata do mesmo – justamente 
          como fazem aqueles que enxergam uma partida em conceitos numéricos e pré-formados.
        </p>

        <p>
          Mas o que os pés desmentem ao contato do solo – e que, sabe-se, é o que faz com que o terrão 
          seja uma instituição formadora mesmo em times grandes – é o intento de abarcar o jogo em uma 
          ideia ou em um sistema ideológico. Jogar ou torcer significa não presenciar, realizar ou agir, 
          mas simplesmente <em>estar</em> – isto é, como um meio sem fim, mostrar-se vivo e suscetível: e lembre-se 
          que <em>estar</em> significa, originalmente, na Língua Portuguesa, erguer-se, levantar-se: e nisto não há 
          gratuidade alguma. O futebol é um jogo dos pés, e isso significa ser um jogo pautado na dúvida, 
          na equivocidade controlada, no desconforto da zona indomesticável do ser-humano: a graça do jogo 
          é, justamente, situar o baixo-corporal no centro da cena e da lei, e vê-lo esbarrar-se em si mesmo.
        </p>

        <p>
          O que o video-game, a arena, o gramado artificial ou o pay-per-view encarnam é, na prática, 
          o sonho de se fabricar um futebol sem corpo: um sonho que emerge do mesmo solo – do mesmo 
          ar, em verdade – que criou o trabalho sem presença, o dinheiro sem lastro e o valor puramente 
          especulativo, espraiado em algum tipo de infinito ruim. Por isso, contra a pretensa grandiosidade 
          daquilo que tentar nos convencer que é <em>tudo</em>, é necessário que mantenhamos os pés no chão.
        </p>

        <p className={styles.end}>
          <i>Para Ingold.</i>
        </p>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}