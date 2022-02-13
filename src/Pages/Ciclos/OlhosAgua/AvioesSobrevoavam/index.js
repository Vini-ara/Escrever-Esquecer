import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function AvioesSobrevoavam() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Aviões sobrevoavam o Pacífico"); 

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

        <h2>Aviões sobrevoavam o Pacífico</h2>
        <hr/>

        <p>
          Aviões sobrevoavam o Pacífico. Você veio me ver. Eis aqui minha nova e derradeira casa; sou mais um dos 
          infinitos personagens desta História. Em minúsculas, mais lealmente, como na capa: historia. a história geral 
          do esquecimento. Pretas, gastas, letra e capa, contrastes forçosos com cada página, amareladas desde pensá-las. 
          Livro. Assim se diz em meu país: e daí? Não tenho nada mais a te dizer além disso. Livro. Mas digo; digo? E este 
          segue sendo um livro? Sim, um livro. Pois toda literatura – a mais imbecil, a mais insípida, a mais antiga, a 
          mais sagrada – é feita apenas de contornos escuros e fundos claros, e nada mais previsível do que isso. Um livro, 
          pois sim. A ser lido. Dar a outra face. Mas advirto: beiramasse você a sensatez, ou apenas a pressentisse, 
          cessaria aqui esta leitura, cansativa, enodoada. E se arrependeria pela lima gasta até agora no desbaste desse 
          tempo morto, sólido, que cai, aí, agora, ao pé de tua escrivaninha, reduzido em serragem sobre o chão frio. E 
          advirto: melhor assim seria: que parasse e se livrasse disto tudo: como seria o mundo um lugar infinitamente mais 
          seguro caso nele não houvesse mais que uma dúzia de pessoas: como até o mais altruísta dos governantes um dia 
          sonhou. Mas o livro existe, e as pessoas têm respirado. Você, como todos os outros, não deseja apenas o que faça 
          sentido no ato. Teu chão é feito de camadas e camadas de cinzas mortas, de farelos de lixas. No que esquece, você 
          escuta, você escuta. Seja burocrata, seja herói. Que haverá abaixo? As fundações da casa. Pois quando cessam umas 
          páginas de um romance, de um jornaleco, o que resta em teus dedos, em tuas ideias, é, então, apenas você; você e 
          alguma sorte de dever para fazer jus ao dito, para fazer do nada a coisa, e então provar que agiu, retornando a 
          elas, às mesmas palavras já pronunciadas. Assim se fez o mundo, até aqui. Assim, também você. Por todos os livros 
          que leu e não se lembra de ter lido, por todos os livros que não leu mas certamente disse que sim. Por isso. Por 
          todas as palavras, melhor dizendo. Bolinhos; chá; memória; etc. Por que falo com tanta certeza? Por te conhecer, 
          como conheço a todos cujas pupilas curiosas daqui enxergo. Leia, não leia, leia. Fui eu aquela pessoa que te perguntou 
          as horas numa avenida chuvosa, fui eu quem você sobreviu segurando um jornal estrangeiro num coletivo, fui eu quem 
          pintou o quadro que adornava a sala de seu – ó, lembrança doída – dentista da infância, fui eu também quem te telefonou 
          com a voz inaudível e não retornou nunca mais. Sim, você ignora o dia, o mês, provavelmente o ano em que essas 
          coisas te esboçaram a vida: e eis o porquê de eu te dizer que nada mais acrescentarei a ela, como todas essas 
          palavras que teimam em sair, em jorrar de mim. Morte. Mas você prossegue a ler. Porque imagina que algo memorável 
          pode estar por vir, que uma palavra pode respingar na tinta densa do sentido e te molhar a cara sem remissão, 
          te cicatrizando: o texto passa a ser seu rascunho, a iminência de si mesmo. Já não basta o acaso. De dedos 
          róseos. Ai, gozo dos homens, sempre tão mortais, sempre tão existencialmente egoístas, trancando todas as salas 
          inexplicáveis ante as visitas, abocanhando o último biscoito num tipo de religião pagã e previsível. Independência 
          ou. Sim, sei, me repito, erro, não nego: mas o nada só fala por formas do nada, entenda. Nem se culpa um pai pela 
          cara de seu filho, sendo ela horrenda. Existência, essência. Talvez se lembrar de que falemos o mesmo idioma, ou 
          mesmo que eu possa ter um idioma, seja o bastante para te apavorar o sono. Nada de novo para você, naturalmente, 
          no que eu digo. Então serve para algo esse livro em que vivo? Não serve. E você o lê mesmo assim, ao menos até 
          este momento. E o vive. Da mesma maneira como nunca se esqueceu – apesar do rol dos anos já vividos – daquele dia 
          em que caiu numa calçada, e do outro em que ninguém compreendeu a graça da piada, e do outro em que o “não” surgiu 
          do cinismo de um sorriso. Essas coisas têm prosseguido. Mas, quando você nasceu, chovia? Quem te ensinou a ler 
          tinha qual cara? Qual o gosto de amar pela vez primeira? E quem se lembraria disso senão eu?  E quem te diria 
          isso senão minha voz? Porque ao pensá-lo tua cabeça entrega a traição, te abandona no meio da multidão, anônimo, 
          ateu. É preciso crer no nome pelo qual te chamam, é preciso crer que nele cabem todas as imagens que você viu, 
          criou, destruiu, todas as noites despertas, o pedido de mais uma hora de amor. É preciso crer que se tem a posse 
          disso tudo, que essas caixas se empilham, se descartam e se manejam em função de tua vontade, de tua fome, da 
          luz que te jogam os dias. Ainda que nada disso seja verdade. As armas e os barões assinalados. Sim, chovia. E 
          eu estava do outro da rua, observando silente e inexpressivo, cruzados os braços. E eu estava duas mesas à sua 
          esquerda, contando moedas, e sequer cruzamos o olhar numa outra noite qualquer. Tua boca amargava num gosto de 
          derrota. Uns olhos escuros pareciam duvidar de você, de que você pudesse mexer coordenadamente suas mãos. Não, 
          é tudo em vão. De mim você também não se lembra, não pode se lembrar, ou covardemente inventar uma cara, uma 
          imagem, um defeito físico para me distinguir de quaisquer outros transeuntes de seu quarteirão. Você é um bicho. 
          É tarde, agora. Eu sou irrecuperável. Mas é essa afinal minha única condição para existir. Que você me esqueça. 
          Que você não me tenha percebido. Que eu não tenha voz alguma; ou que minha voz mude milhares de vezes no espaço 
          de uma mesma palavra. E é neste mundo que eu vivo, neste livro que compomos simultaneamente a dezesseis bilhões 
          de mãos destituídas de corpo e de cabeça. Alta rotatividade de contingente, diria, sem levantar os olhos, um 
          democrata. Reengenharia da vida, os jornais explicariam com paciência. Você é um dos entendidos. Mas então escuta, 
          pois lê: e não tenha pena de quem eu sou e principalmente de quem eu deixei de ser ao cabo. Pois os meus dias 
          são permanentemente meus, mesmo que não houvesse outra opção disponível ao teclar o dois. Diferentemente de ti, 
          eu jamais os vendi. Os dias. Pulo de uma linha a outra neste livro sem nem me esforçar ao menos. De uma ideia a 
          outra sem sequer me ausentar de mim. De uma página a outra no espaço de um respiro, hipotético. A liberdade e um 
          pedaço de pão. Em verdade, não me movo: andar ou não andar dentro de um deserto é sempre o mesmo, o mesmo, e 
          isso já foi dito há pouco. Mas são minhas duas das mãos, e é meu o tempo escuro que tece a lombada deste livro. 
          Que agora, você, lendo-o, clarividente, obstinado, falha: passa a se perguntar por sentido, enquanto dezenas, 
          milhares de imagens, como um filme sonhado, passam, como luzes de freio, lâmpadas amarelas de brilho morto, passam, 
          como chances perdidas, como o minuto irrecuperável, passam, despercebidamente passam. E não, não há nada ao 
          cabo; não haverá nada para disso tudo herdar a ti. Lágrimas, sal. Eis a história vista sem um corpo, eis como 
          ela mantém a sobriedade ainda quando nada te diz. Eis como ela não irrompe em revolução, em tiroteio e guilhotina, 
          e eis como não irromperá senão daqui a trezentas e oitenta e oito páginas, e durará pouco menos de seis linhas e 
          meia até que chegue o consenso marcando o parágrafo na sétima. Esta história é também sobre isso, sobre as datas 
          decoradas, empalhadas e servidas em taças com uma azeitona lustrosa. Mas até lá, até os quadros afetados, as cores, 
          as nuvens furiosas, as faces cinzentas, haverá grandes doses de dias úteis, de boa-tarde, de cochilos numa cadeira. 
          Todo poder, emanando em silêncio. Quando arrombaram os portões, afinal, alguém estava lá varrendo o chão, contando 
          ladrilhos (e quantos ladrilhos havia mesmo?), fazendo uma soma que deu errado, rasgando as páginas de um calendário: 
          onde foram parar seus nomes, ao cabo? Teriam rolado no meio da fumaça, teriam sido atirados pela janela, enterrados 
          junto aos corpos desfigurados? E naquela noite em que você havia constatado não haver ninguém para falar, ninguém 
          para ouvir ao redor de todo o mundo: quem gemia debaixo de ti, de tua ansiedade incontrolável que só precedia um 
          frio, um frio, um frio? Onde havia nascido, seu nome inteiro, de onde seus olhos principiaram a descer, a despir, 
          a desejar, a furtar a imagem para si, como a tentar roubar sua própria sombra? É tarde demais para saber. Como cada 
          uma destas palavras que já nascem tardias. E pudesse você voltar para o seio daquelas imagens, reencená-las, repetir 
          em voz baixa cada certeza, se esforçar até a dor para jamais esquecer aqueles rostos, aqueles gestos, eu te digo. 
          Eu te digo que eles ainda te escapariam, ainda fugiriam de ti como água entre os dedos, como vento entre os muros 
          calados de uma cidade. Toda vida a lutar contra limites, eu sei. Mas toda morte é também postulá-los. Ó musa. A mim 
          isso tudo já não pode assustar. Eu tenho os olhos baixos, eu sou o momento em que todas as coisas mortas depois de 
          lançadas no vazio se equilibram, cessam de se mexer, negam o peso da gravidade, estancam. Um sono. Seus olhos são 
          agora a única coisa a se mover entre esses objetos estáticos. Você olha suas mãos, cada uma delas tem cinco dedos. 
          A obviedade disso, a ponta de uma faca amolada todos os dias pelas horas. A intransitividade de cada um desses feitos, 
          destas certezas, destes números incorruptíveis. O número de semanas que durou sua camisa vermelha, o número que 
          vezes em que sentiu fome, o número de vezes em que dobrou uma esquina, o número de fios de cabelo em sua cabeça, 
          o número de vezes em que sonhou com o corpo de alguém. Sonhos intranquilos. Nada parindo nada. Estar aqui é estar 
          despido de sentido, é saber que o que rege o movimento dos continentes é uma completa gratuidade. Nascer é nascer. 
          Morrer é morrer. Senhor. A neblina te envolve, um sono, onde nada mais é segredo, onde nada mais é saciedade ou 
          privação. Você fecha os olhos, você fecha os olhos, você principia a dormir. Eu declaro encerrado o processo. A 
          senhora presidente está legalmente destituída e será devidamente degolada, encaminhando-se de acordo com a sagrada 
          lei de nossa nação.
        </p>

      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}