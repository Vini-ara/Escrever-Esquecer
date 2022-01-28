import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function RuidoEstrutura() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  useTitle("Ruído, estrutura");

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

      <Header handleRedirect={handleRedirect} />


      <section className={styles.wrapper}>

        <div className={styles.backLink} onClick={() => handleRedirect('/um-som-estrangeiro')}>
          <MdWest size="3rem" />
        </div>

        <h2>Ruído, estrutura</h2>
        <hr />


        <p>
          Há alguns anos, em um trabalho de faculdade sobre 
          <a href="https://www.youtube.com/watch?v=AO8Af1lYbps" target="_blank" rel="noreferrer">Iracema, uma Transa Amazônica </a>, 
          filme de Jorge Bodansky, recebi uma devolutiva da professora - acompanhada de uma medíocre e emburrada nota 7 - que nunca me 
          escapou da cabeça. A breve nota dizia, sem rodeios, algo como <em>a articulação de ideias é boa </em>- sempre é por aí que se 
          começa - <em>no entanto você deveria saber que as discussões sobre o horizonte de nação já estão obsoletas há pelo menos 20 anos</em>. 
          Difícil de se esquecer, de fato.
        </p>

        <p>Mas este texto não quer falar sobre propriamente de nação.</p>

        <p>
          Parto deste ponto apenas porque, como pesadamente sabemos, João Gilberto se foi. Com ele, se foi também uma das partes 
          mais importantes deste debate sobre o que somos ou poderíamos ter sido como país: aquilo que ali vivia como promessa, como 
          alegria melancólica, como distensão sem hiato. Não vou adentrar esta vereda, é claro. Lorenzo Mammi, Nuno Ramos, Walter 
          Garcia já o fizeram com muito maior propriedade. O quero pegar deste debate é apenas um único ponto (e dele partir para o 
          disparate): a beleza absoluta de se conceber, pelo encantamento do som e por uma forma particular de lidar com o tempo – 
          com a forma –,  um alcance e uma potência particulares em um projeto artístico: como se pode, a partir de (meras?) canções, 
          pensar o destino conjunto de toda uma gente e investi-lo uma vez mais, de sentido: como é possível um ponto de partida tão 
          simples em um debate tão amplo quanto este. Lidar com a forma pode ser, assim, lidar com um ponto privilegiado para se observar 
          de que maneira tem se construído <em>o normal</em>, em suas consequências indisfarçáveis.
        </p>

        <p>
          A proposta aqui, então, é buscar uma simetria inóspita entre duas canções: a primeira 
          é <a href="https://www.youtube.com/watch?v=v_4e8Tq-CKQ" target="_blank" rel="noreferrer">The Diamond Sea</a>, do 
          Sonic Youth. A segunda é <a href="https://www.youtube.com/watch?v=vk4NL1vpAiE" target="_blank" rel="noreferrer">Undiú</a>, de João Gilberto.
        </p>

        <p className={styles.center}><strong>*</strong></p>

        <p>
          O ruído é uma questão tão ou mais urgente quanto a música. Ele é, na verdade, simultâneo e, em muitos aspectos, indissociável 
          a qualquer história da música que se faça com alguma responsabilidade. Os trítonos, a síncope, o ruído são uma contra-história 
          da música: a história de uma gestão política do sentido, do aceitável, do audível, do pensável. Não houve poder hegemônico que 
          tenha se constituído sem praticar o esforço de gerir os limites entre som e sentido, ruído e música, natureza e cultura. Nestas 
          beiras vive até hoje o impossível esforço de se domesticar as fronteiras do viável, de evitar o excesso e o gozo descontrolado. 
          O ruído margeia - e dá sentido, pelo negativo - a tudo isso que se constituiu como cultura hegemônica, como música limpa, 
          erudita e educada.
        </p>

        <p>
          Em um movimento historicista, podemos observar, contudo, que somente se constituíram como vanguarda da música popular ocidental 
          no século XX países que se abriram - com muita dor e violência - ao ruído. Falo, em particular, de Brasil, Estados Unidos e Cuba. 
          A música destes países se proliferou e diversificou a partir da invasão da síncope, da quebra de tempos estáveis, da sobreposição 
          de elementos, da melodização em primeiro plano: da admissão do equívoco como elemento constitutivo da linguagem, como seu ponto de 
          partida e ética. Esta que talvez tenha sido a herança mais duradoura e profícua que a África tenha dado ao resto do mundo.
        </p>

        <p>
          Por isso, e apressando muito o passo, chego então ao Sonic Youth como fruto temporão desta árvore. O fascínio que a música 
          destes estadunidenses promove se deve, muito em particular, pelo tratamento ético que se dá aí ao ruído. Isto porque, dentro 
          do que se chamou de <em>rock</em>, isto é, de um gênero musical em que barulho, altura e performance 
          constituem <a href="https://docplayer.com.br/22912842-Prolegomenos-a-uma-estetica-do-rock.html" target="_blank" rel="noreferrer">o parâmetro daquilo que é bom</a>, 
          e, mais do que isso, de um lugar em que o timbre - ou seja, algo que foge da harmonia, da partitura, da possibilidade de escrita do som - 
          cria uma experiência diferencial, constituir-se como uma banda que se baseia, essencialmente, em formas de distorção é algo que sugere 
          enormes dificuldades de proposição de um projeto particular.
        </p>

        <p>
          E no entanto é este projeto que presenciamos. Creio que o diferencial do SY se observa sobretudo em contato com outras 
          experiências em que ruído, barulho e distorção assumem o primeiro plano: por exemplo, o que se faz no shoegaze ou 
          no <a href="https://www.youtube.com/watch?v=G5RzpPrOd-4&ab_channel=4AD" target="_blank" rel="noreferrer">dream-pop</a>. 
          Nestes dois gêneros, o que se tem é o turvamento das bordas entre os instrumentos e suas as linhas melódicas, a ponto de 
          se surgir uma ambientação totalmente pautada em uma espécie de neblina sonora em que não se consegue distinguir as unidades 
          mínimas: a música cria subterfúgios para si, a performance tende a grau zero (ou à totalização, a depender do ponto de vista), 
          o espaço está assegurado em sua própria pressuposição de instabilidade. Em gêneros como o metal, por outro lado, é a altura 
          que consegue guiar a construção da canção como um ato orgânico e disperso no tempo, e o ouvinte tende então a ser levado a 
          zonas cômodas e confortáveis, previstas e previsíveis - mesmo que altas e ruidosas para o padrão da música comercial: a música 
          torna-se a garantia de si mesma, naquilo que justamente há de interesse comercial em se traçar <em>gêneros</em> na arte.
        </p>

        <p>
          Ouvindo SY, vive-se uma experiência qualitativamente distinta. O que temos em geral é a construção de um rock prototípico 
          e, concorrentemente a ele, a sua iminente destruição dentro da canção. Cada música do SY são duas, 
          portanto: <a href="https://www.youtube.com/watch?v=3-jp4hk7VIU">a canção e a contracanção</a>.Creio que a melhor forma 
          de se ouvir a essa discografia é, portanto, observando aquilo que está no segundo plano, como uma espécie de resto da melodia 
          central: ali, abaixo, cruzando de lado - a - lado, está o ruído, como uma pulsão de morte, borrando a facilidade do que 
          poderia ser um grande e canônico rock.O SY, como o Miguel Gomes de <em> Mil e uma Noites</em> ou o Cabral 
          de <em> Educação pela Pedra</em>, escolhe não viver da própria estrutura que ergue para si dentro das canções: 
          a dissolve, a complica, a questiona.Proposição e reproposição.
        </p>

        <p>
          A maior radicalização deste procedimento está em <strong>Diamond Sea</strong>, do disco <em>Washing Machine</em>, de 
          1995. A monstruosa canção de quase 20 minutos que encerra o álbum é como uma epopeia, uma metáfora do que seria este mar 
          que lhe dá título. Não à toa, a letra evoca uma imagem do tempo em seu primeiro verso - a distensão temporal é a grande 
          matéria desta canção -, e a partir dele cria um retrato da divisibilidade do indivíduo, da quebra da imagem de si mesmo 
          diante do espelho. Nada no SY é autocoincidente.
        </p>

        <p>
          A música se inicia, pois, com uma linha melódica baseada numa distorção raríssima, que facilmente se poderia dizer das 
          melhores da história do gênero: um achado de pesquisa, que poderia pautar toda a canção. E não pauta. Tão logo entra a 
          voz sobre bateria e baixo, e sucedem-se quatro codas distintas, o mar passa a guiar. É nítido, portanto, que a estrutura 
          da canção é irrastreável. De uma linha melódica simples a música vai aos poucos dissolvendo-se em dezenas de variações de 
          si mesma, vão emergindo gradativamente sons de camadas subterrâneas até que, enfim, eles ocupam o primeiro plano da música 
          e mimetizam o mar sinestésico - azul mas pontiagudo, belo mas duro - de onde se parte. Sucedem-se mais de 10 minutos de pura 
          distorção, puro ruído (será ainda ruído o que ocupa o primeiro plano?) em mar agitado até que, enfim, retorna o sossego da 
          praia aliviada da melodia final.
        </p>

        <p>
          A experiência de <strong>Diamond Sea</strong> é a experiência de uma organicidade das fronteiras entre som e sentido, entre 
          música e não-música: é, acima de tudo, a possibilidade de vislumbrar uma gestão desta fronteira que não seja um tipo de 
          despotismo, mas uma construção de um espaço heterogêneo em que se produza significado a partir da diferença. Não é necessário 
          erguer um muro definitivo na fronteira: o muro é uma escolha ética, como é o limite: é tudo puramente contextual.
        </p>

        <p className={styles.center}><strong>*</strong></p>

        <p>
          O disco branco de João Gilberto é, para muitos, a maior obra da história da música brasileira. Para alguns isso pode 
          soar forçoso diante da magnitude de outras experiências que temos por aqui, mas acredito de fato que ali haja uma relação 
          poucas vezes encontrada entre abstração e síncope, delícia e simplicidade, grandiosidade e minimalismo. O disco branco 
          parece ser o momento em que o juazeirense chegou mais próximo de assumir um projeto total de sua música. Os arranjos são 
          claros. A capa é simples. As letras são reduzidas ou mesmo subtraídas. O repertório é absolutamente irrastreável.
        </p>

        <p>
          <strong>Undiú</strong> me parece, enfim, o exemplo máximo disso. A composição enigmática traz em si o arranjo enxuto 
          característico de João Gilberto dando suporte a sua voz em absoluto transe a repetir esta palavra que não nos leva a 
          sentido algum, mas que nem por isso deixa de ser uma palavra 
          – <a href="https://www.youtube.com/watch?v=ypPlQA8XTuk" target="_blank" rel="noreferrer">Levaguiã Terê, de Vítor Araújo</a>, 
          compreendeu isso.Ela distende - se no tempo como som puro, e pensamos estar ouvindo apenas uma linha melódica; no entanto, 
          em seguida, nos recordamos do título da canção e novamente estamos entregues à busca tão natural pelo sentido daquilo que é 
          pronunciado.Hesitação.Undiú <em> é e não é</em> uma palavra: é som e é sentido, girando incessantemente nesta voz que ativa 
          a todo momento este campo de indefinições.
        </p>

        <p>
          Para além dos momentos de <em>undiú</em>, temos também as transições em que João canta melodias feias de maneira bela 
          (ou o inverso), como a integrar a embocadura de um cantador sertanejo - em sua lógica exterior à Canção - em um arranjo 
          jazzista, cosmopolita: e novamente giramos juntos com esta voz que aciona dois campos distintos da experiência, tanto 
          musical quanto social. Há aí, no encantamento da melodia e da entonação, a presença sutil do ruído, que se insinua mesmo 
          na capa deste disco, no nome quebrado de João Gilberto disposto pelas linhas, na foto que <em>parece</em> ter sido tirada 
          sem que ele próprio percebesse. A relação, contudo, entre o sertanejo e jazzista não é, em Undiú, a de síntese simples, 
          muito menos a de emulação - como ocorre na versão de Caetano Veloso para Asa Branca, por exemplo: há aí uma espécie de 
          acionamento de uma consciência de que estamos lidando com as mesmas questões, com a própria possibilidade de se fazer 
          sentido diante do mundo e diante das coisas. Questão que a palavra (palavra?) undiú não deixa de ecoar.
        </p>

        <p>
          A apuração e a abstração das canções de João Gilberto nos fazem sempre esquecer de um dado importante: estamos ali 
          no mundo da síncope, diante do enigma que pode significar algo 
          como <a href="https://youtu.be/yBm6S9JZK3Q?t=360" target="_blank" rel="noreferrer">os instantes finais de todas as canções de Amoroso</a>, 
          em que um dos instrumentos parece roubar a cena e quebrar a orquestração; ou como a percussão da versão 
          de <a href="https://www.youtube.com/watch?v=RatV3LsQzPw" target="_blank" rel="noreferrer"><em>Na Baixa do Sapateiro</em>, do mesmo álbum branco</a>: 
          sublime e composta na tampa de uma lixeira. Estamos ali na quebra em que se encontram duas tradições do ruído, dois 
          instantes de genealogia: o jazz e o samba depõem sobre a ética. O jogo da abstração e do encantamento de João é também 
          um jogo de gestão do ruído em que se constituem espaços em que a quebra torna-se constitutiva, e o equívoco consegue 
          passar para o lado da estrutura que soa como pura. A pureza do que é impuro, a impureza do que é 
          puro, <em>as impurezas do branco</em>. Há aí um imenso testemunho sobre como dizemos o mundo.
        </p>

        <p className={styles.center}><strong>*</strong></p>

        <p>
          A distância de Sonic Youth a João Gilberto me parece, então, a distância entre dois pontos simétrica e impensavelmente dispostos 
          ao redor de um centro estável, que poderíamos chamar de ética. Se em Sonic Youth o ruído impede a estabilização, leva sempre a 
          regiões imprevistas e subterrâneas, em João Gilberto a abstração internaliza o ruído como condição de existência, como aspecto 
          construtivo do encantamento – no sentido forte do termo. O que temos de ambos os lados é uma gestão do heterogêneo que foge 
          tanto da síntese fria como da exclusão despótica: estamos lidando com topologias em que campos de relação são criados como 
          novas formas de dizibilidade. E isso me parece muita coisa sobre o que somos ou poderíamos propor como experiência social.
        </p>

        <p>
          Por isso volto à questão inicial, pensando em que termos a música conseguiria oferecer um escopo para discussões sobre 
          o indivíduo e suas relações sociais. Creio que o que está em jogo aqui é justamente o que se pode dizer, de que maneira 
          se pode dizer, e em quais circunstâncias. A música parece, enfim, oferecer um espaço privilegiado para pensar maneiras 
          de se lidar com essas demandas políticas: e basta pensar, por exemplo, como do encontro de João Gilberto com Sonic Youth 
          podemos chegar a algo como o Metá Metá, rock cantado sobre ijexá e samba, em brasileiro ou iorùbá.
        </p>

        <p>
          Neste sentido, ouso duvidar rancorosamente de minha professora, e lhe pergunto de volta: como abdicar da tentativa 
          de ampliar algum tipo de vida sensível para o campo da experiência coletiva, seja ela posta sob o nome de nação ou 
          outro qualquer? O que está em jogo é o fim de qualquer perspectiva de se falar sobre o outro a partir da sobreposição 
          das vozes num possível <em>nós</em>? Ou estamos abdicando de algo como a nação em troca de meras experiências individuais 
          somadas em que cada um assuma seu lugar próprio de enunciação? Tudo isso apenas sugiro. Que restem aqui ao menos as 
          canções, ressoando na cama de seus erros, e já estou/estamos vingado/s.
        </p>


      </section >

      <TextsNavigation currentCiclo="umSomEstrangeiro" handleRedirect={handleRedirect} />
    </div >
  );
}