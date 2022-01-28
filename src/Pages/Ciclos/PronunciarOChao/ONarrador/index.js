import { useEffect, useState } from "react";
import { MdWest } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";
import { useTitle } from "../../../../hooks/useTitle";

import styles from "../../textos.module.scss";

export function ONarrador() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("O narrador");

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
      <Header />

      <section className={styles.wrapper}>

        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>O narrador</h2>
        <hr/>

        <p>
          Walter Benjamin no seu ensaio <i>O Narrador</i> contou-nos que a arte de narrar, antes da ascensão do romance moderno 
          - mas também então nele incrustada -, diz respeito à cristalização e reformulação de uma espécie de saber 
          popular difuso, esparramado ao longo do tempo e do espaço por meio da vida social. O conto moralizante, 
          o refrão ou o ditado popular são resultantes e portadores de feixes da experiência coletiva, assumida até 
          então como algo potencialmente transmissível e digno de ciência ou de saber: no ditado popular, por exemplo, 
          não interessa a comprovação do que se diz, já que ela está dada como pressuposto do enunciado, pelo simples 
          fato de ainda se dizer. 
        </p>

        <p>
          Por isso, a síntese que a narrativa carrega consigo como encadeamento de ideias e fatos – em seu 
          atravessamento de ideologias, mundos, referentes, calendários – prova que o sentido da experiência está 
          contido no corpo daquele que ouve e daquele que diz, ou seja, realiza-se sempre por meio de um ato de 
          transmissão e pela consciência de se <i>viver aquilo que se sabe</i>, quando o ciclo então recomeça. O saber 
          abre espaço no mundo com ajuda do entendimento que se pretende, ele próprio, saber.
        </p>

        <p>
          O futebol também tem seus narradores, e suas origens parecem ser tão arcaicas e enraizadas no 
          corpo social quanto aqueles que Benjamin descreveu no princípio do século XX, isto é, em um mundo 
          ainda sem futebol. A narração do jogo é oriunda de um esporte cujo ritmo foi criado pelo rádio, mas 
          que, como o ditado popular ou o conto didático, permanece marcando a experiência moderna do futebol 
          a despeito dos milhares de <i>replays</i>, câmeras em ângulos diversos, <i>zooms</i>, linhas computadorizadas e 
          microfones potentes que se impõem. O narrador é, portanto, um testemunho remanescente de uma época 
          em que a relação entre o jogo e os sentidos era similar àquela que se dava entre vivência e a ideia 
          de comunidade, isto é, baseada na fabulação da palavra, na imaginação, na projeção não amparada na 
          ideia de que uma imagem seria uma resposta definitiva ao que quer que seja discutido ou disputado - 
          como ocorre com os defensores mais ferrenhos do árbitro de vídeo hoje.
        </p>

        <p>
          Daí a distância que há entre o futebol e a linguagem técnica usada para explicá-lo ou 
          comentá-lo. Todas as piadas com termos como <i>falso 9</i>, <i>pivote</i>, <i>box-to-box</i>, <i>winger</i>, <i>target man</i>, 
          <i>jogador de contenção</i> - além é claro de todas aquelas variantes de números como 4-1-4-1, 4-2-3-1, 3-4-3 – dizem 
          respeito justamente à impossibilidade de se limitar o fluxo do jogo à sua abstração linguística/ideológica. A escrita 
          tecnocrática do futebol, assim como o palavrório pretensamente engajado de sua crônica esportiva (salvo raras exceções, 
          como Tostão, é claro) peca justamente por aquilo que tem fadado nossa sociedade ao gozo dos engravatados: a crença de 
          que a linguagem é um meio, nunca um fim. Com isso, a pretensa limpeza do vocabulário técnico do futebol, em sua 
          especificidade que se logra gradativamente, tenta mascarar o hiato que há entre o mundo e sua experiência, e entre 
          essa experiência e sua partilha.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1fmWUxVwMg9hRUUnYBFj39UwzBnGVqSon" alt="homem ouvindo jogo pelo radio" />

        <p>
          Com o advento da imagem ao vivo no futebol, a narração permaneceu no estranho lugar de uma presença que diz o visível 
          - com a televisão, enfim, visível para as massas. Estamos a falar, assim, de um grau de defasagem entre sentidos. 
          Ao mesmo tempo em que se vê o jogo, tem-se uma voz que se justapõe ao visto, narrativizando, motivando, 
          interpretando, entonando e ritmando o visível. O futebol surge, portanto, com um grau a mais de pessoalidade e 
          historicidade a partir da figura do narrador, uma figura do saber e da cadência: por isso não à toa muitas pessoas 
          preferem ver o jogo na televisão, valendo-se então da narração do rádio: estão em disputa neste tipo de escolha 
          formas diferentes de se viver o mesmo (o mesmo? ) acontecimento. O narrador do jogo é a prova de que não se pode 
          transmitir o que quer que seja sem o testemunho de uma experiência - algo que os cortes de câmera e os <i>drones</i> 
          parecem querer esconder: o ritmo impresso pela voz é testemunho de um corpo que, como o nosso, <i>está em algum 
          lugar</i> diante do que é visto. Mais ainda: é o testemunho de um corpo diante de corpos: não é fortuito que o 
          narrador quase sempre precise estar presente no estádio onde ocorre o evento que quer reportar.
        </p>

        <p>
          No Brasil – mas também em toda América do Sul e em países como a Itália - a relação entre narração e saber 
          popular parece ainda mais marcante do que em outros lugares. Vendo-se narrações inglesas, por exemplo, 
          nota-se um tipo de comentário sobre o jogo, muito mais do que efetivamente uma narração: as falas simplesmente 
          tentam <i>constatar</i> o que houve, como uma tautologia entre o que é dito e o que é visto. Por outro lado, nos países 
          de cultura latina mais forte essa relação assume planos muito mais marcantes em uma defasagem: narrar e 
          comentar o jogo significa <a href="https://www.youtube.com/watch?v=Xz71Pl2NGQk" target="_blank" rel="noreferrer">incumbir-se</a> de&nbsp; 
          <a href="https://www.youtube.com/watch?v=iFgEQ0atB3U" target="_blank" rel="noreferrer">motivá-lo</a>, significa enunciar saberes sobre o visto, compartilhar o 
          real uma vez mais como potência de um saber, e não como algo óbvio ou já dado. <i>O futebol é uma caixinha 
          de surpresas, clássico é clássico e vice-versa, pênalti é loteria, quem não faz, toma</i> são frases que, ao serem 
          evocadas durante uma partida, trazem consigo toda uma historicidade própria do jogo, transformam em tempo real 
          o acontecimento em genealogia, dão testemunho de eventos que já aconteceram e que, de alguma forma, seguem 
          acontecendo na pronúncia destas palavras. Isto é realmente significativo: o narrador latino é francamente 
          benjaminiano, e resiste encravado no mundo desnarrativizado da tecnologia – e o fato de estarmos lidando 
          com países de modernização tardia e problemática como locais em que se vive este tipo de narração não parece 
          algo gratuito nesta história.
        </p>

        <p>
          Com isso chega-se a uma imagem crucial: quando se veem as sempre aflitivas tomadas de torcedores no 
          estádio com rádios colados ao ouvido vê-se, em verdade, um argumento a nosso favor: o de que as 
          tentativas de nexo social ainda subjazem à razão pretensamente moderna, sendo a palavra ainda 
          incumbida de ser portadora de história, feixe simultâneo ao real. O ímpeto da narrativa é a vontade 
          de pessoalidade e corporalidade do mundo, e nisso nota-se como narradores de futebol precisam 
          de bordões, de <a href="https://www.youtube.com/watch?v=1I4HVnRScHA" target="_blank" rel="noreferrer">entonações particulares</a>, 
          de birras próprias, de especulações sobre seu time do coração para que as pessoas possam amá-los 
          ou odiá-los enquanto o jogo acontece sob o ritmo de sua voz. Apesar, indiferentemente e por 
          causa dela. É desta forma que o saber popular traduz-se em corpo, e vice-versa. 
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1OE_YWGdGfd30RHHH2vNE4WaCm6QkLfqm" alt="jogo de futebol" />

        <p>
          Por isso torna-se um tanto quanto curioso pensar - e aqui encerramos nosso conto - no fato de que 
          quase todos nossos narradores são identificáveis como portadores de vozes masculinas. Sendo a voz 
          o campo que, historicamente, foi legado à mulher como espaço do encantamento, do convencimento e 
          da desrazão - vide musas, sereias, coros, <i>castrati</i>, pítias -, o futebol é um espaço raríssimo para 
          a voz masculina como centro. Uma hipótese - para além do campo masculino óbvio que o esporte ainda 
          carrega - pode estar justamente no fato de que a narração do futebol é vista como portadora de uma 
          razão sensível, ou de uma sensibilidade racional: ela está ligada a um campo do saber popular que 
          é historicamente masculinizado em sua enunciação, e cujo conhecimento tem sido atrelado à voz 
          masculina. Nisto notamos os limites de nosso próprio nexo social, é claro, exatamente no instante 
          em que constatamos como ele nos é imprescindível para construirmos eventos a partir de acontecimentos: 
          mas é necessário buscar outras formas de interpretar e ritmar o real, já que nessa busca continuaremos.
        </p>  
        
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}