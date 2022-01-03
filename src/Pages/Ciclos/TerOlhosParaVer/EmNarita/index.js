import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function EmNarita() {
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

        <h2>Em Narita</h2>
        <hr/>

        <img src="https://drive.google.com/uc?export=view&id=1tzd06U0PA3-rJDpg6wO8DCd6NK6400Ff" alt="policia parando um homem"/>

        <p className={styles.center}>*</p>

        <p>
          O homem de roupa marrom, olhos tensos, mão cerrada sobre o porta-malas de um carro branco esportivo e diante de um 
          policial - do qual apenas se pode ver as costas - não é meu pai. Não sei o nome deste homem, não sei onde nasceu 
          e nem mesmo se foi em um 25 de março, como meu pai. Não sei se é brasileiro ou mesmo "ocidental", não sei o que 
          faz no Japão - e neste lugar específico do Japão - e tampouco sei por que é interpelado por um policial.
        </p>

        <p>
          O que sei é que este homem - ainda que muito parecido e, ainda que estando no mesmo lugar, no mesmo ano, 
          no mesmo mês em que meu pai esteve - não é meu pai.
        </p>

        <p className={styles.center}>*</p>

        <p>
          E então nos vemos já em um campo de relações. Aquele homem e meu pai estão, a partir de agora, unidos. 
          A partir, em verdade, da experiência que o mundo exterior motivou em mim. E que eu motivo em você que - 
          salvo engano - me lê. Estamos aqui unidos. Unidos por um não.
        </p>

        <p className={styles.center}>
          <em>Aquele homem não é meu pai assim como um livro não é uma colheitadeira assim como um piscar de olhos 
          não é a balança comercial da Namíbia</em>.
        </p>

        <p>
          Mas um discurso cerziu entidades até então dispersas, uma imagem ligou pontos e - indiferentemente 
          ao <em>não</em> que ali atua à guisa de agulha - aqui eles estão agindo uns sobre os outros. 
          E sobre quem experencia estas relações.
        </p>

        <p>*</p>

        <p>
          No instante seguinte, fica ainda mais óbvio que o homem de fato não é meu pai: ele traz consigo 
          feições que reconheço como orientais. Ele está em Narita e é interpelado por um policial, ele tem 
          um carro esportivo, ele se veste como meu pai se vestia à época, como noto em fotos. Mas eles não 
          são a mesma pessoa; isto é, eles não ocupam um mesmo espaço-tempo simultaneamente. Salvo no discurso 
          que eu invento a partir do que a imagem me produziu.
        </p>

        <p className={styles.center}>*</p>

        <img src="https://drive.google.com/uc?export=view&id=1PmGeUu9tPn-5N9H_Q4tJ-M_Dh3dz3fyJ" alt="policia parando um homem"/>

        <p>
          Então, quando soa a frase <em>aquele homem não é meu pai</em> aos ouvidos de alguém que pode tentar 
          (re)constituir um sentido (a isso chamamos falantes), as características que cada qual imagina de 
          cada uma das entidades - dos homens em cena - colidem violentamente. Estão contrastadas expectativas, 
          formas, e nisso constrói-se o que se chamou, durante dezenas de séculos, de verossimilhança: 
          <em>Por que ele seria seu pai?</em> ou <em>O que ele estaria fazendo ali para poder ser seu pai?</em>
        </p>
        
        <p className={styles.center}>*</p>

        <p>
          Penso, contudo, que passamos tempo demais olhando para o lado errado desta questão. Quando busco verossimilhança, 
          o que tenho é um referencial de mundo - imóvel - que deve embasar o campo das relações sensíveis, limitando seu 
          valor ou sua funcionalidade. O mundo - discurso anterior ao dito - faz com que o dito - cópia rebaixada do mundo 
          - possa ou não possa existir como discurso viável. É uma espécie de distribuição de verbas, de demanda por 
          reconhecimento em que uma Soberania - e note-se que quem cuida da realidade é sempre a Soberania - diz quem 
          tem ou não o direito de existir, de possuir um nome, de fazer parte do normal.
        </p>

        <p className={styles.center}>*</p>

        <p>
          Mas, e se olhamos para outra parte - complementar - da mesma questão? Se eu posso comparar aquele 
          homem ao meu pai - mesmo rechaçando a comparação no instante seguinte - é porque aquele homem <em>poderia</em> 
          ser o meu pai. Mas, mais do que isso, é porque - dentro da ideia que fabrico - eles de fato são a mesma 
          pessoa, em camadas sobrepostas numa mesma imagem.
        </p>

        <p>
          A imagem é, portanto, um campo em que espaço e tempo de objetos distintos (distintos?) podem convergir.
        </p>

        <p className={styles.center}>*</p>

        <p>
          Para além das fronteiras frias do que se chamou realismo, é como se ouvíssemos linhas melódicas 
          simultâneas e pudéssemos chamar seu encontro de música. É como se mordêssemos uma maçã e seu sabor 
          fosse a soma de sua textura, de sua cor, da fome do corpo, do gosto do corpo por maçã, da iluminação 
          do ambiente em que se come a maçã (etc etc etc). Estamos lidando com campos heterogêneos a partir dos 
          pontos em que - como na imagem - faz-se o nó.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1yzvrw-kV_xrtk-PN3jgQ7XTPiAa5zXOI" alt="policiais em volta de um carro"/>

        <p className={styles.center}>*</p>

        <p>
          Mas aqui não se está pensando em nenhuma sorte de estatuto privilegiado para o visível: seria 
          usar um exemplo para contrapor a ideia. Uma imagem vale mil palavras como uma palavra vale mil 
          imagens. Pensar um <em>valor</em> - não como um número em um supermercado, nem como <em>os valores</em> 
          que se atribui a determinado indivíduo burguês, mas como uma unidade quantitativa provisória 
          originada de uma experiência qualitativa - é pensar um campo de equivalência parcial entre coisas 
          que são, em absoluto, incomparáveis.
        </p>

        <p>
          E no entanto, eis o absurdo, esta é a experiência básica da construção do sentido.
        </p>

        <p>*</p>

        <p>
          Portanto, imagens, palavras, cheiros, formas só existem como recortes arbitrários diante do contínuo 
          do mundo, pontos de equilíbrio precário diante da vazante absurda e sem nome que nos atinge, todos os 
          dias, o corpo. E que nos atinge já mediada por estas unidades que a fragmentam. Existe portanto um lado 
          de fora da linguagem, mas este lado de fora não é a realidade a ser perseguida e compensada, mas uma 
          experiência a ser vivida como uma defasagem - sempre sem resultado definitivo. A linguagem se dobra 
          para dentro.
        </p>

        <p className={styles.center}>*</p>
        
        <img src="https://drive.google.com/uc?export=view&id=1QkPBD2pnYhaVRQXO1bZ7Lr8GeCMOju3f" alt="protesto de pessoas com capacete vermelho"/>

        <p>
          É por isso que, quando assisto <em>Sans Soleil</em> e vejo aquele homem e sua participação de dois ou 
          três frames, penso em meu pai. Eu vejo <em>algo</em>: um instante após, este <em>algo</em> torna-se cor, 
          ideia, sentido, memória. Em uma experiência que não é absoluta, que varia de mim para outra pessoa, e 
          mesmo de mim para mim. Poderíamos dizer que uma mesma imagem produz relações diferentes, mas então 
          voltaríamos ao mundo da verossimilhança ou da necessidade de realidade.
        </p>

        <p>
          É um mesmo <em>algo</em> que motiva diferentes imagens, afinal. 
        </p>

        <p>*</p>

        <p>
          Esse <em>algo</em> podemos chamar, sim, de <em>real</em>.
        </p>

        <p>
          Mas o real não é o realismo, de forma alguma. O realismo, já foi dito, é a necessidade de demarcar 
          os limites do que é e do que não é o mundo <em>verdadeiro</em>. O real, por outro lado, é o mundo em sua 
          potência infinita de destituição do próprio realismo.
        </p>

        <p>
          Uma imagem e uma palavra são produtos imprevistos do real, são efeitos colaterais daquilo que é sem 
          nome e sem forma e que está disposto em lugares ainda não-sentidos. Mas o real só nos chega pelo 
          sensível: e ele então já é outra coisa, já motiva caminhos, já assume uma forma.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1BmHLbM5nvXwTixVKWZXVU1tCg2V0eKOP" alt="manifestação"/>

        <p className={styles.center}>*</p>

        <p>
          Mas talvez você me diga que isso é loucura, e que qualquer pessoa que veja um homem dirá 
          "isto é um homem" - a despeito de Primo Levi. Mais ainda: que qualquer animal que veja um 
          homem sentirá sua materialidade ou observará características semelhantes como sua envergadura, 
          sua altura, sua temperatura.
        </p>

        <p>
          Pois bem, aí está: estamos expostos ao mesmo algo, mas a passagem do algo ao discurso é todo 
          um universo. Provavelmente eu e você sintamos a temperatura que emana de alguém, mas provavelmente 
          isso não nos fará correr ou esconder como determinado animal, amar ou repelir como determinada 
          pessoa – nas formas sociais de sua animalidade. A reação é distinta porque o abismo a ser percorrido 
          é - nem maior, nem menor - outro.
        </p>

        <p className={styles.center}>*</p>

        <p>
          Na antropologia dos sentidos, não se pode dizer que <em>qualquer coisa seja qualquer coisa</em>. 
          O problema está antes disso: naquilo que, recortado do mundo, pode assumir, justamente, 
          a dignidade de ser uma <em>coisa</em>.
        </p>

        <p className={styles.center}>*</p>

        <p>
          <em>Aquele homem não é meu pai</em>, sendo. Aí está, portanto, o completo absurdo que é o 
          próprio ato de interpretar ou dar sentido a algo. É isso que faz com que Don Quijote tenha 
          sido ao mesmo tempo um livro trágico e humorístico, é isso que faz com que os castrati tenham 
          sido presos após a Revolução Francesa. O sentido é infinitamente motivado.
        </p>

        <p>
          <em>Outubro</em> pode ser sinônimo de <em>papel</em>. Basta que se motive os signos o suficiente, 
          a partir de um discurso que ali seja vivenciado.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1tzd06U0PA3-rJDpg6wO8DCd6NK6400Ff" alt="policia parando um homem"/>

        <p className={styles.center}>*</p>

        <p>
          E então parece absurdo que um dia tenhamos tentado separar a experiência sensível do sentido. 
          Seria como abdicar do real em prol do realismo. Seria como observar naquele homem sua 
          semelhança com meu pai e simplesmente pensar que estou perdendo o sentido do filme que está a passar.
        </p>

        <p>
          Mas onde mais viveria o sentido senão na possibilidade do encontro: neste caso, um não cerzido num não, 
          cuja trama é, enfim, um sim.
        </p>

        <p className={styles.end}>
          [A Chris Marker]
        </p>

      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}