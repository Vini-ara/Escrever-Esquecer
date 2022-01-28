import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function MasSeDeusEPorNos() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Mas se deus é por nós");

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

        <h2>Mas se deus é por nós</h2>
        <hr/>

        <p>
          Há um ditado corrente no mundo do futebol, geralmente usado de forma depreciativa, 
          que diz que se <em>mandinga ganhasse jogo, o campeonato baiano acabaria sempre empatado</em>. 
          Mesmo com a conotação da frase - o que significa <em>mandinga</em> nesse contexto? 
          O que essa palavra invoca? -, o fato é que existe ali um ponto de verdade: a 
          relação entre futebol e sagrado passa por inúmeros planos e contradições permeando e 
          complexificando o jogo. Isso é algo que diz muito sobre a forma como se desenha a própria 
          posição da crença dentro de sociedades como a brasileira, na maneira como os sistemas sociais 
          são afetados pelo ato de <em>crer</em>, aqui nunca afastado de outros verbos como <em>ser</em>, 
          <em>poder</em> ou <em>ter</em>.
        </p>

        <p>
          A cena inicial deste texto pode ser encontrada facilmente na internet: na final do campeonato 
          brasileiro de 1988, um enorme ebó foi erguido em Porto Alegre à porta do vestiário do Bahia - 
          que, naturalmente, contava com um <a href="https://www.blogger.com/blog/post/edit/8123286493599814765/2909204617130290931"
          target="_blank" rel="noreferrer">pai de santo</a> apto a desativar suas propriedades. Havia um ali, 
          portanto, uma ideia de que o jogo estaria também pautado no campo do divino, onde os baianos 
          levariam natural vantagem - Salvador é, afinal, assentada em nome de Exu -, devendo portanto ser 
          surpreendidos pela astúcia dos gaúchos, como a provar que a final, em nenhum dos planos, estava 
          ganha. Muito longe de um fato isolado, a presença de rituais místicos e sagrados como impedidores 
          ou motivadores para acontecimentos é, ainda hoje, uma necessidade para vários times e grupos que 
          institucionalizaram a <em>mandinga</em> como meio de se obter triunfos ou acabar com séries azaradas.
        </p>

        <p>
          Sapos enterrados em estádios, o azar por uma partida inacabada, a mudança de localização que 
          encerra ciclos vitoriosos, determinado uniforme que impede que gols aconteçam, jogadores que precisam 
          ser rezados para endireitar os pés: não é preciso muito esforço para se ver que, para além do campo 
          do institucionalmente religioso, o futebol dá margem para súbitas mitologias, superstições de última 
          hora, relações sempre imediatas entre acontecimentos e entidades. Parece haver, portanto, uma 
          necessidade de se preencher com algum tipo de motivação ou causalidade o espaço simbólico daquilo que, 
          no jogo, se mostra como absoluta gratuidade ou acaso em seu real: algo que permeia, é claro, da 
          política partidária à necessidade de não se pisar em frestas e rachaduras, os mais diversos 
          <em>campos</em> da vida social. 
        </p>

        <p>
          No entanto, o futebol é <em>efetivamente</em> estruturado no caos destes entre-espaços que 
          existem entre um ato e sua interpretação: ele é um jogo coberto de explicações subterrâneas e 
          de acontecimentos que são <em>de fato</em> inexplicáveis sob o ponto do pretensamente racional 
          - do Brasil de 82 à saída do San Lorenzo do Boedo, da fila histórica do Corinthians às finais 
          perdidas por Marta e Formiga, dos 3 vices do América de Cali (causados, é claro, pelo diabo 
          que está no escudo) até os rebaixamentos da Portuguesa. A relação entre necessidade e gratuidade 
          está em jogo, a todo o momento, no futebol: uma coisa é puro acaso até o momento em que não 
          tinha como se dar de outra forma: nada é mais óbvio do que aquilo que não faz aparentemente 
          o menor sentido, posto que pode ser preenchido por tudo.
        </p>

        <p>
          Mas, nessa digressão um tanto quanto mole, torna-se muito interessante pensar o lugar que as 
          religiões cristãs ocupam nesta ecologia do sagrado. Considerando-se que, hoje, sobretudo a 
          partir da matriz neopentecostal, tem-se um discurso em que o religioso está atrelado a uma 
          ética individualista, podemos dizer - na melhor das hipóteses - que o futebol coloca algum 
          tipo de complicação para deus. <em>Não fui eu, foi deus</em>, dedos para o céu e joelhos 
          ao chão: o futebol parece ser, hoje, o esporte dos escolhidos, isto é, daqueles que foram 
          eleitos para passar ilesos pelos mares de pragas e tormentas e fazer uma ou duas assistências 
          depois. Claro, é cômico pensar que, muitas vezes, os eleitos acabam fazendo gols contra os 
          mesmo eleitos, desferindo cotoveladas e prejudicando-se uns aos outros, algo que – 
          aparentemente – não cria nenhuma forma de paradoxo ao pensamento que atrela o maior 
          engajamento ao divino ao maior grau de sucesso individual, profissional e financeiro 
          de determinada pessoa.
        </p>

        <p>
          Essa relação só mostra como a chamada meritocracia de deus - isto é, a ideia de que uma pessoa 
          tem sucesso em sua vida <em>porque</em> seguiu à risca a cartilha cristã - tornou-se uma 
          ética de vida que, também no futebol, encontra campo para criar-se. Estamos falando, afinal, 
          do país em que existem as facções de cristo, dentro das quais os indivíduos se comunicam 
          por meio de versículos, destroem terreiros e policiam costumes em nome <em>do bem</em>. Ao se 
          lançar os termos da vida social - e, portanto, também do jogo - às formas da dicotomia bem/mal 
          e do merecimento individual, o que temos vivenciado é um achatamento no plano de experiência coletivo, 
          reduzido a uma espécie de performance autoegóica em que é necessário crer, a todo o momento, que 
          <em>se é digno do que se é</em> - sendo o outro, portanto, igualmente digno, é claro, só <em>um pouco</em> 
          menos do que você.
        </p>

        <p>
          Está claro que, no caso do futebol, este pensamento individualista faz com que se lancem juízos 
          morais de toda ordem a jogadores como Maradona, Ronaldinho ou Garrincha, isto é, àqueles que 
          conseguiram quase tudo em suas vidas mesmo <em>não o tendo merecido</em>. Naturalmente, este discurso 
          crê conseguir explicar com muita facilidade como esses jogadores tiveram carreiras abreviadas 
          e atribuladas: não seguiram à risca a cartilha, desperdiçaram o dom divino que lhes foi 
          concedido, prefiram a noite, as mulheres, a bebida, etc. Na atual geração que cresceu com 
          duas estrelas pautadas na discrição (muito mais para Messi), na repetição e no trabalho, 
          nunca pareceu fazer tanto sentido esse tipo de discurso: como se, diante de dois exemplos 
          que provam a regra, todas as inumeráveis exceções fossem necessárias.
        </p>

        <p>
          O esvaziamento do discurso que liga o futebol ao merecimento divino parece ser, contudo, 
          limitado pelo próprio jogo. De volta ao vazio simbólico que o acaso e caos propõem à 
          causalidade linear - já que <em>efetivamente</em> pode perder quem mereceu, pode vencer 
          quem não mexeu um dedo, pode sobrar uma bola para o menino da base, pode se lesionar 
          gravemente o craque amado pelas multidões, etc - parece fazer muito mais sentido - 
          ético mesmo, mas também lógico - acreditar nas forças místicas de uma galinha sangrada 
          do que na vontade divina que faz valer seu nome a partir de qualquer direito natural. 
          Como nos movimentos simultâneos que impulsionam o jogo, nenhum eixo unívoca se sustenta 
          diante de um campo de futebol.
        </p>

        <p>
          A bola escolhe os escolhidos, e isso parece ser uma verdade de uma dureza quase lacaniana 
          (o <em>real</em> do futebol é a bola, digamos). Obviamente existe o trabalho diário, a tática, 
          a virtude: mas existe aquilo que está além e/ou aquém da intenção. Chame-se isso de sorte, 
          de mandinga ou de acaso, estamos diante de um espaço imoralizável, de algo que não promete 
          nada além do que entrega, que não retribui nenhum gesto. Mais do que um componente a mais 
          do futebol, isto é o lugar em que ele efetivamente se estrutura, este é o seu teor. Entre 
          dois eventos prováveis no futebol existe não uma causação ou uma moral, mas todo um esquema 
          impossível e indizível entre coisas que são e que poderiam não ter sido. Neste espaço, 
          situemos toda a mandinga, a zica, o azar, a maldição, a sorte, a iluminação ou qualquer 
          outro termo que escolhamos para dar uma forma provisória ao interdito. 
        </p>

        <p>
          Encerrando este texto com outra anedota do futebol baiano, existe um áudio que circulou muito em 
          que se dizia que o Bahia (infelizmente este é meu porto) deveria <em>voltar a ser macumbeiro</em>. 
          Esta fala, para além de conter a ideia de que um time que teve personagens como Lourinho 
          tem uma verdadeira tradição entre os orixás, parece dizer algo um tanto mais profundo: é 
          preciso voltar a encarar o futebol como um embate infinito com o sagrado, é preciso assumir 
          que existe muita coisa que escapa do merecimento e da explicação moral, da divisão entre os 
          justos e os injustos. Cada bola na trave é, e seguirá sendo, uma lição sobre tudo isso.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}