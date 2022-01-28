import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function RetornaremosAEsteTopico() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("retornemos a este tópico no capítulo XVII");

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>retornemos a este tópico no capítulo XVII</h2>
        <hr/>
        <p>
          <strong>retornaremos a este tópico no capítulo XVII</strong>, por ora me bastando um exemplo simples, mas que pode nos 
          conduzir ao princípio de nossas conclusões e, ao mesmo tempo, nos elucidar sobre a posição que estivemos há pouco a defender.
        </p>

        <p>
          Voltando-nos ao mundo natural uma vez mais, como é mister no programa a que temos aqui nos dedicado, podemos observar 
          a <em>Delonix regia</em> como uma espécie que se valeu de uma contingência histórica e natural para se proliferar amplamente 
          tanto ao longo do continente sul-americano quanto ao redor da África continental – isso desconsiderando sua inserção 
          artificial no continente europeu ao princípio deste século, baseada unicamente em fins ornamentais, mas que atesta a 
          inegável adaptabilidade desta espécie a diferentes condições de existência. Natural da área setentrional da ilha tropical 
          de Madagascar, segundo os precisos registros de <em>Sir.</em> Joseph D. Hooker, esta árvore de flores vermelhas ou alaranjadas 
          pode hoje ser contemplada em regiões de clima análogo – incluindo-se as supracitadas África continental e a América do Sul. 
          Com este fenômeno, particular e propriamente datado, – que distanciadamente chamaríamos, em equívoco, de simples <em>acaso</em> – 
          chegamos a implicações ambientais inegáveis, destacando-se como exemplo a ampla proliferação das <em>Delonix regia</em> ao longo 
          da costa da cidade do São Salvador e arrabaldes, a nordeste do território do Império brasileiro, como os diários de outro 
          viajante, <em>Sir.</em> George Poyet, fornecem espantado testemunho, e como pude presencialmente observar há alguns poucos 
          anos, comprovando a justeza da vivacidade daquelas linhas.
        </p> 

        <p>
          Em suma, e retomando o cerne de nossa questão, nota-se que estamos diante de um processo que é analogamente natural e 
          histórico, e que de lado a lado se condiciona na própria maneira como nós podemos hoje observá-lo, e simplesmente dizer 
          que o observamos. Como somos mesquinhos ao nos julgarmos maiores ou alheios às circunstâncias! E como podemos ser pérfidos 
          ao nos isentarmos de participação nestes processos! Ainda que se proliferem como fungos os tratados de história natural que 
          pretensamente deslocam o homem de uma posição de possível agente para a condição de inevitável paciente, acredito que 
          pressuposições como essas sejam insustentáveis mesmo diante do mais transitório olhar ao mundo das espécies naturais, onde 
          nosso estudo afinal se fia, e onde reinam as condições que pretende também atestar.
        </p>

        <p>
          Postas estas considerações, retornemos definitivamente a nosso exemplo corrente e, a partir dele, sigamos para as demais 
          implicações que aqui propomos colocar a lume.
        </p>

        <p>
          A presença da <em>Delonix regia</em> em sítios dos quais não é naturalmente oriunda – presença mais ostensiva hoje nestes 
          locais do que em sua região de origem – evidencia como características particulares de determinada espécie podem atuar 
          decisivamente como princípios de conservação e adaptação em situações de deriva espacial. Destacam-se, no caso da nossa 
          espécie em questão, a princípio de seu ciclo, a grande resistência das sementes e sua considerável manifestação por fruto – 
          são trinta e duas a cada ocorrência – e, ao cabo, o volume extenso de copa, tronco e ramagem, sempre oblíqua e horizontal 
          nos registros até então obtidos, que possibilitam um bom campo de difusão para as sementes.
        </p>
        
        <p>
          A despeito do que se poderia deduzir por sua ostensiva visibilidade, relativa tanto à proporção quanto à cor, o que justifica 
          sua nomenclatura técnica, a <em>Delonix regia</em> dá um testemunho considerável acerca do privilégio que espécies invasoras 
          podem ter sobre as nativas em contextos favoráveis de adaptação. Observando-se os locais em que foi até então registrada em 
          situações de interação natural – notoriamente a costa de Benguela, a ilha de São Vicente, os litorais de Maputo e Nampula e 
          os arredores da Baía-de-Todos-os-Santos – é perceptível a rápida adaptação e a assombrosa ocupação de território realizada 
          por nossa espécie, estabelecida nestas regiões ao princípio e em meados deste século. Isto se deve, dentre outras circunstâncias, 
          à ocupação de nichos específicos que então estavam defasados nestas áreas, ou seja, à presença e circulação de características 
          ausentes no contexto geral da interação de espécies nestas localidades, pondo-se em relevo também os elementos naturais e climáticos 
          que condicionam e possibilitam a vida em determinada região.
        </p>

        <p>
          Nota-se que, no cerzir da vida, muitas linhas são ignotas ou desconhecidas. Mesmo que saibamos o desenho que resulta do 
          todo deste processo cauteloso e, ao mesmo tempo, caudaloso, mesmo que sejam visíveis seus resultados imediatos, e mesmo 
          que dele ativamente participemos, seus meandros em muito escapam aos olhares dispersos em que condensamos nossa experiência 
          pretensamente civilizatória. A isto chegamos então às condições com que espécies como a <em>Delonix regia</em> se espalham 
          todos os dias por continentes, campos, planícies, vales, ilhas, istmos, em suma, toda esta infinidade de locais em que a vida 
          não cessa de se manifestar e reincidir. Este é um tópico espinhoso, sem dúvidas. Sobretudo pelo fato de nos conduzir sempre às 
          bordas daquilo que, ao longo de muitos anos de certezas incontestes, negligenciamos por julgarmos inevitavelmente familiar.
        </p>

        <p>
          A primeira questão que aqui levantamos, e que é consequência do processo que nestas páginas temos analisado, passa por 
          considerarmos as condições que levam à expansão de determinadas espécies em detrimento de outras. Desde tempos remotos é 
          possível encontrar registros da criação em cativeiro de espécies de interesse comercial, alimentar ou ornamental para 
          determinadas populações que, a partir desta prática, promoveram conscientemente tanto a difusão quanto a seleção de determinadas 
          características que, em dado contexto, regeriam o interesse de uma comunidade por uma espécie particular. Nesta situação 
          localizada e ideal, em que vemos uma sociedade proliferar modos de vida a partir da seleção artificial de espécies, parece não 
          haver nenhuma sorte de dilema que determine ou dilua a valia destas práticas.
        </p>

        <p>
          No entanto, já faz muito tempo que o homem deixou seus pequenos vilarejos e passou a tomar o mundo como o quintal de sua casa. 
          Com isso, o que temos visto é o movimento não só de mercadorias ou de embarcações ao redor do globo terrestre, mas também de 
          espécies até então apenas locais que ganham terreno a partir da fricção das engrenagens que movem este século, como moveram 
          outras os anteriores. Temos, então, extensas plantações de cana-de-açúcar nas Américas, numerosas espécies de bovinos no continente 
          africano, sem mencionar a presença massiva do ópio no Extremo Oriente, resultando na conhecida e vexatória questão ética e 
          política para o Império Britânico, que em muito escapa aos intentos desta obra. O que nos importa, no entanto, é mostrar como 
          o homem hoje é um operador amplo e ostensivo da vida natural, a despeito de seus débeis poderes diante do que faz, tem feito e 
          fará a natureza ao longo de todos os dias em que exista algo neste planeta, e mesmo este planeta.
        </p>

        <p>
          Podemos, diante destes fatos, compreender que há algo análogo na migração de certas espécies de aves entre ilhas do Pacífico 
          e a presença de infindáveis plantações de café no continente americano? Ou o fato de haver qualquer tipo de intencionalidade 
          ou de viés humano neste processo já o torna qualitativamente diferente em sua ética e suas implicações? Neste ponto parece não 
          haver respostas simples possíveis. Como tem-se redefinido os termos com que a vida se manifesta neste planeta! E como sequer 
          podemos nos eximir desta responsabilidade havendo ali as nossas próprias pegadas! Porque, considerando que uma espécie introduzida 
          em um continente possa simplesmente devastar uma espécie nativa ou requalificar toda a cadeia alimentar de uma infinitude de outras 
          espécies locais, vemos que a ação humana – para muito além de seus próprios limites – pode simplesmente produzir alterações 
          irreversíveis em populações que levaram milhares de anos para assumirem sua configuração atual. Por outro lado, assumir que o 
          estágio contemporâneo de determinada espécie seja definitivo ou teleologicamente posto é também um equívoco que levaria a uma visão 
          de um processo evolutivo concluso, limitado e direcionado, e do qual a história dos homens seria simplesmente alheia.
        </p>

        <p>
          Neste ponto, caberia observar caso a caso de que maneira as mãos humanas têm agido sobre determinados locais, espécies ou 
          indivíduos, e como não se poderia tomar nenhum tipo de juízo moral sem se observar as particularidades de dada situação. No 
          caso de nossa <em>Delonix regia</em> – catalogada à ilha de Madagascar a partir dos incontáveis esforços do Sr. Wenceslas 
          Bojer, que conheceu esta espécie ao largo de Toamasina a princípios da década de 1820 – sua ampla difusão e adaptação ao longo 
          dos mais variados locais ainda é motivo de consternação e espanto. Nota-se, pelos escritos do próprio Bojer, que poucos anos 
          depois de sua catalogação, já havia indivíduos bem desenvolvidos desta espécie ao longo da costa da Índia, do Ceilão e das Ilhas 
          Maurício, fruto, sobretudo – e isto é o mais intrigante –, da própria ação do botânico junto aos governos locais a fim de difundir 
          esta espécie para intentos de ornamentação. Poucos anos depois, contudo, o Sr. Alfred Wallace observa a presença de indivíduos 
          desta espécie na costa de Benguela e na cidade do Mindelo, sem que houvesse registros sobre os processos que haviam levado àquele 
          resultado. Ademais, em meados dos anos 1830, constatei eu próprio, como já posto, inumeráveis exemplares de nossa árvore ao redor e 
          dentro da Cidade do São Salvador, no território do Império Brasileiro, da mesma forma como o Sr. George Poyet pouco tempo depois 
          constatou, também sem oferecer – por não possuir, naturalmente – maiores explicações sobre o que teria levado a <em>Delonix regia</em> até ali.
        </p>

        <p>
          Vê-se tão logo como a questão é complexa mesmo dentro da história particular de uma única espécie tomada isoladamente – uma 
          possibilidade afinal inverossímil em condição natural de interação. Se, em direção ao Oceano Índico, a expansão de nossa árvore 
          se deve sobretudo aos esforços concentrados de um único homem – o obstinado e já citado Sr. Wencelas Bojer –, rumo ao Oceano 
          Atlântico há poucos vestígios acerca do percurso feito pela <em>Delonix regia</em>. Sabe-se que, à cidade do Rio de Janeiro, 
          capital do Império Brasileiro, houve um esforço do governo em transportar esta espécie com o objetivo de ornamentação de ruas e 
          canteiros; contudo, isso não explica como, à cidade do São Salvador, a uma distância impressiva, haja tantos indivíduos desta 
          espécie. Deduzo, então, que o princípio deste enigma esteja em Toamasina, onde Bojer encontrou a <em>Delonix regia</em> a princípio.
        </p>

        <p>
          Sabe-se que o rei malgaxe Radama I foi o principal responsável por transformar Toamasina no principal porto da ilha de Madagascar, 
          e que é a partir de seu reinado – coincidente às viagens de Bojer – que se transforma em fundamentalmente escravista a economia da 
          região. Desta forma, inicia-se neste período a ampla circulação de embarcações mercantes entre a ilha, o continente africano e o Novo 
          Mundo, notoriamente a América do Sul. Seria viável que este tipo de transporte carregasse as sementes de nossa árvore e as 
          disseminasse ao longo dos portos por onde passasse? Diante das características das sementes até hoje descritas, pode-se concluir, 
          em primeira análise que, sim, isto é algo perfeitamente viável, e que são inumeráveis as contingências que podem ser suscitadas 
          ao longo do caminho destas embarcações, incluindo a direção dos ventos e correntes marítimas. Como já citamos em outro ponto desta 
          obra, é o Cabo da Boa Esperança um dos locais de maior variedade de espécies vegetais já registrada no planeta, e muito disso se 
          deve à ostensiva circulação de embarcações oriundas de todas as partes do mundo: no caso da <em>Delonix regia</em>, não há razões 
          para desacreditar em vicissitudes similares diante de tão eminente precedente.
        </p>

        <p>
          Logo vemos como o homem tem sido capaz de semear situações paradoxais. Pergunto-me, então, se é possível simplesmente 
          sentar-me aqui nesta mesa, portar a pena e, ao cabo, descrever os processos de difusão da <em>Delonix regia</em> ao longo 
          dos continentes ou se, por outro lado, há algum tipo de dever – incrustado nas entrelinhas de uma história natural – em 
          considerar a espécie uma portadora simbólica da tragicidade que rege este século que insistimos em presenciar. Nenhuma resposta 
          é simples. Temos a hipótese forte de que é apenas às custas da absoluta barbárie que, hoje, alguém se deita sob a espantosa 
          sombra de uma árvore à cidade do São Salvador ou no Mindelo. E temos o fato de que o homem propõe misérias e violências como 
          maneira de se convencer de que cumpre todos os dias sua missão nas capitais da Europa ou nos portos tíbios dos trópicos. Onde 
          situamos aí nossa agência nesses processos? Onde começa a observação do mundo natural e acaba dor dos indivíduos que estão a 
          viver este mundo? Em que medida deveria ser esta obra um tratado também sobre as leis que regem o mundo dos homens, sendo ele 
          simultaneamente natural e não natural, como se tenta insistentemente ocultar? Resta-me pensar, no escopo deste texto, que é a 
          natureza que carrega em seu bojo mais fundadas razões.
        </p>

        <p>
          Consideradas estas questões, contudo, nota-se que o exemplo da <em>Delonix regia</em> é didático para que percebamos aquilo 
          que vínhamos observando no capítulo XII desta obra, e que passa diretamente pelas precisas pesquisas propostas por <em>Sir.</em> Robert 
          Walsall a partir do cultivo de espécies vegetais nativas da Escócia introduzidas na região de Yorkshire: a este ponto agora 
          retornaremos, buscando aprofundar nossas conclusões sobre espécies adaptadas. Devemos considerar, a princípio, a presença de 
          espécies de inflorescência relativamente
        </p>
        
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}