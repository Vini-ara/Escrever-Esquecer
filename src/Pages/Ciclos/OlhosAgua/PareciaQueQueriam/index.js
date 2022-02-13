import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function PareciaQueQueriam() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Parecia que queriam mudar o mundo"); 

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/olhos-agua')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Parecia que queriam mudar o mundo</h2>
        <hr/>

        <p>
          Ainda que me viessem em sonho todas as noites dizer que doeria, ainda assim doeria da mesma maneira. Parecia 
          que queriam mudar o mundo; desde antes de serem meninos, desde a ideia impossível de serem meninos, e ainda 
          antes da ideia. Parecia que de fato iriam. Sim, custo a dizê-lo, enormemente. Porque sempre acreditei no poder 
          de realização de um dia, na quantidade de certezas agudas que a realidade precisa pra se sustentar, e em como 
          mesmo assim se sustenta. Andar numa sala e esbarrar numa mesa: o que pode haver depois? O vaso aos pedaços no 
          chão, a dor de um pé machucado, ou o que valha. Mas o que de fato importa é que disso tudo resulta a certeza 
          da presença dupla daquela mesa, da realidade daquela coisa dentro de um mundo repleto de outras coisas, que 
          esperam por sua vez para se tornarem reais quando nelas esbarrarmos. Ou um míssil, então, uma bomba que aniquile 
          as palavras de um país inteiro. E que haveria depois do clarão? A dureza dos troncos de cada uma das árvores 
          da Terra, as queimaduras nas costas cuja cor nunca se poderá ver, uns olhos baixos dizendo que vamos morrer 
          todos da mesma maneira ridícula: a realidade: abrupta, finita, tensa: a realidade: toda a matéria da qual a vida 
          é feita, e espera. Assim eu dizia.
        </p>

        <p>
          (mas, oh, natureza: coisas parindo coisas: a mistura de milhares elementos numa quantidade definida, mas 
          inacessível, nas mais íntimas dobras do mais ínfimo corpo, formando-o, criando todas suas possibilidades, suas 
          margens, seus ritos: mas também a inteireza, mas também a unidade no olhar que revela e entende aquelas milhares 
          de substâncias como uma e inevitavelmente uma coisa: massa e sentido: nome e objeto: como algo que nos dá a 
          chance de sermos, que se dá a chance de ser-se: mas também a certeza, mas também o inverossímil da certeza, mas 
          também o manco, o podre, o findo, o sem rumo também: natureza: ela mesma onde cala a realidade)
        </p>

        <p>
          Mas me disseram então que eles viriam. E eu lhes disse que sim, que os esperaria como se espera uma caixa, o 
          amadurecimento de uma laranja, o sono na ânsia da madrugada. Que viessem, que eu aqui estaria. E eu me confesso 
          um homem mais vivo naquele momento. Vivo porque sabia que viriam, que para eles os dias também reservariam algo 
          único e inteiro, algo que lhes pertenceria de fato, com seus nomes bordados à mão, com a medida exata de seus 
          crânios, pés, dedos. Porque eles poderiam ser um dia pessoas como eu era. Não que eu me considerasse um exemplo 
          ou soubesse um atalho a ser seguido, mas, pelo contrário: a minha ideia de grandeza sempre esteve na possibilidade 
          de ser um homem a mais no mundo. O que eu esperava era que a vida também lhes desse o privilégio de serem a si 
          mesmos, de armarem os seus olhos diante do tudo. Deixei cair os dados, como presságio. Deixei reinar o caos, por 
          saber que só ali seria possível iniciar qualquer ordem provável. Este instante em que o mundo apara suas arestas, 
          abre seus leitos para repousar novos corpos, se deforma como um pólipo, como uma célula, como uma praia vazia, 
          e então ressurge, mais uma vez, inteiro.
        </p>

        <p>
          Mas eles me encararam com seus olhos vazios. Mas eles dependiam de mim ao mesmo tempo em que me ignoravam a 
          existência. Mas eles me olhavam, me pediam, me amavam. Eles, ali, vieram. E eu estava só, meu corpo diante de seus 
          corpos, como se fora um desafio. Então segurei-os em meus braços, tirei a camisa, e tentei dar-lhes os seios. Mas 
          sou eu um homem, sim, que pensava. Eis que nunca se repetiam nos dados os seis, tantas vezes os joguei pelas 
          madrugadas. Que pensava? Eu media as coisas por suas sobras. Mas o mundo seguia a se deformar, mais e ainda mais, 
          a cada dia, sem dar sinal de que voltaria a um ponto conhecido, familiar. Aqueles pés minúsculos e rosados. Que 
          pensava? Eu media as coisas pela fumaça que produziam quando queimavam. E passei também eu a me deformar. Passei 
          a me dobrar em partes que não concebia, me desfazer em quinas, em ângulos abruptos, a me tornar aos poucos uma 
          forma complexa e imprevisível. Eu cuspi para cima mirando em Euclides, e esperava que este escarro me desmentisse 
          ao cair em minha própria cara. Eu me tornei um ser desprezível ante aqueles dois interstícios que não sabiam 
          sequer mastigar, que não tinham dentes para sorrir ou afrontar a quem fosse preciso na calçada, mas que os guardavam 
          ainda como algum tipo de segredo futuro para o mundo. Que pensavam? Talvez em absolutamente nada.
        </p>

        <p>
          Mas escuta, sim, o que eu digo. Aproxima o ouvido desnudo de mim, como se ouvisse uma concha ou um dia, que eu 
          vou agora dizer a verdade do que me trouxe até aqui: pois daqueles olhos, de seus berros submersos, eu conseguia 
          ouvir apenas uma única melodia: pois agora escuta seu compasso, tímido: escuta seu compasso encolhido em si: 
          escuta seu compasso quase a se evadir: escuta agora o que vou te falar e se aproxima: e não interprete em nada 
          o significado dessas palavras que me saem: porque elas dizem apenas o que aparentam dizer: e que só ao cabo de 
          tudo digo: eu sou feliz. E fui muito feliz então ali. E é de felicidade cada tijolo deste espaço em que permaneço, 
          e penso, e doo, e em que, agora, digo e me lembro.
        </p>

        <p>
          Pois eles viam o mundo. E eu olhava a eles. Como se olha para a escultura rachada de um deus pagão em um museu. 
          Como se vê de um barco condenado um farol, até que se perceba que ele era apenas um barco outro e alheio. Pois 
          esse era o mundo deles: deles. E eu esperava pelo momento em que respondessem com o urro daquele que defende a 
          própria vida o urro do chamado das horas. E eu esperei por muito tempo. Através dos seus passos, que viam na casa 
          uma montanha escarpada, de suas palavras desarticuladas, das constantes roupas rasgadas, dos seus sapatos que 
          sempre se tornavam menores que o necessário, de suas idas noturnas para tomar água, das perguntas de mais de uma 
          resposta, dos silêncios violentos, das bruxas que visitavam o sonho, dos lamentos, eu esperava. Enquanto me ostentava 
          como uma mancha no meio da sala. Eu os via correr ao meu redor, cantando palavras que jamais havia ouvido, rindo 
          risadas novas, errando coisas que eu jamais havia errado. Eles nunca esbarrariam na mesa em que cortei meu pé 
          há um ano e meio, ou três, e que então sustentava impassível seus livros de colorir naturalmente incompletos. 
          Aquela dor tinha sido minha, e pelo resto da vida seria apenas minha: nenhum deles jamais a poderia enxergar.
        </p>

        <p>
          Certa feita eu estava indo para o interior de carro com meu pai, íamos pescar no lago de uma fazenda, talvez 
          de amigos dele, não me lembro bem. Fazíamos esse trajeto quase mensalmente. Ele me dizia que minha mãe odiava 
          pescar (quem pode entender este relato? Ou ao menos ouvi-lo? Eles eram muito jovens para essas coisas, coisas 
          de velhos ou moribundos, daqueles que já não se nutrem do significado que escorre do presente, que então precisam 
          procurar alimento nas florestas típicas da memória. Quem poderia entender o significado deste relato para mim? 
          Onde isso se situa no meio do conjunto de todas as minhas lembranças? Onde isso se situa agora?) tanto quando 
          odiava aquela fazenda. Mas talvez fôssemos ali apenas em sua busca, sim, hoje eu sinto, e admito. Nessa feita, 
          a derradeira, naquele caminho que eu já conhecia como se conhece o sabor de algo apenas por olhá-lo, vi meu pai 
          frear bruscamente o carro diante de uma pedra colossal que descia de um barranco à nossa frente, e que por pouco 
          não destruiu os resíduos de nossos corpos dentro da lataria azul do automóvel. Nós nos quedamos horas ali, a 
          olhar, absortos, para aquela pedra que fechava ambas as pistas da rodovia e nos impedia de fazermos o que havíamos 
          planejado. Estávamos subitamente vivos. Depois de um tempo, não sei ao certo quanto, demos a volta, retornamos 
          à nossa casa. Não nos falamos mais naquele dia, naquela semana poucas vezes. Sobre aquilo, jamais. Mas, e justamente 
          por isso, escuta, outra vez, atento, o que eu digo: a pedra, entre o instante em que a vi desmanchar da montanha 
          e o instante em que se estancou no asfalto – por deus como só muitos anos depois percebi – formava, juntamente 
          com o vento que empurrava árvores minguadas, juntamente com as buzinas impotentes dos veículos, juntamente com 
          o temporão sol da manhã, juntamente com o berro que ali despertava redivivo, formava uma canção clara, cujos 
          versos escutei em silêncio. Pois, tantos anos depois, lá estava ela, outra vez, ante meus ouvidos, inteira, me 
          repondo na dobra do impossível: eles. Eles a decoraram, sabe-se lá de onde, em meados de setembro. Eles se puseram 
          de pronto a cantá-la quando me viram, como a me entregar o mais puro dos amores à guisa de presente. Eu a ouvi. 
          A reconheci, de dentro da voz deles, tantos anos depois: era aquela, a mesma, exata, sim, canção. Eu então corri 
          de mim mesmo.
        </p>

        <p>
          Porque era necessário retribuí-la urgentemente, necessário desvendar em que moeda seria possível pagá-la um dia. 
          E eu procurei em todas as lojas, em todos os caminhos conhecidos algo que pudesse estar à altura da canção, das 
          vozes da canção, do ato espontâneo de me entregar sem maior receio a canção; e abandonei os veios, e converti-me 
          eu mesmo naquela procura na qual me integrava, e solvia; mas nas prateleiras empoeiradas não havia nada, nas 
          ruas descampados não havia ninguém para me dar uma resposta, para apontar uma seta ou um dedo, para dar um destino 
          a toda a minha vergonha; e caminhei a cidade com os pés suados, caminhei os baldios com os pés descalços, caminhei 
          as bordas do universo com a cabeça exausta; e não encontrei, e não encontrava, nem sob as rochas, nem sobre os 
          ventos, nem nos supermercados mais modernos; e por isso minhas as mãos balançavam ávidas, e meus dedos tremiam 
          ansiosos, e as horas passavam e me acertavam a cara, me cobrando e aguardando de mim uma resposta imprescindível 
          para o fluxo da humanidade; porque era necessária, porque havia então um buraco na história dos homens que precisava 
          ser tapado, algo que atrapalhava os grandes negócios, o bom funcionamento dos relógios, as preces nas igrejas 
          mesquitas templos de todo o planeta, e o meu sono, e o meu sono, e o meu sono.
        </p>

        <p>
          Ao cabo voltei outra vez para a casa. Madrugada. As mãos vazias. Nada. Me sentei na sala. Eles dormiam sem culpa 
          a realidade em seus quartos. Eu estava em pedaços depois de percorrer a Terra atrás daquilo que os pudesse fazer 
          entender, que os pudesse confortar e ensinar, que os pudesse pôr para dormir e protegê-los do sol. Mas eles estavam 
          confortáveis, e eles sabiam amarrar seus cadarços; mas eles cantavam canções e punham chapéus sempre que iam à praia; 
          mas eles eram naturalmente e todos os dias a si mesmos, e nunca falhavam nisso. E era, exatamente, como eu havia 
          desejado. Eu escutei um barulho e nada me disse de onde ele vinha. Isso me fez despertar do sofá, e ir até o meu 
          quarto. Eu permanecia feliz, feliz, feliz por estar perto deles, por eles estarem perto de mim, por eu poder ter 
          visto como eles trocavam os copos de lugar no armário, ou como seus corpos ainda escreveriam veredas, umas mais 
          tristes, outras apenas indiferentes. Me sentei na cama, quase duas horas da manhã, ou seis. Então senti meus pés 
          apertados nos sapatos. Eu estava descalço. O mundo distante apenas um instante de meus olhos. Apoiei o parabelo 
          pouco abaixo da têmpora esquerda, salvo engano; desmenti a trêmula mão; pus-me a cantar, com eles, aquela canção.
        </p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}