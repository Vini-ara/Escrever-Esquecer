import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function TopologiasDoJogo() {
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

        <h2>Topologias do jogo</h2>
        <hr/>

        <p>
          Sendo o futebol - como a arquitetura, a dança, a matemática e a poesia - uma <a 
          href="https://www.archdaily.com.br/br/952424/culturas-de-rua-corpo-e-espaco-publico-guilherme-wisnik-conversa-com-luiz-antonio-simas"
          target="_blank" rel="noreferrer"> arte do espaço</a>, 
          teria ele também direito a uma topologia? Existindo esse texto, a hipótese já se impõe ao menos 
          como tal. No entanto, partimos (eu e você) desta pergunta justamente porque ela implica uma reflexão 
          necessária e urgente sobre a finalidade - ou a não-finalidade - do jogo, haja vista o esforço 
          que temos visto para inseri-li numa única história ascendente. Buscar uma ontologia é, portanto, 
          pensar na razão e nos termos da própria existência do futebol, que jamais pode ser assumido como 
          um espaço único ou unívoco: o jogo se dá de diferentes maneiras, em diferentes lugares, por 
          diferentes pessoas, em diferentes momentos.
        </p>

        <p>
          Noutras palavras - e aqui começam os problemas que, como todos, nós simplesmente inventamos 
          (eu e você) - pensar numa topologia do jogo é tentar redefinir o centro das ideias que 
          lançamos a ele: qual deve ser o seu fundo e a sua frente? Qual é, afinal, sua <em>necessidade</em>? 
          Onde o futebol derrama seus limites? Voltando mais uma vez: após anos e anos de acanalhamento 
          causado por mesas redondas, análises de arbitragem e declarações de Xavi Hernandez sobre Messi, 
          parece ser urgente pensar no futebol como uma&nbsp; 
          <a href="https://i.pinimg.com/originals/d6/6c/c2/d66cc2dc5bc0abee289843a7efa9b149.jpg"
          target="_blank" rel="noreferrer">arte do vazio</a> - um vazio pontuado por gols e 
          subdividido quase aleatoriamente por tempos e partidas - um vazio espraiado pelo espaço que se 
          redefine a partir da presença de algo que não seja, provisoriamente, o vazio.
        </p>

        <p>
          Nisto, para além do falatório truncado, vive (mais) uma tentativa de afastar o jogo da teleologia, 
          isto é, de tirar o núcleo das discussões de futebol dos resultados e dos atos isolados do 
          tempo-espaço em que se dão/deram/darão. O espaço do jogo não pode ser, portanto, o espaço 
          euclidiano. Justamente porque o tempo do jogo não pode ser o tempo cartesiano. Na prática - 
          portanto, também na teoria - isso significa pensar com Gödel, Pelé, Garrincha e Heisenberg, 
          que o futebol carece de uma ótica em que se assuma que posição, direção, velocidade e tempo 
          sejam variáveis relacionais, incertas e contextuais, que mostrem como o estar-no-mundo - uma 
          forma a mais de dizer <em>estar-no-campo</em> - é uma questão de aproximação e tentativa, é uma invenção 
          motivada de contextos: a distância entre o <em>impossível</em> e o <em>necessário</em> é, no futebol, absolutamente 
          intercambiável. 
        </p>

        <p>
          É preciso, portanto, que algo no jogo seja assumido como inapreensível: isso é uma condição ética, 
          uma maneira de fazer com que o real retorne no jogo, quebrando-se a ideia de que um resultado, 
          por exemplo, seja algo simplesmente explicável. Isso não significa desistir de observar, mas, 
          justamente o oposto disso, nos leva a assumir que a observação precisa de modelos e de limites 
          para se fazer existir, e que o jogo não apenas realiza seus pressupostos, mas dobra-se sempre 
          sobre si mesmo. Tentemos.
        </p>
        
        <img className={styles.bigger} src="https://drive.google.com/uc?export=view&id=1VSiVLdKYluQo7J3hNveKWCF_yOZyme0i" alt="drible no goleiro"/>

        <h3>O jogo é o toro</h3>

        <p>
          Vamos (eu e você) começar nossa análise topológica do jogo a partir, é claro, do próprio jogo.
        </p>

        <p>
          O futebol, pode-se dizer, é perfeitamente circular: como nunca esgota suas possibilidades 
          (sua palavra de ordem é <em>se</em>), o retorno ao começo é inevitável, seja como prova, seja como 
          revanche. E este começo, diferentemente do tênis, do basquete, da natação (etc), impele ao movimento, 
          posto que no futebol é plenamente admitido o empate: mais que isso, este é o estado inicial da 
          partida. Por isso, seu fim é a iminência de um recomeço, e seu começo aponta para um final, em 
          uma retroalimentação incessante. 
        </p>

        <p>
          No futebol de rua este movimento torna-se mais nítido, já que ali o limite do jogo pode ser o tempo, 
          o placar ou a adversidade (carros, chuva, bolas isoladas no mato, mães gritando). É na rua que se 
          mostra a própria ritualidade do futebol, em que é possível iniciar ou interromper indefinidamente 
          o jogo, inclusive abstraindo-se o marcador, trocando-se os jogadores, às vezes mesmo as regras, o 
          campo ou a bola. A margem do jogo não está dada de antemão ao ser encarnada pela figura do árbitro, 
          mas se mostra como limite fortuito de um acontecimento - presságio de outros acontecimentos possíveis.
        </p>

        <p>
          Por isso, muitas vezes – principalmente quando um time sagra-se campeão – a marca da finitude 
          (da vida, das coisas) corta o corpo deste que aqui escreve na insondável pergunta <em>quando o 
          futebol acabaria?</em> O fim de um campeonato traz consigo melancolia dos domingos à noite, da&nbsp; 
          <a href="https://www.youtube.com/watch?v=72arKyB2zLA" target="_blank" rel="noreferrer">iminência 
          de um recomeço</a>, e é inevitável pensar que os times que existam e os troféus já conquistados 
          estejam fadados a, na finitude do jogo, ser eternos. Mesmo que o jogo dure necessariamente 90 
          minutos, mesmo que os campeonatos durem 8 ou 7 meses. O Palmeiras ou o Santos terão <em>para 
          sempre</em> os títulos que têm, assim como talvez o Bahia <em>nunca mais</em> ganhe absolutamente nada. 
          E o jogo fadado a recomeçar enquanto isso, ao soar de um apito.
        </p>

        <p>
          O futebol é, portanto, algo circular sem ser um <a 
          href="http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=16397" 
          target="_blank" rel="noreferrer">círculo</a>: é uma dobra circular, <a 
          href="https://live.staticflickr.com/3754/33210485340_b32b0537dd_b.jpg" target="_blank" rel="noreferrer">
          um túnel finito a ser percorrido infinitamente</a>, um encontro entre a duração circunscrita e a eternidade do 
          recomeço, na voz que, na rua, grita <em>zerou</em> a cada nova partida. Assim, a essência das instituições 
          do futebol e do jogo em si parece espraiar-se pelo tempo do jogo e, logo, reproduzir-se nele uma 
          vez mais. Deixará um dia o Cruzeiro de ser azul? A Copa do Mundo de 1982 poderá, um dia, não ser 
          de mais ninguém? O pênalti de Baggio, daqui a alguns anos, entrará? (Recomeça mais uma vez o jogo, 
          recomeça o jogo uma vez mais). O que está em jogo é, assim, o próprio significado da palavra acontecimento.
        </p> 

        <p>
          É, portanto, como se temporalidades heterogêneas girassem juntas nesse túnel. Os tempos, os jogos, 
          os campeonatos, as carreiras dos atletas, os times, o futebol. Girando, ao mesmo tempo, em velocidades 
          distintas, <a href="https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_incerteza_de_Heisenberg" target="_blank" rel="noreferrer">
          como elétrons afetados pela campo de um núcleo</a>. Acumulando-se sem se acumular, sobredeterminando-se 
          sempre em suas causas e consequências. Pois o jogo recomeça, como o espaço não pode ter limites que não sejam provisórios.
        </p>

        <p>
          Por isso, é preciso que, além de circular e de tridimensional, a forma topológica do futebol seja 
          vazada no meio. Isto é, seja atravessada pelo espaço vazio - pelo tempo não-contado - do qual se 
          cerca e no qual existe. O eterno retorno do jogo está atravessado de diferentes formas por aquilo 
          que <em>não</em> é o jogo: isto é, posiciona-se diferentemente com relação àquilo que se constitui ali como 
          borda. Por isso, as análises sociológicas que tentam dizer que o futebol explica o mundo - ou vice-versa 
          - falham miseravelmente: elas negligenciam que a passagem do futebol ao não-futebol é sempre tensa, 
          contextual, distinta.
        </p>

        <p>
          No amistoso contra a França, uma multidão de argelinos invadiu o gramado forçando o encerramento do jogo. 
          O lateral Serginho do São Caetano morreu em campo após uma parada respiratória. Um atacante da Lazio fez 
          um gesto fascista numa comemoração. Centenas foram pisoteados em um estádio em Sheffield. Os aviões de 
          Torino, Manchester United e Chapecoense caíram. O time do Santos <a href="https://www.lance.com.br/video/dia-que-santos-pele-parou-uma-guerra-africa.html" 
          target="_blank" rel="noreferrer">supostamente parou</a> uma guerra na África. 
          Etc etc etc. Todos os momentos de retorno do recalcado no futebol - em geral pela tragédia ou pela glória 
          eterna - são a lembrança deste furo na circularidade em que o resto redefine o local do movimento eterno, 
          mas sem cessar sua eternidade. A finitude precisa atravessar o movimento, porque é justamente aí que 
          futebol e contexto se reinventam mutuamente: e entre uma coisa e outra há toda uma borda complexa.
        </p>

        <p>
          O futebol, chegamos a isso (eu e você) é, topologicamente, um <mark>toro</mark>. Uma forma circular vazada, 
          atravessada por aquilo que ela <em>não</em> é: posicionada por si mesma no vazio, nunca negando-o, 
          mas moldando-o assim como sendo moldada por ele. Retomando: estamos (eu e você) diante de 
          um túnel em que se gira em velocidades distintas simultaneamente, em que o retorno é eterno 
          e circunscrito em uma temporalidade finita, em que o espaço está posto mas é vazado por algo 
          que o situa diante de todo o resto das coisas. O jogo é o toro.
        </p>

        <p>
          (Curiosamente, o medalhista Fields brasileiro Artur Ávila passou grande parte de sua vida dedicando-se 
          a analisar <a href="https://piaui.folha.uol.com.br/materia/artur-avila-tem-um-problema/" target="_blank" rel="noreferrer">
          toros</a>. Hoje, o Brasil é o país do toro tanto quanto é o país do futebol. Ou talvez mais.)
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1hYjPGtE1KydO-SMFe_xg7wyUOeAbjD-5" alt="jogadores alongando"/>
        
        <h3>A Tabela de Pelé é a Fita de Moebius</h3>

        <p>
          A arte brasileira está para a Fita de Moebius como a matemática brasileira está para o toro. 
          Tomie Ohtake e Lygia Clark consagraram a fita como símbolo das artes plásticas brasileiras. 
          João Guimarães Rosa encerrou sua obra maior com o desenho de uma fita. Imagem privilegiada do 
          Brasil - <mark>sobre isso Nuno Ramos já falou o bastante</mark> - a marca banalizada pelas tatuagens de 
          "infinito" é o símbolo de uma complexidade que o espaço-tempo tem inerente a si, e a qualquer 
          observador que pretenda jogar com a consciência de existir no mundo (no campo, portanto).
        </p>

        <p>
          A <mark>Fita de Moebius</mark> depende de uma dobra ou de um corte para existir. Ela traz, tanto quanto o 
          toro, a ideia de que se percorre um ciclo infinito por meio de sua finitude, vazada 
          (aqui duplamente) pelo vazio. No entanto, diferentemente do toro, a Fita inverte sua 
          orientação a cada recomeço, isto é, transforma o lado de fora no lado de dentro - e 
          vice-versa, obviamente. A cada repetição do ciclo, tem-se uma mudança de sentido, ainda 
          que a estrutura permaneça inalterada. Ela é a mesma para quem a abstrai, mas jamais 
          para quem a experiencia (haverá objeto topológico algum tipo de experiência? O futebol diz que não).
        </p>

        <p>
          Por isso, me lembro de Pelé.
        </p>

        <p>
          Pelé foi o melhor jogador de todos os tempos não pelos mais de 1200 gols que fez na carreira 
          - eles são, em verdade, <em>consequência</em> de quão bom era Pelé. O que fez o rei do futebol 
          assumir seu trono (seu toro) foi, muito mais, sua capacidade de mover, com sua força e 
          sua imprevisibilidade, as posições pré-estabelecidas no jogo - nos mais diversos níveis 
          em que se conceba isso. Pelé inverteu a catástrofe de 50 no apogeu de 58; ao cabo de 
          quatro copas, Pelé colocou o Brasil em um panteão místico rapidamente transformado em 
          sina; Edson convertia-se em Pelé e depois em Edson; os incontáveis dribles de Pelé 
          faziam com que um corpo sólido se mostrasse subitamente vazado, e então sólido uma 
          vez mais; Pelé era ao mesmo tempo o grau zero da democracia racial e seu ponto de 
          absoluta insustentabilidade. Etc etc etc.
        </p>

        <p>
          Mas creio que essas passagens de reversão e continuidade possam ser sintetizadas em 
          uma das mais marcantes características do jogo do rei do futebol: a chamada <mark>tabela 
          de Pelé</mark>. Abusando de sua explosão muscular, comumente se viam jogadas em que Pelé 
          jogava a bola contra as pernas de um adversário (ou mesmo do árbitro), recebendo-a 
          de volta em uma posição privilegiada para avançar. O que ocorria, portanto, era a 
          súbita e inesperada passagem do adversário em companheiro, do inimigo em colega, do 
          rival em aliado: algo que durava um único gesto ou eixo, mas que era crucial para 
          que as posições iniciais, ao se confundirem, se reafirmassem. Um adversário só pode 
          ser um adversário porque poderia potencialmente ser um colega de time. O Santos só 
          pode ser o Santos porque poderia em tese ser o Corinthians ou o São Paulo. O que a 
          tabela de Pelé faz, em sua dialética precisa e em sua figura topológica, é lembrar 
          que toda relação de diferença parte de uma relação de igualdade, e vice-versa.
        </p>

        <p>
          Assim, a Tabela de Pelé lembra um fato imprescindível para o futebol, algo emulado 
          na necessidade de mudança de campo a cada metade do jogo: o espaço é reversível, 
          o jogo se constitui a partir de uma dobra ética no espaço. Isto é, espraiada no 
          tempo. Basta mudar as cores das camisas e então os jogadores se confundirão 
          sobre qual lado defendem ou atacam eles e seus (a princípio) companheiros: as 
          posições não estão dadas como uma natureza pura, elas se constituem no jogo, 
          em ato e por meio de afecções. O que faz a Tabela de Pelé é, portanto, girar 
          nesta estrutura básica do jogo, utilizando-a como possibilidade e como limite: 
          o verso transforma-se no reverso a partir de um ato, e, no instante seguinte, faz-se verso outra vez. 
        </p>

        <p>
          Aí está a grandeza de Pelé: explorar mais do que qualquer um a complexidade topológica 
          do jogo, inserindo-a no ritmo em que gira e repete-se o próprio jogar. É como se, 
          dentro do túnel do toro do futebol, Pelé não se contentasse em girar junto aos 
          demais, mas progredisse sempre em ziguezague, em <em>loopings</em>, apoiando-se nas bordas 
          da forma. Pelé foi, em essência, um jogador da topologia: por isso os gols que 
          ele <i>não</i> fez são tão ou mais famosos do que aqueles que ele fez: ali parecia sempre 
          inaugurar-se uma possibilidade do espaço-tempo até então não pensada. Maior 
          grandeza é perceber que, em latência, ela sempre esteve lá, impossível e inevitável 
          - como reverso de todo verso possível.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=16vBp8yKtPtdzolu69J_ZhVUyZ90jL4hr" alt="gol"/>

        <h3>A ida e volta de Garrincha é a Garrafa de Klein</h3>

        <p>
          Garrincha foi uma dobra na dobra. 
        </p>

        <p>
          Em um mundo que grita <em>ordem</em> como o nosso, o desafio topológico das pernas de Garrincha 
          jamais seria aceito. Mesmo naquele mundo, aliás, ele foi um pouco mais do que 
          consentido: apenas tolerado, sobretudo porque conseguiu ser <em>efetivo</em> particularmente em 
          1962 - a despeito (ou por causa) das escapadas da concentração chilena. O resultado 
          deste processo foi o fim de carreira e de vida melancólicos de Garrincha, imersos no 
          resto simbólico de seu jogo que queria ser mais (ou menos) que o próprio jogo.
        </p>

        <p>
          Em campo, Garrincha ia e voltava. Para voltar e ir outra vez. E então uma vez mais. 
          Diferentemente da lógica básica do drible - e sobretudo do drible de Pelé -, a 
          ginga de Garrincha não parecia ter um objetivo lancinante, nem mesmo aceitar que 
          o gol seria uma necessidade do jogo. Parecia, por vezes, que Garrincha terminava a 
          jogada por mera obrigação ou coerção social. Justamente por algo do qual ele&nbsp; 
          <a href="https://www.youtube.com/watch?v=h94qK7WmftA" target="_blank" rel="noreferrer">
          um dia se fartou</a>.
        </p>

        <p>
          Garrincha voltava e ia. E o fazia exatamente da maneira como, gradativamente, seria 
          previsto que ele o fizesse, e justamente por isso. Nos instantes em que ele 
          assumia seu jogo, parecia promover-se uma espécie de suspensão no movimento da 
          partida, no giro do toro que é o futebol: como se ali, naquele momento, ao rir 
          do escopo da lei, Garrincha estivesse <em>quase</em> do lado de fora. Ainda que não 
          pegasse a bola com as mãos, ele tampouco visava o gol; ainda não estivesse fora 
          das quatro linhas, ele tampouco operava a partir do tempo do cronômetro. Os 
          instantes de ida-e-volta-e-ida eram instantes de <em>quase-futebol</em>, ou de 
          <em>mais-do-que-futebol</em>.
        </p>

        <p>
          Por isso, a reversibilidade do espaço-tempo em jogo ali não parecia estar contida 
          em movimento algum: o eterno retorno estava suspenso. Note-se então que estamos 
          (eu e você) diante de uma <mark>dupla fita de Moebius</mark>: o espaço-tempo reversível do 
          jogo estava confrontado com o espaço-tempo reversível do não-jogo, em uma infinita 
          continuidade entre os dois locais/objetos/modos de existência. Na ida-e-volta de 
          Garrincha, o lado de dentro é o lado de fora é o lado de dentro, sem que se 
          possa marcar uma única aresta ou dobra precisa deste contato sem encontro.
        </p>

        <p>
          Aí está nossa figura <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S0100-34372014000100013"
          target="_blank" rel="noreferrer">topológica</a> derradeira: a&nbsp; 
          <a href="https://www.youtube.com/watch?v=mF4x8svpSgA" target="_blank" rel="noreferrer">Garrafa de Klein</a>, essa 
          quarta dimensão cuja observação traz consigo a necessidade da abstração. 
          Nós vemos (eu e você), com a consciência de que não podemos ver – mas ainda 
          assim vemos algo. Alguém, que não poderia ver, também um dia imaginou. 
          Garrincha, que tampouco o via, o fez. Para além do jogo de Pelé que mudava a 
          orientação do espaço, Garrincha criou o <em>jogo não-orientável</em>: a consequência é, 
          justamente, o seu lugar sempre próximo das linhas de fundo e laterais, <em>quase</em> 
          fora do gramado. Até enfim sair do campo, dispensando a contingência do gol, 
          indo-e-voltando-e-indo em sua maneira de estar no real 
          (portanto, e sobretudo, estar no campo).
        </p>
        
        <img className={styles.bigger} src="https://drive.google.com/uc?export=view&id=1x9rpdKfI5cCYFo08-qMQx8JhzTZl3_VO" alt="Pele driblando goleiro"/>

        <h3>O mundo é um lugar vazio, repleto de coisas</h3>

        <p>
          Existindo corpo, existirá uma <a href="https://revistas.pucsp.br/index.php/rever/article/view/49231"
          target="_blank" rel="noreferrer">fenda</a> no mundo - não como uma descontinuidade ou uma 
          oposição. O corpo faz mundo, sendo-o. Isto é, o corpo reatualiza as possibilidades 
          do espaço-tempo por vivê-lo sem síntese, em suas dobras. Sendo o futebol um jogo 
          repleto de <em>furos</em>, é ali onde o corpo pode se manifestar plenamente em sua vida no 
          espaço: isto é, em sua possibilidade de vazio. As coisas existem porque elas poderiam 
          não-existir. No futebol, isto se manifesta na impossibilidade de se preencher as 
          ações com qualquer tipo de moral, lição ou narrativa óbvia: o espaço só se manifesta 
          em relação e contexto, sem esquema pré-estabelecido que perdure diante do ato de se 
          tentar observar (aí está a lição de Heisenberg e Pelé).
        </p>

        <p>
          Por isso, é claro que nós (eu e você) estamos correndo atrás de algo que não se 
          manifestará neste texto. Se a quarta dimensão é a suspensão garrinchiana e 
          provisória <em>do jogo no jogo</em>, sua descrição é de fato impossível. Tivemos aqui 
          um esforço em relatar aquilo que é um metaesquema sobre o mundo, e que o futebol 
          faz dar vazão e transformar em lei - <mark>em um novo tipo de lei</mark>. Não se pode dizê-la 
          simplesmente: deve-se vivê-la enquanto é dita, pois a palavra é uma forma do corpo 
          estar no mundo (e, portanto, no campo). 
        </p>

        <p>
          O logro de pensar uma topologia do jogo está nisso: inseri-lo radicalmente no mundo, 
          em sua matéria maleável e na defasagem que a vivência dá a ela. O futebol não 
          explica o mundo, tampouco o inverso é verdadeiro: as fronteiras entre ambas as 
          formas de existência são fluidas, disformes, difíceis, às vezes meramente pensáveis. 
          Como um jogo nunca basta em si mesmo (sempre virá o próximo), um texto, uma 
          experiência do real, um testemunho tampouco bastam. Giram uma vez mais no toro, 
          em diferentes ritmos. Sem jamais se amontoar, mas existindo enquanto é possível 
          que assumam uma forma, sendo já parte de outras formas em relação.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1z6tp8bvDtSYLwQtNiGLq3wpUe00Y4KuK" alt="jogo de futebol"/>

        <p className={styles.end}>
          <em>[Para Diego, amigo não-direcional]</em>
        </p>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}