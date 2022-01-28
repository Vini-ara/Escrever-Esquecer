import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function ImagensDaViolencia() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Imagens da violência");

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

        <h2>Imagens da violência</h2>
        <hr/>

        <p>
          Existe um tipo de atração inexplicável causado por imagens que simbolizariam a 
          violência no futebol. Rodaram pelo continente, por exemplo, no dia em que este 
          texto foi escrito, vídeos com de trocas de tiros que interromperam jogos no Rio 
          de Janeiro e em Las Heras, no interior da Argentina. Além disso, também neste 
          domingo, torcedores de Grêmio e Palmeiras trocaram socos em uma partida cujo 
          auge foi a invasão do campo pelos tricolores, resultando na distópica cena de 
          pessoas dando chutes em uma tela de televisão e em seu suporte acrílico.
        </p>
        
        <p>
          Como estes acontecimentos, seria possível elencar-se infinitamente momentos 
          em que o repisado bordão <em>cenas lamentáveis</em> foi utilizado como interpretação 
          de algo que seria, em essência, desviante do contexto normal em que se desenrolaria 
          o jogo de futebol. Jogadores a agredir torcedores, árbitros ou outros jogadores 
          são, na mesma intensidade, louvados – como demonstração de raça e amor à camisa – 
          e execrados – como prova de irracionalidade e destempero – todos os dias em 
          comentários de vídeos, jornais esportivos ou conversas de bar que, independentemente 
          da opinião de quem esteja a interpretar estas imagens, as reproduz incessantemente. 
          A interpretação moral da violência parece inverter de polo com uma facilidade 
          assombrosa entre aqueles que vivem ou perpassam o jogo, indicando que algo neste 
          conceito carece, de saída, de qualquer tipo de fixidez ou coerência óbvia.
        </p>

        <p>
          Penso no momento mais próximo de Sófocles que o futebol já produziu: a 
          cabeçada de Zidane contra Materazzi na final da Copa da Mundo de 2006. 
          Zidane, baluarte da contenção, da graça e da técnica, tinha, naquele França 
          x Itália, a chance de coroar sua carreira com um final apoteótico, daqueles 
          pessimamente roteirizados e previsíveis, mas que ainda assim emocionariam a 
          todos os espectadores: ganhar uma Copa como capitão e estrela em sua última 
          partida oficial como jogador. Quando tudo se encaminhava para isso – todos sabem 
          – desvelou-se o pano da tragédia grega e de seu pathos, com o atleta francês 
          atingindo com a cabeça – sem sujar-se ou sem fazer movimentos bruscos, exatamente 
          como era sua forma de jogar – o zagueiro italiano que supostamente havia 
          ofendido sua família. Zidane, naquele instante de violência, abdicou da limpeza 
          do discurso sobre seu futebol, desistiu na narrativa ascendente, passou – 
          aos olhos dos europeus – uma vez mais de francês a franco-argelino, 
          na genealogia negativa das guerras coloniais que sustentam a triunfal Marselhesa 
          tão louvada antes dos jogos de sua seleção.
        </p>

        <p>
          O ato violento e sua consequente punição imediata – isto é, a tentativa que 
          a lei encarna de reinstaurar a regularidade – foram o desfecho inesperado e 
          catastrófico para os tecnocratas do futebol que, ansiosos, esperavam para 
          louvar o empenho e o trabalho duro de Zidane, sua moral inviolável como seu 
          semblante, seu mérito a ser colhido como fruto natural de uma vida simples. 
          Houve então quem tentasse inserir o ato de agressão na mesma linha sustentada 
          até então, louvando – mais uma vez – a moral de Zidane como um espaço em que não 
          haveria concessão à injustiça contra os seus; houve, por outro lado, quem 
          imediatamente descartasse tudo aquilo que até então tinha proferido sobre o jogador, 
          o condenando por sua irresponsabilidade e por jogar fora o sonho de uma nação. 
          De lado a lado, dois pressupostos sobre a violência que parecem resumir a maneira 
          como ela é tratada com relação ao jogo.
        </p>

        <p>
          Há uma linha crítica comum que parece observar os instantes de violência 
          como uma série de atos isolados que, sem nenhuma explicação, não cessam de se 
          repetir indefinidamente. Está o discurso em que se separa o joio do trigo, aponta-se os <em>vândalos</em> 
          e os <em>criminosos</em> (que deixam, imediatamente, de ser torcedores), 
          pede-se por controle sobre quem acessa os estádios, exige-se reconhecimento 
          facial, fim das organizadas e torcida única, dentre outras medidas de enorme 
          apelo junto à chamada opinião pública – que nada mais é que a tentativa da 
          democracia por consenso. 
        </p>

        <p>
          Deitada em uma cama eugenista e elitista, esse tipo de discurso assume 
          que violência não pertenceria propriamente ao futebol, mas seria levada 
          a este mundo por aquelas pessoas que encarnam os vícios sociais em si, e 
          que, portanto, deveriam ser afastadas daquele mundo. No cerne dessa opinião, 
          está a ideia de que o futebol <em>refletiria</em> o mundo real, mas que esse mundo 
          deveria ser mediado – por agentes, entidades, forças políticas – para que não 
          se pronunciasse em campo. Mesmo um jogador que cometa um ato violento – que 
          não ageria como jogador, mas como <em>vândalo</em> – deveria ser prontamente afastado 
          daquele espaço pela figura que, ali, se pronuncia como portador de uma voz 
          mediadora e racional – a ponto não se mostrar jamais como uma figura pública, 
          não se justificando jamais sobre suas decisões.
        </p>

        <p>
          Já em uma linha crítica oposta, vem a ideia de que a violência é uma das 
          finalidades do futebol. Neste tipo de discurso, o futebol exigiria um grau de 
          sociabilidade pautado no contato bruto, na <em>raça</em>, na supressão do corpo do outro, 
          na defesa de uma animalidade que irrompesse em apelidos, menções, louvações, em uma moral 
          heráldica. Neste campo de ideias, <em>o violento</em> seria aquilo que asseguraria o futebol 
          como um local defendido <em>a priori</em> dos questionamentos sobre seu campo de 
          existência e seus princípios: deve-se ser masculino, e ponto. E ser masculino 
          significa, na prática, ser violento, ser antidialético, não contestar jamais 
          sua própria posição de enunciação. 
        </p>

        <p>
          Este discurso e suas históricas reverberações parecem ter sido 
          completamente ignorados por grande parte daqueles que sustentam 
          o discurso anterior, e que não compreendem que, para muitas pessoas, 
          afastar a violência do futebol significaria a destruição do princípio 
          e do fim do jogo: assim, uma solução estúpida e cínica como a torcida 
          única tem como objetivo apenas tirar a violência do campo de visão 
          daqueles que encarnam o normal, desconsiderando justamente que o evento 
          futebolístico não é interpretado da mesma maneira por todas as 
          pessoas, e que ele causará violência pelo simples fato de existir 
          como evento – em alguns casos, seja por quem pratica ou por onde 
          pratica, essa violência é apenas tolerável ou, até mesmo, desejada, 
          caso atinja os alvos corretos.
        </p>

        <p>
          Está claro, no fim das contas, que sim: ou o futebol é a violência ou a violência é o futebol: 
          <em>isto você decide, o resto só coincide</em>, citando aqui os Racionais. Por isso, a observação 
          das maneiras como a lei tenta pautar o jogo deveria levar a uma busca das complexas 
          mediações entra as formas de subjetivação que ocorrem dentro e fora do campo: o que 
          é ser violento afinal? Uma <em>personalidade violenta</em> se manifestaria igualmente em 
          todos os âmbitos? A permissividade sobre a violência varia de um ambiente a outro? 
          Por quê? (E etc, etc, infinitamente etc.) 
        </p>

        <p>
          Por isso, esta primeira conclusão pede uma revisão de princípios, isto é, 
          refazer uma pergunta que o óbvio ainda mascara. A violência é vista normalmente 
          como a irrupção de um gesto que nega a sociabilidade, que tensiona a régua do 
          normal em direção ao absurdo, que no fim das contas retroalimenta os princípios 
          que determinam esse gesto como violência. Ela está, portanto, do lado de fora do 
          aceitável, das formas de reconhecimento tidas como válidas em determinado contexto: 
          e por isso sua punição tem sido sempre a exclusão do convívio com o normal. 
          Esta declaração de princípios, que embasa os dois discursos aqui citados – um 
          que pede que se quebre de vez a tensão, outro que pede que se tensione 
          permanentemente – desconsidera como o contexto é, ele próprio, o criador da 
          violência como rótulo, e dos termos de sua aceitabilidade.
        </p>  

        <p>
          Quando, em um famoso Palmeiras x Santos, <em>o potente zagueiro</em> Domingos 
          entra em campo para causar a expulsão de Diego Sousa após 2 minutos – culminando-se em uma 
          rasteira do jogador palmeirense contra o santista – pode-se falar <em>em absoluto</em> em um 
          ato de violência? A pergunta parece estúpida diante da cena bisonha, mas, quando se pensa 
          que ali houve a utilização de uma estratégia tão prevista no jogo quanto o drible – é possível, 
          como Suárez contra Gana, trocar um gol por uma exclusão –, o ato violento torna-se parte 
          prevista pela lei, com a qual treinadores e jogadores convivem e, mais do que isso, 
          manejam a seu favor a cada vez que <em>matam</em> uma jogada. A rasteira de Diego 
          Sousa, se dada em Domingos do lado de fora do estádio ou fosse praticada por um 
          torcedor contra outro, levaria talvez a um processo com a alegação de lesão corporal, 
          ou a uma resposta policial imediata: dentro de campo, contudo, uma lei, que se 
          sobredetermina à outra, cria uma exclusão prevista e insere a violência no campo do 
          aceitável e estratégico. A violência é contextual.
        </p>

        <p>
          Mais do que isso, a violência é um teor. Por isso, para se entender de que maneira seria 
          possível haver, paradoxalmente, milhões de atos violentos isolados é preciso se acabar 
          com a divisão abrupta e <em>a priori</em> entre <em>vândalo e torcedor</em> – afinal, a agressão nunca existe 
          a despeito do futebol, mas por sua causa e em seus termos – e ver que a distância entre 
          violento e não-violento está apenas na régua da interpretação de um gesto, que será sempre 
          arbitrária – como é a diferença entre os cartões amarelo e vermelho, que leva a discussões 
          em geral inconclusivas sobre a posição, intensidade, direção, intencionalidade e contexto 
          de uma falta, por exemplo. É preciso entender-se, portanto, que <em>violência</em> é um significante 
          sob disputa, e que esta disputa é aquela que se dá entre o aceitável e o inaceitável em 
          determinada moral.
        </p>

        <p>
          Quando um árbitro dá um cartão amarelo para Neymar por um chapéu, ele entende que, 
          de alguma maneira, o atacante cometeu um gesto de violência – mas se este chapéu 
          terminasse em gol, ele não entenderia assim. Quando um jogador tira a camisa na 
          comemoração de um gol e é advertido, existe alguém que concebe naquele gesto um 
          verdadeiro atentado aos patrocinadores que pagam um alto valor para estar em evidência, 
          tendo ali negado um <em>natural</em> direito. Quando o gol de bicicleta de Mazzola 
          é anulado em 1958, alguém também pensou que o absurdo daquele movimento seria o mesmo 
          absurdo da violência que fere as regras do aceitável. O violento é, portanto, o que 
          escapa ao discurso, assim como o discurso da lei reage firmemente àquilo que o deixou, 
          por um instante, sem palavras.
        </p>
        
        <p>
          Zidane cabeceia Materazzi, cai a imagem, retorna o real daquilo que não se explica 
          em si mesmo (<em>o que foi aquilo?</em>), o gesto que desafia a relação de causa e 
          consequência (<em>por que ele fez isso?</em>) e provoca uma reação legal 
          (<em>vejamos o que o juiz vai fazer</em>). 
        </p>

        <p>
          Por isso – como um indicativo para uma ideia de jogo por vir – mais produtivo do 
          que tentar isolar os focos da agressão é tentar entender quais são seus termos, e 
          como o futebol os encarna, priva ou favorece. A violência é o contraditório, e só 
          existe porque pretende sê-lo: e responder o contraditório com um discurso linear é, 
          na prática, induzir a mais e mais contraditório. As emboscadas de torcedores na 
          estrada, em seus mortos e feridos, <em>são</em> o futebol e <em>são</em> a sociedade em relação, <em>são</em>
          o jogo dobrando-se sobre si mesmo e se ressituando diante daqueles que o fabricam 
          como algo permanentemente em diferença: se o futebol mobilizou aquele atos, como 
          mobilizará outros que virão, é porque sua matriz ética e moral estava ali disponível 
          em jogo <em>como teor a ser mobilizado</em>: a atração pelas imagens da violência é, por 
          isso, o par ideal do repúdio que essas imagens parecem causar. O gol é, à sua medida, 
          a violência que um time insiste em cometer contra outro.
        </p>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}