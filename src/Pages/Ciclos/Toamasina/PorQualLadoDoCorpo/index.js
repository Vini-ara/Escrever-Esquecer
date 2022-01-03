import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function PorQualLadoDoCorpo() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Por qual lado do corpo se começa a conhecer uma pessoa</h2>
        <hr/>
        <p>
          <strong>Por qual lado do corpo se começa a conhecer uma pessoa?</strong> Ou por qual lado de sua voz? Existe voz dentro 
          de uma pessoa? Existe mesmo a pessoa por baixo da voz? 
        </p>

        <p className={styles.end}>
         <em>Eu nunca pensei sobre nisso.</em>
        </p> 

        <p>
          Ou por qual de suas palavras? Você escapa de mim, e escapará sempre. <em>Eu</em> sei disso, mas, e mesmo por 
          isso, <em>eu</em> te persigo. Como uma raiz que afunda na terra, indefinidamente. Ou como uns olhos que, a 
          despeito do horror dos dias, insistem em figurar nas nuvens um contorno. Isto <em>nunca</em> vai ter fim. Não 
          procuro razão nas sementes, nem intenção na chuva. Não enxergo na vida qualquer propósito. Sei que passa também 
          por isso – e neste século mesmo digo – o amor. O que <em>eu</em> chamaria, é verdade, de amor. Um esforço gratuito 
          de fazer com que o corpo valha todas as suas penas. Que não cessam jamais de se revelar, de nos impor aquilo que 
          os desavisados sussurram com as costas das mãos, pelo negativo: sim, o amor é um destino. 
        </p>

        <p className={styles.end}>
         <em>É verdade.</em>
        </p> 

        <p>
          Um dentre nossos múltiplos e minúsculos destinos. Caules, gemas, nossa vida: isto. Arroios que percorremos, 
          todos os dias: que, arremessados de sonho a sonho, cumprimos. Não como um fardo ou um fim pressentido, mas como 
          uma partitura, cumprimos. Como plantar uma roseira e não adivinhar jamais a cor de suas flores, ou a direção de 
          seus ramos; mas saber, ao mesmo tempo, que dali não sairá nenhum fruto suculento. Somos, nós mesmos, nossos corpos, 
          essas plantas verborrágicas. Nos ramificamos a partir de um empuxo, a partir do dia, da cara que ele assume, de seu 
          humor, de seus percalços. Este é um longo trajeto. Longo e decisivo. O movimento que fazemos para existirmos e 
          continuarmos existindo. Somos todos, todos nós, isso tudo. Expostos ao que nos surge sem fala, sem rótulo, sem 
          título. Ao que nos brota difuso na carne do corpo, e na curva fria da memória. Ainda, e justamente por isso, no 
          cume das horas, <em>eu</em> te persigo.
        </p>
        
        <p className={styles.end}>
         <em>Sim, sem açúcar.</em>
        </p> 

        <p>
          Do lado de fora, dobrado numa forma, sem que persista um único vestígio do caminho, esta história ourobórica de 
          como ainda amamos. Vemos uma planta, passamos nela os dedos, eventualmente sentimos seu gosto, esporadicamente nos 
          lembramos de seu cheiro. Temos aí a forma. Temos as rugas e as cores que permanecem absurdas, mesmo quando decoramos 
          seus nomes possíveis. Mas <em>nisto</em> vivem nossos olhos apenas, <em>eu</em> insisto. <em>Nisto</em> estão ausentes 
          as luzes, os minerais, os obstáculos, toda a aleatoriedade que convergiu para que se chegasse ao exato instante em 
          que a forma se impõe como mais um porto para os barcos dos sentidos. <em>Nisto</em> impõe-se a planta em sua distância 
          redigida, não, cartografada na ponta de nossos ossos. Reconhecer esta distância – mesmo no bojo deste século irônico e 
          esclarecido – é assegurar a existência do que eu chamaria – sem nenhuma forma de cinismo - de amar.
        </p>

        <p className={styles.end}>
         <em> E eu diria até cinco.</em>
        </p> 

        <p>
          Mas há ainda outra distância, <em>eu</em> diria. Há ainda aquela que se impõe entre o que sabemos e o que não 
          cessa de se tornar outro. Nisto temos sido seres-humanos. Nesta violência em que se lançam as coisas umas contra 
          as outras. No meio de todas elas, na crueldade que usamos para tentar dar conta. Para pensarmos, simplesmente matamos. 
          Dizemos “você não costumava dançar desta maneira”. Dizemos “eu entendo o que você está sentindo”. Dizemos “aconteceu em 
          um dia de domingo”. Dizemos “esta árvore é natural de Madagascar, sendo, portanto, uma espécie intrusa”. A distância é 
          para nós a negação de leis naturais que inventamos. Faz com que procuremos negá-la, ou torná-la absoluta. Faz com que nos 
          calemos por anos, ou que corramos os túneis a gritar com os mortos. Faz com que o destino assuma facetas cruéis, torne-se 
          então uma faca de duas pontas onde, desesperados e aflitos, sem escolha alguma, nos ferimos.
        </p>

        <p className={styles.end}>
         <em>Este passa no centro?</em>
        </p> 

        <p>
          E, no entanto – hoje sinto –, que é apenas com esta perda que se pode fazer o que quer que seja. Ela é o resultado 
          de qualquer procura. E se a perda foi o que me levou até você pela primeira vez, é ela o que, depois de todo este 
          tempo, ainda segue a me fazer voltar. Desde o princípio, e ainda antes, tudo é perda, e tudo tem sido. Não há por que 
          crer que somos diferentes de todas as outras coisas que existam. É a perda que me levará a pontos de ônibus, a outros 
          países, a diálogos sobre um <em>filme</em> oriental em película, a mesas solitárias nas margens da cidade fria. Noutras 
          tardes tão parecidas, será também ela que me fará ouvir canções angolanas, rever filmes já antigos, e te dizer o que me 
          parece ser <em>seu</em> neste impulso em que me traço e me pertenço. Mas a perda não é a falta, eu insisto, e não se 
          parece um único instante com isso. Então percebo que, sim, aprendi algo definitivo. Ora, é claro que me repito. Como se 
          repetem as letras nas páginas de um livro, as pausas em uma canção, os frutos numa árvore frondosa em um dia faminto. 
          Pois é isto, outra vez, o destino: isto. Eu escolhi estar aqui e, em um instante inatingível, eu nunca escolhi estar.
        </p>

        <p className={styles.end}>
         <em>Não me disse nada naquele domingo.</em>
        </p>

        <p>
          As florestas, quando as sobrevoamos nas noites insones, quando as vimos refletidas no céu estrelado, se moviam para 
          perto e para longe ao mesmo tempo, para dentro e para fora de si mesmas. Eram inapreensíveis, as florestas, fundando 
          aos nossos olhos também um destino, uma beira: ainda a perda. Você dormindo se move para longe e para perto de mim, 
          da mesma maneira. Você balbucia palavras que desconheço, você esboça gestos ainda inéditos, seu corpo é como um eco 
          que ressoa a si mesmo. Disto escolherei não <em>me</em> esquecer, mesmo que saiba da inutilidade deste desejo. O que 
          restará decantado, no fundo de minha cabeça, quando um dia isto tudo finde? O que me permite ignorar a ausência de 
          certezas e seguir a esperar que em minhas mãos algo permaneça, ao menos como risco, até o fim de meus poucos dias? 
          Se o vazio for mesmo onde se erguem todas as catedrais e savanas, se de fato é em um ponto surdo que te ouço e te 
          pressinto, e se é pelo espaço que se iniciam todos os gestos, como posso <em>não</em> trair a tua existência no instante 
          em que sou fiel a meu desejo?
        </p>

        <p className={styles.end}>
         <em>Eu pensava exatamente sobre isto.</em>
        </p>

        <p>
          Por isso desconheço teu corpo. Não sei ao certo onde situá-lo nisso tudo. Não posso supor que ele comece exatamente 
          onde terminam minhas mãos. Como não há continuação visível entre terra, folha, semente, e fruto. É tudo distinto, e 
          é tudo também o mesmo. Seu corpo começa onde começa meu destino. Isto é, no curso de minha vida, mesmo naquilo que é 
          totalmente alheio à sua existência, mesmo naquele espaço em que minha vida não se deu ainda. <em>Eu</em> não sei onde 
          fica esta encruzilhada. E não sei sequer em que <em>pensava</em> quando parti em busca de situá-la em mim, em ti, ou 
          no mundo. A busca é o outro, sempre foi e sempre deveria ter sido. Seu corpo acaba também onde começa meu destino. <em>Eu</em> não 
          sei o que te digo.
        </p>

        <p className={styles.end}>
         <em>Ainda bem.</em>
        </p>

        <p>
          Assim como incontáveis coisas nascem todos os dias, nós não falamos porque queremos dizer algo. Nós dizemos. 
          Lançamos sementes a esmo no mar, nas pedras, nas nuvens, nas fogueiras. Aqui estou diante de ti nesta noite. 
          Diante de mim você tem estado ao longo de dias incontáveis. Ao redor de nós, vive e morre neste exato momento cada 
          parte deste planeta, também aqui onde estamos agora. E o que temos é o resto inominável disso tudo, o que permanece 
          sem ser corpo nem voz nem dia. Sem nome que se ancore.
        </p>

        <p className={styles.end}>
         <em>Pode falar.</em>
        </p>

        <p>
          E não haveria por que se lamentar disso. Como não há por que lamentar que não estejamos, em cimento e ossos, 
          em todas as partes insondadas e cruas da terra. É esta a fundação de nossa casa: que, diante de uma luz imprevista, 
          a desconheçamos. Não há por que lamentar-se disso. Como também não sei por que digo o que te digo, e unicamente me 
          ponho a falar. Perder é minha escolha e, aqui, mais um dia te perco, e nós nos perdemos, e todos se deixam diariamente 
          obliterar. E o que há além desta escolha é, unicamente, lutar em vão contra o que quer que se chame de vida. O mar é 
          grande, incontáveis são as florestas, e tanto maiores quanto mais perto delas. Sinto teu corpo sob meus dedos e emudeço: 
          é uma terra estrangeira em que, há séculos, vivemos. E é também o agora, ato e ausência em si mesmo.
        </p>

        <p className={styles.end}>
          <em>
            Mas como dizer que sua dor é a minha sem que eu diga que é meu o seu corpo? Como dizer que eu sei o que você 
            sente sem que eu tenha agora o seu nome? Como é possível se sentir em casa quando o mundo apodrece e renasce a 
            cada segundo dentro e fora de seus olhos? <span>Eu</span> não sei o que é uma pessoa e muito menos o que são 
            duas. <span>Eu</span> não sei que Estado é este que acidentalmente criamos juntos. <span>Eu</span> não entendo 
            onde se escrevem e sobre quem agem essas leis. <span>Eu</span> permito que você me ame. Nisto está dada enfim uma 
            resposta ou uma diretriz? Isto instaura uma normalidade diante do absurdo que é dizer <span>eu</span>? Isto cria um 
            acontecimento à beira do abismo? Cessarão de nascer as plantas nas quinas da casa apenas porque nós nos amamos? No 
            fundo, isto é sobre como pode ser possível ser e não ser real. Sobre como sentir é algo virtual, mas que se forma apenas 
            debaixo de rios de sangue. São reais as florestas que nunca vimos? São reais as canções que nunca tocamos? Estão mortas 
            as pessoas das quais não mais soubemos? Todos têm uma resposta definitiva para isso. O corpo, no entanto, segue sem alegar 
            os seus motivos. <span>Eu</span> permito que você me ame. <span>Eu</span> ordeno que você me ame. <span>Eu</span> prometo que 
            nascerão as sementes. <span>Eu</span> juro que meu corpo reage a teu corpo. E eu o digo sem nenhum remorso: mas, e então? O 
            que é uma pessoa, o que podem ser duas? O que podem ser duzentas e cinquenta? Ou duzentas milhões? Se me parece impossível 
            falar sobre <span>eu</span> e você, como se pode falar de um bairro ou de um país? Por que frestas, fendas e nós passa minha 
            voz? Resvala esta voz em algum dos corpos que ela tenta alegar ou defender? Você está me escutando agora? Com quantos absurdos 
            se faz um precedente? Deve haver algo entre as pessoas que não sejam apenas os empurrões em escadas estreitas ou os insultos 
            em avenidas empoeiradas. Deve haver algo entre <span>eu</span> e você que não seja o intervalo em que um corpo cede seu espaço 
            a outro corpo. Que mediação impossível é esta? <span>Eu</span> te permito amar outra pessoa. <span>Eu</span> ordeno que você 
            ame todas as pessoas que existam. <span>Eu</span> prometo que todas as plantas te amarão. Parece que os dias nada nos ensinam. 
            As florestas amam umas às outras? Os cães preenchem seus coitos com amor? Amam os cães as florestas? O mundo parece ter passado 
            muito bem sem esses problemas. Sem que o corpo e o corpo se diferenciassem em um sopro. As flores não são vermelhas azuis ou 
            amarelas salvo se as imaginamos em nossas mãos ou nas mãos de quem nós amamos. (Nas demais mãos sequer imaginamos). Têm irrompido 
            animais que voam, que nadam, que rastejam, que pulam, que correm, que escavam, que hibernam, que morrem. Têm rebentado plantas que 
            beijam o sol, que não se descolam do solo, que naufragam na noite da terra, que formam bulbos, estipes, folhas, espinhos, pecíolos, 
            e que morrem. Independentemente destes nomes que <span>eu</span> aqui elenque, mas sem os quais você não entenderia o 
            que <span>eu</span> estou pensando agora. <span>Eu</span> ordeno que você entenda. Pisamos no mundo e falamos o mundo, 
            e ele não parece carecer de nossas vozes. O que é uma pessoa? O que são duas ou duas bilhões de pessoas andando sobre o 
            mundo e sendo-o?Por onde começar a procurá-las? <span>Eu</span> ordeno que você esqueça.
          </em>
        </p>
        
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}