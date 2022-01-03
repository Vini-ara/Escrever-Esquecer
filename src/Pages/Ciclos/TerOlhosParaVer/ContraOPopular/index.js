import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function ContraOPopular() {
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

        <h2>Contra o popular</h2>
        <hr/>

        <p className={styles.end}>
          <em>O popular é uma categoria erudita.</em>
        </p>

        <p>
          Aproveitando o fato de este que vos escreve não é profundo entendedor de nenhum dos assuntos a que se dedica – e, 
          portanto, não tem uma reputação a comprometer –, a tentativa deste texto será a de inocentar um réu que insistentemente 
          é julgado à revelia pelo grosso da opinião comum: me refiro aqui à acusação de que <em>o cinema brasileiro nunca foi popular</em>. 
          Os verdugos são aqueles que afirmam que, talvez por escolha ou talvez por incapacidade, é o medo da popularidade o que 
          levaria à preferência do público nacional pelos filmes oriundos de grandes mercados estrangeiros. Em suma, nota-se desde 
          já que esta é uma questão que atravessa critérios materiais, estéticos e éticos, o que dá nota de sua incontornável 
          complexidade – que este texto não pretende de forma alguma esgotar.
        </p>

        <p>
          Para começar esta espinhosa discussão, é necessário especular o que pode significar o tal <em>popular</em>. Pode-se pensar que ele 
          seja uma questão de tema – o amor é mais popular que a bomba atômica? –, de forma – a ação é mais popular que o suspense? 
          – de conteúdo moral – punir o mal faz mais sucesso do que deixá-lo ileso enquanto sobe o letreiro de <em>Fim</em>?. Pode-se pensar 
          também que isso seja uma questão de princípios – há coisas propriamente populares que devem ser alcançadas pela obra? – ou 
          de fins – a bilheteria de um filme mostra como ele conseguiu ser popular?. Sociologicamente, seria possível imaginar que 
          o popular está associado às classes baixas – a um falar, um modo de viver e de sentir as coisas –, enquanto algo como o 
          erudito ou <em>cult</em> significaria uma imposição de um elemento estranho ao núcleo do comum?
        </p>

        <p>
          A conclusão inicial a que se chega é: em todas suas possibilidades, <em>popular</em> parece estar em primeiro lugar associado a <em>ingênuo</em>, isto é, 
          a formas de mundo não refletidas pelas pessoas que, massivamente, as reproduzem. Desta maneira, só existem <em>obras populares</em> oriundas 
          de dois movimentos: ou da irreflexão de quem a cria – isto é, a pessoa faz e <em>só poderia</em> fazer aquilo que conhece e vive – ou da 
          repetição consciente de um modelo do popular, buscando-se atingir um reconhecimento do povo na obra (note-se que só pode pensar 
          de ambas as maneiras aquele que se enxerga como não-ingênuo, isto é, superior ou conhecedor pleno do que observa). Neste esquema, 
          é evidente, não pode haver nenhuma saída politicamente propositiva, já que o popular sempre será coincidente a si mesmo, pois 
          nasceu pré-formado e está fadado a acabar da forma como começou; por outro lado, aquele que é exterior ao popular permanecerá 
          <em>ad eternum</em> em sua posição esclarecida. O mundo é necessariamente imóvel.
        </p>


        <img src="https://drive.google.com/uc?export=view&id=1EFoWloWNsCT3ud7sdF_A7PIfS2ZB5-4i" alt="pessoas caminhando" />

        <p>
          Para notarmos esses mecanismos em funcionamento, pensemos, por exemplo, como uma figura como Luiz Gonzaga é comumente associada à 
          imagem de um Nordeste puro, místico e enraizado em suas tradições, postas como formas culturais previsíveis – algo debatido 
          recentemente por <strong>Bacurau</strong> – sem que se tome nota de como o maior mérito individual da carreira do músico está no fato de ele ter 
          <em>criado</em>, com enorme cuidado, uma estética própria de Nordeste e, então, tê-la <em>popularizado</em> incessantemente (algo que torna sua 
          participação em <strong>Sem essa, Aranha</strong>, de Rogério Sganzerla, tão significativa, aliás). Pensemos, ainda no campo da música, como 
          qualquer crítica à qualidade de gêneros considerados populares é rebatida prontamente com a acusação de elitismo ou de 
          incompreensão daquilo que seria a verdade verdadeira do Brasil – o que, em um movimento crítico semelhante ao acusado sobre 
          Gonzaga, ignora que algo como o sertanejo universitário é cuidadosamente moldado em discurso e estética por produtores que 
          passam muito longe da própria ingenuidade atribuída ao público-alvo de suas criações, que seriam <em>em si</em> magicamente populares.
        </p>

        <p>
          Está claro que a categoria não se sustenta. Se sociológica, ela é, na melhor das hipóteses, elitista – já que precisa avaliar um outro 
          homogêneo a partir de um eu que não faz parte do que está a avaliar. Se temática ou formal, ela aperta as mãos da teoria dos gêneros 
          de Aristóteles e assume que se baseia numa visão de três milênios de idade para <em>captar a benevolência</em> do outro no século XXI (aliás, 
          associar comédia à ralé, como a Globo Filmes insiste em fazer, é algo assustadoramente aristotélico). Mas, pode-se argumentar, e neste 
          ponto a sentença sobre o cinema nacional é decretada, que o popular é uma categoria do real, isto é, pode ser medida por réguas 
          quantitativas como reações, ingressos vendidos ou números de plays: neste caso não haveria argumentação possível, pois se estaria 
          diante algo que deve ser apenas constatado: e pobre daquilo que está fadado a ser, para sempre, impopular. Aqui começam os 
          maiores problemas a se lidar.
        </p>

        <p>
          Os filmes brasileiros de maior audiência nos últimos anos foram quase em totalidade comédias de costumes, que retratavam 
          majoritariamente a ascensão de personagens de classes baixas às classes altas (ou ao menos de um lugar de inferioridade 
          a um de superioridade): <strong>De Pernas para o Ar</strong> 1, 2 e 3, <strong>O Candidato Honesto</strong>, 
          <strong>Minha Mãe é uma Peça</strong> 1, 2 e 3, <strong>Até que a Sorte 
          nos Separe</strong> 1, 2 e 3, <strong>Suburbano Sortudo</strong>, <strong>Vai que Cola</strong>. 
          Estes filmes são resultado de um método específico de produção que 
          envolve insistentes testes sobre a reação de espectadores à obra antes que ela entre em circulação, algo avaliado a partir 
          de critérios quantitativos disponibilizados por empresas especializadas no assunto. Roberto Santucci é, no Brasil, tanto o 
          mestre destas comédias – seu trabalho de direção ou co-direção está na maioria delas – quanto o maior aperfeiçoador do 
          método, algo amplamente descrito em <em>Ao Gosto do Freguês</em>, brilhante texto de Luiza Miguez para a Revista Piauí, infelizmente 
          fechado para <a href="https://piaui.folha.uol.com.br/materia/ao-gosto-do-fregues/" target="_blank" rel="noreferrer"> 
          assinantes</a>. Com o sucesso reiterado de seus filmes, Santucci fala como se tivesse chegado ao grau-zero do 
          popular, já que insistentemente <em>provado</em> pelos números tanto de bilheteria quanto de avaliação. É como se houvesse, enfim, 
          um modelo perfeito de aproximação – a palavra é importante – da obra ao que é <em>em-si</em> popular, e que deve ser alcançado para 
          que se obtenha retorno financeiro satisfatório.
        </p>

        <p>
          Os números estão aí – assim como os números que colocam nas 20 maiores bilheterias da história cinema brasileiro 13 comédias, 
          2 filmes religiosos e 2 filmes pretensamente eróticos – melhor seria dizer pornográficos. Uma voz ao fundo diz que é disso 
          que o povo gosta e que se está procurando pelo-em-ovo ao ver nisso um problema, típico daqueles que querem que o povo veja 
          Godard depois de trabalhar 44 horas semanais e ter que <em>negociar com o patrão</em> seus direitos. E aqui vem a maior dificuldade 
          de reverter a sentença: o teor de constatação que o argumento quantitativo do popular traz consigo. O popular é um dado <em>a 
          priori: é assim porque é assim, ora, veja os dados</em>.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1Y76STUOZvlKjtB0veHEvvgXshuO2hFTu" alt="homem sendo calado" />

        <p>
          Mas notemos, então, que a categoria do popular só permanece em circulação para servir aos interesses de uma elite que lucra 
          (muito) com ela, e aqui nossa dialética fica interessante. A edificação da homogeneidade do gosto é aquilo que dá vazão a 
          nichos de mercado, que precisam de uma demanda para existirem como tais, e que só se sustentam por isso. Assumir o popular 
          como um <em>a priori</em> é, assim, trocar a consequência pela causa: talvez <strong>Vingadores</strong> seja mais visto do que Godard no Brasil não 
          por ser <em>em si</em> mais popular nem por trazer para as telas exatamente aquilo que <em>o povo gosta</em>, mas sim por passar nos cinemas 
          de todo o país – em muitas cidades, com exclusividade –, por encontrar respaldo nos valores e estéticas veiculados nas mídias 
          de massa, por dar vazão aos padrões de gozo e consumo que circulam nesta sociedade, por haver ferramentas de análise difundidas 
          sobre o que define a qualidade destas obras – note-se, por exemplo, que muitas pessoas dizem não gostar de filmes de autor por 
          não saber quais as ferramentas necessárias para vê-los e então dizer que sejam bons. O mais interessante desta história é que o 
          próprio filme, no fim das contas, irá reiterar quase tudo o que tem como pressuposto sobre o que diz e como diz: <em>o popular se 
          constrói a cada obra popular</em>. Sendo assim, considerar nosso conceito como um <em>a priori</em> desconsidera a materialidade do gosto como 
          um processo, e a assume com um dado: a constatação cômoda daqueles que dizem que a sociedade é assim porque é assim, e que a 
          providência divina ou a mão invisível do mercado – é a mesma coisa – irão regular as desigualdades sociais com a naturalidade 
          com que elas se formaram.
        </p>

        <p>
          Devemos nos perguntar, se quisermos jogar com a categoria que estamos negando, em que medida houve realmente alguma chance de 
          nosso cinema ter sido popular para além das comédias da Globo. Se houve em algum momento um projeto que visasse a autonomia de 
          análise e fruição de uma obra, se na época de ouro do cinema nacional a ditadura civil-militar permitiu boa difusão para os 
          filmes de Nelson Pereira dos Santos ou algum financiamento para os de Júlio Bressane, se há hoje alguma garantia para alguém 
          que rode um filme de que haverá dinheiro para terminá-lo. Há muitas determinações e sobredeterminações em jogo antes da constatação 
          do <em>as coisas são como são</em>: principalmente a hipótese intragável do <em>como as coisas poderiam ser ou ter sido</em>. Calar sobre esta 
          hipótese é fazer, à guisa de século XVII, uma partilha arbitrária do sensível entre os eruditos – nós que compreendemos e conseguimos 
          reproduzir para vender – e os ingênuos – que simplesmente consomem sem sequer perceber o que consomem: o popular é uma categoria 
          erudita, e só existe em função do lugar que o molda e define seus termos.
        </p>

        <p>
          Dizer que qualquer coisa pode vir a ser popular – ou, por outro lado, que qualquer coisa pode deixar de ser popular – é 
          afirmar que as bases materiais da sociedade podem ser alteradas, porque não há ninguém no mundo cujos termos de vida – 
          gostos, amores, desejos, valores éticos e morais – já estejam dados definitivamente ou sejam restritos a uma identidade 
          que defina a maneira como se enxerga o mundo. Em outras palavras, significa dizer que nada pertence a ninguém, justamente 
          porque tudo pode pertencer a todos, e deixar de pertencer novamente. Com isso, acaba-se com o povo como uma categoria 
          predicativa, em que se define a partir de critérios arbitrários quem ou o que está do lado de dentro ou do lado de fora: 
          foi essa a discussão de Terra em Transe, há tantos anos, afinal.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1LbftpOytReqp8voZMkDOCDmNlzBe_Bxr" alt="homem abraçado com um peixe morto" />

        <p>
          Por isso, revertendo o diagnóstico mais corrente, notar como o cinema brasileiro (quase) sempre apresentou trajetórias 
          autorais longínquas (Luiz Rosemberg Filho ou Ana Carolina, por exemplo), que lutaram contra todos os percalços materiais 
          possíveis para se desenharem, significa não que este cinema tenha sido resistente à popularidade ou aos termos do que 
          deveria fazer para ser <em>compreensível para as massas</em>, mas sim que tenha acreditado que as condições materiais do Brasil, 
          suas pessoas e seu ambiente social tivessem o direito de se manifestar em formas distintas daquelas consagradas pelo 
          mercado como populares: justamente porque o popular é uma categoria falsa, que não dá conta da multiplicidade de 
          sensibilidades e experiências que existem por aqui. É como já dito sobre <strong>Ladrões de Cinema</strong> anteriormente: a enorme 
          grandeza do cinema nacional está em olhar para seus limites e enunciá-los, para então vê-los como possibilidades 
          futuras. O popular, por outro lado, precisa olhar para os limites apenas como impossibilidades, e então silenciar 
          sobre elas, já que é ali que seu conceito deixa de funcionar.
        </p>

        <p>
          O cinema brasileiro não pode ser culpado nem por suas condições materiais – pelos monopólios estrangeiros 
          das salas de exibição com facilidades enormes de financiamento, pelo domínio de distribuidoras atreladas a 
          elas, por esse sistema que impede a viabilidade de um mercado interno autônomo, pelo Estado que se nega a 
          assegurá-lo como ocorre em países como a Coréia, com os resultados que temos visto – nem por seus produtos 
          que retomam o jogo da repetição do mesmo, repropondo-o. Os culpados são aqueles que precisam uma imagem 
          estática de Brasil para, então, lutar todos os dias para ter o monopólio sobre ela. Novamente, o que está em 
          jogo é a possibilidade infinita da dissidência, a desnaturalização do dado como o único possível. Muito longe 
          de classificar como mero lixo uma comédia da Globo – o erudito é também um jogo que parte de um <em>a priori</em> e de 
          um lado de fora –, superar o popular é poder viver em condições para que todos possam escolher entre produtos 
          distintos e histórias distintas, e notar neles suas diferenças, suas particularidades, sua relação com outros 
          produtos.
        </p>

        <p>
          Só haverá <em>democrático</em> quando não houver mais <em>popular</em>, em suma.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}