import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function PorUmaNovaCinefilia() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/ter-olhos-para-ver')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Por uma outra <em>nova</em> cinefilia</h2>
        <hr/>

        <p className={styles.center}>
          <em>
            Este texto é uma conversa com&nbsp;
            <a href="https://www.blogger.com/blog/post/edit/8123286493599814765/9149412063703053499" 
            target="_blank" rel="noreferrer">Por uma Nova Cinefilia</a>. A tentativa é, a rigor, a mesma.
          </em>
        </p>

        <p>
          Não restam dúvidas de que a história da produção e recepção de arte seja parte 
          significativa da história de colonização do mundo. O ofício de ver uma obra, desde 
          o princípio de sua teorização, foi parte de um esforço para criar um lado de dentro 
          e um lado de fora para a Cultura (com c maiúsculo) em que fossem reconhecidas e 
          valorizadas determinadas formas de ver e dizer, determinadas corporeidades, em detrimento 
          a outras - que sabemos quais são. Este é o mundo da mimese, este é o mundo da retórica: 
          a codificação prescritiva de maneiras apropriadas a temas, efeitos apropriados a 
          públicos, locais apropriados a formas.
        </p>

        <p>
          A última grande manifestação conceitual deste esforço de demarcar os espaços da cultura, e que ainda ressoa nos dias de hoje, é a pretensão de um tipo específico de autonomia pós-romântica do campo artístico e da obra de arte - que o crítico Girish Shambu em <em>Por uma Nova Cinefilia</em> chama simplesmente de <em>estética</em> - em que se poderia conceber um produto cultural ou como uma manifestação independente das condições sociais (ainda a hermenêutica) ou como uma espécie de correlato objetivo de uma individualidade impenetrável (a função-autor, que Shambu critica em seu texto ao mesmo tempo que realiza, como se tentará apontar).
        </p>
        
        
        <img src="https://drive.google.com/uc?export=view&id=1xM--mAHt4od4tzEHzumcSs67iDlR7J-B" alt="dois homens" />

        <p>
          Nisto chegamos à <em>velha cinefilia</em> que o crítico indiano descreve e acusa. <em>A velha cinefilia</em> é uma manifestação particular 
          da sensibilidade pós-romântica que as vanguardas não foram capazes de superar com seus ensejos de destruição da representação, da univocidade 
          do indivíduo e do espaço demarcado da arte - olhar para a África como os cubistas, por exemplo, significa não internalizar nenhum de seus aspectos 
          para um projeto de construção de uma nova sociedade ou de um novo conceito de arte, mas simplesmente operar dentro do <em>mesmo</em> a partir de 
          um <em>outro</em>, fixo. A <em>velha cinefilia</em> é, portanto, a igualmente velha pretensão de se mudar a arte sem mudar as condições sociais de 
          recepção, divulgação e circulação da arte; mais ainda, <em>a velha cinefilia</em> é o mundo da obra de arte autônoma como obra de arte 
          com <em>locus</em> social assegurado, ressoando um universal que, não por coincidência, se construiu na Europa e, depois, na América do 
          Norte, em seu racismo e misoginia estruturais (cuja fraqueza de discurso Didi-Huberman não cansa de demonstrar).
        </p>

        <p>
          A defesa de uma <em>nova cinefilia</em> e, portanto, de uma possibilidade de recepção e produção de arte com maior arroubo crítico - 
          e autocrítico - é indissociável da multiplicidade de acoplagens entre forma, enunciador e público. Ela é, portanto, uma <em>disputa</em> pelo 
          conceito de estética, e não seu abandono, como pretende Shambu ao criticar o mundo da <em>mise-en-scène</em>. A estética é justamente o espaço 
          em que é possível propor uma rearticulação entre quem diz e o que diz, uma defasagem construtiva entre as posições estabilizadas no jogo 
          pseudo-democrático e suas possibilidades de reconstrução latentes.
        </p>

        <p>
          Reconstruir a crítica de arte, a <em>cinefilia</em>, como espaço de uma <em>posicionalidade subjetiva</em> - isto é, como local em 
          que pontos de vista parciais e autoidênticos sobre o mundo se manifestam - é negligenciar justamente o valor político de uma obra de 
          arte como, propriamente, obra de arte, já que <em>estética</em> está bem longe de ser o mesmo que autonomia absoluta da obra: anos e 
          anos de Theodor Adorno, Susan Sontag, Gilda de Mello e Souza ou Flora Süssekind já disseram o suficiente sobre como qualquer produto 
          cultural é indissociável das formas sociais de onde se origina e onde circula, daquilo que promove como visibilidade e dizibilidade, 
          daquilo que propõe como variação. Não há ainda espaço maior para uma reproposição ideológica ou política de corporeidades e identidades 
          do que a estética, no fazer, no ensino e na crítica que a atravessam.
        </p>

        <p>
          (Note-se que isto não tem nada a ver com uma tentativa de restaurar a aura da obra pré-romântica, nem seu local de prática 
          superior e elitizada, mas apenas uma maneira de demonstrar a especificidade <em>atual</em> deste fazer: <em>hoje</em>, os carpinteiros 
          têm sobretudo madeira, os agricultores têm sobretudo terra, os artistas têm sobretudo forma. Mas existe a latência de que os carpinteiros 
          tenham algo de forma, os artistas tenham algo de terra, os agricultores tenham algo de madeira (aliás, é este o horizonte que se deve 
          buscar na crítica social, este reconhecimento da impossibilidade de se traçar limites estritos entre as formas de vida, até que um dia 
          se possa falar numa advocacia da abstração ou numa política da agronomia), a questão é justamente o que será colocado em relevo, ou 
          como norte do fazer tal como ele se dá em nossa sociedade atual, e a partir de onde se tentará superar o estado observável das coisas.)
        </p>

        <p>
          Sendo assim, os prazeres de uma nova cinefilia também devem ser <em>predominantemente estéticos</em>, justamente <em>porque</em> serão 
          políticos, críticos, contestatórios; justamente <em>porque</em> darão visibilidade a corporalidades e pontos de vista não-hegemônicos 
          e vazão a temas, maneiras e formas às quais a <em>velha cinefilia</em> está desacostumada. Conceber que a arte tenha que se abdicar 
          do seu fazer para se afirmar como prática política é pensar que a representação seja um empecilho para aquilo que seria um mundo real 
          ou material, onde existiria a verdadeira pobreza ou a verdadeira política. Uma nova cinefilia deve acreditar na estética como espaço 
          em que qualquer representatividade seja impossível, justamente porque é esta deriva que fará a forma ressoar e perdurar naquilo que 
          é <em>diferença</em> a quem cria e a suas intenções. Algo distinto disso é a reafirmação da velhíssima metafísica do sujeito racional, 
          base dos próprios processos colonizatórios.
        </p>

        <p>
          Isto não significa, de forma alguma, que a nova cinefilia abandone as condições materiais de produção da arte, justamente porque 
          essa abstração seria a mais elitista e eurocêntrica possível, como já dissemos. A nova cinefilia entende que um filme precisa de 
          condições mínimas de viabilização materiais, que os artistas volta e meia precisam comer, que há vozes que não se localizam nas 
          grandes capitais dos grandes países, que o Estado precisa olhar para quem está embaixo, ao mesmo tempo em que um campo social de 
          criação para além do Estado precisa se estabilizar. A nova cinefilia, contudo, entende que a estética se localiza para além e para 
          aquém dessas determinações, trazendo-as mas não coincidindo com elas, ecoando-as mas não repetindo-as. Porque a nova cinefilia traz 
          consigo uma teoria renovada da linguagem e do indivíduo, em que não se pode acreditar que um ponto de vista seja a expressão unilateral 
          de um sujeito, nem que uma identidade determine o sentido de uma obra. A nova cinefilia é multiposicional.
        </p>
       
        <img src="https://drive.google.com/uc?export=view&id=1SnTT3jbPncX44crAPPYHg0HzS-QSthAp" alt="mulher beijando a testa de Luiz gonzaga, sem essa aranha" />

        <p>
          Antes de expandir uma <em>ontologia do ponto de vista</em> para todo o mundo, uma nova cinefilia deve fazer como Viveiros de 
          Castro e perguntar às pessoas <em>qual o seu ponto de vista sobre o ponto de vista</em>. Portanto, um conceito como <em>inclusão</em> deve 
          ser abandonado pela nova cinefilia, já que ele pressupõe a possibilidade de se construir uma totalidade a partir da soma das posições: 
          o mundo não é uma entidade estática para a qual sujeitos autoidênticos observam. A estética deve ser compreendida, assim, como o espaço 
          em que ontologias se põem em movimento, em que haja constantes colisões entre expectativas e atualidades, em que potências não 
          desaguem <em>necessariamente</em> em realizações. A nova cinefilia entende que não se pode dar forma e visibilidade a corpos 
          não-hegemônicos a partir de pressupostos do indivíduo e da história que sejam hegemônicos, como os de Shambu, que tenham contribuído 
          para estreitar os limites políticos da arte através de seu atrelamento a um horizonte de democracia representativa liberal. Não é o 
          suficiente não igualar o valor das vozes, como faz o mercado e como acusa o crítico indiano: é necessário diferir também o 
          valor <em>da voz</em>. Não só de quem diz, mas do próprio ato de dizer.
        </p>

        <p>
          Desabilitar o mundo da velha cinefilia, enfim, deve significar não só desmantelar certo tipo de corpo e identidade, mas também toda 
          a maquinaria metafísica-ontológica-histórica que sustenta as posições destes corpos. Tentativas bem-intencionadas de repropor a 
          ordem das coisas podem ser, elas mesmas, fontes de incompreensão e pavimentação de ontologias: troca de uma hegemonia por outra 
          hegemonia. Uma nova cinefilia, portanto, não poderia <em>pressupor pressupostos</em> a ninguém, ainda que sejam teorias da identidade 
          ou do ponto de vista cuja intenção seja a de dar voz às pessoas: isto é justamente suprimir a materialidade das vozes, limitar 
          sua deriva, delimitar seu sentido. Não há democracia liberal possível na nova cinefilia, e vice-versa.
        </p>

        
      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}