import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function MeuBairroNuncaFoiIgual() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  useTitle("Meu bairro nunca foi igual");

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

        <h2>Meu bairro nunca foi igual</h2>
        <hr />

        <p>
          O Passo Torto já se apresenta, desde seu nome, como um projeto que pretende
          pautar-se em um veio desviante. Ao requisitar para si como característica identitária um
          conceito que, normalmente, é indiscutivelmente disfórico, o grupo parece afirmar um
          motivo ético que <em>a priori</em> irá reger conceitualmente seu trabalho musical. Desta forma,
          um dos caminhos específicos para acompanhar criticamente a genealogia dos discos da
          banda (<em>Passo Torto</em> (2011), <em>Passo Elétrico</em> (2013) e <em>Thiago França</em> (2015) passa por
          observar em quais termos o Passo Torto propõe seus deslocamentos, sua <em>tortuosidade</em>,
          em relação a qual tipo de discurso, norma ou forma de expressão esta defasagem está
          relacionada em cada álbum e, ao cabo, qual o alcance e a eficácia crítica deste processo
          ao qual a banda parece se propor.
        </p>

        <p>
          <em>Passo Torto</em> é um disco que explicitamente corrobora as expectativas conceituais
          criadas a partir do nome da banda: o aspecto soturno da forma, uma sonoridade pautada
          em linhas melódicas de três ou por vezes quatro instrumentos de corda em uma única
          faixa, ausência de percussão, letras entre o registro simbólico e o cotidiano, referências
          expressas à periferia, assunção de diversos pontos de vista em cada uma das canções.
          Uma primeira audição do disco revela, além disso, que um dos seus principais eixos
          temáticos principais é a relação entre o homem e a cidade, na constituição daquilo que é
          ou pode vir a ser um <em>cidadão</em> – palavra-chave da obra.
        </p>

        <p>
          É sintomático, portanto, que, em quatro das faixas de <em>Passo Torto</em>, estejam
          também dispostos nomes de lugares – avenidas, bairros – da cidade de São Paulo, em
          diversos tipos de contexto e referência dentro das letras. Desta forma, pode-se dizer que
          uma linha de elaboração conceitual delineia-se dentro do disco, e é necessário, portanto,
          aproximar-se do tipo de construção estética que é proposto para formalizá-la: que cidade
          é esta que está sendo retratada, por qual ponto de vista e de qual maneira <em>torta</em> ela é
          abordada, afinal.
        </p>

        <p className={styles.center}>
          <strong>1. Meu bairro nunca foi igual ao bairro de nenhuma história</strong>
        </p>

        <p>
          <a href="https://www.youtube.com/watch?v=ZkbuxD0MhDU" target="_blank" rel="noreferrer"><em>Da Vila Guilherme até o Imirim&nbsp;</em></a>
          e <a href="https://www.youtube.com/watch?v=KbO4eRTb8iY" target="_blank" rel="noreferrer"><em>Cidadão</em></a> são composições que buscam
          incorporar ou elaborar breves narrativas em certas regiões da cidade de São Paulo. A
          primeira mimetiza em primeira pessoa um diálogo entre um casal que está em um
          ônibus que faz o trajeto entre os bairros citados no título; a segunda é escrita a partir de
          um observador que narra alguns momentos de um homem com algum tipo de transtorno
          psicológico, tratado como cidadão na canção. Ambas as músicas abrem espaço para o
          lirismo e para melodias suaves e melancólicas (sobretudo em Cidadão) que se
          relacionam diretamente com o conteúdo trabalhado na letra das canções (o
          relacionamento amoroso e a tentativa de reconhecimento do eu-lírico a partir de sua
          vivência transformada em narrativa).
        </p>

        <p>
          Vila Guilherme e Imirim são bairros predominantemente residenciais e de classe
          média baixa da Zona Norte de São Paulo, marcados por zonas limítrofes com favelas e
          por um cotidiano que compartilha grande parte dos problemas destas comunidades,
          como a violência e a repressão policial, tematizadas, por exemplo, no disco de <a
            href="https://www.youtube.com/watch?v=AumsfBp7grM" target="_blank" rel="noreferrer">Lê
            Coelho, <em>Imirim</em></a>, de 2017. O Jardim Valquíria, representado em <em>Cidadão</em> como <em>o meu
              bairro</em> e como <em>periferia</em>, faz parte da região do Capão Redondo, Zona Sul de São Paulo,
          79º bairro da cidade em IDH, uma localidade marcada pela grande concentração de
          favelas e pelo alto índice de Vulnerabilidade Juvenil. Trata-se de regiões, assim, que não
          constituem a simbolização canônica da cidade de São Paulo, que não simbolizam seu&nbsp;
          <em>status quo</em>, seus locais de representação consagrada, e que, por isso, estão comumente
          ausentes das representações artísticas que circulam essencialmente em meios
          não-periféricos, ou seja, que não pressupõem um tipo específico de interlocutor.
        </p>

        <p>
          Nestas duas canções, a representação de locais com esta configuração
          não-hegemônica ressoa nas próprias escolhas linguísticas e narrativas dos compositores.
          Em <em>Da Vila Guilherme até o Imirim</em>, o eu-lírico traz traços de uma linguagem associada
          à juventude da periferia (<em>bumbá, é um dois, faz a vez, mano, sangue bom, tretar, nunca
            dói</em>), algo que contrasta com as expectativas de representação lírico-amorosa na canção
          popular. Em <em>Cidadão</em>, o registro torna-se formal diante do sujeito retratado em terceira
          pessoa, com o qual o eu-lírico identifica uma possibilidade de experiência comum que
          legitime a ambos, e que, ademais, reverbera nos versos <em>estudando um passo torto, um
            samba, um rap/um rock pra se orientar</em>: a citação do nome do grupo como possível
          atribuição a este sujeito <em>periférico</em> e <em>esquizofrênico</em> mostra o tipo de valor que se deseja
          conscientemente ter atrelado ao próprio Passo Torto. O contraste entre as duas canções
          evidencia como se alternam, ao longo do disco, as perspectivas assumidas pelos
          eu-líricos: ainda que o ponto de vista de ambas parta de dentro da periferia, a linguagem
          oscila a partir de quem tem a palavra na canção; a definição ética do álbum e do grupo,
          contudo, permeia e unifica conceitualmente os diversos tipos de escolha de abordagem
          narrativa.
        </p>

        <p>
          Em comum entre as duas faixas, assim, está a tentativa de erguer uma narrativa a
          partir de uma experiência cotidiana – o trajeto no ônibus, o homem que pede um pedaço
          de comida na porta de um bar –, tão logo elevando seu status ao transformá-la em
          canção, quebrando-se neste trajeto as expectativas sobre o tipo de fato extraordinário ou
          de local simbólico que se espera encontrar em um registro como este. Eis aqui o
          primeiro deslocamento que faz com a ética da <em>tortuosidade</em> se evidencie nestas duas
          faixas, o que se revelará um traço comum de todas as cinco faixas que aqui serão
          destacadas.
        </p>

        <p>
          <em>Cidadão</em> é uma música estruturada a partir das frases melódicas de um
          cavaquinho e de um baixo acústico, que levam a um solo melancólico do baixo com
          arco de pouco mais de trinta segundos. As quatro estrofes da canção iniciam-se com a
          palavra <em>cidadão</em>, sendo que três vezes na música é repetido o refrão <em>Meu bairro nunca
            foi igual/Ao bairro de nenhuma história/E tem seu próprio carnaval/Um cidadão nunca
            vai ser igual</em>. O relato deste observador – que livremente devaneia sobre o que se passa
          na mente deste sujeito – surge como uma espécie de reação lastimosa à falta de
          narrativas sobre o ambiente em que ambos os sujeitos vivem – o que o faz apelar para as
          possibilidades que, antes de estarem dispostas no espaço, são projetadas em sua
          imaginação. Os registros de letra e música são igualmente melancólicos e, por isso,
          estão a par e passo na canção.
        </p>

        <p>
          Em <em>Da Vila Guilherme até o Imirim</em> o tom suave da música também se
          harmoniza diretamente com o aspecto lírico-amoroso da letra, que predomina mesmo
          com a forte presença de gírias e de situações prosaicas na letra, como a incumbência de
          pagar a tarifa do ônibus para o cobrador. O prolongamento das vogais em absolutamente
          todas as sílabas do refrão, em suas duas variações, repercute a suavidade predominante
          na construção das linhas melódicas dos instrumentos, construindo uma atmosfera de
          letargia na música, que permanece agradável ao ouvinte e dá o tom do instante ali
          descrito, ainda que em circunstâncias pouco convencionais na lírica amorosa da canção
          brasileira.
        </p>

        <p className={styles.center}>
          <strong>2. Quem te prendeu, quem te impediu?</strong>
        </p>

        <p>
          <a href="https://www.youtube.com/watch?v=Dd1fQ4bii9M" target="_blank" rel="noreferrer"><em>Faria
            Lima pra Cá</em></a> e <a href="https://www.youtube.com/watch?v=hHZd_cJ8A4w" target="_blank" rel="noreferrer">
            <em>Samuel</em></a> são músicas cujas letras trazem uma notória
          estruturação dêitica. Assim, emergem os termos de uma contraposição estruturante de
          lugares ou de agentes, marcando-se a posição do sujeito enunciador em seu contexto
          social de fundo.
        </p>

        <p>
          <em>Faria Lima pra Cá</em> é uma canção cuja letra se baseia em dois eixos: o das
          relações de trabalho e o da circulação pela cidade, que se imbricam justamente no
          sistema de oposições dêiticas, descritas sucintamente por: <em>Faria Lima</em> – <em>cá, metrô</em> – <em>bar
            do João, hoje</em> – <em>um ano/dois mês atrás, eu </em>(pressuposto) – <em>eles</em> (oculto, exógeno) – <em>você</em>&nbsp;
          (pressuposto, endógeno). Nesta canção, narra-se a partir do ponto de vista de uma
          primeira pessoa facilmente identificável como pertencente às classes populares, seja
          pelas escolhas lexicais (<em>descolar, nem dá um dois</em>), seja pelo tipo de atividade informal
          descrita, seja pela nota sobre o valor do aluguel e a dificuldade de lidar com este
          compromisso: é mais uma canção de <em>Passo Torto</em> que lida com uma perspectiva
          endógena em relação a grupos sociais não-hegemônicos, ou seja, o eu-enunciador está
          situado na margem.
        </p>

        <p>
          Na narrativa tem-se um sujeito que vive em constante movimentação pela cidade
          em busca das condições para manter-se, e que conta para uma segunda pessoa
          pressuposta – que faz parte deste <em>cá</em> de onde ele é oriundo - a experiência de reencontro
          com a região do Largo da Batata, onde se localiza a estação Faria Lima do metrô.
          Pode-se pressupor, a partir do contexto da letra, que este eu-lírico recebeu uma proposta
          para trabalhar em algum bar na região (a palavra <em>noutro</em> permite esta interpretação), que
          a aceitou e que não vê problemas em percorrer a distância entre o local onde e o local
          onde irá trabalhar.
        </p>

        <p>
          A vivência cotidiana, oriunda do mundo do trabalho informal, é o que propicia a
          esse eu-lírico a observação da cidade, do ritmo frenético de construção e desconstrução
          que também é regido por uma lógica ligada ao capital: neste ponto, uma visão objetiva
          da realidade – da obsolescência e desgaste veloz do espaço - ganha respaldo a partir de
          uma experiência subjetiva – a de ter que percorrer este espaço em busca de condições de
          subsistência: ambos os movimentos compartilham sua motivação, e inclusive partilham
          da mesma lógica interna, evidente quando se observa que o eu-lírico vive numa região
          afastada do núcleo da especulação imobiliária e tem que lidar com o valor alto de um
          aluguel mesmo assim, além de ter que ir ao encontro das oportunidades de trabalho em
          uma região que usualmente não frequentaria, algo claro pelo fator de estranhamento
          diante das mudanças do espaço, típicas de alguém que reencontra um local depois de
          certo tempo.
        </p>

        <p>
          O ritmo da música parece querer acompanhar a velocidade tanto das mudanças
          no espaço quanto da movimentação do eu-lírico pela cidade, em seus múltiplos pontos
          de trabalho e do desejo de reencontrar seu <em>irmão</em>. As frases melódicas do violão de Kiko
          Dinucci acompanham ao longo de toda a música o ritmo de entonação da letra, cantada
          de forma acelerada por Rodrigo Campos e por ele mesmo, amplificando a sensação de
          pressa e de urgência predominante no plano da letra. A fatura da música, contudo,
          aproxima-se mais de um registro otimista do que de um dado lamentatório ou
          indignatório. Apesar de todas as dificuldades representadas na letra pelo eu-lírico, seu
          discurso tende mais à aceitação de seu estado - em vias de uma superação gradativa – do
          que à sua contestação, não havendo nenhum tipo de proposição exterior à lógica ali
          expressa: a estrutura cíclica da letra é indicativa acerca do futuro imediato deste sujeito
          (e da cidade), ou do cotidiano ao qual ele está submetido. Se o discurso do eu-lírico tem
          um tom que se aproxima do discurso meritocrático corrente (<em>meu pedacinho de sol/é
            meu de sol</em>), a melodia não a contesta, mas antes, parece reafirmá-lo, dando vazão
          predominantemente eufórica à voz deste sujeito.
        </p>

        <p>
          Em <em>Samuel</em>, a relação dêitica estruturante pode ser disposta nos seguintes
          termos: <em>aqui/lado de cá/Augusta</em> (exógeno) – <em>casa/da 16/do 23</em> (endógeno). No entanto,
          esta relação surge não apenas tensionada, mas mediada – ou melhor, atravancada – por
          termos como <em>muro</em>, <em>prender</em>, <em>impedir</em>, <em>fechar</em>, <em>subir</em>, que evidenciam a grande diferença
          entre esta canção e <em>Faria Lima pra Cá</em>: aqui, a circulação surge permeada de
          empecilhos, não há uma passagem entre os polos senão nos termos de uma <em>travessia</em>,
          algo sintomático em virtude do tipo de relação que motiva o deslocamento: para o
          trabalho, em <em>Faria Lima</em>, a distância é superável e possível, ainda que custosa; para o
          lazer, em <em>Samuel</em>, os limites da integração do espaço da cidade se deixam ver muito
          mais claramente.
        </p>

        <p>
          <em>Samuel</em>, assim, coloca termos mais claros no sistema de relações dêiticas do
          álbum: seus sujeitos - tanto os enunciadores quanto os referidos com familiaridade – são
          relacionados a um grupo social específico que não pertence ao espaço em que a
          narração da letra ocorre, o que se evidencia em primeira instância por escolhas
          semânticas como <em>cabuloso</em> ou <em>doido pra caralho</em>. Ademais, pelas experiências de
          Nikimba e Deto – referidos a partir do número da rua ou da casa onde moram, o que
          denota familiaridade com o eu-lírico - na Rua Augusta, região central de São Paulo
          conhecida por ser um local de encontro de jovens de classe média, e pela justaposição
          destas experiências ao questionamento do eu-lírico a Samuel, é possível deduzir que a
          oposição estruturante da canção se dá entre aqueles que se sentem filiados ao chamado
          Centro Novo da capital e aqueles que, como Samuel, estão <em>presos</em> a algum dos enormes
          bolsões de exclusão característicos da metrópole paulistana: regendo a relação entre
          estes dois polos está a lógica do espaço urbano segregado, simbolizada pelo fechamento
          do metrô, mais um dos muros que sobem para repor os sujeitos ao seu local de origem,
          para manter a ordem naturalmente induzida da cidade.
        </p>

        <p>
          É válido notar que <em>Samuel</em> não representa a aceitação destes sujeitos que vivem&nbsp;
          <a href="https://www.youtube.com/watch?v=VDYRbLOdTAI" target="_blank" rel="noreferrer"><em>da
            ponte pra lá</em></a> (relembrando a formula que foi consagrada pelos Racionais Mc’s) ao
          código de conduta que surge como imposição em um local dominado pelo <em>status quo</em>,
          letrado e bem-educado, no que este termo guarda de conotação de classe: o que é
          relatado sobre Deto e Nikimba em nada se assemelha ao que seria considerado
          adequado segundo esta norma social, mas, pelo contrário, denota uma explícita
          oposição ou desconsideração a esta norma. <em>Samuel</em> é, assim, o momento em que o
          discurso de <em>Passo Torto</em> mais se aproxima de uma confrontação.
        </p>

        <p>
          O violão principal da canção acompanha melodicamente em um registro grave a
          voz ora de Kiko Dinucci, ora de Rodrigo Campos, ora de ambos. A contraposição a este
          registro se dá pelo cavaquinho de Rodrigo Campos, um registro agudo que destoa desta
          linha, sobretudo na execução de <em>slides</em>: é este o principal elemento musical de emulação
          da oposição descrita na letra. A alternância de vozes, e sobretudo a junção das duas
          vozes na última repetição do refrão, realça uma sensação de discurso oriundo de um
          grupo, algo que corrobora a interpretação da letra baseada na dêixis e na relação que se
          dá no espaço da cidade. A música, contudo, não carrega a mesma força de confrontação
          que há nos eventos descritos pela letra e na vivência do grupo social ali representado: o
          predomínio em <em>Samuel</em> é de um tom mais próximo da melancolia do que de sentimentos
          como resignação ou raiva, que seriam cabíveis diante da situação exposta na letra,
          sobretudo a partir do ponto de vista endógeno ali presente, em que o eu-lírico não só
          sabe, mas compartilha a vivência de Samuel.
        </p>

        <p className={styles.center}>
          <strong>3. Vai querer zombar de mim, vai dizer que é mesmo assim.</strong>
        </p>

        <p>
          Se <a href="https://www.youtube.com/watch?v=va2x2w5mj2U" target="_blank" rel="noreferrer">
            <em>É Mesmo Assim</em></a> é estruturada a partir de uma enumeração aparentemente
          caótica ou feita sobretudo a partir da matéria fônica, pode-se dizer que o elemento que
          opera como unificador da letra é o refrão, repetido ao cabo de cada uma das estrofes.
          Neste refrão, a tensão dêitica <em>ele</em> (exógeno, implícito) - <em>eu</em> torna-se visível e dispõe os
          termos de uma interpretação ampla da letra: aqui, como em <em>Faria Lima pra Cá</em> (<em>Tão
            querendo me tirar</em>) e <em>Samuel</em> (<em>Quem te prendeu?</em>) existe um sujeito oculto que se
          contrapõe ao eu-lírico da canção, impedindo-o de realizar algo. No caso de <em>É Mesmo
            Assim</em>, esta oposição é reiterada três vezes e ganha um caráter político mais claro a
          partir da presença de <em>cidadão</em> no último verso da última estrofe, que direciona a
          interpretação sobre quem pode ser este sujeito implícito que zomba do alcance da
          vivência do eu-lírico e que desdenha não só de suas possibilidades de alterar sua
          situação, mas mesmo do próprio direito em contestá-la. O refrão, portanto, é o elemento
          que lança luz à interpretação da enumeração que a precede, possibilitando uma
          observação dos termos citados.
        </p>

        <p>
          Observando-se as estrofes, podem-se caracterizar como disfóricos pelo menos
          14 termos, sendo que outros, como <em>chuva fina</em>, <em>carabina</em> e <em>dicionário</em>, apesar de não
          serem inerentemente disfóricos, passam a assumir contextualmente esta posição afetiva.
          Como inerentemente eufóricos podem-se considerar apenas <em>cor de rosa</em>, <em>catavento</em>,
          &nbsp;<em>passarinho</em> e <em>dia lindo</em>, sendo, portanto, assimétrica a relação entre os afetos,
          conduzindo-se a uma interpretação predominantemente disfórica da letra.
        </p>

        <p>
          Ademais, a presença da sinestesia é predominante nos termos utilizados por
          Rômulo Fróes na composição, remetendo-se a todo o momento à vivência de alguém
          que tanto presencia quanto sente o que é ali citado, e que destoa deste <em>cidadão</em> que surge
          ao cabo da letra como que unificando a vivência múltipla e particular, inacessível em
          suas causas e consequências, em um termo de caráter político e histórico que tenta ser
          neutro: se a enumeração remete-se ao sujeito, o <em>cidadão</em> remete-se à voz daquele que
          vai zombar e dizer que a vida é mesmo essa experiência predominantemente disfórica,
          permeada naturalmente tanto por <em>dias lindos</em> – algo de origem natural - quanto pelo&nbsp;
          <em>desemprego</em> – algo de origem social - e pelo <em>desespero</em> – algo de origem psicossocial: há
          um teor falso indissociável do discurso daquele que <em>zomba</em>. O termo <em>cidadão</em>, assim,
          surge como uma palavra que unifica sob o manto da normalidade vivências que em tudo
          são díspares e expostas a diferentes tipos de pressões sociais condicionadas pela classe
          de determinado sujeito: se o cidadão é aquele que vive na cidade e usufrui de seus
          privilégios legais, por isso o uso desta palavra é absolutamente adequado para aquele
          que, ao neutralizar o peso da vivência do outro por desconhecê-la, diz (e repete) que é&nbsp;
          <em>mesmo assim</em>.
        </p>

        <p>
          A audição da canção leva explicitamente ao diálogo com a tradição do samba,
          sobretudo a partir da cadência nos acordes de cavaquinho no refrão (nas estrofes,
          repete-se o uso de frases melódicas como presente em canções como <em>Cidadão</em>). O
          diálogo com o samba na faixa, contudo, <a href="https://www.youtube.com/watch?v=VZi7D7y70vc"
            target="_blank" rel="noreferrer">não faz nenhum apelo ao corpo</a>, promovendo
          assim um deslocamento com relação à expectativa do gênero: em confluência com a
          disforia predominante na letra, o tom da canção é predominantemente melancólico, algo
          corroborado pela entoação de Rômulo Fróes, em seu registro mais grave. Desta forma,
          se <em>É Mesmo Assim</em> propõe um deslocamento com relação à genealogia do samba, é para
          propor a reverberação a partir da união conceitual entre forma e conteúdo: nesta canção,
          a proposição em representar o díspar, o que não tem síntese, o que está em oposição à
          fala oficializante encontra fundo a partir da matéria sonora que se desvia das
          expectativas musicais fixadas pela indústria fonográfica.
        </p>

        <p>
          <strong>4. Um cidadão nunca vai ser igual: à guisa de conclusão</strong>
        </p>

        <p>
          Partindo-se da análise das canções de <em>Passo Torto</em> que dialogam diretamente
          com o tema da cidade, é possível observar a presença de duas linhas discursivas
          predominantes: uma que expõe por meio de breves narrativas o cenário de tragédia de
          urbana a que está submetida a população – sobretudo jovem - que não vive no
          Quadrante Sudoeste da cidade de São Paulo, e outra que pensa o sujeito a partir de seu
          direito à vivência e à autorreflexão sobre seu estar no mundo, portanto, seu estar na
          cidade. Em conjunto, estas duas linhas dão a medida de qual tipo de deslocamento de
          uma visão hegemônica de sociedade é proposta por <em>Passo Torto</em>.
        </p>

        <p>
          A primeira linha discursiva evidencia-se pelo fato de que todos os sujeitos
          identificados com os eu-líricos das letras são pertencentes a camadas economicamente
          inferiores da sociedade - mesmo naquelas canções em que predomina a terceira pessoa,
          como <em>Cidadão</em> - e deixam transparecer em seus discursos um tipo de oposição -
          explícita ou implícita na canção – a algum agente social que, no disco, nunca é nomeado
          ou rotulado, mas que cuja origem social é facilmente inferida pelo ouvinte.
        </p>

        <p>
          Neste ponto, o viés crítico do álbum de 2011 ganha forma e alcance político: a
          enumeração de problemas enfrentados pelos eu-líricos e personagens na cidade é quase
          didática sobre o contexto de segregação dentro da lógica urbana e sobre quem são os
          afetados e os beneficiados por este processo. Por exemplo, <em>Passo Torto</em> é um disco em
          que há muitos deslocamentos em transporte público e em que o atraso ou a incerteza são
          temas marcantes, o que coloca em evidência uma das categorias fundamentais do
          projeto segregacionista do desenvolvimento de São Paulo: o tempo. Por viverem
          afastados de seus locais de trabalho ou de lazer, estes eu-líricos e personagens são
          sujeitos que não podem desfrutar da otimização de seus tempos, um privilégio apenas
          de um legítimo <em>cidadão</em>. Expondo – não denunciando, note-se – o processo de
          concentração do dinheiro e dos serviços numa região bem delimitada da cidade, o disco
          da banda paulistana evidencia a tendenciosa neutralização que o discurso oficial
          promove das diferenças entre seus sujeitos, igualando-os diante de suas múltiplas
          vivências, cuja qualidade e longevidade carregam um recorte de classe incontornável.
        </p>

        <p>
          Mas esta crítica de alcance coletivo e público é acompanhada de outra - a
          segunda linha discursiva do disco - que visa a defesa da subjetividade e individualidade
          deste sujeito que muitas vezes é ocultado mesmo quando seus interesses são defendidos.
          Assim, pode-se dizer que <em>Passo Torto</em> é um disco que traz consigo um discurso de
          defesa da vivência como matéria de conhecimento sobre o cotidiano e o sujeito. Isto não
          está exposto apenas em faixas como <em>É Mesmo Assim ou Cidadão</em>  , que explicitamente
          pretendem tematizar a busca pela matéria narrativa dentro da espuma dos dias, mas
          também nas canções, como <em>Da Vila Guilherme até o Imirim</em>, que implicitamente
          lograram o resultado desta busca, transformando o cotidiano e o trivial em material
          digno de elaboração estética. Este tipo de elaboração da vivência do sujeito através de
          narrativas, como defende um autor como Frantz Fanon – em que a autorreflexão é o
          primeiro processo de uma reação contra os discursos impositivos - ou como Walter
          Benjamin – em que a perda da capacidade de narrar simboliza a perda da consciência
          sobre as próprias vivências – é o que de fato possibilita o primeiro itinerário discursivo
          do disco. Visualizar o excepcional dentro do trivial, o conhecimento dentro do
          lugar-comum, o sujeito dentro do cidadão é atestar a organicidade dos processos sociais
          aos quais os indivíduos estão inseridos, e é também possibilitá-los o direito de serem
          chamados de sujeitos históricos, apesar de despidos de capa e espada. Há, assim, numa
          letra sobre um casal em um ônibus, um enorme alcance político, algo que a narrativa,
          em suas diversas vertentes, consegue restituir o valor.
        </p>

        <p>
          No entanto, apesar da reiteração destas duas linhas discursivas e de seu inerente
          alcance social, <em>Passo Torto</em> não pode ser chamado de um disco de denúncia: seus
          antissujeitos permanecem ocultos, pressupostos, não são em nenhum momento
          confrontados ou expostos em suas intenções, algo que é corroborado na aproximação
          com o plano sonoro do álbum. Pode-se dizer que, nas seis faixas de <em>Passo Torto</em> aqui
          analisadas, não se realizam no plano musical as tensões dispostas no plano da narrativa,
          mas sim procura-se, com sucesso, adequar o registro musical ao tipo de sentimento que
          prevalece nas canções: o de melancolia, de resignação, ou mesmo de letargia. Se os
          personagens e eu-líricos das letras estão em uma posição social suscetível à violência do
          cotidiano, o discurso que lhes é atribuído (em enunciado e, sobretudo, enunciação) não
          evidencia nestes sujeitos uma consciência mais ampla dos processos que vivenciam,
          nem nos enunciadores surge a presença de afetos de contestação a esses processos.
        </p>

        <p>
          A resposta à pergunta <em>Quem te prendeu? Quem te impediu?</em> de <em>Samuel</em> não é
          dada pelos músicos do Passo Torto, mas pressuposta pelo público, que é imaginado
          como já consciente dos processos ali citados: não há necessidade de formá-lo, nem
          mesmo identitariamente ou como parte interessada, tal qual ocorre no rap: este público é
          situado como um potencial observador reflexivo, que encontra nas canções um local
          afeito para sua contemplação dos problemas. Por isso, entre a violência dos processos
          evocados e a melancolia dominante nestas faixas do disco, torna-se visível um desnível
          de registros que pode mesmo gerar audições que não se acerquem do aspecto crítico da
          obra, permanecendo apenas atentas ao seu aspecto lírico, ainda que seja este um lirismo
          que tenda à disforia, à negatividade. Será necessário, assim, <a href="https://www.youtube.com/watch?v=zm835tPhc78" 
          target="_blank" rel="noreferrer">esperar por <em>Passo Elétrico</em></a>&nbsp;
          para que o grupo paulistano consiga produzir efeitos mais interessantes sobre os espaços
          em que se debruçar, fazendo jus à violência que os constitui como experiência.
        </p>

      </section>

      <TextsNavigation currentCiclo="umSomEstrangeiro" handleRedirect={handleRedirect} />
    </div>
  );
}