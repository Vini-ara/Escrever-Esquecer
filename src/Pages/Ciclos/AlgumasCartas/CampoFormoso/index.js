import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

import Youtube from "react-youtube";

export function CampoFormoso() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Campo formoso");

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/algumas-cartas')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Campo Formoso, ______________________.</h2>
        <hr/>

        <Youtube 
          className={styles.youtubeVideo}
          videoId="Zf8HTTSIC1I"
        />

        <p>
          ______,
        </p>

        <p>
          Eu nunca quis saber a cor do cérebro de um homem. Eu nunca tive o menor interesse em saber o peso de seu coração. 
          Em contar quantas veias ou artérias tem um corpo saudável. Em mensurar quantos litros de sangue circulam ali dentro. 
          Eu nunca quis saber a qual distância um homem consegue nitidamente enxergar. Nem mesmo por qual motivo suas unhas e 
          cabelos seguem crescendo depois de sua morte. E eu lamento que alguém me tenha dado esta informação algum dia. Eu 
          poderia aliás ter morrido sem ter me perguntado nada disso. Sem saber que a dimensão da última queda nos está separada 
          apenas por um número que surge da ponta seca de um lápis mal-apontado; sem saber que toda a verdade depende da precisão 
          de uma balança em uma sala fria de um bairro de classe média-baixa. Eu nunca quis saber de nada disso, ___. No entanto, 
          hoje, sim, eu sei. E assim seguirei, pela vida, sem escolha. Naufragado em consciência.
        </p> 

        <p className={styles.center}>
          lagartos veados preás cachorros de rua cavalos timbus bois bodes bezerros besouros assuns anuns urubus calangos suçuaranas 
          tamanduás morcegos asnos burros precisam de água. capins-cidreira capins-guiné crisântemos cajazeiras canavieiras umbuzeiros 
          ingazeiras juazeiros goiabeiras mangabeiras mangueiras milharais coqueiros precisam de água. vendedores policiais padres 
          clérigos escreventes assassinos cantadores estrangeiras roceiros prefeitas varredores de rua malucos precisam de água.
        </p>

        <p>
          Quando Zeca morreu, ___, eu passei dois meses inteiros em casa. Eu não quis ver a Disneylândia ou as pradarias da África 
          Central. Eu não quis assistir ao último show dos Beatles ou apertar a mão da presidente. Eu tinha medo de que ao sair à rua 
          alguém me mostrasse uma foto do corpo de Zeca. Eu temia também a possibilidade de encontrar alguma pessoa que sem explicação 
          alguma se parecesse com ele, mesmo que essa pessoa fosse uma criança, uma mulher, ou um cão. Eu perdi o bilhete que me deram 
          para que pudesse estar no enterro do corpo de Zeca. Porque eu sei que um corpo surge de dentro de um homem um milésimo de 
          segundo após seu último movimento consentido. Como se a morte quebrasse a casca que constitui a nossa superfície: finíssima, 
          ao cabo, tanto como ao princípio. Eu não queria ver o corpo de Zeca. Eu não queria atestar que a natureza tinha lhe dado uma 
          garganta não para que cantasse o Carinhoso ou as Mágoas de Caboclo, mas apenas para que se nutrisse alimentos sólidos e líquidos 
          em intervalos regulares. Eu não queria comprovar que seus joelhos tinham sido feitos não para que rezasse para Santo Antônio, 
          mas para que ele se locomovesse em busca de um lugar mais adequado para passar as madrugadas chuvosas ou frias. Eu não queria 
          perceber que seus olhos haviam se tornado inúteis agora que estavam fechados (deduzo) e que todas as imagens que eles represavam 
          ao longo dos dias eram apenas acidentes de sua cabeça em busca de um sentido para si. E não há nada mais avesso para um corpo 
          do que o sentido que nós o atribuímos, ___, em sua falta. Eu sei, eu sei, eu sigo sabendo que sei. Por isso, do outro lado deste 
          muro, daqui, eu te digo isso tudo, ainda uma outra vez. Eu não vi Zeca morto e não o verei vivo nunca mais. E como eu poderia querer 
          ver aquele corpo, ____, se um instante antes de ser um corpo, eu sabia que era meu Zeca aquilo que ainda estava lá?
        </p>
        
        <p className={styles.center}>
          e no entanto o mundo inteiro segue sendo imprevisivelmente belo e horrendo como já dito a esmo. sem êxito e jamais a esmo 
          como já dito o mundo inteiro segue sendo imprevisivelmente horrendo e belo. mas olhe então o apenas de nosso legado ao mundo 
          o fiapo que parimos em mero boa-tarde como-vai um-passo-maior-que-a-perna dois-coelhos-numa-cajadada cada-enxadada-uma-minhoca 
          um-peso-duas-medidas cor-de-burro-quando-foge o-que-os-olhos-não-veem-o-coração-não-sente cara-de-um-focinho-do-outro 
          quando-não-faz-na-entrada-faz-na-saída tudo-vale-a-pena-se-a-alma-não-é-pequena estas coisas que vão se multiplicando na solidez 
          de suas bordas na possibilidade restrita do que está entre elas frias mesmas de sentido sempre redivivas e o mundo girando enquanto 
          isso. enquanto temos dito as mesmas frases mesmas. antes fossem apenas as mesmas mesmas apenas palavras.
        </p>

        <p>
          Zeca ficava espantado com o fato de que algumas palavras tivessem os significados que lhes eram atribuídos, como se seu sentido 
          tivesse que ser fiel a seu som. Ele também questionava os nomes das coisas sobre sua coerência com relação a si e aos seus objetos: 
          Madre de Deus deveria ser Mãe de Deus ou Madre de Dios; Aracaju nos fazia perder os elementos que formavam a palavra, e que ali 
          estavam soltos, sem nexo; Josedete, no entanto, era o nome de uma de suas filhas. A questão me parece ser hoje sobre criar um 
          sistema que seja justo, que seja flexível a ponto de articular o sentido, o corpo, e os lugares onde frequenta o corpo. Sem negar 
          a dificuldade de demarcar as beiras, as margens de algo que em sua essência é móvel e flexível: e aqui falo tanto do corpo, 
          quanto do mundo, quanto do sentido. Ter visto Zeca morto seria deixar ressoar em minha cabeça a frase “Zeca está morto”. E, no 
          entanto, a caminho do Capão Redondo, eu não tive escolha a não ser ver da janela do ônibus aquele saco plástico de onde vazavam 
          dois pés descalços, cortados pelos bocejos dos policiais militares numa manhã de domingo. Aí está a dificuldade de conceber qualquer 
          sistema: utilizar o afeto sem que ele seja a altura da estrutura, sem que ele crie dezenas de pontos cegos onde protegemos a nós e 
          àqueles que amamos. Como é possível amar alguém diante da necessidade de se amar todo o resto das coisas?
        </p>

        <p className={styles.center}>
          saudades eternas de sua família e amigos. honrado em vida, pai atencioso, marido solícito. servo de deus dedicado. encontrará 
          repouso eterno ao lado do senhor.  aqui jaz em seu sono perene. mãe honrada, mulher fiel. quis o senhor levá-lo para sua companhia. 
          AMIGO EXEMPLAR. encontrará o conforto além dos portões do céu. lembranças que não se esvairão. e não teve nem mesmo o privilégio de 
          dizer a última palavra sobre si mesmo.
        </p>

        <p>
          E é isso o que há debaixo do braço, afinal, em vida. Foi com isso que fizeram o Don Quijote, o automóvel, o indivíduo, e que disseram 
          que um amontoado de cores nomes se deve chamar Brasil Japão Índia ou sei lá o que mais. O que fazemos é desenhar o mundo com as únicas 
          mãos que possuímos. Campos amplos, indiferentes ao que grito, seguem me cercando. Não cresceu um milímetro de grama neste meio tempo, ou 
          ao menos não pude observá-lo, tentando esta carta. O ideal seria que cada um de nós nomeasse cada um dos objetos possíveis. Mesmo os que 
          jamais existiram ou pudessem um dia existir. Não nos entenderíamos, sem dúvidas, mas, pela primeira vez em nossa história, teríamos sido 
          completamente honestos com o nosso corpo, e com as nossas intenções. E, sim, ____, desde já me desminto. Nesta carta. No instante em que 
          ela existe, é lida, e é talvez interpretada. Ainda antes, no instante em que ela foi pensada, ou seja, sentida. O melhor é aceitar a 
          necessidade de certos tratados, e tentar a partir disso fazer algo. Talvez. Mais uma vez, de fato, eu não consigo chegar a nenhum resultado. 
          Para além de meu corpo. Animais gritam nos campos e eu não os vejo. Zeca está vivo no istmo da minha memória. Seu corpo jaz nas costas de 
          minha cidade, ao que dizem.
        </p>

        <p className={styles.end}>
          Nesta hora eu sinto sede, ____. Uma sede terrível, terrível. E bebo.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}