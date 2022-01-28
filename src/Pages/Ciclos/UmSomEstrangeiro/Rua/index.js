import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Rua() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Rua");

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/um-som-estrangeiro')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Rua</h2>
        <hr/>

        <p>
          As dificuldades enfrentadas por uma análise estética do rap tão justificáveis quanto pouco compreendidas. Objeto em disputa, a 
          música que expandiu os limites da cultura hip-hop pelo mundo traz consigo um estatuto que precisaria ser explicitamente discutido, 
          como questão de saída, para qualquer projeto crítico que se pretendesse poroso àquilo que está se debruçando: portanto, que se 
          pretendesse dialético. A questão será, em resumo, pensar na própria materialidade ou forma de existência do rap como 
          objeto <em>ao mesmo tempo</em> estético e não-estético, na complexidade intrínseca a esta formação, como se tentará aqui sugerir 
          a partir do seu solo de origem e circulação.
        </p>

        <p>
          Uma complexidade que poderíamos chamar, inclusive, de ontológica, pois age na maneira em que esses enunciados são 
          entendidos e em quais efeitos podem suscitar.
        </p> 

        <p>
          O rap é um estilo musical que carrega consigo uma ética que se pretende distinta à da música comercial, algo que passa pela função social 
          assumida pela cultura hip-hop desde os começos de seus começos, no Zulu Nation nova-iorquino. Ali se já anuncia a potencialidade de organização 
          social ao redor da cultura, uma característica que perpetua e, ao mesmo tempo, movimenta e altera a cultura hip-hop pelo mundo. Como cultura e 
          categoria que organiza a parte-dos-sem-parte – <em>similarmente à categoria proletário?</em> -, o código ético do hip-hop consegue instabilizar-se 
          a partir dos contextos em que é articulado, transformando sua moralidade a partir das demandas políticas e estéticas particulares que lhe são 
          dirigidas; por outro lado, a força desta ética que não faz concessões a interesses que lhe parece exteriores instaura-se, ao mesmo tempo, a partir 
          das mudanças que tempos e contextos particulares a proporcionam. Como um sample, o rap sabe mudar em sua permanência.
        </p>
        
        <p>
          Nisto tem-se o cerne da questão que deveria anteceder os instantes de análise. Sendo o rap um fruto de algo que se requisita explicitamente 
          como <em>cultura</em>, ele faz parte de um conjunto de códigos éticos e morais que ultrapassam suas formações propriamente artísticas: no Brasil, 
          pode-se encontrar esta ética visível em conceitos como proceder, humildade, respeito, compromisso, saber chegar e sair, que moldam a produção e 
          recepção da música. Por outro lado, o rap é também, simultaneamente, um produto estético como qualquer outro que circula pelas massas, 
          descontextualizável, adaptável, órfão, formal. Ele guarda, assim, uma dupla existência – tal qual toda forma cultural, mas levando estas 
          tensões às últimas consequências, posto que não pretende falsear este campo de relações para limpar-se do solo de onde vem, dizendo-se <em>autônomo</em> em 
          sua forma.
        </p>

        <p>
          Note-se as eventuais consequências de se resumir a vida do rap a um dos lados de sua dialética: pensar o rap como apenas música significa 
          perder o chão de onde se constrói sua materialidade, a vida do conceito, resumindo-o a um ritmo dentre ritmos, imiscuindo-o ao mercado 
          fonográfico tradicional e a sua disposição da música em prateleiras; por outro lado, não dar ao rap o direito de existir enquanto forma e 
          experiência estética é recair ao mais trivial dos preconceitos, que atrela estéticas da periferia a um pretenso realismo plano, restringindo 
          suas expressões artísticas a correlações sociais imediatas. De um lado, em resumo, os <em>Bonadio lixo</em>, que se esforçam para limpar e 
          neutralizar as linhas de fuga do som; do outro, a participação do Facção Central no programa de Sônia Abrão, para que se defendessem da acusação 
          de <em>apologia à violência</em> diante dos olhos de alguns policiais militares.
        </p>

        <p>
          No centro desta dupla existência está, como síntese móvel e <em>locus</em> de análise, a <em>rua</em>. A rua é um lugar – real e conceitual – 
          em que se encontram as duas pontas do rap. Por algo dito em um verso, uma pessoa pode ser cobrada <em>na rua</em>; pode-se dizer que uma rima 
          ganhará força e vida <em>na rua</em>; pode-se elencar e mesmo acusar, numa música, quem estava de fato <em>lá, na rua</em>; pode-se dizer que se 
          está contando algo que foi de fato vivido <em>na rua</em>; pode-se convocar para ser ouvinte da música apenas aquelas pessoas que estão <em>na rua</em>. A 
          rua é o chão móvel da experiência do rap porque ao mesmo tempo garante seu <em>status</em> como música dentro da cultura e como cultura dentro da música: 
          assegurando uma ética para si.
        </p>

        <p>
          Nisto surge um estatuto muito interessante para a estética/ética do rap, povoada por duplos reais e ficcionais que, a todo o momento, se reenviam. 
          Um enunciador no rap responde pelo diz como sujeito e como artista: produz-se, o tempo inteiro, com a palavra, efeitos de materialidades tão diversas 
          quanto suscitar um conflito real ou um provocar um gozo estético. A palavra vive nos corpos daqueles que as escutam: é um fazer-fazer, mas também um 
          fazer-sentir. Simultânea e radicalmente.
        </p>

        <p>
          Nisto explica-se a tensa relação que a cultura hip-hop propõe entre global e local. Porque a <em>rua</em> é justamente o plano de comunhão – da 
          experiência da violência e da estética da violência, tal qual semeadas no capitalismo – e de separação – dos termos distintos em que essa 
          experiência se traduz, das histórias qualitativamente incomparáveis de onde essa experiência emerge, dos jogos de oposições entre grupos e 
          termos. A rua é o que há de comum e de distinto dentro do hip-hop, como a obra da cada rapper, dj ou b-boy é única e faz variar, no espaço e 
          no tempo, os termos de sua ética partilhada e interna.
        </p>

        <p>
          E nesta relação vige o grande desafio que o rap oferece à crítica que se propõe a tentar compreender tanto seus objetos particulares 
          quanto sua lógica partilhada: sua inserção em circuitos estéticos e ideológicos nunca será completa, porque a <em>rua</em> existe como 
          resto, como topologia da ética, desdobrando-a em forma e em conteúdo social. Pode-se escrever uma história do rap a partir da história 
          do Brasil? Sem dúvidas. Mas isso implicaria, no negativo, escrever a história do Brasil a partir da história do rap. O nó de virada de 
          cada frase em que a história se faz contra-história é, justamente, a <em>rua</em>: este local tão caro às escritas de histórias culturais 
          e sociais como a do candomblé e do hip-hop: histórias não à toa oriundas de uma mesma parte do mundo.
        </p>

        <p>
          Em verdade, do bulício de suas ruas.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="umSomEstrangeiro" handleRedirect={handleRedirect}/>
    </div>
  );
}