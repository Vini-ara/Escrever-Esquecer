import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function DeusEGrande() {
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

        <h2>Deus é grande a baía é grande</h2>
        <hr/>

        <p>
          deus é grande, a baía é grande, a dor que se sente é imensa. ainda que tenha se passado um tempo largo e indizível 
          entre tanto. e ainda que este tempo seja só um vestígio do que de fato tenha, sob a pele, se passado. permita-me falar. 
          a despeito da dor passada, da dor futura, da dor presente. permita-me falar o que quer que seja sobre este mundo, 
          sobre esses barcos que daqui de meus olhos negros diviso. desta rua direita, de onde grita um jesuíta rouco pelas 
          janelas puídas. permita-me dizer, mesmo que desajeitadamente, o que digo. deixe-me dizer como estes barcos – que navegam 
          noturnos, que naufragam numa noite própria, que seguem impassíveis ao calor que como deus de um sermão desaba – possam 
          ter existido. permita-me dizer que navegaram não só o oceano, mas os anos que se passaram – permita-me – entre o dia 
          distante em que aqui aportaram e o agora em que os vejo e que então digo que os vi. mesmo que quase cega. permita-me 
          não me permita. pois é isto impossível, o que pretendo, e o que tenho feito. desde o instante em que pretendo. os barcos 
          que vejo não estão diante de meus olhos. você mesmo provavelmente não os vê. o napolitano contudo os distinguiria o 
          casco, a cor das bandeiras, este verme, aquele filho da puta, mesmo contra a luz que incidiria contra seus olhos. eu 
          apenas os enxergo, como enxergo as nuvens que passam acima de nossas cabeças. idênticas. a menos que as molde com a ponta 
          dos dedos das velhas ideias, das imagens já atravessadas, finitas. a baía é mesmo imensa, meu deus. e nós de imaginá-la 
          ou de vê-la a fazemos ainda maior. aqui estou diante desta paisagem sob esta luz durante este dia órfão. aqui estamos 
          nós dois pisando neste século que transborda de nossos olhos e já afunda nossos pés num mar de merda e de glória e de 
          destino. como se não nos fosse o bastante existir. diante de algo que não surge das curvas duras que este rio insiste 
          em pronunciar. porque os barcos me visitam mesmo em sonho, mesmo nas noites insones. me visitam a cada instante em que 
          me perco das estacas que a razão finca, demarcando os terrenos que são nossos e os que nos são apenas vizinhos, alheios, 
          pomares baldios. deste banco de praça o rio inunda de mares os meus barcos. isto não é um delírio. eu não sou louca, ou 
          antes tivesse sido. em primeiro lugar, porque eu vejo e sei que tenho visto agora. e então mais nada. nada além disto 
          que não seja enxergar, ver, divisar, e eu acho que é neste momento que nos desentendemos. permanentemente. todos nós, 
          nós nos desentendemos. quando digo que vejo não simplesmente vejo, quase cego. o contorno é só uma parte do que há entre 
          eles – os barcos – e eles – os olhos – e eles – o que vi. vejo os barcos por fora e vejo os barcos por dentro. ali estão 
          a pairar, imóveis e silentes como um fantasma, como corpos pútridos que vieram à tona. a humanidade nunca mediu esforços 
          para fazer falar seus erros. ali eu vejo os dias por inteiro. vejo o barco e vejo também as ripas de madeira do barco. 
          vejo a madeira do barco e vejo parte amputada de uma floresta a boiar em forma de barco. vejo os insetos e as aves a 
          habitarem o assoalho daquele barco. e vejo aqueles que sentiram os dias do resto de sua vida como um barco, à deriva como 
          um barco. e os vejo ao mesmo tempo em que não os vejo, poucos os olhos, cega quase. sem saber onde aquilo está situado no 
          tempo, ou nos meus braços. aí está como me assombram os sonhos e as horas lavadas. nada sabem sobre os gritos de liberdade 
          e república e sossego que povoaram este século de espadas afogadas, de alegorias agudas, de poetas milionários. como trazem 
          consigo sua dor, seus logros, seus movimentos. e como se juntam neste instante, no alto desta colina, em que não posso 
          escolher o que vejo, em que não posso ligar os pontos para ver a forma daquilo que eu desejasse. nisto tudo vive a verdadeira 
          dificuldade de dizer o que eu vejo. porque ao mesmo tempo não estão ali os homens, tão inabaláveis, que os conduzem. eu não 
          os posso enxergar, quase cego. a baía é imensa, talvez mesmo maior que o mundo. desapareceram ou talvez nem sequer tenham um 
          dia existido os homens. o que é também impossível, como esta cidade em que piso é impossível. mas daqui de onde os vejo, 
          desta praia deserta, os barcos reinam por si mesmos. possuem vontade própria, fazem parte de um desenho suntuoso que constitui 
          o todo de todos os barcos do mundo, dispersos. o todo de toda miséria presa nos meandros de um rio que nela se escora. e talvez 
          nisso venha algo que não seja só forma. um desejo de compreender o que vejo, por dentro, em gozo. os homens, há muito, estão 
          mortos. os homens que talvez tenham conduzido os barcos, é claro. como os homens que não vejo, e que talvez os barcos um dia 
          conduziriam. eu e você estamos vivas no meio deste século, contudo. e ainda falta ser descoberta e esculpida toda uma capital, 
          em seus edifícios modernos à época. um trem passa, colorindo com seu barulho feio este momento. mas eu e você estamos vivos, 
          vivos. a ponte treme, e eu pulo no mar. o mundo que nós sentimos, no entanto, permanece terreno. mortos estão os homens dos 
          barcos, que avisto vazios tal qual desejo e sinto. ou sequer são nascidos, por ora. sim, eu me repito e, ao mesmo tempo, 
          desminto. como esta paisagem. não é isto a história? este esforço de explicar aquilo que só você vê, ou aquilo que só você 
          não viu. explicar para alguém que, como você, também vê ou também deixou de ver, em cor distinta, a mesma coisa. quase cego. 
          está aqui no fundo desta baía fincada o verdadeiro norte de todas nossas esquinas. isto não é uma imagem. eu de fato enxergo 
          a vida dobrada sobre si. isto é a realidade, como é teu o ouvido que ouve o teu ouvido. de tanto vê-los, posso tocá-los na 
          ponta dos olhos, e ressoá-los na base dos cabelos. os barcos. persistem a despeito desta noite em que apenas o mar resiste 
          ao marasmo do rio que enxergo. o mundo inteiro está louco, meu deus? ou o único louco é você, deus meu? como se explica a 
          existência de todas as coisas que são impróprias, que não têm bordas? quem explodiria a própria praça da sé para poder obtê-la? 
          quem permitiria que se incendiassem dezenas de vezes a foz de todos os esforços, as feiras, os bairros mais inteiros, os coágulos 
          dos desertos? de que são feitos estes tijolos? a baía permanece imensa. mas eu ainda os veria diante das torres de uma cidade 
          em tudo distinta a esta. numa cidade sem praças, sem docas e sem ilhas. numa cidade em que dois homens, lado a lado, fincassem 
          em palavras um compromisso. ali estariam aportados, estariam, sim, os barcos. mas não verás cidade alguma que não essa. 
          loucura me parece, contudo, ignorar o que possa ser divisado – caro deus. no instante mesmo em que se dá aos olhos. sendo 
          eu quase cega. e é muito difícil que não me repita. porque o mundo, tão diverso, desabrocha em palavras esguias, monótonas. 
          não compartilho contigo nada. nem uma ponte, nem uma lembrança comum que me fizesse não ter que dizer cada coisa como se fosse 
          a primeira. há centenas de anos te conheço. loucura seria esquecer, eu te digo. você se senta ao meu lado nesta ponte de ferros, 
          os homens estancam a cachoeira, você acredita que eu simplesmente deliro ou invento. mas loucura seria esquecer, eu redigo. o 
          dia é um mar como este que eu e você ainda vemos. inestancável. pressinto em teus olhos o cansaço pelo tempo em que estamos de 
          pé, nesta rua direita, sob esta árvore vermelha, esperando uma resposta. esperando suas bombas, seus desembarques, seus náufragos. 
          é imenso o interior do mar. é imensa também esta baía. os homens hoje são livres como são os miseráveis e os doentes. ancorados contudo permanecem os barcos. estão parados e se movem com meus olhos, os barcos. a luz deste farol é o bastante para avistá-los. trazem no seio uma floresta em potência e escarro. trazem condensada esta cidade, as ladeiras ainda não traçadas, as encostas ainda não proscritas, os duelos pela posse da verdade, estas ilhas. a baía é imensa, e ainda maior em lembrá-la. a partir do caboto, como um pinho podre e frondoso, a partir dos nomes de família, isto. desta ilha costurada à linha fina, um dossel. eu te ouço a me escutar e não sei onde você agora me ouve. torta palavra ouvimos sobre nossos próprios corpos. deus é imenso, mas minúsculo a ponto de caber nas bordas desta hora. é preciso aproximar os olhos para escutá-lo. é preciso atentar-se às cores em que estamos presos. é preciso que sangrem nossos corpos em paisagens bêbadas e caudalosas como aquelas a que damos as costas. que descansem os poros sob árvores, para que permitam que sejamos algo a mais. eu sei que você me escuta, do outro lado desta baía. aqui estamos nós dois, nós duas, com as peles aradas de embarcações. é como um campo minado, como um pressentimento, que amplifica em nossos corpos o tamanho desta baía. o trem passa sobre o mar agora. as pessoas estão trágicas, letárgicas, inundadas no interior por seu mar. a baía é imensa, e maior ainda em vivê-la. que crime cometemos e que milagres operamos. até que chegássemos a este estado. a esta sombra, a esta árvore. o absurdo nunca se precede. peneiremos com os olhos. mapeemos com os dedos. compreendamos com os ouvidos. a baía é imensa. fincada na carne por cruel, fundada na pele por ausente. minha peste, minha planta invasora, meu princípio. os barcos. ali começamos. ali aportamos como estrangeiros. ali fabricamos a gosto e contragosto esta cidade. ali somos gerados e nascemos sob as calçadas, na beira das praias, em ilha ignotas, em pátios de portos, nas costas de mercados, nos meandros de rios, nas esquinas de palafitas, nos ermos de roçados, nos agudos de ladeiras, nos terraços de terreiros. somos belos apenas porque doemos. e nenhum dos termos compensará ao outro minimamente. é isto este adágio, é isto este século, e será isso também os que surjam eventualmente dos dados que lançarmos. e que ainda verão no ar das praças os mesmos barcos. quer olhemos para fora ou para dentro. esta é nossa estória. aqui onde desce esta mouraria, este é o nosso templo. aqui onde me deito como ao colo de meu inimigo. e o condeno. ao longo dos séculos sérios nos quais rimos sem esquecermos. sem ignorar quem nos foi, ao longo do caminho, vilão, cruel, bilioso, meirinho. deste mundo de casas que os mares açoitam sem cansaço. desta gruta, da luz difusa desta candeia. e é neste instante em que você não me ouve. e é deste banco mesmo em que eu recomeço. a despeito do movimento secreto dos sonhos. a despeito da mulher que eu sou e que só poderia ter sido caso quisesse falar consigo. pode o dia calar por mim, mesmo que nunca em meu lugar. pode-se gozar sem gozar neste dito. a baía é imensa. e maior ainda em dizê-la. comemorar o corpo sem esquecer os seus vermes. chorar os cadáveres sem esquecer de contá-los. e ser o homem que sou, sem culpa, sem bondade, sem maldade, sem pressa. por agora estar existindo, o sol nas costas. é este enfim o fado: e então dançá-lo.
        </p>

      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}