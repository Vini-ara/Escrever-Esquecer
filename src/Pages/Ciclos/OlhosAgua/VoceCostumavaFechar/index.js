import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function VoceCostumavaFechar() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Você costumava fechar as janelas ao primeiro sinal de chuva"); 

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/olhos-agua')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Você costumava fechar as janelas ao primeiro sinal de chuva</h2>
        <hr/>

        <p>
          Você costumava fechar as janelas ao primeiro sinal de chuva. Você se deitava quebrando-se em frio, mas jamais 
          cedia àquilo que pudesse reconfortar sua pele aflitiva, ou estancar as ondas de seu próprio calor. O ameno do 
          conforto te parecia ferir a alma, mais profundamente do que qualquer coisa outra conseguiria. E naquele sábado 
          em que se soube da menor temperatura já registrada com a maior precisão já conseguida, eu te vi em círculos 
          correr, o corpo nu, querendo ruir a si mesmo, e se deixando em silêncio escurecer, seus dentes se corroendo numa 
          manca espera, em sede do real, de suas retóricas perguntas. Como se tentasse abraçar contra o peito a magra 
          certeza de estar-vivo. Como se quisesse saber se ainda pulsava, como um homem, como um bicho. Você queria que 
          a realidade parisse um filho para dentro de você. Quando nos deitamos na grama pela vez primeira, logo depois 
          de eu te dizer que sim, a fumaça e as palavras se dissipando no ar, você não sorriu nem franziu a testa; você 
          apontou para cima e, com uma ânsia pausada, incontrolável, disse apenas <em>aquelas nuvens, eu as odeio, por inteiro, 
          porque não me geram imagem alguma. Eu não posso cuspi-las, eu não posso comê-las</em>. E desta forma você me disse 
          que nos margearíamos pelo resto de sua vida. Esta sua certeza, a certeza daqueles que veem a morte com os olhos 
          com que veem a si mesmos. Digo que só muitos anos depois compreendi, em verdade, aquelas palavras, quando vi 
          meu corpo se tornar uma barreira para os pedestres do centro da cidade, ancorado no meio da calçada, refratário 
          ao sol que vinha em placas. Digo que só as compreendi no momento em que olhei para os jornais e não consegui 
          discernir quem havia imolado a quem, de qual continente era o país que poria fogo em sua população, qual o nome 
          do general que nos havia imposto uma paz ornada com um laço vermelho, e em que dia. Era impossível. Porque eram 
          aqueles papéis então um bloco sólido, pesado, cimentado por entre as letras, por entre as linhas. Um bloco no qual 
          esbarravam meus olhos, pelo qual eu me perdia em estradas idênticas, durante o qual me escapava qualquer coisa 
          que se parecesse com um sentido, como se eu subitamente me percebesse no meio de – a imagem retorna em ondas – 
          uma cidade estrangeira, em seu idioma inalcançável aos meus braços precisos. Eu passei então a tentar despir cada 
          palavra, lentamente, com os olhos: a compor uma eterna cadência, finita, infinita, finita: e só quando via as 
          costas cruas de uma sílaba, eu conseguia enfim compor seu som, saber que ela não pertencia a nenhum objeto real, 
          a nenhum momento que antecedesse aquele exato instante em que a visão fincava suas trincheiras, e nos repunha um 
          ante outro: cão frente a espelho, livro frente a oceano, sentido frente à palavra sentido. Decompor a lentidão de 
          cada gesto, até do mais veloz. Em cada palavra a fala tímida de uma memória em seus campos amplos, e por isso a 
          carência de seu próprio tempo, de limbo e de sono, para se fazer enfim entender, para me erguer os olhos crus à 
          sua – agora falo de ti– à tua cara insular, que me fazia sempre pensar no que dizer, e com que verdade dizer, ou 
          em que medida eu conseguiria te fazer ouvir, a mim e às minhas próprias palavras. Que vinham apenas em arroubos, 
          em jorros, em explosões. Naquela tarde, com você, as roupas pontuadas em grama úmida, eu me sentia a contar minha 
          mínima vida a uma rocha que já havia vivido montes, vales, fundos de mares no liso de seus anos. Porque você não 
          parecia ter nascido em si, e nada do que fizeste parecia ter sido feito apenas por você, mas te ser sempre 
          anterior. Com o tempo, perdi todos meus acentos. Você perguntava pelo nome de meu avô, você levava meses para 
          resolver uma equação até que acabassem as paredes brancas de nosso quarto, você saía de madrugada para comprar 
          vasos novos para flores antigas, você abria as portas para que conseguisse dormir no calor. Ao cabo de tudo, 
          meus acentos voltaram muito mais fortes do que antes. Ao cabo. Você conseguiu, mesmo sem o saber, mesmo sem saber 
          que eu o sabia. E eu, desde aquele dia, sob aquelas nuvens, passei a habitar a soma dos meus gestos, incontornavelmente.
        </p>

        <p>
          Penso se um dia nos conhecemos de fato. Penso também se é possível de fato se conhecer alguém. Penso no que de 
          real entrega pode estar naquilo que é “boa tarde”, “aceito”, “com licença”, “há você em mim”. Penso na solidez 
          destas pontes fincadas no nada. Penso que em outras o abismo é a própria ponte. Penso no abismo, no que paira 
          em sua atmosfera, que curva, que rei, que vento, que silêncio. Penso em tuas pontes também. Penso em quantas 
          coisas havia por trás do meu pedido convulsivo para que arrancasse minha blusa, minha calça, cada um de meus 
          cabelos. Para que me desprendesse da matéria fria das coisas do universo de onde eu havia me gerado, de onde eu 
          havia me acostumado a gerar. Me sento na grama e penso em qual dessas pessoas em realidade sou, no lume da tarde, 
          eu. Em qual parte do trajeto vivi a maior parte de minha vida. Enuncio o mundo e então sem volta renuncio; 
          calculo a distância entre duas pedras que lancei e ela me parece ser a mesma que há hoje entre eu e você. Em 
          teus olhos, vi o mundo como um reflexo. E por isso jamais pude saber qualquer coisa sobre ti. Senão o que fazia, 
          senão o que odiava fazer. Penso se era isso que você pretendia, ou se, ainda mais assombrosamente, você nunca 
          calculou nenhum de teus atos, e assim simplesmente aconteceu. Penso naquele rio. Nas chuvas que vivem naquele 
          rio. Esta imagem tantas vezes vista, sonhada, escrita.
        </p>

        <p>
          Havia duas árvores em tudo que meus olhos alcançavam. Em nenhuma delas se lia um nome esculpido, se pressentia 
          um fruto saboroso; não eram baobás imensos, nem mesmo arbustos retorcidos e oniscientes; nada indicava ali uma 
          encruzilhada, um portal numa estrada esquecida; negaram os historiadores qualquer indício de seu plantio por um 
          rei persa, ou por um andarilho místico; eram incapazes de trazer de volta de uma morte inexplicável um filho, 
          ou de fazer chover depois do estio. E encontrá-las não me levou para mais perto de ti. Sequer para mais longe. 
          Passei a palma das mãos pelos galhos mais altos que alcancei, pelos troncos surdos, desprendi todas as folhas 
          que consegui e as esculpi numa pilha, esperando disparar com isso um desequilíbrio no universo, fazê-lo pender 
          para algum lado, estancá-lo em seu ritmo perfeito. Andei de uma árvore à outra quantas vezes suportei. E todas 
          as vezes em que chegava, a resposta parecia estar naquela que havia acabado de herdar às minhas costas. Eu 
          volvia. Não estava. Eu volvia. Não estava. Enquanto caminhava, eu senti que talvez aquela fosse a única forma 
          de me lembrar daquele dia, de retornar a ele para poder então continuar a viver a partir dali: distanciá-lo em 
          busca, abandonando tua mão a pendular meu tempo, sucessivas vezes, indo de um lado a outro, naturalmente, sem 
          impulso, sem força, sem ânsia, sem medo, distante, próxima, distante em sua cadência. A resposta estava sempre 
          na árvore oposta. Eu molhava minhas pernas no rio que as separava, e regava a grama com os respingos, inutilmente 
          ainda o fizesse por séculos, esperando que de algum lugar brotasse uma árvore terceira, e que ela quebrasse de 
          vez o impasse, a simetria inóspita daquela imagem. O rio era forrado de pedras, e dava vau. Não mostrava nenhuma 
          pista de como poderia surgir e permanecer surgindo indiferentemente aos três pássaros negros que devoravam o 
          corpo seco de algo que parecia por vezes um boi, por vezes um homem, a depender de onde eu o via. Correr e 
          permanecer ao mesmo tempo: privilégios das coisas reais. Procurei a resposta onde sabia que não a encontraria, 
          e também sei que essa sempre foi a única maneira de se procurar. As nuvens, em silêncio, passavam. Me pareceu 
          então mais preciso viver contemplando as ondas do vazio do que morrer tocando a ponta dos dedos numa resposta. 
          As nuvens choveram, se dissolveram, tornaram. Mas eu era inevitavelmente uma pessoa. Eu me deitei na água e me 
          deixei ir, através das semanas, pelas curvas daquele rio. Meu corpo, exausto, sustentado por cada uma de suas 
          gotas frias, partiu.
        </p>

        <p>
          Quando foi dia, queimei tuas cartas. Guardei no lugar mais seguro as tuas canetas, e com elas escrevi estas 
          palavras. Volta a chover quando este texto termina. No mundo são faladas cerca de sete mil línguas.
        </p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}