import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

import Youtube from "react-youtube";

export function Guadalupe() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Guadalupe"); 

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

        <h2>Guadalupe</h2>
        <hr/>

        <Youtube 
          className={styles.youtubeVideo}
          videoId="t2pL5LiLMbQ"
        />

        <p>Eu te amava como se ama um continente.</p>

        <p>
          Era teu rosto sulcado, Guadalupe, um rancor da história que me atingia com a força de um rio. De um rio 
          caudaloso em um verão de chuvas. Teu rosto sulcado era como a terra arada que dorme à espera da semeadura. Tu 
          eras meu alento sob o sol da península, e só assim eu seguia, e conseguia. E só assim era possível ouvir o 
          chamado das coisas: através de ti. Tu eras a terra em tudo aquilo que nela cambia: pela manhã a chaga alva do 
          algodão, e ao fim da tarde era o cacau que te tingia. À noite, o silêncio de cada estrela. A vida, Guadalupe. 
          E o que mais.
        </p>

        <p>
          Não me recordo da cor de teus olhos, mas sei que era você quem os habitava. Naquele tempo, as manhãs começavam 
          pela noite, colheita da tarde, que antes, puxava pela mão a manhã. Ao teu lado eu jamais me importaria em girar 
          junto com os dias. Por isso, na secura imensa da planície, sob o lençol das horas, quando a faca me fende a perna, 
          eu só consigo me lembrar de ti: eis que a faca sempre me fere para teus olhos eu poder. Pérolas. Não, coisas reais. 
          Olhos que lançavam dores, dores missivas e multicoloridas, dores de saia florida a rodar entre canaviais ao som do 
          som, dores que me diziam um tácito sim jamais em vão, dores anciãs de vida própria e próprio corpo, mas que fizeram 
          casa em ti. Nunca pude conhecer a todas, sequer contá-las. Ainda que não me faltasse quando. Porque o tempo nunca 
          foi escasso: escasso era o dia. E imensa era a terra. Pois que ainda hoje ouço a voz que você via.
        </p>

        <p>
          Não sinto saudades, Guadalupe, pois sei que sinto tua presença e, só nela, a falta tua. À noite, as violas tocam 
          o mesmo ritmo sem fim e absolutamente nosso. As violas e o acordeão. As violas, o acordeão e o bagaço em moenda. 
          Por vezes, dançamos; hoje danço com a parte mais provável de ti e, quando me canso, ponho tua voz sob minha nuca 
          para poder me recostar. Não durmo. Não durmo há anos. Há muito não encontro formato para o que não seja viver. 
          Tenho que forjar, o tempo inteiro, a vida. Esta função herdada de ti, herdada de seus suspiros, de seus poros. 
          Por isso não sinto saudades: pois sei que há muito que se tentar ainda. E faz tão pouco tempo. Daqueles dias em 
          que eu olhava para ti e olhava para terra e olhava para as montanhas absortas: tudo fecundo, o mundo fecundo, 
          prenhe de porvir. Mas o mundo não me pertencia naquele tempo, e jamais me pertenceu desde então; como não 
          pertenceu aos que me passaram aquele arado e esta tez. Este mundo talvez pertença apenas às plantas e aos bois, 
          Guadalupe. Sim, e ainda, talvez.
        </p>

        <p>
          Mas, assim o vivemos, e o sentimos, desta maneira. Na clausura do que carregamos. O mundo. E eu me lembro, sim, 
          de como te olhava de desvão a andar sobre a casca do real, Guadalupe. Você era uma ave de cores inomináveis, de 
          cores a cada dia mais inéditas. Tu. Você me causava um imenso pavor. Tu. Com aquela ânsia absoluta que causa em 
          cada homem o berço do pavor. Tu. Eu me imaginava a navegar teu rosto seco em meu passo úmido e tomar de assalto 
          tua fronte fendida pelo sol com meus homens armados. Tu. Eu me imaginava um marinho sob teus olhos imensos e 
          sempre assustados, que não criam na desgraça e nem mesmo no milagre. Tu. Eu me imaginava não parte dos teus mares 
          mais densos, mas do leito que os sustentaria abaixo de qualquer movimento. Tu. Você chorava e chovia. E nascia 
          tudo, tudo por meio de ti: eu nasci, nasceu também este grão, também este animal. Tudo por meio de ti, Guadalupe, 
          por meio de teus braços. Mesmo que eu lá não estivesse sempre para poder te presenciar.
        </p>

        <p>
          Por muito tempo, não cri em ti, na possibilidade de tua existência compartida. Você surgiu em mim como nasce um 
          dia. Onde nasce um dia: pelos ouvidos. Quando acordei, numa manhã de vento a oeste, era você, ali, sentada, a 
          cerzir. A cantar em algum idioma morto há séculos. Cantava a vida, os deuses, as derrotas, eu sei: e jamais entendi 
          uma única palavra do que cantaste. Como nos dizem muito as coisas mortas, Guadalupe, e como elas calam. Eu também 
          cantava naquele tempo, mas como todos os outros eu só conhecia milongas sobre pelejas: e é isso a vida também, 
          Guadalupe, essa feiura, esse frio desconsolador que agora me vem, essas certezas entortadas pelas horas, essas 
          paredes que tu jamais tentaste revestir. Minhas costas doem, e não só por aquilo que carreguei, e carrego, ao 
          longo de dias inteiros. Pois como pesam todas as coisas, Guadalupe, mesmo aquelas que pairam, mesmo aquelas que 
          deixaram de existir, mesmo aquelas que ainda esperam por um sopro para tomar forma, que ainda são apenas barro, 
          que ainda são apenas ideia. E, por isso mesmo, é bem mais fácil crer na verdade de tua vida agora, depois de tudo: 
          ela está livre de meus olhos, de minhas mãos, de minha boca: tornou-se apenas palavra, cujo som se arrasta conosco, 
          e se liberta aos poucos de seu sentido para poder nos marcar, enfim, a carne. Guadalupe.
        </p>

        <p>
          E eu esperei. Não por ti. Eu esperei apenas por nós. Esperei pelo dia da colheita, pelo cumprimento da meta, pelo 
          exército incendiar a cidade, pela chegada da chuva. Eu esperei pela vinda do navio, pelo fim do discurso, pela 
          partida dos estrangeiros, pela felicidade pingando das leis. Eu esperei por nós, Guadalupe, para que eu pudesse 
          ter a ti. Entre os olhos, e entre os braços. Mas o que há agora é apenas esta gente calada, e sozinha, como eu. 
          E a lavoura infindável, e os bois sedentos, e a vida aflita pela semente que engendre a vida. Além desta vontade 
          incontrolável que me corre os pulsos, que não me dá espaço para que eu possa calar em suas frestas. A medida do 
          mundo: o ter que fazer. Até que chegue a hora, até que a fabriquemos. Pois hoje é um dia, e as nuvens não deveriam 
          passar sem que tu as visses: onde estão seus olhos agora? Em busca de alguma cidade submersa? Eu pensava que minha 
          voz estava fadada a um dia encontrar-se contigo. E esperei pelo mosquete que afrontaria oficiais tropas multitudinosas 
          e me levaria ao cerne de ti. Eu li os livros que homens sem voz nos trouxeram, e li os livros que roubei daquele velho 
          cego e encanecido. Mas eu te sussurro: Guadalupe. Ali viviam todos os homens, e ali não estava nenhuma imagem de nós, 
          ou de ti.
        </p>

        <p>
          Eu tinha que esperar por todos. Tinha que esperar por toda a humanidade, em seu passo contido e desinteressado. 
          Eu não poderia te amar enquanto todos também não o pudessem. Enquanto os olhos seguissem baixos e desordenados, 
          enquanto os pés pisassem com a mesma força em qualquer solo, enquanto os corpos soubessem apenas se mover em um 
          ritmo antevisto. Enquanto a terra não cessasse de ruir sobre si mesma, em grotões, clareiras, voçorocas. Enquanto 
          todos nós não pudéssemos, enfim. Eu não poderia te ter se eu te tivesse. Mas você não pôde esperar por nós. E agora 
          é tarde, agora é infinitamente tarde para ti, Guadalupe. E para nós, que ficamos, parece ser cada dia mais cedo.
        </p>

        <p>
          Pois tu sumiste em um dia do qual eu jamais me lembraria. Mesmo se em um esforço impossível eu o tentasse. Em um 
          dia que existiu apenas ao longo de um dia, e do qual não restou o mínimo vestígio no tempo, na água, nos dedos 
          de minhas mãos. Tua face foi semeada e hoje eu como os seus frutos tristes. Teus cabelos agora balançam nos pomares 
          de outros mundos prováveis, que nós esperamos um dia poder frequentar. Guadalupe. Acordar cada dia é a liturgia à 
          qual me devoto. Por ela te evoco, e por ela te dissipo. Por ela, Guadalupe, faço com que o mundo saiba. Que há 
          tanto ainda a ser feito.
        </p>

        <p>Pois tu morreste como morre um rio.</p>

        <p>E, como a sede, eu sei que você permanece.</p>

      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}