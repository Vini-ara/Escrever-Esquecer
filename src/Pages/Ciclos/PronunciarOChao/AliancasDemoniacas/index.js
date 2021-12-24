import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function AliancasDemoniacas() {
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

        <h2>Diante do outro, em nome de si</h2>
        <hr/>

        <p className={styles.center}>*</p>

        <p>
          Talvez uma das grandes lições da antropologia ao mundo ocidental seja aquela que versa 
          sobre a fragilidade dos conceitos convencionais de família e filiação. Assim como a raça, 
          o sexo, o gênero e outros constructos cuja administração é tão cara a uma agenda conservadora 
          - cujo grande argumento é justamente o fato de que essas relações ou formas seriam <em>naturais</em> -, 
          a defesa da família assume-se como a necessidade de se estabelecer linhagens, isto é, 
          genealogias e separações em que as posições em jogo estejam determinadas <em>antes</em> de tudo que 
          possa se dar. E que, é claro, não sejam reatualizadas, sequer havendo esta hipótese.
        </p>

        <p>
          Diante do sonho das revoluções burguesas em acabar com a constância das linhagens - 
          naquilo em que significavam controle indefinido da ordem social -, foram estabelecidas 
          (ou melhor, reafirmadas) outras formas de hereditariedade e posse por meio da herança, 
          inventando-se uma espécie de espaço vazio entre natureza e cultura, como um terreno 
          baldio (comodamente) do não pensável. <em>Uma mulher é uma mulher; um homem preto é um 
          homem preto; uma família é uma família</em>. Em uma sociedade em que enunciados tautológicos 
          prevalecem - como a buscar um limite real para a extensão da linguagem -, 
          as coisas simplesmente <em>são porque têm sido</em>. 
        </p>

        <p>
          A família, assim, não é tida como uma coisa social (pois uma pessoa já nasceria 
          biologicamente inserida nela) e tampouco como algo natural (posto que vegetais, 
          planícies ou animais não teriam família, mesmo inevitavelmente... nascendo). 
          Tem-se, portanto, um conceito que, mais do que precise ser readequado para caber 
          em alguma definição coerente de natureza ou cultura, revela justamente a 
          fragilidade desta oposição: quando se faz necessário um grande número de 
          concessões e interditos, você está diante de um caminho sem saída.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1gqnJi-J6eKl__m4UfxoNy7Tqx4LjJb5C" alt="torcida" /> 

        <p className={styles.center}>*</p>

        <p>
          Há dois discursos correntes – antagônicos mas estranhamente parecidos – que versam 
          sobre o modo de inserção da pessoa na massa futebolística.
        </p>

        <p>
          Um primeiro diz que em um estádio de futebol é possível encontrar-se com pessoas 
          de "todas as classes, raças, ideologias", em uma espécie de conciliação absoluta 
          ou mito democrático. Neste discurso - que, inclusive, recentemente ouvi em um 
          debate de direitistas sobre a atual gestão do Esporte Clube Bahia - a ideia é 
          de que o futebol é um terreno que não promoveria a identificação, mas a perda 
          de predicações. No futebol, portanto, você deixaria de ser quem você é - na 
          infinidade de particularidades segregadoras - para integrar-se à massa em um 
          tipo de grau zero da experiência social. Subjaz a esta fala, já fica nítido, 
          a ideia que leva à existência de projetos ou instituições como a Escola sem 
          Partido: a concepção do espaço público como campo a-político, folha em branco 
          em que os indivíduos - respeitando-se mutuamente - vivem a si mesmos, no que 
          constituiria afinal <em>o povo</em>.
        </p>

        <p>
          O segundo discurso a ser aqui citado é aquele que vê no futebol <em>um campo a mais</em> 
          de identificações, a ser somado a todos os outros que atravessam um sujeito. 
          Nisto está pautada, afinal, a vulgata do pensamento sobre a chamada 
          interseccionalidade, que nada mais seria do que a ideia de que um sujeito 
          seja a soma de seus predicados - tendo, portanto, pouca ou nenhuma 
          autonomia sobre quem <em>de fato é</em>, já que seu lugar no mundo está dado de 
          antemão pela forma como nele se situa. Esta visão, que vem de uma 
          leitura muito apressada de determinado estruturalismo francês, 
          compreende então que o futebol é a fonte de um encontro do 
          indivíduo consigo mesmo, um local em que se manifestaria aquilo 
          que ele de fato é - inclusive no próprio ato de estar ali, e 
          da forma como efetivamente está.
        </p>

        <p>
          Mesmo que simétricas, ambas as leituras parecem apresentar um mesmo problema de base: 
          pensar o indivíduo como grau zero da experiência social, isto é, conceber 
          que o todo seja resumível à soma das partes – e que as partes sejam uma 
          decorrência natural do todo. Na primeira linha, o indivíduo pode (deve) 
          ser separado do social, pois eles em nada coincidem; na segunda, 
          ambos coincidem diretamente em tudo, sendo apenas espelhados. De 
          lado a lado, portanto, o que se tem é uma redução ou uma falsa 
          proporcionalidade: o mundo nunca sairá do lugar, posto que 
          sempre esteve ali.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1Zw31Naa9NNYO6DGMapuy9PhiQ9F3ntU3" alt="cabeçada" />

        <p className={styles.center}>*</p> 

        <p>
          Diante disso, parece interessante voltar à antropologia. Ali, e cá penso sobretudo na leitura 
          de Viveiros de Castro a Lévi-Strauss, mostra-se então uma primeira saída futebolisticamente 
          interessante ao falso dilema de pressupostos iguais. 
        </p>

        <p>
          Olhando para o mundo ameríndio, há uma série de estruturas sociais erguidas na 
          possibilidade relacional entre indivíduos, grupos, não-indivíduos, possíveis-indivíduos, 
          possíveis-grupos (etc) em que a posição que ambas as partes assumem em um contexto é 
          determinante para sua identidade provisória. Torna-se evidente, portanto, o fato de 
          que a estrutura familiar de nossas sociedades é apenas um sistema relacional possível, 
          dentre muitos.
        </p>

        <p>
          Cito aqui de orelhada e um tanto abstratamente dois breves exemplos de como estamos 
          diante de estruturas que efetivamente nos dizem algo sobre os limites da genealogia 
          familiar. O primeiro remonta ao tão caro enigma da antropofagia: o que está em jogo 
          ali é, afinal, um processo em que, a partir da imersão (literal) no outro, determinado 
          grupo tem em vista aprimorar suas características próprias, tornando <em>seu</em> aquilo que 
          até então era <em>outro</em>: não se pode pensar, portanto, que exista alguma coisa de essencial 
          ou <em>própria</em> ao grupo. Com isso, tem-se que as características de indivíduos ou 
          coletividades são conduzidas e moldadas <em>quase</em> ao acaso pelo contato que ocorre 
          com outros grupos. O <em>próprio</em> é, então, fruto de uma deriva no outro: só há <em>nós</em> 
          porque e a partir <em>do eles</em>. 
        </p>   

        <p>
          O outro exemplo está na chamada dinâmica de predação, em que a caça a 
          determinado animal (em determinado grupo) torna-se uma situação limite 
          de perda e aquisição de características. Estar diante de um animal é 
          estar suscetível a uma maneira distinta de ser visto: a onça pode ser o 
          outro do homem, mas o homem não é necessariamente o outro da onça, posto 
          que seu sistema de relações com o mundo e com o corpo é radicalmente 
          distinto. Caçar é, portanto, também ser caçado: isto envolve um jogo 
          duríssimo em ceder ou não ceder sua posição, seu corpo ao outro.
        </p>

        <p>
          Contadas aqui de forma breve (e insuficiente, convenhamos) estas duas 
          dinâmicas básicas do mundo ameríndio deixam evidente aquilo que impediu 
          todas as tentativas de domesticação, catequização ou escravização de grupos 
          indígenas: é impossível colocar réguas qualitativas na relação entre pessoas 
          e pessoas, pessoas e coisas, coisas e coisas. Não há um único momento, 
          assim, em que se possam estabilizar identidades: o contexto fará com que 
          elas estejam perpetuamente em negociação, algo que parece impensável em 
          um mundo em que haja qualquer mínima forma de lastro - seja ele a lei, 
          o Estado ou o dinheiro. O eu não existe senão como <em>outro do outro</em>.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1cf13CP68PqNw6tP6Sq4Wjli-FVzPNy_u" alt="torcida" />

        <p className={styles.center}>*</p> 

        <p>
          Todo este interlúdio para dizer que, distante do nexo familiar, hierático ou 
          hereditário, o futebol (ou ao menos a experiência do futebol) está mais para 
          o mundo ameríndio do que para as sociedades do capital - em suas leituras que 
          tentar ligar o futebol a uma lógica de filiação. A ideia é a seguinte: do jogo 
          à torcida, o futebol é um esporte de posições relacionais, comunidades súbitas, 
          encontros fortuitos e perdas definitivas.
        </p>

        <p>
          Decerto, por incontáveis vezes cada um de nós presenciou uma situação em um jogo 
          de futebol em que algo <em>calhou</em> de acontecer. Há derrotas e triunfos inexplicáveis, 
          há decisões sem nexo, há eventos sem cabimento algum. Todo o esforço de taticalizar 
          o jogo - vindo da Europa, como já se falou aqui algumas vezes - surgiu com o intuito 
          de tentar limitar o campo de ação do insondável - o bom e velho Sobrenatural de 
          Almeida. Por que isso se dá ao lume de maneira tão nítida no futebol? Em verdade, 
          este processo parece passar por uma série de características própria ao jogo e 
          já comentadas aqui: o fato de que o jogo de bola com o pé ser extremamente 
          antinatural, a existência de turnos simultâneos de ataque e defesa, o 
          espaçamento inconstante de uma grande quantidade de pessoas (que faz com que 
          individual e coletivo estejam se redeterminando a todo momento), a capacidade 
          de limitação, modulação e quebra do espaço de jogo (algo que a linha de 
          impedimento um dia possibilitou). Esses aspectos mais "estruturais", 
          somados ao primado do drible e da enganação como lei (já falamos disso também) 
          fizeram do futebol um esporte que tende ao caos absoluto, isto é, à perda e 
          reformulação incessantes -  e é esta então sua ordem afinal.
        </p>

        <p>
          Como consequência a esta estrutura do jogo, criou-se ao redor do futebol uma 
          cultura que se poderia chamar de <em>integração sem familiaridade</em>, isto é, relações 
          que assumem incessantemente outros polos e valores. Torcer ou simpatizar por um 
          time é uma escolha (ou uma quase-escolha, também já dissemos) que mostra como um 
          <em>esquema de predicação</em> da vida social é falho: pense-se, por exemplo, em como é 
          possível encarnar uma gradação de afeto com relação a indivíduos e times, em como 
          há os torcedores que apenas acompanham e aqueles <em>roxos</em> que de fato vivem seu time: 
          eles estão dispostos de forma diferente, portanto, diante de um mesmo esquema ou 
          símbolo. Mesmo na vida de uma pessoa, o time-do-coração muda de valor ou importância 
          em determinados contextos e a partir de diversos acontecimentos, que fazem com que 
          ele ganhe ou perca relevo e importância - e basta ver a relação entre períodos de 
          seca de taças e indicadores de torcida para que se saiba disso.
        </p>

        <p>
          Sendo assim, tem-se a medida da resposta antropológica do futebol aos esforços em 
          colocá-lo em réguas quantitativas: o jogo é relacional, isto é, é preciso instituir 
          réguas qualitativas para se jogar, pensar ou vivê-lo. Por isso, afinal, a enorme 
          maioria das discussões sobre o futebol é interminável: quem é ídolo e quem não é, 
          quem é melhor que quem, por que algo dá ou deu certo, o quanto faltou para algo ser 
          diferente: todas essas lacunas constitutivas ao jogo que em geral são preenchidas 
          por jargões ou frases feitas (<em>clássico é clássico e vice-versa, pênalti é loteria, 
          futebol é detalhe/uma caixinha de surpresas</em>).
        </p>

        <p>
          O ponto é, portanto: não há espaço para genealogias no futebol, já que se está 
          diante de uma pura experiência de deriva, contextual e relacional. Isto talvez 
          nos devesse ensinar algo sobre o campo político e os movimentos da sociedade 
          contra o Estado, principalmente o fato de que <em>ninguém é o que é</em>, de que existe 
          sempre um contínuo entre os polos, de que duas coisas em relação são uma coisa 
          terceira. Diante da hagiografia e do mundo parental, o futebol está muito mais 
          para aliança demoníaca, isto é, para a ideia de ruptura e de provisoriedade. 
          Existe, portanto, um vazio central na experiência do futebol que é, justamente, 
          o local em que o valor de alguma coisa altera-se, muda de identidade: não à toa, 
          mais do que um jogo com bola, o futebol é a arte da ocupação e do esvaziamento 
          de espaços, algo sintetizado de forma mágica pela pedalada e pelo corta-luz, 
          movimentos estéticos-éticos que explicam, melhor do que qualquer um poderia, 
          estes pontos.
        </p>

        <p>
          Sob o risco de soar lunático ou radical demais, digo que há no futebol uma ideia 
          possível de sociedade em que seja admissível que algo não tenha razão, essência 
          ou causa, mas que tampouco esteja fadado à ausência de regra - o futebol é, 
          afinal, a arte do impossível dentro do possível. Se a família e o nexo 
          hereditário surgem - como um Guardiola no futebol - para tentar limitar 
          ou explicar as posições que um sujeito pode assumir, e se a visão sociológica 
          que tenta se contrapor ao nexo conservador tem feito exatamente o mesmo 
          movimento, só me resta lembrar de quando o insuspeitado Cocada decidiu o 
          campeonato carioca de 1988 com um gol aos 41 do segundo tempo, sendo expulso 
          na comemoração, totalizando 5 minutos em campo ao cabo. Eis como podem 
          surgir os nexos decisivos para algum momento historicamente incontornável: 
          do banco reservas para o gol, do nada para o algo, do impossível para o 
          necessário. Isto, claro, do ponto de vista do Vasco.
        </p>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}