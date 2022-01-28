import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Ingenuidade() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Ingenuidade");

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

        <h2>Ingenuidade</h2>
        <hr/>
        <p>
          O aclamado <em>Futebol a Sol e Sombra</em>, de Eduardo Galeano, nunca me pareceu um livro 
          com o melhor dos percursos críticos. Inicialmente, sua premissa é clara e bem 
          construída, as figuras históricas dos anos 1930, 40 e 50 ganham ar mitológico, 
          e as dos 60, 70 e 80 assumem divertido contorno de polêmica, beleza e disputa. 
          A narrativa política é linear, e seu caráter mais nítido se dá pelo triunfo da 
          Revolução Cubana, cuja vitalidade andar par-e-passo com a realização das Copas 
          do Mundo ao longo dos anos. Mais ao fim, contudo, o livro parece começar a se 
          arrastar sem rumo, talvez por uma pressão de editores ou do próprio autor em 
          completar seu arco narrativo com as novas Copas que vão se sucedendo à publicação 
          inicial da obra - já não havendo mais Revolução ou Guerra Fria para se 
          contextualizar o jogo em uma genealogia binária.
        </p>

        <p>
          Com isso, <em>Futebol a Sol e Sombra</em> torna-se aos poucos um relato amargo, 
          uma espécie de trajeto que vai do encantamento e da ingenuidade para a 
          mercantilização e envilecimento gradativos do jogo. Não há redenção 
          possível: o fim do século XX inauguraria a era do falseamento do futebol, 
          ou mesmo do <em>pós-futebol</em> - e qualquer paralelo com uma ideia de pós-história, 
          isto é, do fim da narratividade dos feitos, não parece aqui descabida. 
          Galeano parece partir de uma adulação ao jogo em sua potência política à 
          constatação de que a forma mercantilizada do esporte já não guardaria nenhuma 
          possibilidade revolucionária real: o espelho jogo/sociedade continua vigente, 
          refletindo agora um rosto pútrido e cadavérico de um mundo sem encantamento 
          possível. Por isso, encerramos o livro e concluímos: é isso? Estamos a ler - 
          a constatar - a elegia do futebol, o seu adeus? Seu fascínio estético é uma 
          reminiscência arcaica, como a bola e o gramado ainda são? Ou pior, são o 
          canto da sereia de um esporte que entrega apenas a degradação ética? Gostar 
          de futebol parece ter se tornado, então, para o autor, uma posição 
          política conservadora.
        </p>

        <img className={styles.bigger} src="https://drive.google.com/uc?export=view&id=1YPM8N7Tvd907HTh3sZDdS_KGDKitZNmF" alt="estádio" />  

        <p>
          É fácil, e lógico, entender de onde surge o labirinto de Galeano em seu livro. 
          A cultura futebolística do Rio de la Plata é fundada em elementos que, 
          a outros países e contextos, soam, na melhor das hipóteses, obsoletos.&nbsp;  
          <a href="https://www.youtube.com/watch?v=WAYGPAoTOJA&ab_channel=FutbolLaPasionFutbolLaPasion" 
          target="_blank" rel="noreferrer">Cultura de bairro</a> - como se nota pela desproporção entre os tamanhos de 
          Buenos Aires e Montevideo e seu número de times de futebol, inclusive em 
          relação a São Paulo -, coletivização, apego à história e à seleção nacional: 
          tem-se aí um solo de fundamentos invejáveis, mesmo aos brasileiros, da vida 
          futebolística erguida ao sul. As aventuras míticas do futebol sulamericano 
          se deram nessa base, e a impuseram em seus termos ao mundo, seja nas Copas 
          e Olimpíadas do Uruguai, na seleção de 1940 da Argentina, no enfileiramento 
          de títulos do Independiente, na batalha campal entre <a href="https://www.youtube.com/watch?v=DR3s5hFnKkM"
          target="_blank" rel="noreferrer">Racing e Celtic</a>, na 
          construção dos colossos hoje quixotescos de Nacional e, sobretudo, Peñarol. 
          Essas coisas que, como o telégrafo ou o gramofone, parecem hoje aos incautos 
          enormes quinquilharias sem destino, depondo contra si mesmas por sua 
          enorme forma material.
        </p>

        <p>
          Como brasileiro e como baiano, imagino Galeano a observar o surgimento 
          gradual de um futebol sem milonga, sem apego a origem e forma, sem bairro, 
          enfim. A narrativa do supermercado de Boedo, ponto alto do livro do uruguaio, 
          é uma grande celebração - ainda na fase "encantada" da obra - da 
          determinação que a origem deveria impor ao jogo. Sintomaticamente, 
          nosso escritor morre antes que o San Lorenzo tenha <a href="https://www.youtube.com/watch?v=LeKubJNwFHA"
          target="_blank" rel="noreferrer">conseguido retornar 
          a seu bairro</a>, reconquistando o terreno espoliado pelo enorme supermercado 
          - nos dois sentidos da palavra.
        </p>

        <p>
          Está claro, assim, que o dilema do desencanto de Galeano é muito similar 
          ao paradoxo brasileiro do jogo bonito, do arcaísmo de Garrincha, da 
          derrota em 1982: o não-lugar do jogo inventivo diante de sua racionalização 
          e otimização pelo mercado. Esse dilema - que é também o do Cinema Novo, 
          o da <a href="https://youtu.be/-IHORuI_Uts?t=665" target="_blank" rel="noreferrer">
          Tropicália</a>, o da Semana de 22... - é o da dobra em que se poderia 
          construir algum tipo de civilização feliz, que respondesse, em seus 
          termos, às civilizações desalmadas e frias do norte, em sua cortante 
          funcionalidade. No futebol, essas civilizações do norte - como o 
          próprio Galeano aponta junto a Wisnik, por aqui - transformaram o 
          futebol em <em>commodity</em>, em relação <em>trabalho x tempo</em>, muscularizando e 
          taticalizando o que se dá dentro do campo. Neste sentido, não seria 
          exagero dizer que fomos recolonizados, que nossa ingenuidade foi 
          dilapidada uma vez mais na história.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1sSo_VSQoLGQj8Zqyzd9X4zpMaYvE9JV7" alt="goleiro" />  
        
        <p>
          Mas talvez estejamos em uma falsa alternativa infernal: não uma encruzilhada - 
          suspensão da oposição em prol da relação -, mas um dilema - em que os lados 
          tentam subtrair-se um ao outro. O problema de imaginar que o futebol tenha sido 
          corrompido passa por dois principais pontos de contestação principais: o primeiro 
          seria assumir que o lado de fora do jogo tenha suprimido completamente o lado de 
          dentro, privando de qualquer legitimidade a experiência estética de ver, jogar e 
          viver o futebol; o segundo, seria acreditar que o futebol tenha sido, em algum momento 
          da história, propriamente incorruptível, ingênuo, puro.
        </p>

        <p>
          Sobre o primeiro ponto, muito se falou nestes textos até agora. Em suma, parece 
          um tanto absurdo imaginar que qualquer elemento econômico ou político tenha a 
          capacidade de suprimir a materialidade radical do jogo de bola: justamente, isso 
          passa por se afastar de qualquer definição reducionista de materialismo em que o 
          corpo seria uma abstração necessária para a história como discurso. Para o futebol 
          que vige no agora, troquemos a metafísica pela ontologia e teremos uma textura que, 
          mesmo em negação, não se apaga. É isto que aqui se tem - como os pecadores de Dante 
          que eternamente lutam uns com os outros dentro de um rio - defendido.
        </p>

        <p>
          Passemos então para o segundo ponto - que é pressuposto do primeiro, é claro. 
          O discurso sobre a ingenuidade corrompida do jogo parece similar àquele que 
          via/vê nas sociedades "arcaicas" alguma forma de pureza a ser retomada. 
          Evidentemente, esses discursos tendem a originar formas de nacionalismo 
          ou conservadorismo que em nada são ingênuas. Note-se, por exemplo, que 
          não é dado surpreendente que o futebol competitivo surge - como tudo 
          no século XX - com recorte de raça e classe muito bem estabelecido: 
          a afetividade presente no jogo deve ser, portanto, observada também 
          ao redor deste processo, e depor neste sentido. Pensar nos primórdios 
          do futebol é pensar nos primórdios da complexa relação de violência 
          que o atravessa e se reatualiza naquele entre-espaço, encarnada na 
          forma daqueles que jogam, nos nomes que se admitem ali, nas figuras 
          que financiam os locais, uniformes, competições. Nos olhos que 
          ignoram ou observam.
        </p>

        <p>
          O encantamento puro é apenas a própria distância, ou a própria 
          presença. Mas como imaginar que distância e presença não possam 
          se constituir senão em relação?
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1cR8Uu6yNXJ0yn3RpY30h7H-wvK3thHfM" alt="goleiro" /> 

        <p>
          O arco crítico que devemos fazer é, portanto, não da ingenuidade à mercantilização, 
          ou da pureza ao mito perdido. Suprimir a complexidade do passado é negar a dialética 
          ao presente: nisto se nega tanto a violência fundante ao jogo, quanto a potência 
          presente do corpo que, por causa e/ou a despeito da financeirização do esporte, se 
          encanta por ele e escolhe moldar a ele seus gestos, sua corporalidade.
        </p>

        <p>
          Penso, por exemplo, na(s) imagem(ns) que ilustra(m) este texto, em recente edição 
          da página espanhola Nostalgia Futbolera. Aí se vê Lev Yashin, conhecido - 
          inclusive por muitos que jamais o viram jogar - como o <a href="https://www.youtube.com/watch?v=Crdat6VM2HA"
          target="_blank" rel="noreferrer">melhor goleiro da história</a>, 
          comemorando um gol da União Soviética no Parc des Princes em Paris. Quando do 
          aparecimento da foto, muito se falou sobre o privilégio de se ver em cores o mítico 
          uniforme preto que o fez ser conhecido como Aranha Negra, criado sob o pretexto de 
          iludir a visão dos adversários ao confundir-se com o fundo do estádio - algo que 
          hoje não encontra existência nos carnavalescos uniformes de goleiro. Também muito 
          se falou sobre a estrutura simples do hoje imponente estádio, completamente 
          recaracterizado pelo dinheiro oriundo do Catar, que impõe fluxo e existência ao 
          futebol mundial financeirizado, sediando e mudando o mês histórico da Copa do 
          Mundo de 2022. Nos dois casos, a comparação é - como o título da página que a 
          coloriu alude - nostálgica: o passado só existe como perda e saudade – por isso 
          deve ser apreciado –, e o agora é um tempo falseado e destituído de 
          legitimidade própria.
        </p>

        <p>
          Mas olhemos então para o todo da foto. Em meio aos numerosos anúncios que denotam 
          - desde o pós-guerra - como a financeirização do futebol é um fenômeno inerente 
          à sua própria profissionalização, encontra-se um especialmente sintomático: 
          justamente sobre Yashin, mostra-se um anúncio da Banania, companhia que até a 
          década passada vendia um tipo de bebida achocolatada em pó que <em>donne des forces</em> 
          a quem consumisse seu cacau vindo diretamente dos trópicos - reais e imaginários. 
          A empresa patrocinou oficialmente os Jogos Olímpicos de Paris em 1924 e algumas 
          edições do Tour de France, já mais recentemente, o que demonstra sua força 
          institucional e sua presença no imaginário europeu.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1H2xGVR1Ai_aWoiO43O_0o6dgiskQQaqY" alt="logo Banania" /> 

        <p>
          Na foto, além do logo da marca, vê-se claramente a figura do <a href="https://www.youtube.com/watch?v=ME28UJJlC58"
          target="_blank" rel="noreferrer">Ami Y'a bon</a>. Criado em 1925, 
          o símbolo da marca foi - por décadas a fio - este desenho representando o mais comum 
          dos estereótipos coloniais: o negro sorridente, de olhos, nariz e boca enormes, jeito 
          folgazão e desleixado. Para além disso, nosso <em>ami</em> apresenta um chapéu típico das 
          tropas coloniais francesas que atuavam em território africano, particularmente 
          no Senegal e no Marrocos, e que preenchiam todos os dias a comunicação institucional 
          do governo e o imaginário popular sobre aqueles que sujeitos reduzidos a 
          máscaras de si.
        </p>

        <p>
          Sobre o <em>Ami Y'a bon</em> já se falou longamente. Figuras do porte de 
          Leopold Senghor e Franz Fanon, por exemplo, apontaram como foi o símbolo desta 
          marca um das grandes responsáveis por veicular estereótipos raciais na França, 
          fomentando um imaginário colonial que retroalimentava empreitadas coloniais em 
          nome da civilização - a Banania, claro, se valia e atuava nas duas partes deste 
          processo. O estereótipo do negro bom e lascivo dividia palco com o do negro mau e 
          selvagem, ambos patologizando a diferença em prol da reafirmação do mesmo: 
          removendo a história das pessoas e lugares que não tinham o direito de 
          chamar-se com nome algum.
        </p>

        <p>
          Yashin, o símbolo daquilo que se chamaria de futebol clássico e mítico, é portanto 
          iluminado pelo <em>Ami Y'a bon</em>, símbolo do colonialismo que é, ele mesmo, chave 
          para se entender a financeirização também do futebol – algo que a própria 
          imagem depõe. Os processos se complexificam, se dobram uns sobre os outros. 
          O arco da história - dos povos ou do futebol - não é polarizado, mas dialético 
          em cada um de seus estágios. A imagem é, em si, um testemunho da distância 
          enorme e, ao mesmo tempo, ínfima do presente ao passado: do preto do uniforme 
          ao negro do desenho existe todo um campo de relações, que a imagem não cessa 
          de colocar como absurdas - ideologicamente - e como harmônicas - na própria 
          composição das cores da imagem, e nos símbolos que elas podem vir a 
          representar.
        </p>

        <img className={styles.bigger} src="https://drive.google.com/uc?export=view&id=1t1lDUQn5H4U-V9RyE4SBw4jfG43cE_8q" alt="sombra" /> 

        <p>
          Para pegar a imagem de Galeano, que abre este texto e de onde partimos, <em>o sol e a sombra</em> do 
          futebol não são oposições, mas consequências do ponto de vista para o qual se olha para o jogo. 
          Eles se engendram. Pela sombra, induz-se a presença do sol; pelo sol, deduz-se a existência da 
          sombra. A chave para se pensar o futebol como discurso não reducionista da história é, 
          justamente, recompor e não dar por encerrado em nenhum momento o campo de relações e os 
          pontos de partida que estão intrincados em cada instante em que o jogo, enfim, se mostre 
          vivo no fluxo de suas imagens.
        </p>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}