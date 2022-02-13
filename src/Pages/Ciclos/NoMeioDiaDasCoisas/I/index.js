import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

import Youtube from "react-youtube";

export function I() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("I"); 

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/no-meio-dia-das-coisas')}>
          <MdWest  size="3rem" />
        </div>

        <h2>I.</h2>
        <hr/>

        <p>
          Ó padarias, ó domingos, ó viadutos, qual seria a voz de sua voz? Como se enuncia um corpo ainda sem corpo? E como se 
          colocaria – por qual fenda, por qual orifício – uma alma nítida nas dobras deste mundo?
        </p>

        <p>
          Quando o fundo se quer forma – um pedido, como um ritmo, contido – é preciso escutar com os olhos. É preciso discordar com os cabelos. 
          É preciso gritar por dentro dos objetos. As cidades de um país negativo pulsam, em sua inexistência provisória.
        </p> 

        <p>
          As pessoas cantam e as pessoas escutam. A verdade inflama os olhos, cega e faz falar. A beleza se reparte com os dentes. O desejo 
          leva a um passo, que leva a uma pegada no liso falso do cimento. Onde depois se escreve um nome. Os muros – das quitandas, das borracharias, 
          dos estacionamentos, das casas dos velhos – também estão repletos de cartas, de epopeias, de autos de resistência, de notícias da guerra. As 
          coisas se regem mutuamente, como um segredo cuja razão de existir é ser descoberto. 
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          E já não é essa também a sua voz. Porque ela diverge, definha, deriva, no instante em que se diz e é ouvida. Ó igrejas vazias, ó mesas de 
          bilhar, ó cinemas: o que estão a especular agora? E qual a matéria de sua memória? Aceitar que se possa pensar em ausência, e para isso cantar 
          a derrota como quem simplesmente ouve, agora.
        </p>
        
        <p>
          Porque esse sol que fende e cura, que ama e que precede, que ri e que padece. Assim que as coisas ditas sejam transcritas, aí. Ainda que se 
          possa querer um pouco mais quando tal. Na medida em que se possa o sim.
        </p>
        
        <p>
          Pensar um corpo sem toque, um ritmo sem música, uma paisagem sem olhos. A tarde é propícia ao sono, e deus pode também bocejar. 
          Pensar num corpo em seu toque, num ritmo por música, numa paisagem em olhos. E também não pensar.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>
          Laura cega-se com a luz do meio-dia, interrompendo a fala de Antonio que – do outro lado do continente – estanca. É isto uma coisa?
        </p>

        <p> Pois as pessoas já se sabe há muito o que são. </p>

        <p>
          Sabe-se excessivamente. Como a descrição exaustiva dos veios de um rio, de suas coordenadas
        </p>

        <p>
          no espaço, do ângulo de suas curvas, faz com que ele fique mais distante, e se cale. Faz 
        </p>

        <p className={styles.end}>
          com que ele seque, posto que (um rio seco é uma coisa?
        </p>

        <p>
          Um rio e um rio seco são duas coisas distintas?):
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          -Um pé ferido é uma das falas do monólogo de uma mesa. Um monólogo que se arrasta por todo o instante em que.
        </p>

        <p>
          -Um monólogo de uma coisa perdura unicamente no instante em que ela se percebe ou é percebida como coisa:
        </p>

        <p>
          -Uma coisa é um amontoado de ____ que ainda não foram percebidas ou nomeadas como coisas,
        </p>

        <p>
          -Dar <em>nome aos bois</em> é fazer com que eles existam como mais-do-que-coisas;
        </p>

        <p>
          -Mato é, antes de tudo, uma categoria ontológica:
        </p>

        <p>
          -Laura e Antonio são concebidos por seus patrões como pessoas, não como coisas.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          E isto é mais urgente que própria urgência.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          (Um cão e um oceano são coisas distintas? Se onde, sim?)
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>
          A literatura, a religião, como o plástico ou a pena de morte, um dia hão de acabar. Seus pedaços, depois da explosão, vão se decantar sobre 
          as cidades. Vão se misturar ao curso dos rios imundos, às pedras das calçadas, ao fundo dos pratos, aos olhos sem portos.
        </p>

        <p> E disso não se dará uma única linha em um único jornal de bairro. </p>

        <p>
          A vida civil seguirá se formando através da aniquilação da voz, pela da celebração das vozes. Não haverá tempo de encarar os meios 
        </p>

        <p>
          ou os fins no dia em que o boa-tarde termine. Não haverá nenhuma beira, nenhuma borda para se contemplar o céu, ou o abismo. As coisas a cair de si para si, e mesmo estas.
        </p>

        <p>
          A cair no instante em que se tornarem impronunciáveis.
        </p>

        <p>
          Enorme ato é não falar. Mas <em>não cogitar falar</em> segue sendo ato nenhum. Como um mundo
        </p>

        <p>
          dispensado de ser mundo, em suas formas ocas, árvores negativas, avessos, arredores, anticidades. Nãoespaços que, a despeito.
        </p>

        <p>
          Curvar-se então ao despotismo do nada. Porque foi necessário aceitar o despotismo do algo.
        </p>
        
        <br />
        <br />
        <br />
        <br />

        <p> Caminhando. </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          Dedicando as moedas mal gastas neste país a tudo aquilo que nunca se dará. Ali as coisas terminam: ali acabam, têm termo, cessam. Ali tornam-se 
        </p>

        <p>menos que <em>não</em>, passam a reinar sobre si. Fecham-se.</p>

        <p>
          Não há ali.
        </p>

        <p>
          Não há excoisa. Não há roupa a despir.
        </p>

        <p>
          Tampouco haveria, neste ponto, migalhas de mundo a varrer da casca do mundo.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>
          As nuvens solitárias que movem as correntes dos mares são como os dias úteis que irrigam os livros. Um corpo é como um campo de futebol, que só 
          existe quando não está vazio. Uma cidade é como um cão faminto. Cortar as próprias unhas é como abrir uma gaveta. Um vírus é como um teorema político 
          envergado diante do dia sem artifício.
        </p>

        <p>
          2021 é como 2030 nestas palavras escritas. Uma fotografia é como uma mão aberta.
        </p>

        <p>
          Três aviões são como oito centavos. Uma canção é como um terreno baldio. O tempo do universo é como um pedaço de bolo servido. Um buraco é 
          como todo o sentido.
        </p>

        <p>
          Respirar é como escavar um túnel no nada.
        </p>

        <p>
          Aprender é como enxergar.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          Quatro pombos são um calendário
        </p>

        <p className={styles.end}> Isto é como isto. </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          Gregos remotos prostrados na praça do mercado calculam a distância entre duas pessoas que discutem numa grade. Seus olhos são – 
          provavelmente – angustiados. Suas palavras, por outro lado, hipotáticas, clamam construção, sintaxe. Clamam prédios espelhados, 
          aconselham metrôs lotados, bradam mesas de contadores, berram naufrágios de navios mercantes, invocam fogueiras, abolem o terceiro 
          excluído. E falam.
        </p>

        <p>
          Mas as aventuras da razão passam, antes de tudo, por este cenário. As duas pessoas que discutem são – nas entrelinhas – mulheres que 
          dividem um quintal, por onde animais ainda atravessam, confundindo-se, indiferentes. Aparenta ter 30 e poucos anos a mais alta; a mais 
          baixa, cerca de 20. Seus maridos cumprem, neste instante, suas obrigações com a sociedade e com a cultura. Uma ameaça a outra com uma 
          espécie de faca. Os matemáticos calculam, a despeito do impasse, e logo comprovam ao menos três teoremas. Os animais pastam. A polícia é 
          ainda – e sobretudo – uma quimera.
        </p>

        <p className={styles.center}>
          Roda a história, como uma bicicleta, no ritmo dos gestos.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          sim, de fato, mas V.Exas. hão de convir que a Colônia é um engenho de lados de dentro. Nossos pulmões estão, portanto, expostos ao sol. 
          Caso se pretenda, é claro, reverter este quadro, há de se considerar estes fatos. Que não invertam as pessoas, nem que elas tenham que, 
          por questões ideológicas, andar pelas ruas a segurar suas entranhas; mas que então se possa pensar, por outro lado, e todos nesta sala hão 
          de convir, como chegamos às conclusões que chegamos, aos trajetos atuais das avenidas. É preciso acabar com qualquer distinção entre o azul 
          e o amarelo, para que se acabe a distância do azul ao azul. Eu gostaria de pensar, junto a V.Exas., em medidas enérgicas para que se possa 
          viabilizar estas alterações no texto em voga. As pessoas estão morrendo neste exato momento, por motivos totalmente alheios. Ainda assim, 
          morrem privados destas coisas, e continuam a morrer neste exato momento. Ora, não me digam que as decisões sobre tal assunto são motivadas 
          por temas técnicos, porque, e isto sabemos quando estamos dormindo, não há nada além de um céu inteiramente azul sobre o peito de nossos 
          pés. <em>Data venia</em>, sobre os pés de V.Exas. Não proponho, portanto, forma alguma de aglutinação entre os pares opositores e governistas. 
          Acredito na política como acredito na existência de maçãs e de cachorros [Peço mais uma vez silêncio aos presentes]. Nos continuarão impedindo 
          que haja um ponto de vista sobre o ponto de vista? Isto tudo são coisas que estão – observem mais uma vez os leitos abarrotados dos hospitais – 
          a existir à nossa revelia. Peço que V.Exas. reflitam, portanto, por um instante que seja, na hipótese de que o novo texto deva deixar claro que 
          tudo – como as coisas que cito e que não cito – deva de alguma forma ter o direito de possuir um discurso para si. V.Exas. precisam se alertar 
          a este chamamento. É isto que querem as ruas. Ouçam as ruas, caros colegas. Encostem os ouvidos nos bueiros, nos postes de telefonia, nas portas 
          de correr. Percebam que seus dilemas não são em nada parecidos, que a vida é uma absoluta cornucópia de idiomas. Se somos, se querermos ser um 
          país, caros colegas, precisamos entender que – para nós, para os pulmões e os cães – isto é uma perigosa e essencial abstração. E que nós ainda 
          não somos.
        </p>

        <p className={styles.center}>
          Acho que é isso.
        </p>

        <p>
          Que
        </p>

        <p>
          nunca lhe faltem nomes para ouvir. Que nunca lhe faltem as barreiras desenhadas como forma. Que sejam para sempre eleitas pela solidez possível 
          de algo possível. Que sejam porosas. Que as coisas vivam e que também morram. Que se creia num arbusto como numa religião. Que se conte esta 
          história. Que se conceba, em nosso dogma, um riacho. Que se escreva em artigos esta ilha. Que o ano termine. Que o que vivamos seja apenas uma 
          prova de que o mundo, sim, existe. Que este cão busque uma sombra e durma. Que o mato cresça. Que as coisas se movam por dentro da terra. Que 
          sua existência seja um risco, um milagre e um acinte. Que ele sinta sede. Que a memória seja também uma prova. Que se ame o que se duvida. Que 
          a natureza seja uma imundície ou que seja ela a própria limpeza. E que nunca mais lhe faltem nomes
        </p>

        <p>
          para que digas o sim.
        </p>

        <Youtube 
          className={styles.youtubeVideo}
          videoId="xmLYM-WTMXI"
        />

      </section>

      <TextsNavigation currentCiclo="noMeioDiaDasCoisas" handleRedirect={handleRedirect}/>
    </div>
  );
}