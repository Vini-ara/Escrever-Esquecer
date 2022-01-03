import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function NaoVerOJaVisto() {
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

      <Header handleRedirect={handleRedirect} />


      <section className={styles.wrapper}>

        <div className={styles.backLink} onClick={() => handleRedirect('/ter-olhos-para-ver')}>
          <MdWest size="3rem" />
        </div>

        <h2>Não ver o já visto</h2>
        <hr />

        <p>
          A imensa maioria dos filmes de terror pode ser esquematizada de forma relativamente simples:
          existe a princípio uma situação de normalidade atrelada ao funcionamento regular do mundo – as
          coisas estão em seus devidos lugares –; esta ordem, então, é desestabilizada por uma entidade ou
          evento oriundo de algum outro lugar instável – outro mundo, outra lógica de causação (mágica,
          mística, divina, demoníaca) –; a trama se desenrola no embate entre o conhecido e o desconhecido,
          o normal e o anormal, em busca da restauração ou destruição da ordem; por fim, há um desfecho em
          que um dos lados prevalece sobre o outro, e o normal então redefine seus termos para poder voltar
          a ser ou não normal. Caso aconteça da fonte de estranhamento não ser abafada tanto quanto necessário,
          retornar à primeira casa (criar uma franquia, por exemplo).
        </p>

        <p>
          A popularidade e a longevidade dos filmes de terror são sintomáticas de uma visão que
          predomina nas sociedades modernas ainda hoje: a de que o real pode ser transportado sem
          maiores problemas para o realismo, isto é, que o mundo do cotidiano é o mundo do visível
          e do regular. Com isso, observa-se como os filmes do terror partem quase em sua totalidade
          do lado do normal, justamente para que os sustos/assombros/efeitos surjam a partir daquilo
          que é alheio a esta ordem, isto é, o <em>paranormal</em>: na prática, isto significa que os
          filmes de terror assumem a perspectiva de um nós – a partir do roteiro, do modo de filmagem,
          da empatia criada com os personagens – em oposição a um <em>outro</em>, que não deveria
          estar ocupando o espaço daquilo que tinha até então uma ordem determinada.
        </p>

        <p>
          Em resumo, só pode haver o conceito de filme de terror em uma sociedade estruturada
          a partir de ideias de autoconservação e de identidade (por isso olhemos para a subversão
          do que <strong>Juliana Rojas</strong> está propondo aqui no Brasil, aliás). Desta forma,
          um mundo que deixasse de tentar encurtar a qualquer custo a distância das coisas à
          representação para, neste movimento, propor a ideia de um tipo de arte realista/surrealista,
          seria um mundo que tornaria obsoleto o atual conceito de filme de terror: estaria, afinal,
          abolida qualquer ideia de uma divisão <em>a priori</em> entre nós e outros
          (cultura/natureza, racionalidade/irracionalidade, normal/anormal, por exemplo).
          Radicalizando esta ideia, seria interessante pensar, por exemplo, como sociedades animistas
          lidariam com este conceito de terror com enorme passividade ou incompreensão, já que os
          laços sociais não estão pautados na repetição ou fixação das formas, no visível como
          imediato, no <em>mesmo</em>. Note-se que isso não é um juízo moral sobre quem pratica o
          gênero ou quem o admira (muito menos a ideia de que em algum momento da história as pessoas
          pararão de se assustar com as coisas), mas sim uma mirada sobre qual o tipo de sociedade
          que está gestando certo tipo de filme, e o que um tem a dizer sobre o outro.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1o7q1H5kMmHziv4vRIs-UX904Ha-Zq1Be" alt="tigre" />

        <p>
          <strong>Mal dos Trópicos</strong>, <strong>Síndromes e um Século</strong>, <strong>Tio
            Boonmee</strong> e <strong>O Cemitério do Esplendor</strong> apresentam alguns elementos
          comuns aos do nosso gênero em questão: entidades inexplicadas, causações simultâneas
          que regem as ações, uma relação tensa entre a vida e a morte, algum acontecimento do
          passado que gera relações imprevistas no presente. Não se pode dizer de forma alguma,
          contudo, que se tratem de filmes de terror – e então notemos que questão não é <em>o que</em>,
          mas sim <em>como</em>. Tem-se em jogo nestes filmes, de forma distinta, um tipo de
          relação tensionado entre estes elementos, uma proposição ética que se desenha entre
          observador e observado, e que desestabiliza o próprio esquema que inseriria estas
          histórias do <em>anormal</em> como contraponto necessário para sustentar a lógica
          realista de arte (e de sociedade). Aí estão nossos interesse e ponto de vista no cinema
          de Apichatpong Weerasethakul.
        </p>

        <p>
          Comecemos por <strong>Mal dos Trópicos</strong>. O filme apresenta uma história de 
          amor entre um camponês e um soldado, mediada pelo fato de que há, em determinada região, 
          a existência de alguma entidade (eis o mistério, o elemento que inicialmente surge como 
          exterior à ordem diegética) que começa a devastar os rebanhos e assombrar os moradores 
          da região rural. Na iminência da catástrofe, Tong, o camponês, desaparece subitamente: 
          isto desencadeia em Keng uma busca na floresta por seu companheiro. Cria-se o cenário 
          perfeito para o assombro: há uma espécie de monstro assassino à solta, há um personagem 
          solitário, há uma mata escura. E então? E então o ponto de vista se distorce.
        </p>

        <p>
          O soldado solitário – não depois de muito tempo de um silêncio que gradativamente 
          transforma a tensão em cenário – passa a ouvir a voz da tal fera misteriosa, e ela ao 
          cabo se revela como sendo aquele que foi (é?) seu amante, agora em outra forma física: 
          Keng o ouve, o vê, interage com ele, e essa interação é ainda, substancialmente, o amor. 
          O núcleo dos indivíduos não está na forma, mas em algum outro lugar, e a mudança de 
          corpo do camponês é simplesmente interiorizada pelo filme, passa a fazer parte de sua 
          lógica. Tong deixa de ser uma fera para ser um soldado apaixonado <em>como</em> fera, 
          o filme deixa de sustentar um mistério para redefinir a maneira de dar forma à relação 
          entre os dois. O que permanece em aberto é, assim, se a manifestação sensível do tigre 
          está no plano do imediato – todos o veriam desta maneira porque assim ele surgiria – 
          ou no plano da experiência sensível do soldado – ele o vê e o ouve porque ele o ama, 
          e só por isso. O mistério, portanto, não é o que acontece, mas em que plano está 
          acontecendo. O observador nunca está confortável no lugar de onde olha, porque este 
          lugar oscila, e é esta oscilação justamente o que altera aquilo que está sendo visto, 
          em qual plano qualitativo as formas se manifestam. Multinaturalismo à moda Viveiros 
          de Castro e Tânia Stolze Lima.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1UOu3iLPv-d1QFjTWNk6fI2v7TV2HTOq_" alt="monstro na mata" />

        <p>
          Em <strong>Tio Boonmee</strong> será possível presenciar uma jornada pelas vidas 
          passadas do homônimo personagem, assim como de alguns entes que cercam o núcleo 
          familiar da história. À beira da morte, Boonmee viverá uma jornada não rumo à 
          finitude de seu corpo ou à continuidade futura de sua alma ou de seu legado, mas à 
          descontinuidade das formas que se sucederá à morte, por ter antecedido a vida. O 
          filme, assim, não trata este processo na chave do mito ou da parábola – como acontece 
          em <strong>Sonhos</strong>, de Kurosawa, por exemplo – mas incorpora a multiposicionalidade 
          dos personagens, isto é, sua capacidade de oscilar de um corpo a outro e, portanto, de 
          um ponto de vista a outro (e de vários <em>normais</em> simultâneos em choque).
        </p>

        <p>
          Assim aparecerá a quase amorfa figura de Boonsong, filho morto de Boonmee, 
          presentificado em um corpo enorme e com olhos reluzentes, e que se sentará à 
          mesa junto àqueles que também fazem parte da família, ainda que portando (até então) 
          um corpo humano. Assim aparecerá também a mulher já morta de Boonmee, mantendo então 
          longas conversas com ele, sem que isso cause qualquer espanto ao personagem. Com isso, 
          o espectador passa gradativamente a relativizar tudo aquilo que é visto na tela, a 
          postular em cada forma uma continuidade de outra forma, em cada existência uma 
          continuidade de outra existência: um mundo absolutamente avesso à doutrina cristã 
          da redenção das almas e da hierarquização dos seres, para ficar em algo imediatamente 
          próximo ao público ocidental.
        </p>

        <p>
          <strong>Síndromes e um Século</strong> e <strong>Cemitério do Esplendor</strong> 
          são, por fim, filmes que se desenrolam a partir de tensões entre o Estado moderno – 
          de matriz ocidental, racionalista e ilustrada – e as implicações locais da urbanização 
          das cidades, da industrialização do país. Nunca existem paisagens aqui. O que existe são 
          confrontos em uma racionalidade indiferente às implicações  materiais de seus atos – 
          como medicalizar sua população ou destruir um cemitério ancestral, nos respectivos 
          filmes – e uma realidade que opera há muito tempo em outras lógicas. Nisso tem-se, em 
          Síndromes, a realização simultânea de dois planos de uma mesma (mesma?) história: um em 
          que um monge sonha em ser DJ e pede a prescrição de ansiolíticos para uma médica, outro 
          em que ele encontra na fé o caminho para sua vida (o filme não se decide por nenhum deles). 
          Nisso tem-se, em Cemitério, uma doença do sono que passa a assolar a população de uma 
          região, cuja cura (e cuja causa) está atrelada ao passado do vilarejo – a guerra que ali 
          houve – ao presente – o hospital improvisado na escola diante do cemitério – e ao futuro 
          – a demolição das edificações da região para a construção de uma estrada ou uma linha 
          telefônica: o Estado pode até agir de cima para baixo (e o filme poderia contar esta 
          história, deste ponto de vista), mas suas implicações são horizontais. Nenhum plano 
          simplesmente se sobrepõe ao outro, mas todos os eles são reais e verdadeiros simultaneamente.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1KldQORQtAawXKufoVDRn56h8Co7CoBvG" alt="cena do filme, um homem na cama e uma mulher ao seu lado" />

        <p>
          Neste brevíssimo esquema, em suma, o que se pretende desenhar é uma genealogia 
          do que Apichatpong propõe por meio da linguagem como reflexão para os pressupostos 
          do cinema, e, portanto, das sociedades. Em primeiro lugar, o que parece ser colocado 
          em jogo pelo cineasta tailandês é a necessidade de desnaturalizar o ponto de vista 
          para que se possa enxergar o próprio ponto de vista: o observador é ele próprio parte 
          do enunciado, já que sua perspectiva legitima ou deslegitima determinados mundos, 
          modifica seu estatuto, referenda a voz de alguns personagens, as situando em tempo e 
          espaço. Quando se sabe que, em cena, há uma personagem que, por exemplo, consegue 
          falar com os mortos, deve-se ter em conta a possibilidade de o filme assumir o seu 
          ponto de vista e, portanto, alguns dos personagens estarem mortos no momento presente 
          de enunciação. Quando há um monge em cena, é provável que a causação de mundo em jogo 
          não seja a silogismo, mas a da relação com as vidas passadas e o espaço atravessado 
          pelos tempos. Nunca existe um <em>a priori</em>: a forma cria um ponto de vista, o 
          ponto de vista cria a forma reciprocamente. Este é o jogo.
        </p>

        <p>
          Por isso é tão interessante notar – depois disso tudo que aqui foi descrito sobre 
          feras, espíritos, antropomorfização, vidas passadas – como grande parte do cinema de 
          Apichatpong é cortado por um tipo de realismo acachapante mesmo para os filmes mais 
          comerciais do ocidente. Karaokês, feiras, jantares, idosas fazendo ioga numa praça, 
          flertes, consultas ao dentista e ao médico, banhos de sol, viagens de carro e de ônibus, 
          conversas do cotidiano: tudo isso constitui a maior parte dos filmes do diretor. E é 
          justamente no espaço deste realismo (que não merece esse nome, portanto), sobre sua 
          solidez impressionante, que atravessam as temporalidades, as entidades, as formas, que 
          elas oscilam. Não há distinção alguma entre os registros para além dos pontos de vista: 
          não há o espaço do normal e o espaço do mito, separados como um hoje e um ontem, um aqui 
          e um lá, um nós e um eles. O que há são planos de experiência que fundem a todo o momento 
          estas possibilidades, e que fazem com que nunca se saiba <em>do que</em> é feito aquilo 
          que está sendo visto. Note-se que isto é bem diferente de igualar todas as formas de ver: 
          isto significa assumir posições possíveis para cada uma delas, cada qual em sua historicidade 
          e suas consequências materiais.
        </p>

        <p>
          O grande desafio deste cinema, enfim, não é saber <em>o que</em> acontece, mas 
          <em>em que plano</em> está acontecendo, e <em>para quem</em>. Se alguém surge como 
          morto em cena, deve-se perguntar não o que houve com ela, mas <em>para quem</em> aquela 
          pessoa está morta – já que o vivo é o morto do morto, com perdão do jogo de palavras; 
          se surge um animal em cena, deve-se perguntar <em>para quem</em> aquilo é um animal e 
          <em>para quem</em> aquilo é um humano, e qual o ponto de vista em que nos encontramos. 
          Existe uma deriva constante, assim, entre o que nós vemos como observadores e o que os 
          próprios personagens veem: muitas vezes as coisas não convergem, e chega-se ao radicalismo 
          de três ou quatro pontos de vista – incluindo o nosso – incidirem simultaneamente num mesmo 
          objeto e redefinirem seu significado. Como no famoso exemplo de Viveiros de Castro, o 
          sangue humano também é cerveja, para o jaguar. Nada está dado senão como real, prenhe 
          de afecção.
        </p>

        <p>
          Por isso, a aventura do cinema de Apichatpong é a secreta aventura da construção do 
          normal nas nossas sociedades. Sua antropologia do mundo é, e não pode deixar de ser, 
          também a antropologia do nosso olhar. Nisto está em jogo toda posição de estranhamento 
          sobre o ritmo de seus filmes, a natureza das entidades, a força de seu realismo, os 
          silêncios imensos que emergem, as quebras de narrativa: tudo isso faz parte de um esforço 
          de desnaturalizar o olhar, para que então se possa ver outramente o próprio normal, 
          naquilo ele é imposto e falseado. Trazer os filmes de terror para a discussão foi, 
          justamente, a maneira escolhida neste texto de mostrar que em cada âmbito da cultura há 
          escolhas, e que cada uma delas – mesmo as que se pretendem puro entretenimento, nunca o 
          sendo – têm implicações éticas sobre a maneira como o outro, o mundo, e a nós mesmos, em 
          relação, se veem. Sempre se é o <em>outro do outro</em> e, enfim, é esse o caminho que 
          nos fará poder, um dia, ser o outro de nós mesmos.
        </p>
       
        <img src="https://drive.google.com/uc?export=view&id=1B5NX_xK3urO4D-QhPi6eQB8fBeAlwqq2" alt="homem falado com monge" />

      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect} />
    </div>
  );
}