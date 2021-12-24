import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function ImagensImagens() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Imagens, imagens</h2>
        <hr/>
        <i>
          Leonardo Bertozzi, Arnaldo Ribeiro, Georges Didi-Huberman e Walter Benjamin sentam-se numa 
          mesa em uma sala de minha cabeça. O assunto, obviamente, é a regulamentação do árbitro de 
          vídeo no futebol brasileiro. Arnaldo Ribeiro é crítico, Bertozzi defende ferrenhamente, 
          Didi-Huberman coça a testa, Benjamin não crê sequer que a discussão seja possível nestes termos. 
          A questão é que há muito que se debater, e os presentes sequer tocam na sopa enquanto o assunto 
          rola tortamente como uma bola mal-dominada.
        </i>

        <i>
          Bertozzi é enfático: os críticos do VAR soarão no futuro como os críticos do cinto de segurança. 
          Alguém lembra ao jornalista sobre o ocorrido, por exemplo, com Chico Science, e sobre as 
          diferenças nada desconsideráveis no símile. Arnaldo Ribeiro toma a palavra e diz que o erro 
          faz parte do jogo como o gol ou o escanteio, e é interpelado por Benjamin, que diz que a 
          corrupção e o falseamento fazem parte das democracias burguesas, o que não faz dela um regime 
          socialmente válido. Arnaldo parece não entender onde o alemão quer chegar com isso, e 
          Didi-Huberman diz que todos estão a tangenciar o problema. O filósofo então se dirige a Bertozzi, 
          dizendo que isto é uma questão de ética e forma, antes de qualquer outra coisa: os dois 
          travam ampla discussão. Só aqui, enfim, este texto começa.
        </i>

        <p className={styles.center}>*</p>
        

        <p>
          Acreditem ou não em minha insuspeição, mas um ocorrido em um jogo do Esporte Clube Bahia 
          me fez olhar para o problema formal criado pelo árbitro de vídeo. Durante a partida de 
          ida contra o At(h)lético Paranaense, pelas quartas de final da Copa Sulamericana, o tricolor 
          baiano teve dois gols estranhamente anulados, que causaram a precoce eliminação da equipe. O 
          segundo, um impedimento milimétrico, não entrará aqui em questão; o primeiro, um lance de 
          pé-alto durante o voleio de Clayton, me parece ser sintomático. Neste último, é absolutamente 
          destacável um aspecto: o de que o árbitro de fato viu a jogada e validou o gol, tendo, no 
          entanto, voltado atrás ao ver a imagem na tela situada à margem do campo.
        </p>

        <p>
          O momento foi celebrado por comentaristas e considerado como elucidado por apoiadores 
          do aparato tecnológico, a despeito de sua complexidade e do aspecto nada resolutivo que 
          a imagem possuía qualitativamente para qualquer tipo de juízo. A questão que me restou 
          deste episódio, e que me fez dar um jantar para quatro convidados dentro de minha cabeça, 
          foi, portanto, se poderia a imagem de fato <em>elucidar</em> o real, sendo ela, assim, <em>mais real que o 
          próprio real</em>, como nos querem convencer.
        </p>

        <p>
          Porque me questiono em um lance como o de Clayton, no qual não se pode traçar uma linha 
          computadorizada que separe o ilegal do legal - e que mesmo neste tipo de caso desconsideraria 
          a existência de um observador limitado -, se um pé-alto, diante dos olhos e diante da tela, é 
          de fato o <em>mesmo</em> evento, o <em>mesmo</em> acontecimento. Observar uma imagem em alta resolução não poderia 
          em hipótese alguma significar acessar a realidade despótica das coisas, ao reafirmá-la. E é muito 
          interessante que um ponto como este possa ser óbvio numa discussão sobre cinema, pintura ou 
          fotografia, mas polêmico em uma mesa redonda futebolística. Por isso acho que neste momento 
          Didi-Huberman deixaria Bertozzi sem argumentos, revelando em alguma maneira certo tipo de 
          anti-intelectualismo que reina no mundo do futebol como uma espécie de salvo-conduto para que 
          se possa, em nome do amor ou da vivência, defender nada ou quase tudo.
        </p>

        <p>
          Toda imagem é sua produção, sua difusão, os locais de sua difusão, seus pressupostos e intenções, 
          sua forma, Benjamin o sabe há muito. Um homem congelado em uma imagem não é o homem visto a olhos-nus. 
          É outro homem. É a câmera, o ângulo, o ir e voltar que reforma completamente a força, a intencionalidade, 
          o instante em que os atores - os jogadores - estão em ação. Que se perceba o que a expressão <em>lance 
          interpretativo</em> escamoteia: a impossibilidade de se racionalizar em termos absolutos o que seria ou não 
          uma infração. Com isso, cria-se um vetor que vai do suposto real em direção à subjetividade do árbitro, 
          instrumento transformador da letra fria da lei em ação corretiva (existe, no entanto, algum lance 
          que <em>não</em> seja interpretativo?). 
        </p>

        <p>
          Quando se coloca nesta equação a imagem como um elemento de resolução instantânea, tem-se então um 
          duplo falseamento: a do árbitro enquanto sujeito de uma interpretação decisiva e não particular, 
          e a da imagem, portadora de uma verdade incontestável e dada no mundo, pronta a ser vestida como 
          uma roupa confortável. Há assim, na opinião corrente, dois lastros em que a lei do jogo poderia 
          se pautar: o real – <em>captado</em> pela imagem – e o subjetivo imparcial – performado pelo árbitro na 
          ausência de meios que permitiriam que se acessasse o <em>verdadeiro</em> real.
        </p>

        <p>
          A defesa não é, portanto, do erro de julgamento como aspecto constitutivo do jogo - o que, 
          se previsto em suas regras escritas, seria tão absurdo quanto potencialmente revolucionário 
          (Benjamin sorri de canto de boca para Arnaldo Ribeiro). É, bem diferente disso, de um uso das 
          imagens que possa partir de um estatuto preocupado com alguma ética sobre seu solo: que assuma 
          que sua função é unicamente a de propor termos e camadas à interpretação, e não de ser a própria 
          interpretação em si. Algo que é, justamente, o oposto do que está em jogo em quase todos os 
          comentários acerca da arbitragem, em que se julga o absoluto do erro ou do acerto como se estes 
          juízos pairassem no ar, e não em uma posição de observação particular, ou em uma situação dada, 
          ou na letra permissiva de uma lei - e logo se veja como o onipresente enunciado a <em>regra é clara</em> 
          não faz o menor sentido, posto que o mundo não o é. O árbitro de vídeo, portanto, dependeria de 
          uma ética da imagem e, simetricamente, de um postulado mínimo sobre o real: uma ética na qual a 
          primeira faça parte do segundo, e o segundo não exista jamais em absoluto, mas se manifeste 
          também por meio da primeira.
        </p>

        <p>
          Por isso um lance como o de Clayton abre margem para tamanha discussão – que deveria 
          ser mais de princípios do que de resultados: o <em>perigoso</em> da expressão <em>jogo perigoso</em> 
          é algo essencialmente disputado, e sobre o qual as imagens não parecem esclarecer muita 
          coisa – aplique-se este adjetivo a outros objetos e verá. Um jogo de futebol em que os 
          <em>lances interpretativos</em> sejam vistos e revistos por vídeo é um outro esporte bem distinto, 
          que, se baseado na premissa moderna da imagem emancipadora - o duplo de outra tópica da 
          nossa modernidade recente, a do mundo como "construção ininterrupta de imagens falseadas" 
          – será em absoluto um esporte pior, muito mais tecnocrático do que já tem sido. Nem a 
          verdade decisiva, nem a impossibilidade da verdade: a <em>responsabilidade</em> da imagem, portanto, 
          naquilo que nela sempre será ponto-de-vista, ponto-cego e ponto-de-luz simultaneamente.
        </p>

        <i>
          (Neste momento, os quatro se calaram em minha cabeça; o zagueiro então ajeitou a bola na marca 
          da cal uma vez mais. E, mais uma vez, a bola entrou, eliminando meu time sem que nada eu pudesse fazer).
        </i>
        
        <img src="https://drive.google.com/uc?export=view&id=15xMBGOss361in0av0KMOv96DU4fwXOLd" alt="jogador" />    
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}