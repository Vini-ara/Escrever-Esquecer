import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function AQuietudeEQuaseUmSonho() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("A quietude é quase um sonho");

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

        <h2>A quietude é quase um sonho</h2>
        <hr/>

        <p>
          O enorme inverno da arte brasileira nos anos 1980 teve poucas breves miragens de 
          sol. <a href="https://periodicos.sbu.unicamp.br/ojs/index.php/remate/article/view/8636328" target="_blank" rel="noreferrer">Há muitas explicações correntes para isso</a>, 
          e a minha preferida certamente é aquela que consegue associar a perda de um horizonte de expectativas ao encurtamento de um espaço de experiência social 
          (nos termos que se pega emprestado de Koselleck): o país que perde mesmo os moinhos do discurso nacional-desenvolvimentista e o substitui pelo cotidiano 
          atormentador da hiperinflação é aquele que passa bruscamente de um nexo social - frouxo e reacionário, mas um nexo - para o súbito ideal da realização 
          individual dos termos da vida social - <em>sobrevivência</em> antes de vivência e muito antes de experiência. Materialmente, isto se manifesta pelo 
          fim ou enfraquecimento dos mais abrangentes projetos de fomento à cultura e, noutro plano, pelo próprio ocaso dos grandes projetos estéticos coletivos 
          dos 1970, como o Cinema Novo, a Boca do Lixo e a Tropicália.
        </p>

        <p>
          Não à toa, os raros momentos de honestidade intelectual na arte dos 1980 no Brasil foram aqueles em que se internalizou na forma os próprios 
          limites de concepção de qualquer projeto artístico, diante das machadadas da vida cotidiana que adiantariam os Francis Fukuyamas dos anos 1990. 
          Aí estará a escrita de Ana Cristina César, em sua potência de desestabilização constante dos fluxos enunciativos; aí estará também o encorpamento 
          das experiências de formação de estéticas de periferia, sendo o nexo da parte-dos-sem-parte o momento de maior força responsiva já presenciado na 
          arte brasileira (que passará pela Vanguarda Paulista e também irromperá nos 1990 sobretudo com a amplitude nacional dos Racionais Mc's). Aí estará, 
          por fim, a cena paulistana ao redor da Baratos e Afins, que repensará o espólio de uma música pretensamente jovem, agora com seus jovens já à 
          meia-idade a procurar qualquer emprego minimamente estável.
        </p> 

        <p>
          Olhando-se para o rock brasileiro dos anos 1980, nota-se de fato uma tentativa de assumir um tom de crítica e denúncia da realidade social 
          imediata como lastro discursivo: no entanto, para longe do viés periférico do nosso punk tardio em As Mercenárias, Cólera ou Inocentes, é 
          evidente que o tom das denúncias dos Titãs ou dos Paralamas do Sucesso parece ecoar muito mais um filão filantrópico do que algo que os imigrantes 
          jamaicanos tenham feito na década anterior na Inglaterra. Talvez o desacerto de tom aí se deva principalmente às pressões pela construção de um 
          mercado fonográfico mais encorpado e voltado para a classe média - vide o Rock in Rio e os nossos Cazuzas - que não conseguia admitir determinadas 
          palavras, discursos, alturas, sonoridades por ora. Por isso, as respostas de maior amplitude e profundidade parecem estar muito longe destes 
          lugares em que o mercado assentava os limites da contestação e da ira(!) a ser externalizada - sem haver nisso nenhuma celebração do "impopular" 
          ou do "exótico", mas o reconhecimento da falsidade de constituição deste "popular" que se ergue às pressas em especiais de domingo.
        </p>

        <br />
        <br />

        <p>
          Nisto encontramos, enfim, o Fellini ali sentado, cabisbaixo, sob um viaduto da 9 de Julho. Esta é a imagem.
        </p>
        
        <p>
          A trajetória da banda se inicia em meados dos 1980 com um disco que já se anuncia como despedida de algo 
          (<a href="https://www.youtube.com/watch?v=SnCajMK8HuE" target="_blank" rel="noreferrer">O Adeus de Fellini</a>). Este é um disco 
          que se propõe a repensar o espaço de experiência social a partir daquilo que está ali presente em ausência (como <em>Nada</em>, 
          em que se tem uma extensa enumeração do que não existe senão em discurso), e que manifesta a impossibilidade de se aderir plenamente 
          a qualquer estética ou forma cristalizada de pensamento (as figuras do ex-skinhead, do ex-socialista, da cultura como mercado e cisão 
          de classe, dos homens que ateiam fogo às suas guitarras <em>há muito tempo</em>, do pastiche que é o rock europeu a partir de sua 
          recepção noutra realidade social). Que se note também o espólio das experiências anarquistas do começo do século que emergem partir 
          da violência insuperada do mundo do trabalho (<em>Funziona senza vapore</em>), e de seus locais e pessoas, no testemunho da construção 
          de São Paulo como <a href="https://www.youtube.com/watch?v=uzTNUeIAVvs" target="_blank" rel="noreferrer">história de um apagamento</a>; 
          que se note também a impossibilidade de protesto ou de respostas, de qualquer tipo, a perguntas que ninguém fez 
          (<em>Nada, Cultura, História do Fogo, Outro Endereço Outra Vida</em>); que se note, por fim, a defasagem apontada entre a percepção e 
          a experiência <a href="https://www.youtube.com/watch?v=ft1_KAs2EeM" target="_blank" rel="noreferrer">mediadas pela mídia de massas</a>: 
          <em>eu vi seu corpo na TV sendo imolado/ sua imagem/ muito papo furado</em>.
        </p>

        <p>
          Mas o <em>Adeus de Fellini</em> é um disco que, longe da receita óbvia, rejeita a melancolia para então propor em seu lugar a negatividade. 
          Assim, a banda cria um contraste entre um som ainda eletrificado em suas guitarras e seu baixo pesados e sujos e o tédio que parece emergir 
          das letras, como da experiência social daquilo que é sempre despido de sentido amplo e metanarrativas. O interesse neste disco, portanto, 
          é em sua <strong>quase</strong> raiva, seu <strong>quase</strong> apelo ao corpo, seus <strong>quase</strong> gritos, sua <strong>quase</strong> possibilidade 
          de alegria ou de tristeza. Como se o post-punk deixasse muito mais didático o porquê de ter, afinal, este nome: surge de fato de dentro da experiência corporal 
          e performática do punk, dando-lhe adeus.
        </p>

        <p>
          O segundo e o terceiro discos (<em>Três lugares diferentes</em> e  <em>Fellini não morre duas vezes</em>, respectivamente) marcam uma 
          virada na formalização proposta pela banda, largando mão dos acordes de guitarra e do baixo pesado e assumindo a bateria eletrônica 
          que permitirá uma marcação sem sustos, uma frieza colossal justamente no ponto maior de síncope possível (e nisso às vezes será 
          produzido um <strong>quase</strong> samba). Em <em>Três lugares diferentes</em>, um disco bem mais interessante 
          que <em>Fellini não morre</em>, nota-se um esforço nítido de produzir um enorme comentário sobre suas próprias condições de 
          existência, a partir de múltiplas colagens de trechos de programas de rádios, citações literárias em outros idiomas, frases com 
          sentido obscuro, e da presença de uma segunda pessoa - há sempre 
          este <a href="https://www.youtube.com/watch?v=r2-_UysxveQ" target="_blank" rel="noreferrer">você</a> que compartilha o espaço físico/temporal, 
          mas não necessariamente o de experiência - que acompanhará toda a trajetória lírica da banda. A melancolia – aqui de fato melancolia - 
          encontra fundo numa sonoridade particularmente cortante, com timbres de guitarra metálicos e a gaita sempre no limite da falta de sentido 
          musical: ela ganha camadas de profundidade, portanto, e o discurso novamente colide na sonoridade. Todo este contexto formará uma construção 
          sintomática em que sempre se encontrarão pseudo-narrativas, <strong>quase</strong> histórias que se delineiam mas nunca se cumprem - não se 
          sabe nunca quem, onde, por que: e isto parece ser também um testemunho de uma tentativa sempre <em>barrada</em> de dizer algo, como o humor 
          que lança lume à tristeza (e vice-versa), como a melancolia que não encontra puro resguardo no som. É profundamente incômodo, e por isso 
          é interessante.
        </p>

        <p>
          (No terceiro disco, contudo, este método chega ao absoluto limite da indiferença entre as formas, sendo toda a fatura da experiência 
          pavimentada por essa melancolia que parece não ter fim ou princípio, portanto lastro - e que prejudica observar qualquer projeto 
          artístico ou musical que resulte das composições. Perde-se a defasagem fundamental no segundo disco, tem-se uma experiência da tristeza 
          pura em letra e sonoridade, incapaz de produzir atenção por ser sempre a variação do mesmo.)
        </p>

        <p>
          <em>Amor Louco</em> encerra de fato o adeus de Fellini à experiência corporal do punk com a redução das guitarras ao mínimo: assume-se o 
          violão de sonoridade ríspida e o sintetizador que aponta justamente para outro tipo de genealogia musical, mais próxima da new wave. A 
          quase-narratividade e 
          a <a href="https://www.youtube.com/watch?v=8jcupGM7t38" target="_blank" rel="noreferrer">segunda pessoa do segundo e terceiro discos</a> encontram 
          aqui a clareza de um espaço fragmentado como o da <a href="https://www.youtube.com/watch?v=NL61C-WAgsQ" target="_blank" rel="noreferrer">megalópole em formação</a>, 
          em que o diverso encontra nexo <em>a partir</em> da violência, não se negando a diferença de origem, mas a mantendo como 
          estranheza – algo que a formação da cultura hip-hop irá testemunhar quase simultaneamente.
        </p>

        <p>
          Aí se encontram as referências tão menos explicáveis quanto mais claras - Aeroflot, Kandinsky, inglês-italiano-latim, Amor 
          Louco (<a href="https://www.youtube.com/watch?v=eTW630ztRUU" target="_blank" rel="noreferrer">algum dos filmes</a> ou a peça?), rio 
          Tietê, São Silvestre - que permeiam <em>Amor Louco</em> mais do que qualquer um dos demais discos da banda. A frase que resumiria a 
          poética deste disco sai de <em>Cidade Irmã</em>: <strong>nada que nos una</strong><em>/</em> <strong>vendo a lua saindo de um prédio</strong>. Existe 
          uma experiência social, e esta experiência é justamente a sua impossibilidade de ser narrada – no ato mesmo de sua quase-narração: não é portanto 
          o neoliberalismo imbecil dos 1990 que se anunciaria ao tentar constatar como o mundo se resumiria ao indivíduo, mas sim o indivíduo 
          dando testemunho da existência, em algum lugar, de um mundo inevitável (as coisas existem em si mesmas) em sua materialidade e na 
          violência que é sua atual evasão.
        </p>

        <p>
          A análise de caso ficará com <a href="https://www.youtube.com/watch?v=Dchv5yKHab8" target="_blank" rel="noreferrer">Grandes Ilusões, de Amor Louco</a>:
        </p>

        <p>
          <em>Noite Alta</em>
        </p>

        <p>
          <em>Céu Risonho</em>
        </p>

        <p>
          <em>
            Como quando você fala durante o sono
          </em>
        </p>

        <p>
          <em>Meu pai aponta na árvore o fruto estranho</em>
        </p>

        <p>
          <em>
            O amor universal
          </em>
        </p>

        <p>
          <em>Grandes ilusões</em>
        </p>

        <br />
        <br />

        <p>
          <em>Você não morre mais tão cedo</em>
        </p>

        <p>
          <em>De tanto que eu circunavego seu nome</em>
        </p>

        <p>
          <em>A meia lua de bandeira turca</em>
        </p>

        <p>
          <em>O Metrô</em>
        </p>

        <p>
          <em>
            Grandes ilusões
          </em>
        </p>

        <br />
        <br />

        <p>
          <em>O filho do filho do filho do homem</em>
        </p>

        <p>
          <em>Um tempo para nós</em>
        </p>

        <p>
          <em>Grandes ilusões</em>
        </p>

        <p>
          <em>A quietude é quase um sonho.</em>
        </p>

        <p>
          Abdicando até mesmo da bateria eletrônica, <em>Grande Ilusões</em> é em si o exemplar mais nítido da dialética ríspida que Fellini 
          não cansa de propor. A canção começa no violão e circula sobre uma base de sintetizador, às vezes soando agudíssima como a gaita que 
          aparece, e cria um duro contraste de registros que parecem muitas vezes sequer se conversar, como se não houvesse passagem possível de 
          um para o outro (e no entanto aí estão, juntos). Os versos ecoam este movimento ao praticamente justaporem registros narrativos, 
          enumerativos, dialógicos e evocativos, cujo nexo nunca é claro. Olhando-os de perto, vê-se a presença de elementos do cotidiano mais 
          imediato ao lado daqueles que evocam a realidade totalizante em suas narrativas: de lado a lado, são grandes ilusões. Com isso, desvela-se 
          o intrincado jogo de referências que a música faz sem 
          explicitar-se: <a href="https://www.youtube.com/watch?v=-DGY9HvChXk" target="_blank" rel="noreferrer"><em>o fruto estranho</em> da 
          antológica canção estadunidense</a> (e note como a absurda violência da referência pode ser ignorada caso não se conheça ela), os 
          versos <em>noite alta/ céu risonho/ a quietude é quase um sonho</em>, de Noite Cheia de Estrelas, consagrada por Nelson Gonçalves, e mesmo o 
          deslocamento proposto em <em>você não morre mais tão cedo</em>, frase do repertório mais popular possível - mas transitivizada pelo verso que 
          a sucede. Nenhum objeto tem um lugar estável na canção, como nenhum objeto do passado ou do presente tem lugar inerente na realidade social que 
          insiste em distorcer tudo o que toca.
        </p>

        <p>
          Com isso, nota-se a enorme dificuldade de efetuar a passagem natural de um verso a outro, de um registro a outro, do global para o 
          individual (e vice-versa). O amor universal e o metrô, o filho do filho do filho do homem (Deus?) e o você da intimidade, que não morre 
          mais: as referências só tem em comum o fato de serem <em>grandes ilusões</em> encadeadas, em que o falso de uma parece ser justamente o 
          falso da outra. Não há cinismo aqui, outra vez: não é uma mera constatação da diferença dos diferentes, mas a tentativa de notar a igualdade 
          dos diferentes em sua diferença. A dialética é complexa: a quietude é quase um sonho, isto é, a estabilidade de quem dorme é a instabilidade 
          das palavras que dali saem: não há síntese possível, como se houvesse aí a negação de qualquer experiência que tentasse dizer que as coisas 
          são como são, que a história acabou, ou etc. A ilusão não é necessariamente uma perda, aqui ela se parece muito mais uma miragem: algo 
          crucial para situar a existência das coisas em algum realismo possível.
        </p>

        <p>
          Nesta dialética árida parece, enfim, estar a mais duradoura verdade de Fellini: o deslocamento, a desestabilização. Musicalmente, é um quase punk, um quase post-punk, um quase new wave e um quase-samba; liricamente, constrói quase narrativas, quase referências, comenta a si mesmo a todo o momento como a especular sobre as próprias possibilidades de existir. Este movimento parece ser, ao cabo, uma resposta política de absoluta força, justamente pela duração insuperável do estranhamento que propõe, justamente pela justeza de sua pretensão. Em uma década em que se tentou em todos os planos da vida social criar ordem como resposta, primeiro, da experiência da falsa ordem (o militarismo), depois, daquela do absoluto caos (a urbanização conservadora, o estado falido, a hiperinflação), o Fellini parece dizer que talvez o erro seja em opor cegamente a ordem ao caos, como extremos incomunicáveis e antagônicos (o cinismo, afinal), e então determinar aí a posição dos indivíduos e dos objetos. A constituição de 88, um ano mais velha que <em>Amor Louco</em> portanto, com suas promessas de ordem sucedidas pelos frutos estranhos que nascem todos os dias da nossa experiência social atual, parece depor a favor do que Cadão Volpato, Ricardo Salvagni, Jayr Marcos e Thomas Pappon fizeram aqui.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="umSomEstrangeiro" handleRedirect={handleRedirect}/>
    </div>
  );
}