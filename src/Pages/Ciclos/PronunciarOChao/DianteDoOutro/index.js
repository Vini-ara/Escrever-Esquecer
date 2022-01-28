import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function DianteDoOutro() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Diante do outro, em nome de si");

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

        <h2>Diante do outro, em nome de si</h2>
        <hr/>

        <p className={styles.center}>*</p>

        <p>
          Torcer pelo time que seria, em tese, o mais fraco parece ser uma tendência histórica 
          do brasileiro. Daí se origina a quase ofensiva simpatia que grande parte dos amantes 
          de futebol tem com Portuguesa ou Botafogo, daí se observam episódios o <em>olé</em> com o Taiti 
          na Copa das Confederações de 2013 ou o certo apreço que os sudestinos guardam a 
          determinados clubes do Nordeste. Mas, para além de juízos morais mais evidentes e 
          reducionistas, parece muito estranho que uma sociedade que - historicamente - 
          tenha sempre torcido pelos mais fortes (e basta ver como o mito da meritocracia 
          é substancialmente enraizado nas classes baixas e médias) guarde um espaço 
          particular para incorporar o nome do mais fraco ao seu. Como é possível que a 
          sociedade do punitivismo mais tacanho e midiático seja também aquela da empatia 
          imediata àquele que se identifica como inferior?
        </p>
        
        <p>
          A questão é espinhosa, em primeiro lugar, porque parece ser antinatural. 
          Onde estaria o problema em apresentar um comportamento cuja única intenção 
          parece ser compensar alguma forma uma desigualdade? De fato, não haveria 
          problema algum se os termos da questão fossem reduzidos a isso – e vejamos por 
          exemplo como a justiça restaurativa tem penado para estabelecer-se como campo 
          de atuação. Por isso, o problema é, antes de tudo, de princípios: justamente 
          se estamos diante de um discurso engajado ou meramente cínico nesta pretensa 
          compensação.
        </p>

        <p>
          Volto às imagens do Taiti sendo humilhado um ano antes da Copa do Mundo do Brasil. 
          A torcida aplaude, a torcida vibra, a torcida vaia os adversários, a torcida - 
          diante do placar previsivelmente desfavorável - age como se a seleção da Oceania 
          estivesse a golear. Os jogadores aprovam a maneira como a torcida brasileira os 
          adota, os jogadores sorriem para as fotografias, e agradecem. O jogo finda, a 
          seleção europeia vence como sempre, as coisas terminam em seu devido lugar. Qual 
          é, então, a moral em jogo neste episódio? Qual estrutura terá sido de fato movida 
          em nome do mais fraco?
        </p>

        <p>
          A ideia que quero defender é que, muito antes de simpatia, a defesa do mais fraco 
          parece ser - muitas das vezes, frise-se – a reiteração da posição de si próprio 
          como mais forte, como digno de adotar alguém que lhe pareça inferior. Existe, 
          portanto, um instante de reconhecimento (que, na verdade, é construção) da fraqueza 
          do fraco, isto é, o instante em que uma pessoa ou grupo de pessoas, notando-se 
          superior(es) a outra pessoa ou outro grupo, pode ter dó ou piedade para, então, 
          forjar algum tipo de engajamento. Algo que está na chave de grande parte da 
          moralidade da filantropia ou da caridade.
        </p>

        <p>
          Torcer pelo mais fraco para afirmar-se como mais forte significa não considerá-lo 
          digno de efetiva comparação consigo. Observe-se, por exemplo, como este tipo de 
          comportamento está ligado a variáveis como: o fraco não pode estar em confronto 
          consigo; o fraco não pode demonstrar ter potencial ou a iminência de tornar-se 
          forte; o fraco não pode ter semelhanças com aqueles que você considera fortes, 
          etc etc. Estamos, portanto, diante do discurso do cinismo. É preciso gostar - 
          não amar, apenas gostar - do fraco para poder humilhá-lo, e é preciso que este 
          gostar não ocupe um tempo excessivo 	
        </p>

        <p>
          Torcer pelo fraco é, aqui, apenas uma face a mais do horror à fraqueza que nossas 
          sociedades não cansam de - estética ou politicamente - manifestar.
        </p>

        <p className={styles.center}>*</p>

        <p>
          Torcer pelo time que, aparentemente, é o mais fraco parece ser uma tendência histórica do 
          brasileiro. Daí se origina a ampla simpatia que grande parte dos amantes de futebol 
          brasileiro teve pela equipe do Leicester ou da Chapecoense, daí se origina a 
          necessidade que - em contextos exteriores ao nacional - sempre se veja uma 
          esmagadora maioria de pessoas torcendo contra o time mais rico, ou pelos 
          jogadores de seu continente. Para além de juízos morais mais evidentes e 
          reducionistas, parece muito estranho que uma sociedade que - historicamente - 
          tenha sempre torcido pelos mais fortes (e basta ver como o mito da meritocracia 
          é substancialmente enraizado nas classes baixas e médias) guarde um espaço 
          particular para incorporar o nome do mais fraco ao seu. Como é possível que a 
          sociedade do punitivismo mais tacanho e midiático seja também aquela da empatia 
          imediata ao inferior?
        </p>

        <p>
          A questão é espinhosa, em primeiro lugar, porque parece ser antinatural. Onde estaria 
          o problema em apresentar um comportamento cuja única intenção parece ser compensar 
          alguma forma uma desigualdade? De fato, não haveria problema algum se os termos da 
          questão fossem reduzidos a isso – e vejamos por exemplo como a justiça restaurativa 
          tem penado para estabelecer-se como campo de atuação. Por isso, o problema é, antes 
          de tudo, de princípios: justamente se estamos diante de um discurso engajado ou 
          meramente cínico nesta pretensa compensação.
        </p>

        <p>
          Volto às imagens da comoção causada pela Chapecoense até o instante de um dos maiores 
          anticlímax já vivenciados no esporte. O que se viu ali foi um verdadeiro engajamento 
          em nome do time de ascensão meteórica, jogadores carismáticos e orçamento curto 
          diante de gigantes como San Lorenzo ou Atlético Nacional - ambos recém-campeões 
          sul-americanos. Ao redor do Brasil, milhares sabiam o horário dos jogos ou o nome 
          dos atletas do time catarinense, passando a encarnar aquela luta como parte de sua 
          luta própria - e um tanto mais quando o acaso jogou seus dados e deu-se o que se 
          deu, na velha resposta da história, tão comum por essas bandas: um enfático <em>não</em>.
        </p>

        <p>
          De fato, não podemos chamar, de forma alguma, este discurso de cinismo. 
          O que parece estar, literalmente, em jogo é aqui muito mais uma espécie de 
          pacto entre aqueles que se reconhecem como estando na <em>parte dos sem parte</em>: 
          como se a partir do logro daquele que é visto como igual estivesse a semente - 
          ou a possibilidade - do próprio logro de todos os seus pares. Como se no ato de 
          torcer estivesse algum tipo de remota e secreta participação no êxito daquele que 
          em nada te diz respeito diretamente, mas que - como você - está do outro lado 
          de um cerceamento. 
        </p>   

        <p>
          Por isso, torcer pelo mais fraco para <em>reafirmar-se também como fraco</em> 
          significa projetar um cenário em que toda sua classe será considerada digna 
          de nota ou de comparação. Eis a diferença da solidariedade à filantropia que 
          está na gênese do próprio torcer. Torcer é como, em determinadas ontologias, 
          rezar: isto é, como observar a semelhança da substância divina repartida entre 
          todas as coisas, sendo elas assim dignas de intenção e vida. 
        </p>

        <p>
          Observe-se, ao cabo, como diversos times buscam assumir-se como <em>time do povo</em>. 
          Como, em verdade, a partir de chacotas sobre a classe social de determinadas 
          torcidas - <em>gambás, mulambos, presidiários, macacos</em> -  o sentido do 
          insulto foi revertido em identificação. E então torcer para o time do povo torna-se 
          torcer para uma sorte melhor para si próprio e para aqueles que possam parecer-se 
          consigo em suas demandas e violências, naquilo que o indivíduo, o grupo e a 
          instituição convergem como ferida aberta e como potência de cicatrizar. 
        </p>
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}