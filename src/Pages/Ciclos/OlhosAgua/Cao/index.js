import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Cao() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Cão"); 

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

        <h2>Cão</h2>
        <hr/>

        <p className={styles.center}><strong>1</strong></p>

        <p>
          O tempo: as colheitas escassas, as noites ofegantes, as quedas chumbadas de nós em nós mesmos: o tempo. Agora, 
          prestes a encarnar um refeitório de aves, uma manjedoura de vermes, sim, o tempo uma vez mais. Pois é este o 
          nosso abismo? Então pegue, eis aqui. Te entrego. Mensuro. Se isto, se esse pedaço de algo nos torna infinitamente 
          dois, nos opõe o lado no campo minado da verdade: te entrego. Você não o tomou, você não me obrigou a nada: aí 
          está. Nós dois perdemos.
        </p>

        <p>Em tua cara não há nenhuma dobra, não há nenhum vinco que te denuncie o caminho.</p>

        <p>
          Você apaga em pus, e em certeza. Ainda assim eu te olho com os olhos livres, e reais; ainda assim distingo a 
          sinceridade de tuas feridas, acima e antes de qualquer expressão sua. Há muito convivo com o asco: conheço os 
          atalhos que ele traçou nesse país. Por isso não escarneço o assombro do teu riso: o observo, daqui, de mim, 
          entocaiado, espreito. Porque sei que ele traz consigo um espelho, porque quando vejo uma fruta apodrecer em moscas, 
          alço meus olhos à procura dos frutos suculentos; porque ainda me recordo em desvelo de tudo. Aqui, de dentro, em 
          minha cabeça, esta imagem se desprende de tudo que se passou, como isca furtiva a me buscar nos instantes latentes. 
          Por isso eu sempre puxei: a princípio faminto, enfim desapercebido. Os dentes luzindo como faróis na solidão, e 
          você me trazia à cara aquilo que nossos olhos haviam vivido. E que você tenta esquecer. É por isso que você me 
          vê assim, nu, e me veste com teus olhos enodoados agora. Os meus te despem, te despiriam, se ver te pudessem. E 
          de nada adiantaria. Se tudo o que no mundo podemos ver somos nós mesmos. Livros rasgados, colados, reescritos; 
          caleidoscópios, ideias, instantes. Nós, nós, e nós mesmos.
        </p>

        <p>
          Em sua cara, nem um risco é possível.
        </p>

        <p>
          Mas eu me lembro, e este é o direito que invento a mim. Durante, também o meu achamento, em que enxergo, e 
          sempre recomeço. Tenho os olhos firmes, reflexos, esboço o desenho da cama de lona que carregará meu corpo 
          depois desta morte, tão breve, como todas. Mas tão minha. De fato, sempre nos perseguiu tudo que fosse terra, 
          sua cor, sua ética. Está aí: este calor te delineando: esta cicatriz te rachando ao meio. Outra vez. Um motivo 
          para eu lamber o vômito do acaso de tua roupa que sei impecável, e te dar o meu fim ornado em prata como uma 
          bandeja colonial. Eis, inteiro: eu me lembro. Que me diz? Que fazer com o silêncio deste chão, com a candura do 
          ar que te circunda? E se eu disser? E se eu o digo? <em>Minha camisa amarela, a única. Teu sapato roto, o nosso. 
          Os verões intermináveis, um deus. O mormaço chorava. O milharal chorava.</em> 
        </p>

        <p>
          Algo oculto em tua vontade perpétua de ser.
        </p>

        <p>
          Algo cujos pedaços eu arrastei como um cão morto pelas ruas. <em>O rio, quando rio, o todo, um universo. E quando 
          nos deitávamos sob uma figueira, e quando abríamos mão da solenidade da solidão, e quando nossos dentes mastigavam 
          o ar quente, e quando o mundo então se ausentava de nós, o que eu dizia</em> era apenas: sim. <em>O barro reinava sobre o 
          mundo e sob os nossos pés. O gosto revelado pelo barro entre os nossos dentes, sob nossas línguas. Amargo. 
          Doente.</em>
        </p>

        <p>
          Que é impossível que você não se lembre.
        </p>

        <p>
          Pois que eu me lembro, e que retornou num dia, <em>sobre um animal impossível, em seu trote e suas bandeiras. Que 
          veio então nos trazendo um fecho, colhendo suas horas, honrando seus motivos.</em> Eu me lembro de um <em>sol</em> tísico, 
          egoísta, que pairava sobre <em>eles</em>. De um sol que não era o princípio de nada, como sempre tentava ser, ao longo 
          das tardes que corriam sem fim. Eu me lembro de um <em>sol</em> condescendente, cúmplice. Mas quem poderia se lembrar 
          da cor dos olhos que a morte porta?
        </p>

        <p>Talvez você, que a olhou com ternura.</p>

        <p>
          E daquele tempo em diante, eu fui tanto mais seu do que meu. Você foi tanto mais seu do que em mim. E deu-se o 
          que se deu. Homens me deram pães ante os olhos atentos. Homens te deram olhos colaterais. Relógios nos deram 
          cãs. Demos pães e água a homens tão diferentes entre si.
        </p>

        <p>
          E disto eu sei que você vai se lembrar: porque agora o vê.
        </p>

        <p>
          Eu te ressinto, como homem. E como velhaco, te reconheço. Neste dia que, bem sei, permanecerá em tua voz, como 
          um grão, como um timbre. Mas que eu jamais me lembrarei. Porque a vida ao cabo são três. E porque muito mais 
          forte que o sol de hoje é este hálito que circula nossa pele, e que não conseguiríamos jamais descrever, ainda 
          que houvesse a chance de algum desses homens entender uma única palavra em que agora penso. Todo o resto ainda 
          é memória.
        </p>

        <p>
          E sim. Ainda, e ao cabo, eu te diria que sim.
        </p>

        <p className={styles.center}><strong>1</strong></p>

        <p>
          Uma pessoa não morre uma única vez. Uma pessoa, quando morre, morre todos os dias desde então. Morre cada um 
          deles. A cada vez que o mundo se dobra e se retoma ao redor de seu corpo, uma pessoa torna a morrer. Morrer é 
          tornar-se impossível a si mesmo. E sobretudo tornar-se possível aos outros. Todos os dias. Até que eles se tornem 
          também impossíveis. Quando uma pessoa perde os limites de seu corpo, passa a saber que este corpo está perto de 
          não ser mais o seu. Por isso, tantas vezes imaginei estes tijolos, este ar estafante, essa tua cara que eu cravava 
          de ogivas. A te olhar nos olhos. Nos olhos velozes de quem, ante o berro dos dias, escolheu se afugentar. Eu 
          preferi lidar. Este país é infértil, estéreis cada uma de suas colinas. E é impossível entrincheirar o vento. As 
          coisas parecem pender para a forma de um mesmo si, os montes se movem a cada sopro, se movem neste momento mesmo, 
          voltando ao lugar de onde um dia, sem testemunhas, se puseram a nascer. Mas eu, parado, aqui, estou. Porque meus 
          dias seguem emergindo, todos iguais, ao gosto da terra árida, pisada, gasta, em que se fundam. Porque todas as 
          cidades tornam-se a mesma debaixo das nuvens em chuva. Porque todas as luzes ornam o mesmo brilho quando cegam 
          as cores de um olho. Arrancar meus cabelos, repicar minha própria cara, me encurvar, habitar uma língua diferente, 
          estrangeira, que dá voltas como dão voltas os rios, e como não dá voltas a desgraça: isto tudo eu, como nota, 
          consegui. Mas me livrar do cheiro, do gosto, da cor, dessas coisas que em nada concluem uma vida: este esforço 
          resultou no dia de hoje. Um homem cujo peito torna-se pânico quando envolto pelo escuro. Eis como agora você me 
          pressente. E, sim, acerta.
        </p>

        <p>
          Da imagem não consegui me libertar.
        </p>

        <p>
          Por isso rio deste ridículo. Rio da melodia dos hinos, da tinta dos carimbos, do silêncio das sementes. Rio 
          porque. Rio, porque. Rio. Convencer os canaviais. Arar com fuzis a terra. Arrancar uma a uma as raízes das plantas. 
          É inútil crer numa saída. Pois sempre haverá o que se insurja contra nossa integridade. Não há paisagem que se 
          mostre passagem. E mesmo assim insisto em encontrar as cidades, apenas porque ainda insisto. Mas pense, então, 
          apenas por pensar: se são meus os dois braços, é meu o fracasso que nasce junto a qualquer tentativa de afastá-lo. 
          Veja o que há de contentamento sob o olho que quer devorar a ti. Agora, deixe de enxergar. Porque, das imagens 
          que eu vi, aquela foi a única que insistiu em residir. Nela vivo o hoje, por ela penso o depois. Pela tarde que 
          me poupa a vida para, no instante seguinte, levá-la de mim. Os dias, como teus passos compulsivos pelos campos, 
          passaram. Me encontraram homens que não falavam língua nenhuma, mas que acreditavam nas coisas que hoje consigo 
          acreditar.
        </p>

        <p>
          Eu tentei abolir a noite.
        </p>

        <p>
          Eu quis que pela eternidade fosse dia. Pois eu sabia que só assim poderia me repor as tardes acabadas daquele 
          tempo, e ali encerrá-las. As tardes em que estávamos seguros de termos existido, por pelo menos algumas das horas 
          que o corpo nos lega. Na boca, um gosto de sal, um gosto de terra podre, o pior que um homem pode sentir na 
          vida. Um gosto que, através de tudo o que gosto e digo, eu tenho que chamar de meu. Como se carrega uma cicatriz, 
          um temor, a cara de um pai morto. Eu tentei guardar nos olhos a luz daquelas tardes para poder com ela esculpir 
          a noite. Tentei, nos breves instantes em que não pensava em maneiras de anular quem eu fui um dia. E que fui 
          também naquela tarde. Estou coberto de pó, a esperar, fiel, como um cão, por ti. Estou, na forma como um cão 
          desconhece a vida enquanto toma cada instante para si como o único possível: e então o vive.
        </p>

        <p>
          E é um cão o legado deste país.
        </p>

        <p>
          Como seria o fim de minha voz se todos o soubessem, se ouvissem esta água que te lanço à cara, como a tentar 
          te naufragar como compensação. O fim desta voz que só existe sem mim, livre de mim, ecoada pelos outros, 
          escorrida pelos rádios, pressuposta pelos ritos. Você ignora a dimensão deste mapa, de suas coisas, de suas 
          encostas. Eu te procurava pelas tardes para que à noite viesse em sonho me expor em ridículo. Dormir é o preço 
          que se paga por estar desperto, como hoje, em que, aqui, insisto em estar.
        </p>

        <p>
          Nesta, que é a segunda parte de minha vida.
        </p>

        <p>
          Ainda que as cãs me desmintam. Ainda que a esta fome nada assente, e ainda que à fome que eu sinto não sirva 
          pão nenhum. O ódio é uma crosta que reveste o interior daquilo que há de mais fresco e lúcido. O ódio é o 
          verdadeiro da voz falsa, e o falso da voz verdadeira.
        </p>

        <p>
          Não, eu não me lembro. Eu simplesmente vivo.
        </p>

        <p>
          Cobrir o céu de fumo, destruir os relógios, calar as aves, salgar o solo, barrar as águas. E chegar sempre ao 
          mesmo lugar, e se deparar sempre com as mesmas e escassas coisas, e neste trajeto envelhecer. Ser minha própria 
          testemunha ocular, irrefutável. Ter que ser ao meu corpo a cada um dos dias em que acordar, não importando em 
          qual cama. E deixar de pensar. Pois aí estão as horas, e não, nunca virar as costas: fitar: mirar: enxergar: 
          olhar: divisar: ver: observar com toda a força dos olhos para não me esquecer do que está diante de mim, agora, 
          aqui. Para que esta imagem se multiplique e, pelas inevitáveis noites, me assalte mais uma vez os arraiais e 
          as vilas. Para que se.
        </p>

        <p>
          Não, nem mesmo hoje: e, enfim, também nem mesmo jamais.
        </p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}