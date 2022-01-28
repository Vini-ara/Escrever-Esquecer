import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function IIVidaEObraDe() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("II. Vida e Obra de J. Ramos Santos");

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

        <h2>II. Vida e Obra de J. Ramos Santos</h2>
        <hr/>

        <p className={styles.end}>
          Rubrica: <em>A morte é um litoral, como a língua</em>.
        </p>

        <p>
          <strong>1.</strong>
        </p> 

        <p>
          Quando, em 1958, logrou-se a emancipação de nossa cidade, demos um definitivo passo em direção a <em>algo</em>. Não só para que se 
          erguessem os prédios envidraçados da câmara e prefeitura, necessários para a coletivização da vida do nosso homem local; não só para 
          que se construísse um elegante monumento à pujança do petróleo que acreditávamos adormecida sob nossos pés, sendo portanto necessário 
          sempre relembrá-la; nem mesmo para a instauração de um nome como uma demarcação, riscado com réguas fortuitas mas decisivas por sobre 
          nossos ossos. 
        </p>

        <p>
          Criamos um campo amplo para se pensar.
        </p>
        
        <p>
          Esta era, sim, durante todo o tempo, a batalha; ainda que apenas tarde na vida eu o admita.
        </p>
        
        <p>
          Quando desço a Feira do Pau, tremo os joelhos com o peso do escafandro que sustento, por exemplo. Escorrego, deixo que este peso 
          me conduza ao fundo do vale. Saúdo um conhecido, também preso ao ar que de algum ponto acima de nossas cabeças nos repõe a vida. 
          As frutas, atadas a corda, resistem ao chamado morno da superfície da água. As mesas estão marretadas no solo arenoso mas, por vezes, 
          escapam. Toda a luz irradia de múltiplos pontos simultâneos, contaminando as gotas justapostas. Limpo o limo das frutas e das verduras, 
          pago em moedas, amarro, com lento nó, as sacolas, em giros. Ando por saltos breves. Me canso como de qualquer forma me cansaria. 
          Respiro. Já vivi, sim, décadas. Subo a encosta, onde me escoro. A superfície é o dia, é o vigor das horas que pairam. Tiro o capacete. 
          Me lembro de Getúlio Vargas, que aqui esteve no fatídico ano de 1953.
        </p>

        <p>
          Isto construímos com nossa luta, isto pagamos com nosso suor.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          <strong>2.</strong>
        </p> 

        <p> Uma paisagem como uma humilhação, um grão de areia como um assassinato, uma caneta como um pecado capital. </p>

        <p>
          Não pense que estou louco: apenas sei o que é a loucura, porque já a vi de longe e de perto. A vida no comércio, muito longe dos discursos 
          toscos que dizem que o dinheiro é um fruto temporão de árvores secretas, é o próprio viver de absurdo. Não existe nada igual no mundo. 
          Dois pães custam o mesmo preço, mas são distintos. Distinta também é a fome que se alimenta, mas paga o mesmo preço. 
        </p>

        <p>
          Eu vi a loucura de perto. 
        </p>

        <p>
         Escute, não se deveria gastar um único centavo que fosse para se dormir em uma cama. Tanto mais digno é dormir ao relento, ao nível da 
         rua, com os bolsos cheios. Os sonhos que tive, quando me apartava de um dia exausto, não foram orçados, pesados, dosados por ninguém. 
         Não cabem em meus olhos, nem em minhas mãos: jorram, como o azeite que perfura, silencioso, a garrafa que o contêm. E tinge o chão das 
         feiras.
        </p>

        <p>
          É preciso amar o trabalho, porque é preciso aceitar a vida. O que fazemos, a todo o momento, é um ato insólito de escambo, troca, cessão, 
          resgate. Minha voz por tua atenção. Dois papéis por um cavalo. Minha palavra por tua casa. Minha morte por minha vida. Tuas costas por 
          minha casa. Minhas costas por um cavalo. O trabalho é toda esta ficção por trás da absoluta falta de mensura. Sentir-se recompensado: mais 
          lindo um lustre visto por olhos calejados.
        </p>

        <p>
          No meu primeiro emprego, das 17h às 6h, escuchaba mis patrones diciendo que la vida no podría ser una aventura tranquila, porque jamás habían 
          visto hombre que hubiera acabado feliz: ni siquiera Jesús Cristo lo había sido, nosotros no tendríamos por qué ser. La mar es hecha de movimientos 
          mas eu, contudo, era um pouco menos feliz que meus demais pares. Meu colchão ficava atrás de uma porta, que muitas vezes era aberta com a enorme 
          vontade que bancam a pressa, e a perversão. Eu acordava assustado.
        </p>

        <p>
          No meu segundo emprego, em um bar pequeno em uma ladeira, pagávamos os sambistas com engradados de cerveja.
        </p>

        <p>
          No terceiro, a miríade de coisas que vendíamos não lograva centavo. Botões, fitilhos, prendas pequenas, agulhas, fitas de cetim, 
          carretéis, novelos, em cores e tamanhos os mais infinitos, a preço de quase coisa nenhuma, esperando sua vez para se incorporarem a 
          algo. Bonita metáfora.
        </p>

        <p>
          Do quarto emprego em diante, assumi a função de patrão de mim mesmo. Mandei em mim, me demiti e me recontratei, me puni e me recompensei 
          com viagens de carro, azulejaria, comida quente, filhos.
        </p>

        <p>
          Agora, a lembrança da dor nas pernas, e da loucura. O azeite nas garrafas, corroendo o mundo, chegando ao centro da Terra. Vista do céu, 
          eu imagino, esta cidade deve ser completamente rubra, laranja, roja, escarlate, enfim.
        </p>

        <p>
          <strong>3.</strong>
        </p>

        <p>
          Tudo aquilo que podia mover com uma ideia eu chamava de corpo.
        </p>

        <p>
          <strong>4.</strong>
        </p>

        <p>
         <em>Venham todos ver as mais renomadas atrações internacionais.</em>
        </p>

        <p>
          Em minha visão, nada pode ser mais imprescindível para a vida pública do que a oferta de variedades: o truque, o assombro e o riso são 
          reinos em que naufraga a vontade própria. Ali nos fazemos, em meu ponto de vista, uma sociedade: entramos, juntos, à deriva. De nossa 
          parte, o esforço foi tremendo em proporcionar a vida das formas, desde o princípio, sendo um dos motivos para criarmos este vasto terreno 
          dedicado a estes <em>happenings</em>. Também aqui em nossas cidades, como consta aliás na própria portaria nº11 do dia 25/03/1984.
        </p>

        <p> 
          Eu costumava pensar em como uma pessoa teria decidido – em que instante, em que lapso – a dedicar seu tempo de vida a se aprimorar 
          em pular de uma argola a outra, ou colocar a cabeça à boca de um animal, ou cuspir fogo por entre os dentes. Com o tempo, e diante 
          dessas pessoas, contudo, me aparecia o mesmo assombro a pensar naqueles que acordavam quando ainda amanhecia, e saíam para ficar 
          pendurados em uma escada arrumando linhas telefônicas, ou se agachar para refazer o calçamento, ou se colocar na ponta dos pés para 
          fazer penteados. Não sei se você (que sou eu) me entende; não sei também em que medida somos acrobatas exilados no solo, e por isso 
          nos entendemos.
        </p>

        <p>
          Me parece que assim permanece coesa a intenção de nossa cidade, de nosso país em existir. O cinema, o circo, os parques itinerantes que 
          aqui aportam, tudo isso é como, não sei, catar feijão. É separar duas coisas iguais pela impressão que nos causam ou podem causar, pelo 
          gosto que podem ter. Às vezes creio que escolhemos para nossas vidas sempre o pior. Mas que pelo menos escolhemos todos juntos isto.
        </p>

        <p>
          Claro que, dizendo desta forma, é como se jogássemos ao limbo dos dias aquilo que nos define como somos, e as linhas pelas quais projetamos 
          nossas memórias – as memórias já são também o reino da exceção. Mas, e se, diante do beijo na tela projetada, sentirmos que a vida não vale 
          mesmo a pena? Onde colocar, o que fazer com este sentimento?
        </p>

        <p>
          Porque, no campo oposto, e mesmo com as ordens de repreensão que o prefeito Antonio Paterson delegou à polícia, seguimos recebendo até 
          hoje os chamados <em>shows</em> de <em>aberração</em> na feira de nossa cidade. Essas visitas insólitas atiçam a curiosidade de nossos 
          moradores, que parecem se consolar sobre o destino das próprias vidas ao se solidarizar com deformações, anomalias, vozes e caras grotescas 
          que imploram por dinheiro como ato de perdão por estar existindo sob os olhos de alguém. E então circulam em nossa cidade, sem nenhum pudor, 
          a se enunciar em carros de som, com os mais cruéis adjetivos. Quanto maior a dor, maior o retorno.
        </p>

        <p>
          Penso muito em tudo isso. Em como as coisas viram o seu oposto. Amar a exceção para trajar o normal. Defender o normal porque se pode repugnar 
          a exceção. Nossa cidade sempre foi repleta de ladeiras, de vielas, de arestas. Só mesmo aqui, onde eu estou, que estas questões – nas quais 
          ainda penso – permanecem suspensas.
        </p>

        <p>
          Eu não soube o que é a vida, porque não soube o que é o circo.
        </p>
        
        <br />
        <br />
        <br />
        <br />

        <p> <strong>5</strong> </p>

        <p>
          A guerra, como li nas bancas de jornais dos anos 40, é só uma prova daquilo que nos impuseram como sendo a vida. Quando criança, acreditava 
          que o mundo era uma experiência sem bordas: que as coisas agiam umas sobre as outras o tempo inteiro. Eu corria pela praia e a praia corria 
          em mim. Eu comia uma fruta e uma fruta passava a fazer parte de mim. Estar era, portanto, sinônimo de pertencer.
        </p>

        <p>
          Mas eis então os principais itens do meu inventário: uma casa localizada à Rua Sete de Setembro, Centro, no valor calculado e atualizado 
          de R$140.000,00. Um galpão localizado à Travessa Sete de Setembro, Centro, no valor calculado e atualizado de R$50.000,00. Uma casa localizada 
          à Rua das Fontes, Centro, no valor calculado e atualizado de R$40.000,00. Um automóvel da marca Volkswagen no valor calculado e atualizado de 
          R$40.000,00. As demais coisas não foram orçadas, salvo engano, porque carecem de escrituração.
        </p>

        <p>
          Não sei se o mundo tem bordas ou se isso fomos nós que pressupomos.
        </p>

        <p>
          Quando lia que os soviéticos haviam avançado 4 ou 7km, imaginava o riso de gozo daqueles que 
          pensavam <em>meu mundo é agora um pouco maior ou mais concreto</em>. Pensava também nos teutônicos que sentiam que sua realidade 
          estava, então, mutilada. Então olhava para minha vida, como hoje – de uma encosta de costas – também olho. O medo de perder <em>tudo</em>, 
          sem nunca saber o que <em>tudo</em> significa. À espera do instante em que roubariam as maçanetas das portas, as gravatas, os pentes, as 
          imagens dos santos, as caixas de fósforos, a minha memória. Eu perderia terreno, eles avançariam, se tornariam maiores. O mundo: o resto 
          deste litígio.
        </p>

        <p>
          Mas hoje ao menos consigo recolocar meus olhos naquela praia que me atravessava. Naquela vida que me atravessava, e pela qual eu atravessei 
          também. Não sei se existia alguma coisa remota, ou se o mundo era aquilo tudo que tomava forma. Por isso permanecer calmo. Agora que tudo está 
          perdido, restando apenas <em>tudo</em>, ao redor de meus pés descalços.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          <strong>6.</strong>
        </p>

        <p>
          Já viste a morte sob teus olhos?
        </p>

        <p>
          É como saber que há, no céu, nuvens que passam. É algo tão distante quanto uma forma sonhada, que se tenta recordar à força. Como se à 
          força a vida das imagens fosse possível ou necessária.
        </p>

        <p>
          Mas eu não saberia te (me) contar. 
        </p>

        <p>
          Quando principio esta tentativa, torno-me um tanto mais cego: derivo então para outros lugares. Ver a morte é como ver um ator de costas 
          em um filme mudo. Como olhar para as próprias mãos sob uma água fria. Como comer algo e não conseguir sentir seu gosto, apenas sua textura. 
          Quando me lembro do instante em que o homem, sobre a ponte, disparou a arma; ou quando me recordo do carro que, a despeito da criança desmaiada, 
          acelerava; ou quando vejo mais uma vez no alto da casa o jovem que berra contra os círculos concêntricos que há na natureza, não vejo nada. 
          Sinto um vento, mas não vejo nada. Exatamente como minha voz, as nuvens são imediatas. Não apresentam efeito ou causa, origem ou matéria, motivo 
          ou destino. Nos observam quando pensamos observá-las.
        </p>

        <p> 
          Mudo, o mundo não tem nenhuma moral possível. Já viste a morte sobre teus braços? É como observar caranguejos se moverem dentro de 
          um balde cheio de lama. Você já viu caranguejos? É como sentir, em suas mãos, o barro endurecer sob o sol, mostrando então – aos 
          poucos e de uma vez – o seu peso, então potência.
        </p>

        <p>
          Nós não nos presenciamos.
        </p>

        <p>
          Por isso estão guardadas, ainda hoje, nas gavetas à cabeceira da mesa, em minha casa, as minhas agendas. Ali está tudo aquilo que poderia 
          ter sido real em minha vida, incontestavelmente. Coisas como datas de aniversário, dias de pagamento de contas, telefones e endereços de 
          clientes e fornecedores, compromissos. Coisas cuja natureza é que sejam esquecidas para serem lembradas, para serem esquecidas de uma vez. 
          Nelas fazemos a vida, nelas o dia <em>se ganha</em>, por elas consegue-se uma roupa bonita, que podemos usar no dia em que alguém, como 
          uma nuvem, nos observar passar.
        </p>

        <p>
          Não há ritmo, nem é um final isto. Mudemos, então, de assunto.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          <strong>7.</strong>
        </p>

        <p>
          Na Amazônia, o progresso nacional me pareceu risível, na forma como tentaram nos enganar pensando que éramos estrangeiros. 
          Subiram os preços, se disfarçaram, se riram. Não seremos sempre o que queríamos ter sido.
        </p>

        <p>
          Não há guias segurando lanternas, para nos guiar pelo abismo. E no entanto seguimos. Digo seguimos no espaço, mas também pelo 
          tempo – e por fora do tempo posso costurá-lo. Crivar o mundo de passos é decompor-se, expor-se ao ruído. Em Buenos Aires assavam 
          um boi inteiro. Em Brasília criavam molduras para o nada. Em Recife nadamos no rio.
        </p>

        <p>
          Haveria muito misticismo em dizer que são as coisas que viajam em nós. Mas não nego dizer que deixei, ao longo da vida, muitas partes 
          minhas por aí. Que o mundo as tenha requisitado para seu solo, não o nego. Minhas pernas surgiram como uma dobra na retidão dos horizontes, 
          e acabaram-se como parte de sua extensão: paralelos. Onde estão agora os meus joelhos, transformados em um ponto numa reta? Gosto de imaginar 
          que haja arbustos onde eu me recomponha agora. Pacas com um grão de minha voz. Meandros com traços das palmas de minha mão. Estantes com 
          meus olhos.
        </p>

        <p>
          (Durante a vida, ideias fixas para compensar o corpo. Durante o resto, um corpo estanque de onde se emane um rastro das ideias.)
        </p>

        <p>
          Não se preocupe: Deus segue em voga neste mundo que enuncio. Deus é a instituição da viagem, é claro. Viajar é compor-se como parte de 
          um reino perdido, viajamos quando fomos expulsos do paraíso. Viajam as minhocas cegas sob a terra, e sua cegueira é ela própria uma 
          paisagem. Viajam as aves, os peixes, as árvores. Viajou esta cidade para a parte de cima do monte que a limitava. Construíram neste 
          país milhares de quilômetros de estrada para que os homens viajassem. Este é um desígnio de Deus, posto em movimento pela perdição do 
          homem. Não se preocupe.
        </p>

        <p>
          Em Belém do Pará vimos o Círio, e o entendemos. Há uma imagem que se move, porque tudo que é divino e vivo carece de movimento. As pessoas 
          se movem junto à imagem. As pessoas se movem das suas casas e para as suas casas. A chuva cai, perpétua, e desloca a terra que antes se 
          sustentava. A água se move sob as pessoas que se movem. O planeta gira mas jamais derretem as geleiras nos cantos da Terra, e isto permanece 
          como um mistério divino, amoral, infantil.
        </p>

        <p>
          Em vida, bobagens.
        </p>

        <p>
          Mas há o país, e há como nos ferem os pés as pedras.
        </p>

        <br />
        <br />
        <br />
        <br />

        <p>
          <strong>8.</strong>
        </p>

        <p>
          Se não podia olhar meus filhos com assombro, escolhia não olhá-los de maneira alguma. Dos enigmas que a vida me entregou, talvez este tenha 
          sido o mais longínquo: como seria possível fazer o trajeto do um ao dois ou do dois ao um, e por onde este trajeto passaria.
        </p>

        <p>
          Nossa cidade, desde sua emancipação e da construção do campo fabril, viveu um período de grande explosão demográfica, ocasionada sobretudo 
          pelas facilidades proporcionadas pelo governo federal em nosso entorno. Os solitários aventureiros do sertão e os corajosos sulistas que 
          abdicavam do pretenso conforto dos <em>shoppings centers</em> formaram – ou se abdicaram para formar – este décimo de milhão de habitantes 
          que temos aqui hoje, ao redor de onde ainda jazem nossas velhas casas. Pessoas que já não se conhecem pelo nome ou pelo nome de suas avós. 
          Eles nos entregaram a outra forma de destino.
        </p>

        <p>
          Mas não há dissabor aqui. Gosto de pensar assim mesmo em nossa cidade: antes de um chão firme, de um corpo teso no mundo, de um varão fincado, 
          o resto produzido pelos passos que a estão a atravessar. Os velhos trens da leste, os caminhões de devotos, os parques itinerantes, os técnicos 
          do governo, os banhistas e mergulhadores, os caixeiros viajantes, as pessoas que porventura estão aqui há dezenas de anos. Uma cidade é a 
          fotografia de um corpo no ar.
        </p>

        <p>
          Um dia eu também cheguei nessas bandas, com uma mulher e um rádio-relógio.
        </p>

        <p>
          Aos poucos e sem fim, o mundo tem conduzido esta cidade para um lado ou para o outro dos montes, da voz, da história. A cidade é um acidente, 
          como a vida é um acidente. Algo e quase numa coisa só.
        </p>

        <p>
          Penso em meu velho sítio. De cima, imagino, ele parecia um enorme retângulo, cortado na cabeceira por uma encosta. Eu o arava. Aí então 
          veio a estrada, varando nossa terra como uma estaca, criando um jorro que não cessava de sangrar. O sítio então tornou-se algo entre um 
          trapézio e uma coisa sem nome, que eu só conseguiria explicar se, impossivelmente, desenhasse. Reformado e deformado, de todo modo, meu 
          ainda era. Mas então vieram as cheias, e vieram os saques constantes, as podas, os sóis sem fim, até o ponto em que observar o sítio era 
          simplesmente padecer de mim mesmo. O mundo tinha deixado aquele resto, e continuaria a fragmentá-lo. Coloquei o sítio em uma troca por uma 
          caminhonete. Passo uma parte de meu tempo infinito a imaginar como ele hoje estará, se pode ser chamado de <em>isto</em>.
        </p>

        <p>
          E como estarão meus filhos. Porque olhá-los também seria cravar, buscar, motivar, decidir. Eu não saberia amá-los e, ao mesmo tempo, 
          reconhecê-los. Não saberia escolher entre o que sei que eles são e aquilo que eu imagino que eles seriam. Não sei se você me entende. 
          Tampouco sei se eu posso me entender, ou se o desejo, ou se desejo desejá-lo.
        </p>

        <br />
        <br />
        <br />
        <br />
        
        <p>
          <strong>9.</strong>
        </p>

        <p>
          Se ama não te pertence. Se ama não é eterno. Por isso eu permaneço, como uma cidade em uma estrada por onde se passa sem pressa. 
          Eu não estou vivo. Este texto só existe porque eu deixei de estar vivo. Foi neste ato, neste gesto, que uns pensam ser mesquinho e 
          outros pensam ser gentil, que passei a pertencer ao mundo real. Sente-se e me imagine falar. Você está vivo, apesar do que querem 
          te fazer acreditar.
        </p>

        <p>
          Hoje, dia 31/03/2021, cabe nesta paisagem azul. Estamos de costas para a igreja, que também está de costas para a cidade. Lagartos 
          passam – chamam-se <em>calangos</em>, caso você não saiba. A usina, ao fundo, solta fogo e fumaça. E não parece nunca nos ameaçar. O mar está 
          ao fundo, se você se colocar na ponta de seus pés. (Se colocar na ponta dos pés é um resumo de todo o trajeto humano na Terra.) Do lado 
          direito, campos vazios, abandonados às pressas. Eu me lembro, quer dizer, você se lembra de eu ter me lembrado, do dia em que tudo aquilo 
          colocou-se em chamas. Depois mais nunca. Montanhas. Esta estrada. Aquele outro e mais outro carro. A voz que fala quando estamos calados. 
          Eu sinceramente não sei se vencemos os nossos ossos, mas alguma coisa me leva a crer em algo.
        </p>

      </section>

      <TextsNavigation currentCiclo="noMeioDiaDasCoisas" handleRedirect={handleRedirect}/>
    </div>
  );
}