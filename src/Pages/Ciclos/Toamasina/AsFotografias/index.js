import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function AsFotografias() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>As fotografias</h2>
        <hr/>

        <p>
          Os que ali estavam não o sabiam. E eu, que nem nascido era, hoje talvez o saiba.
        </p>

        <p>
          Mas, em verdade, seria injusto se eu falasse nestes termos.
        </p> 

        <p>
          Então tentaria recomeçar. 
        </p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Os que ali estavam não o poderiam saber. E eu – nem perto de ter nascido –, por mera casualidade, 
          tantos anos depois, o soube.
        </p>
        
        <p>
          e não ainda, no entanto.
        </p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Quando ali estavam, isto sequer existia. E nem mesmo eu, diante da imensa obra, no claro do hoje, o pude notar.
        </p>

        <p>
          Foi Beatriz quem reparou por mim. Em seus olhos sempre tão atentos, sempre habitando nas frestas dos meus, 
          foi Beatriz quem se pôs a falar.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;-Era ali.
        </p>

        <p>Como se explicasse a um peregrino o caminho, depois de ele já ter desistido.</p>

        <p>
          Ao ouvi-la, em verdade, ao contrário do que sua voz poderia me sugerir, e muito além do 
          sentido do que ela sugeria, eu não tive nenhuma dúvida de que
        </p>

        <p>
          alguém como Charles Darwin 
        </p>

        <p className={styles.end}>
        – o imagino ao menos um pouco 
        </p>

        <p>
          simpático, ao menos algo acessível, porque só assim teria conseguido firmar as retinas sem pressa 
          sobre os ainda mais tristes trópicos daquela época 
        </p>

        <p className={styles.end}>– assentiria, concordaria,</p>

        <p>
          faria alguma observação sobre a profundidade daquela mirada 
          (porque, sim, é verdade, Beatriz amava ler as certezas sempre tímidas de Darwin).
        </p>

        <p>Eu odiaria que publicassem os nossos diários</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Diz-se que ver é unicamente sobre saber ver. Hoje concordo com isso como concordo com o dia:</p>

        <p>&nbsp;&nbsp;&nbsp;diante do visto.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Diz-se – também – que ver é unicamente sobre saber ser visto. Se alguém me lê, eu devo concordar com isso.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p><em>Exposto o pressuposto, passaria a narrar o ocorrido.</em></p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Ao ver as fotos da última viagem que fiz à minha própria terra, foi Beatriz quem o notou; 
          inventando, então, esta necessidade. É este o único fato.
        </p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Até então eu pensava que a beleza era algo que dependia da distração, eu 
          gostava de como o sol batia nas folhas, de como o vento era fresco, 
          era vivo, era onipresente, de como a luz escorria nas ruas, nas praias, 
          nos rios das minhas cidades.
        </p>

        <p> 
          Mas então, daquele momento em diante, o sal da imagem decantou-se, deu-se 
          a ver pelo suspender da voz: algo belo era apenas algo físico: com 
          sua matéria, com seu peso, com seus relógios.
        </p>

        <p className={styles.end}>Porque&nbsp;&nbsp;&nbsp;Beatriz</p>

        <p>
          abriu-me as mãos, deu-me um nome para que apertasse entre os dedos: 
          transformou todos os momentos – lembrados, sentidos, esquecidos, 
          sentidos e esquecidos – em algo. Em alguma coisa: uma forma, que não 
          minha, sua história: que outra, que infinitamente outra forma. 
        </p>

        <p>Mas outra vez passo a narrar para mim e, por isso, deixo então de narrar.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Beatriz, são minhas as duas mãos que novamente constatam.</p>

        <p>Que calculam que, no instante em que a vida se torna palavra, pronto: olhe para o céu e ria: estamos feitos. </p>

        <p className={styles.end}>E devemos, então, fazer.</p>

        <p className={styles.end}>O nosso.</p>

        <p>Com o que nos é alheio.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Mas nisso eu seria injusto uma vez mais. E então recomeçaria.</p>

        <p>
          Porque, colocado desta forma, é como se Beatriz me tivesse arrancado a 
          ingenuidade aos empurrões, como se me tivesse aberto um livro na cara e me 
          obrigado a ver o óbvio de uma verdade brilhante: como se me tivesse colonizado 
          com suas naus.
        </p>

        <p>E, no entanto, Beatriz jamais o faria desta forma.</p>

        <p>Tampouco verdade havia para ser anunciada.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Confesso que fui eu quem lhe perguntou, quem lhe pediu para que me 
          explicasse. Beatriz, contudo, não tomou a pergunta como o ímpeto ou 
          presságio de uma resposta. Este foi seu jogo, esta foi sua risada diante 
          do que eu esperava que me retornasse como ponto final. Beatriz seguiu 
          minha pergunta como se fora uma pista sobre quem perguntava, ou um tratado 
          sobre o que significava perguntar. 
        </p>

        <p>Legado maior pode ser o nada: tudo pretenso.</p>

        <p>E eu mesmo, aos meus próprios olhos, suspeito.</p>

        <p className={styles.end}>Tive, então, que recomeçar</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Eu estive ali muitos anos depois dos que não se lembram. Dos que sequer poderiam se lembrar.</p>

        <p>
          Mas este <em>ali</em> é impreciso, é absolutamente difuso, disperso, tanto no espaço, 
          quanto no tempo. Neblina que se revela apenas com os raios de um sol quase líquido. 
          Daquele sol, especificamente. Fumaça sem fogo, que reina nesta distância da voz para 
          as coisas.
        </p>

        <p>Não.</p>

        <p>
          Eu estive nalgum lugar onde apenas eu estive. E como isto coincidiria? 
          Porque o <em>ali</em> é infiel, vário, redivivo. Porque sei onde estive apenas no 
          instante em que estive; e porque outros como Beatriz só saberão vagamente 
          pelo que fotografei, ou contei, ou menti, o que quer dizer <em>ali</em>.
        </p>

        <p>O reino da palavra, onde vige a única lei sorridente.</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Os que não se lembram evidentemente não fotografaram. Ou contaram. Ou mentiram.</p>

        <p>Nem eu posso supor onde tenham pisado, mesmo que tenha sido <em>ali</em>.</p>

        <p>Então, tentaria recomeçar</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          Consigo me lembrar de ao menos três momentos em três lugares. Foram estes 
          momentos que apresentei a Beatriz como uma espécie de justificativa. 
          Três dias distintos: três dias distintamente belos; três dias um pouco, 
          ao menos um pouco, nivelados então por seus olhos, e por aquilo sem forma 
          que os antecede. 
        </p>

        <p><em>Terei que descrevê-los, os dias, suponho.</em></p>

        <p><em>Como descrevi a ela, que ali não estava, e nunca esteve, mesmo se estivesse.</em></p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>
          <em>
            Em primeiro lugar, creio, falarei do segundo, como se fora o primeiro; em seguida, 
            do terceiro, como se fora o segundo; e do primeiro, por fim, como se encerrasse.
          </em>
        </p>

        <p><em>Me traio neste ato?</em></p>

        <p><em>
          Qual a ordem natural destas coisas? A ordem em que lembro, 
          a que vejo ou a que suponho ser melhor para o texto?
        </em></p>

        <p><em>
          O livro de Zumthor, os livros de Aleixo, o livro de Meschonnic, sob as fotos, 
          não resistem por ora: estão fechados, calcários, não ensinam absolutamente 
          nada. Neste exato momento em que escrevo. Na veloz cronologia que se inventa 
          palavras puras, e que ignora o que consegui salvar das passagens de ônibus 
          ou de barco, papeis preenchidos por homens que também ali não estavam.
        </em></p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p><em>Em silêncio? Como se traça a distância entre o lido e o livro?</em></p>

        <p><em>(Correram dez minutos sob a ponte desta pergunta) o mais difícil é inventar um começo.</em></p>

        <p>Se escrever é ser como deus, por onde deus, num dia talvez de outono, teria começado?</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p><em>Escrever.</em></p>

        <p>
          Eu andava por Cachoeira, só e úmido. A igreja tinha fechadas suas portas, mas eu 
          já havia ali entrado há algumas horas. Me sentei na soleira mínima, onde a chuva 
          não mais me alcançaria: era boa, sim, mas já tinha sido o bastante para mim. 
          Tirei os sapatos, tirei as meias. Olhei adiante. Beatriz não estava lá, nem 
          nunca havia estado. Poucas vezes na vida me senti tão só. A chuva ainda me 
          alcançava. Os dedos frios como a vida prévia, e futura; como aquilo que 
          margeia a felicidade ou mesmo a consciência de que não se é feliz. Aquele 
          instante – disposto como um cenário aleatório mas definitivo – me levou então 
          a uma fotografia, como quem lança ao mar uma isca. Apontei em direção às pedras 
          da rua (vão-se os dedos, os anéis, ficam as pedras da rua (onde surge o desejo 
          e o alvo de qualquer tentativa?)). E fiz com que, mais uma vez, ficassem. As 
          pedras da rua, congeladas em sua existência máxima, simplesmente são: esta é 
          sua escolha abrupta, e definitiva: a imobilidade pela permanência, em troca. 
          Eu fotografava ali sentado também. Mas estava a centenas de quilômetros de 
          casa, e precisava voltar antes que anoitecesse. Somos seres partidos, como 
          não são as pedras. Por isso sei que, agora, com a foto em mãos, quando me 
          lembro e distingo e escrevo aquele instante sozinho –  o único cristalizado 
          dentre os demais parassempre perdidos nalguma curva da minha – e só da minha 
          – cabeça –  eu minto. Aqui está sua luz; aqui uns olhos diante de sua luz; 
          aqui os motivos estrangeiros que me fizeram ali tentar o que quer que fosse. 
          Aqui está também Beatriz, cujo corpo carrega em si uma voz grave – como se 
          surgisse de dentro de um galpão vazio e imenso –, a resumir. Em Cachoeira, no 
          entanto, diante da Minerva, a chuva se alargava e a luz se tornava em tudo 
          distinta desta que tenho registro; sobre a Central da Bahia o sol já despencava 
          sedento demarcando as fronteiras de minha pele; em São Félix as ruas desertas 
          não me convidavam a que permanecesse, mas a que prosseguisse o mais rápido 
          possível; na volta, o motorista me disse agarre esta porta como se disso 
          dependesse sua vida, e é possível que dependa mesmo nos instantes em que 
          incontáveis eucaliptos passavam (quem passava era eu, éramos nós). E nada 
          disso está presente naquela foto. Nesta. Mas me vem – e segue me vindo – a 
          cada instante em que a olho. Eis o espaço do encontro e do desencontro 
          inevitáveis.
        </p>

        <p><em>Escrever.</em></p>

        <p>
          <em>O terceiro</em>. Você vai ficar aí mesmo? ele me disse e eu lhe disse Sim, 
          este sol eu nem sempre presencio, e nem pode me fazer algum mal de fato. Ele 
          me disse Então tá meu amigo e riu a risada fadada ao estrangeiro que erra os 
          gêneros das palavras. Mas à dor que me sucedeu e à derrisão que me acompanhou, 
          o enquadramento, o limite do que vejo nesta foto: um sorriso, galhos, um mar 
          de fundo. Estar no barco e não ver o barco. Estar em uma ilha e perceber como 
          se anda sempre ao redor do próprio eixo. Como o mundo é demarcado. Fui 
          chamado pelo nome naquele dia algumas vezes, e confesso que isso é tão raro 
          como o próprio ato de ser chamado. Percebo que já quase me perco outra vez 
          do dia. Olhos mínimos: luz solar. Ruas de pés e de bocejos, o domingo 
          infinito. Casas abertas, casas anunciando os nomes de seus donos, para que 
          a dúvida não restasse: eu com minhas mãos esculpi esta matéria. Exausto 
          daquele vagar, retorno ao primeiro banco, e me sento. Noto no chão um 
          ponto luminoso, onde se encontram num curso a luz, os galhos, as pessoas 
          que me chamam, meu nome, o que quero um dia escrever, as horas de um 
          relógio quebrado, os olhos de meu avô e a voz de Beatriz. Cristalizar 
          aquilo, como um âmbar, ou ao menos a remota possibilidade da existência 
          <em>daquilo</em>, portanto. Que me doessem as costas na volta e que por 
          dias não dormisse. Que se risse também de meus erros mais infantis. Tudo aquilo 
          é parte do que fui e sou nesta imagem que tenho agora frente aos olhos, e 
          que se assemelha de certa forma com aquilo que num domingo vi. Chove nos 
          trópicos. Bom Jesus dos Passos, Beatriz, a fotografia entre os dedos aqui.
        </p>

        <p><em>Escrever.</em></p>

        <p>
          <em>A primeira</em>. É como estar em casa eu sei: e que poderia ser mais 
          estranho que isso? Ou que poderia ser mais óbvio que esta pergunta? É como 
          estar em casa eu sei. A cidade tem contornos agudos, sob a casca daquilo 
          que parece perpétuo. Andar no outro sentido deste raciocínio é igualmente 
          possível. Aqui tudo é para sempre e tudo simplesmente se deu; tudo é brutal 
          e tudo estancou; tudo foi feito e tudo fizeram; tudo esteve e tudo é 
          sempre. Santo Amaro: casas de mais de dois mil anos, cheiro de morte e 
          de vida, iminência de mar e rastro de aves, madeira úmida. E ainda duas 
          horas para o próximo ônibus. Estou só: e novamente nunca estive tão só. 
          Mesmo quem se lembra já é morto há séculos. Para os vivos, um segredo a 
          cada passo antecede. E pela sombra a luz se molda. Estou insustentavelmente 
          só. E estou em casa, como preço disso. Creio que em minha vida nunca 
          tenham se distanciado estas duas certezas. Mas sob a chuva fina da 
          cidade-matéria, vejo como elas irrompem no mesmo espaço, pelo mesmo 
          motivo, e ao mesmo tempo. A história se escreve nas ausências. Tenho 
          Beatriz nos braços e tenho os braços pendentes. Enormes caminhões vazios 
          levam consigo parte do calçamento, que permanece inteiro. Andei pelas 
          mesmas ruas incontáveis vezes, sem que ninguém me visse; como uma vírgula, 
          emendada à caneta em um texto já impresso, pelas mesmas ruas incontáveis 
          vezes andei só. O mundo era uma matéria intransponível, e sobre ele eu 
          encarnava uma forma mole e dispersa. Matéria e forma: os dias: aquilo que é 
          distinto e que é o mesmo. A voz que diz que sou sujeito. Antes de partir, 
          uma fotografia: a única em que apareço em toda esta vigília. Pego o ônibus 
          e volto a onde moraria, fosse inteiramente outra esta vida. Sendo esta, 
          me sento agora em uma mesa.
        </p>

        <p><em>E então ter escrito.</em></p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>À Bahia.</p>

        <p>Uma ruga no canto de um olho denunciando o preço do corpo. </p>

        <p>A carne é sim restrita, como estamos nós restritos apenas à vida.</p>

        <p>Um barco que leva seu avô cego sobre um mar verde, tranquilo, vazio de segredos.. </p>

        <p>A voz de Beatriz a gravemente dissipar que</p>

        <p className={styles.center}>
          <strong>*</strong>
        </p>

        <p>Acho engraçado uma coisa em tuas fotos</p>

        <p className={styles.center}>parece haver nelas</p>

        <p className={styles.end}>ou em todos os lugares onde esteve&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <p className={styles.end}>diferentes</p>

        <p className={styles.end}>as mesmas</p>

        <p className={styles.end}>sempre</p>

        <p className={styles.end}>não sei</p>

        <p className={styles.end}>olhe você.</p>

        <p>E então tentaria recomeçar.</p>
        
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}