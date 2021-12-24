import { useEffect, useState } from "react";
import { MdWest } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import styles from "../../textos.module.scss";

export function NucleosVazios() {
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
      <Header />

      <section className={styles.wrapper}>

        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Núcleos vazios</h2>
        <hr/>

        <p>
          Do lado de fora dos sonhos do liberalismo, em que a sociedade seria 
          simplesmente a soma de interesses individuais, todas as relações 
          humanas são o resultado de forças em relação. Dialética de dialéticas, 
          o <em>campo</em> social precisa ser entendido como uma disputa constante por 
          significantes que ocupem, provisoriamente, um núcleo vazio: o poder é 
          <em>absolutamente nada em si</em> - pelo menos, desde que (boa parte de nós) deixamos 
          de crer que nossos líderes tinham algo de divino em seus corpos. As posições 
          centrais do <em>realizar</em> são ocupadas por demandas particulares, disputadas por 
          grupos heterogêneos e em ciclos intermitentes. Pensemos no que quer dizer a 
          palavra <em>família</em> ou a palavra <em>segurança</em> para determinados indivíduos e em 
          determinados momentos, e aí nos (des)entendemos de cara.
        </p>

        <p>
          O poder demanda um jogo. E, longe do sentido que um filme ruim de Padilha 
          poderia dar a isso - como se existisse alguém que finge fazer a verdadeira 
          política para <em>apenas</em> jogar -, é necessário que qualquer forma de poder seja 
          <em>levada a sério como jogo</em>: deve ser, portanto, jogada, isto é, colocada sempre 
          em relação e situação a determinados acontecimentos. Um incidente particular, 
          como um assassinato covarde ou um insulto público, pode mover toda uma roda 
          de significantes e discursos, mudando ou reafirmando posições, fazendo com 
          que o jogo se reinicie – ou prossiga.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=16Zcew1aEO9Ps5FCZewFzWNoo9BKZ9Kv7" alt="briga em estádio" />

        <p>
          Está claro aonde se quer chegar aqui: o jogo político e o jogo futebolístico são 
          estruturas que podem ser comparadas na maneira como o poder é obtido, performado 
          e perdido. Os movimentos do jogo de bola - e suas estruturas de formação e deformação, 
          de potência e de derrota - mostram e dizem muito sobre como todos os enunciados sobre 
          o fim da experiência política são absurdos: são, eles mesmos, partes integrantes de um 
          amplo jogo que pretendem negar. Ficar parado em campo já é jogar - jogar mal, é claro.
        </p>

        <p>
          Por isso, o esforço deste texto será trazer - como analogia mas também como topologia 
          - três situações em que o jogo de futebol espraia movimentos de contestação e de 
          legitimidade. Com isso, a tentativa será, no fim das contas, de redimir o peso da 
          palavra <em>jogo</em>, tão surrada ao ser compreendida como simulacro, 
          encenação ou banalidade. Diga a um torcedor que seu time é apenas parte de 
          um jogo e você terá uma resposta contundente sobre a dimensão do ato de jogar, 
          em uma quadra de bairro ou na ampla vida social - e este texto só existe, afinal, 
          porque propõe também parte de uma disputa.
        </p>

        <h3>O tricampeonato, ou os termos impossíveis para uma democracia ideal</h3>

        <p>
          Se é possível falar de uma escola brasileira de se jogar bola, ela foi caracterizada 
          pelos elencos do tri e levada ao grau zero pela seleção de 82. O que o Brasil fez 
          a partir da Copa de 58 foi levar a cabo um encantamento pela bola até então apenas 
          esboçado por outros times vencedores ou de qualidade - inclusive pelo próprio Brasil, 
          que sucumbiu às batalhas violentas propostas por Hungria em 54 e Itália em 38, e pelo 
          jogo pragmático do Uruguai em 50, abdicando da grandeza de seus próprios talentos 
          individuais como Zizinho e Leônidas da Silva, imersos na ânsia de um time que precisava 
          provar a si mesmo como digno (ou menos capaz) de vencer.
        </p>

        <p>
          Em 58, contudo, o Brasil passou a pautar o que era o futebol: o oximoro do controle 
          pelo imprevisível. A imagem paradigmática de Didi, o príncipe etíope, a pegar a bola 
          nas redes e caminhar lentamente até o meio de campo, desconsiderando a real possibilidade 
          de o Brasil mais uma vez perder uma final, é o símbolo desta mudança (literal) de postura: 
          ali se nota como retomar a posse da bola, colocá-la sob o braço, significava ter a chance 
          de se fazer algo diferente, insuspeitado. Só com a bola era possível provar a si mesmo, 
          exercer sua soberania sobre o campo ao tentar testar seus caminhos.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1poUkQXd03H2fK_OiN4u7Ek_GECHGna8x" alt="drible" /> 

        <p>
          E então o Brasil foi soberano tanto quanto pôde ter a bola próximo a si. 58, 62 e 70 
          - permeados pela retumbante exceção de 66 (com Pelé lesionado e uma enorme 
          entressafra de jogadores) e margeados pela inversão de papéis dolorosa de 74 
          (com uma Holanda que queria, mais do que aquele Brasil, ter a bola) - foram 
          Copas em que a seleção brasileira, por meio de dribles, de inversões de jogo, 
          de um controle absoluto do ritmo da partida, pôde existir como argumento sobre 
          a relação entre ter a bola e ter o jogo, isto é, sobre estar no centro e poder 
          ser o poder. O Brasil repartia a justiça a partir de gestos justos: vencia porque 
          tinha que vencer, ou melhor, porque parecia não ter como não vencer.
        </p>
  
        <p>
          Mas, encravadas em um país que a olhos vistos se desmontava, aquelas seleções eram também 
          um argumento contra seu próprio modelo de poder. Em campo, o sonho de uma democracia 
          ideal (alguns diriam <em>racial</em>, sobretudo a partir da figura de Pelé) fazia-se ver em 
          times que pareciam dizer o óbvio: basta estar no campo para estar no jogo, basta ter a 
          bola para se fazer o gol: a bola é núcleo do poder. Nisso entende-se como a esquerda brasileira, 
          oposta ideologicamente ao envolvimento do <a href="https://www.cartacapital.com.br/wp-content/uploads/2019/06/augusto-de-campos.jpg"
          target="_blank" rel="noreferrer">nacionalismo reacionário na seleção</a>, pôde entrar de 
          cabeça e assumir a contradição viva daquele time: ele era a encarnação de um projeto político-estético 
          que a ela pertencia, e para o qual daria, literalmente, a vida. Aquele time era uma democracia ideal 
          em movimento, em que o poder emanava naturalmente de seu povo e, como o fluxo que a palavra evoca, 
          derramava-se pelo campo, pelas praças.
        </p>  

        <p>
          Está claro que a <i><a href="https://www.youtube.com/watch?v=DCzgR7i_Eak" target="_blank" rel="noreferrer">
          alegria é a prova dos 9</a></i>, como, mais uma vez, Oswald sugeriu. A história do Tri é parte 
          insuperável da trajetória das propostas de civilização vindas do Brasil, sempre arremessadas 
          entre o irreal daquilo que é visto como <em>mero jogo</em> ou representação e o mais-que-real que vê 
          o jogo como algo <em>além</em> da representação e da política, devendo estar intocado. De lado a lado, 
          perde-se a potência da passagem, das relações: que não seja nem entretenimento, nem estética 
          pura. A derrota da seleção de 82 - a última seleção brasileira que quis ter a bola para poder 
          ter o poder - para o pragmático e opaco time da Itália foi a pá de cal em qualquer leitura 
          apressada que pretendesse ver no futebol brasileiro uma espécie de natureza de sua sociedade, 
          como se um dia ela estivesse <em>fadada a vencer</em> tanto quanto suas seleções: nem mesmo em campo 
          isso pôde ocorrer, justamente porque a bola não era, ao cabo, o significante definitivo 
          do triunfo. 
        </p>

        <p>
          O modelo civilizacional do futebol brasileiro deve ser visto então como aquilo 
          que era: <em>jogo</em>, isto é, a mais complexa lógica de estruturação da vida, 
          em seus movimentos contínuos e heterogêneos. E se aqueles times pareceram dar vida 
          a uma democracia ideal em campo, deram também a prova de que - ao cabo dos anos e 
          empilhadas as derrotas - eram na verdade apenas um modelo particular de poder, 
          configurado em um momento histórico irrepetível. Justamente por isso, tanto a vida 
          social quanto a vida do futebol nunca mais se esforçariam para comprovar o agora 
          ingênuo argumento dos elencos do Tri: a justiça não seria mais vista como uma 
          consequência <em>natural</em> do que quer que fosse, sobretudo por aqueles que, claro, 
          desejassem - como Sócrates, estrela de 82 - alguma forma verdadeira de justiça.
        </p>

        <h3>Ter o campo, ou a democracia pelo consenso</h3>

        <p>
          As grandes discussões táticas sobre futebol neste século se concentraram ou 
          passaram sobre a questão da posse de bola. Escanteio curto, dar/não dar chutão, 
          jogar com linhas avançadas, retomar rapidamente a bola por meio de pressão. 
          Gradativamente, a partir da organização tática das equipes - sintetizada 
          pelo mote <em>não existe mais bobo no futebol</em> - emergiu o consenso de que 
          ter a <em>posse de bola</em> sob controle significaria ter o jogo nas mãos.
        </p>

        <p>
          Note-se que ter a posse de bola não significa ter a bola. <em>Ter a bola</em>, 
          como faziam Didi ou Garrincha, era pautar o jogo a partir do ritmo dos gestos, 
          do pensar traduzido em jogo - induzir o adversário ao <a 
          href="https://www.escritas.org/pt/t/12804/ademir-da-guia" target="_blank" rel="noreferrer">
            ritmo do pesadelo</a>, como fazia Ademir da Guia. Ter a <em>posse da bola</em>, 
            por outro lado, significa muito mais tomar posse do campo: é fazer a bola circular 
            livremente por todos os espaços em que se possa ter um jogador que defenda o mesmo 
            time que você, enlaçar o adversário a partir da ocupação dos espaços que o circundam. 
            No jogo da posse de bola, o que importa é a tentativa de atrelar o tempo ao espaço, 
            colocar uma coisa como consequência imediata da outra.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1Ig-BkcS3V1xWgTb0aRjraWxFtLQIvq6T" alt="bandeira santos" />

        <p>
          O surgimento de Guardiola como pai de um modelo paradigmático de jogo – disso se falará 
          em outro texto - foi o momento em que a discussão sobre a posse de bola deixou de 
          existir para virar verdade protocolar, a ser repetida por aqueles que não praticariam 
          em hipótese alguma - por motivos que iriam da falta de preparação física às condições 
          ruins de gramado - aquele jogo. O apogeu da estagnação na discussão foi Santos x Barcelona, 
          pelo Mundial de Clubes de 2011, em que se viu um time campeão da América e com o melhor 
          jogador jovem do mundo ser trucidado por um time que trocava passes para passar o 
          tempo (pelo espaço) de maneira confortável, tomando o campo para si. Numa comparação 
          justa, aquele jogo foi o próprio Consenso de Washington do futebol, o instante 
          em que todas as discussões sobre o jogo se tornaram, para alguns, a constatação 
          de que aquele modelo de jogo seria simplesmente <em>inevitável</em>, bastando as nações ao 
          sul tratarem de copiar a receita se quisessem entrar novamente no trem da história.
        </p>

        <p>
          Talvez o que tenha levado aquele Barcelona a provocar tamanho consenso em analistas 
          deslumbrados tenha sido o fato que seu modelo de jogo era, em si, <em>o do próprio consenso</em>. 
          Ao aproximar as linhas, propor tabelas curtas, tentar limitar o espaço para o acaso e para os 
          interditos, o jogo da posse de bola de Guardiola parecia propor os termos de um controle 
          inevitável do jogo por aquele que melhor soubesse ocupar seu tempo/espaço. Aquele time era 
          uma equipe sem gestos nítidos, sem erros crassos, sem direito ao gol feio ou ao chute 
          desesperado: era o jogo da tecnocracia, da otimização dos movimentos, da especialização, 
          da divisão de tarefas. Um jogo que se pretendia sem resto, portanto.
        </p>

        <p>
          O jogo da posse bola deu vazão e forma aos sonhos ilustrados de sociedades de consenso, 
          em que a divisão dos espaços e a busca pela propriedade (em todos os sentidos do termo) 
          pautariam o caminho da democracia - por isso <em>representativa</em>, em que cada qual conseguisse 
          no campo político aquilo que lhe <em>pertenceria</em>, como um carro ou um nome, por direito. 
          Sem embates físicos, sem margem para qualquer forma de brutalidade, os times de Guardiola 
          e seus discípulos foram (e ainda têm sido) a emulação de um modelo em que o poder 
          poderia que se dar sem sustos, sem conflitos, isto é, a partir da crença de que não 
          existiria núcleo nenhum para o poder, posto que o próprio poder em si não existiria: 
          cada qual comporia a vida social partir de si, no instante em que assumiria a 
          posição daquilo que lhe é próprio.  
        </p>

        <p>
          O consenso do consenso permanece como discurso, mas, assim como o modelo do Tri brasileiro, 
          mostrou-se gradativamente finito. Neste discurso, cuja base está assentada justamente 
          na crença de que a influência do corpo sobre o jogo seria acessória, esta é uma dupla 
          derrota. A soberania absoluta de Guardiola faz parte do passado como a soberania do 
          liberalismo de Tatcher - <a href="https://www.youtube.com/watch?v=37Cmzvt549Y" target="_blank" 
          rel="noreferrer">que odiava futebol</a> - também faz. Ainda que muitos continuem 
          insistindo na atualidade irreversível de um modelo de jogo que quer justamente 
          suprimir o jogo. Ao jogá-lo.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=18ScRWGP1Vy9i23LeihGxVgexd1_i3-yx" alt="torcida no campo" />

        <h3>O jogo de transição, ou a sociedade contra o Estado</h3>

        <p>
          A crença de que o jogo da posse de bola seria a <em>única</em> expressão propriamente 
          moderna do esporte ainda gera, no campo político advindo do futebol, um grande número 
          de movimentações discursivas. De lado a lado, apesar dos avisos dos analistas que tentavam 
          convencer o mundo de que o jogo de futebol tinha chegado à sua fase de apogeu, diversos 
          times, técnicos e jogadores tiveram que repensar sua visão de jogo a partir das ideias 
          de soberania criadas pela hegemonia da posse de bola. O jogo de transição foi o grande 
          resultado dessa busca por uma resposta, isto é, uma tentativa de reocupar o núcleo do 
          poder dentro do jogo - em verdade, em provar que esse núcleo seguia ainda vazio.
        </p>

        <p>
          Pode-se caracterizar o jogo de transição por um esforço em dar a bola ao adversário, 
          o que de saída já deixa claro como essa visão do futebol desloca a bola do núcleo do 
          poder. Em seguida, deve-se observar que o jogo de transição funciona melhor justamente 
          contra times que <em>querem</em> deter a posse de bola. Portanto, temos aí uma formação responsiva 
          às dinâmicas das formas hegemônicas de se jogar: a disputa por um esquema de poder está 
          dada no instante em que aquilo que normalmente é visto como obstáculo torna-se algo 
          desejável, fonte de oposição.
        </p>

        <p>
          Ao entregar a bola para o adversário, treinadores como Mourinho e Simeone pretendem 
          justamente que os Guardiolas façam o seu jogo, tenham a bola e se imaginem exercendo 
          plenamente o poder em seus termos imaginados: imaginem-se pautando onde está seu núcleo. 
          Essa é a deixa para que o jogo de transição consiga retomar a bola por instantes e, numa 
          fulguração simples e horizontal, buscar a meta, desmentir a posse de bola com o resultado 
          obtido sem qualquer pretensão de se fazer uma moralização do jogo. Não à toa, técnicos do 
          jogo de posse constantemente acusam técnicos da transição em serem <em>antifutebol</em> ou em <em>travar o jogo</em>: 
          para quem pensa que propõe a única maneira possível de se jogar futebol, talvez isso faça 
          algum sentido. Mas a prova oferecida pelo jogo de transição é de que o futebol não tem fim, 
          porque a história não tem fim: a graça do futebol - por isso sempre tão próximo da vida 
          social - é a possibilidade de se vencer de formas antagônicas em seus métodos, com 
          valores atualizados em novos contextos.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1EXntEyZs7BprpWQAIhEZ-9NqgN19YZm0" alt="policial em um cavalo" />

        <p>
          Desta forma, o jogo de transição aproxima-se, estruturalmente, daquilo que Pierre Clastres 
          chamou de sociedades contra o Estado. Descrevendo determinados grupos indígenas, 
          Clastres observou como era possível que grupos sociais esvaziassem simbolicamente 
          o núcleo do poder a ponto de viverem constante e necessariamente <em>contra</em> ele: mantém-se um líder que, 
          literalmente, <a href="https://www.youtube.com/watch?v=-giIle8dkDg" target="_blank" rel="noreferrer">fala sozinho</a>
          , para que um lastro social mínimo seja obtido, e então viva-se em paz ao seu redor. 
          O pretenso núcleo do poder, neste esquema, está entregue ao outro como contraponto à liberdade 
          de formas da vida social, que se choca contra esta figura. Note-se que se está, aqui, muito 
          distante do sonho liberal de reduzir o governo a uma função moderadora: as sociedades contra 
          o Estado são um amplo pacto social pela proliferação das formas de vida, sendo portanto pensadas 
          para muito além do indivíduo (em sociedades em que o indivíduo sequer existe como conceito).
        </p>

        <p>
          Ora, o jogo de transição passa justamente por isso. O que fez Mourinho em 2012 foi 
          justamente deixar que Guardiola falasse sozinho, em toda sua eloquência e ponderação, 
          sobre quão superior era seu futebol, para então tornar-se campeão europeu por sobre o 
          treinador catalão. Foi a primeira contrarresposta ampla ao jogo da posse de bola. Aquele 
          time do Chelsea, repleto de jogadores medianos, deixou que o Barcelona do indefectível 
          Messi jogasse, ocupasse espaços, passasse o tempo que quisesse com a bola: a ponto de o 
          jogo acabar. Em uma argumentação contundente, Mourinho fez com que Guardiola reaprendesse 
          que o núcleo do poder é um lugar vazio, e que a ilusão de ocupá-lo não seria garantidora 
          de nenhum tipo de resultado: é possível estar no trono sem que isso signifique, em 
          determinado contexto social, nada além do fato de que se está no trono.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1i5qn-3cy4TaL7Cc3Ylq1bPgBYwgw4mXL" alt="pessoas jogando futebol" />

        <p className={styles.end}>(<i>Para Juan</i>)</p>
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}