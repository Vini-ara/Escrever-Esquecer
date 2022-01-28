import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function MelancoliaDeTime() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Melancolia de time");

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

        <h2>Melancolia de time</h2>
        <hr/>

        <p>
          <em>Meu chapa, a gente não quer mais ouvir isso</em>. E foi então que desisti de levar 
          meu CD dos Doces Bárbaros para a van que me deixava na escola, aos meus 9 ou 10 anos. 
          Não me feriu propriamente o pedido da ajudante da motorista porque, desde 
          que havia ganhado de meu avô o disco, eu já havia obrigado meus amigos a apreciar 
          - <em>o ouvido não tem pálpebras</em> - a voz de Bethânia, Caetano, Gal e Gil pelo 
          menos duas vezes por semana, indefectivelmente ao longo de mais ou menos dois meses. Mas ora, 
          não pense que estou aqui lidando com <em>Pé Quente Cabeça Fria</em> ou <em>Eu te Amo</em>, 
          tampouco imagine que este que vos escreve era uma criança prodígio de bom gosto 
          e aqui faz uma narrativa de formação: meu CD dizia respeito não a canções brasileiras 
          clássicas, mas, unicamente, a interpretações do hino do Esporte Clube Bahia feitas 
          pelos artistas. De fato, nem todo clube pode se gabar de ter um apoio tão significativo 
          em seus quadros, mas a única questão para mim naquele momento era mostrar aos demais 
          meninos como aquele presente me era querido, tanto quanto o meu time – que quase 
          ninguém conhecia por aqui, ao menos dentre os da minha idade. Colocando nestes 
          termos, sei que a questão parece, no mínimo, ridícula; no entanto, sendo-o ou não, 
          posso dizer que é este o primeiro momento que guardo em mim de uma explícita defesa 
          de uma identidade, sendo meu time talvez a única trincheira que aqui, ainda, vá 
          lá, sustente suas posições firmes até hoje.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1DtHkoqINlWTMWwq375CXApeDFx5MtYwb" alt="acarajé no estádio" />
        
        <p>
          Se Judith Butler fosse brasileira - ou pelo menos europeia - teria certamente 
          dedicado algumas páginas de sua enorme obra à questão da assunção do time de 
          coração. A citação não é gratuita. Pensando em um texto como <em>Identificação Recusada</em>, 
          há uma série de nexos entre o que o a autora chama de <em>melancolia de gênero</em> e o que poderíamos 
          chamar de <em>melancolia de time</em>. Nós naturalizamos nosso gênero como uma 
          condição intrínseca a nossos corpos – a ponto de a própria cena edípica freudiana 
          já se desenhar a partir de uma relação barrada entre gêneros distintos – não 
          havendo tempo ou espaço na sociedade para se <em>prantear</em> a enorme perda que 
          é a fixação de algo que a grande maioria das pessoas carregará pelo resto da vida: 
          a impossibilidade de ter certas condutas, de desejar certas pessoas, de assumir 
          certos comportamentos. Um processo análogo ocorre na identificação com time, quando 
          se gesta um luto duradouro e jamais elaborado, que retorna em forma de violência e 
          de derrisão ao outro - vide nossos estádios -, e produz uma dor que jamais conhecemos 
          verdadeiramente ao longo da vida, por sequer ter a possibilidade de ser chamada de dor. 
        </p>

        <p>
          Por que torcemos para um time e não para outro? Ou melhor, por que amamos um time e 
          não podemos amar a nenhum outro? Note-se como esta perda imensa sequer é cogitada como 
          perda, e como pode soar para muitos como um falseamento do que seria o <em>verdadeiro</em> futebol: 
          a dedicação cega e apaixonada por uma instituição, a defesa muitas vezes arbitrária de suas condutas 
          e da conduta de seus adeptos, sejam elas eticamente boas ou não para nós: sabemos até excessivamente 
          como muitas vezes o futebol cataliza comportamentos agressivos ou de ódio por aquele que, simplesmente, 
          cometeu o crime de ser <em>outro</em>. Note que a semelhança entre gênero e futebol não é 
          nada arbitrária também neste sentido.   
        </p>

        <p>
          A questão inicial - literalmente inicial - é: por que torcemos para 
          o time que torcemos? Confesso que sou descrente de que nascemos amando 
          este time e não aquele, como não nascemos tendo esta ou aquela religião, 
          esta ou aquela opção sexual, este ou aquele gênero. Nós apenas nos defendemos 
          com uma narrativa que dê um sentido ascendente a tudo. Um exercício de catábase 
          ou de anagnose - uma descida a nossos infernos - resolveria facilmente esta questão: 
          sim, algo nos leva a amar um time, seja por osmose, seja por negação, seja por 
          admiração, seja por um único acontecimento incontornável e talvez aleatório. 
          Amar um time de futebol nunca é apenas amar um time de futebol. É amar um momento, 
          uma filiação, uma ideologia, uma sensação: é dilatar no tempo algo que seria 
          irremediavelmente passado, que estaria fadado a perder-se ou evaporar diante da 
          infinidade de acontecimentos de nossas vidas. 
        </p>

        <p>
          O time-do-coração - assim como o gênero, a nacionalidade, a religião - simboliza uma possibilidade 
          de estabilização do sentido de nossas experiências, um elemento que escolhemos como determinante 
          de muitos outros, de comportamentos e de atos: algo que facilita nossa visão sobre o mundo, e que 
          nos dá explicações sobre o que somos e como agimos. O problema é quando esta estabilização é assumida 
          como um dado da realidade ou da natureza, como uma predisposição ou um <em>a priori</em> que 
          justifica preconceitos tolos, refutações frouxas, desconhecimento forçado. O gênero e o 
          time-do-coração são oriundos de uma determinada construção pessoal e histórica, e deveriam 
          ser vistos desta maneira caso estivéssemos dispostos a - quem sabe um dia - tentar não odiar 
          o outro ao constatar que ele fatalmente seguirá existindo, não importa o que façamos.
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
          Por isso, uma relação com o time de futebol que baseie numa busca sobre a historicidade 
          de nossa filiação será - assim como deveria ser com o gênero, com a religião, com a ideologia - 
          uma maneira de ver-se sempre em contexto, de elaborar sempre esta melancolia que é 
          <em>não torcer</em> para todos os times da mesma maneira como torcemos para 
          nosso time-do-coração. Acredito que o corintiano que sabe o valor de Ademir da Guia, 
          a sobrenaturalidade de Friedenreich ou a supremacia histórica de Pelé, da mesma maneira 
          como distingue a classe de Sócrates e a fúria de Neto, tem uma relação muito mais complexa 
          com seu time e com o futebol do que aquele que tende a ver como inimigo tudo que se pareça 
          com um outro, inclusive a si próprio em determinados comportamentos e ideias que transitem. 
          Não é à toa futebol que homofobia andam de braços dados nos quatro cantos do mundo: 
          é um mesmo processo de absoluta entrega aos desejos e demandas de uma instituição 
          socialmente construída - que muitas vezes assumimos como absoluta, como portadora 
          da Verdade e da Beleza - o que conduz à violência e à incompreensão de onde estes valores 
          <em>não</em> estariam, ou quem ameaçaria a integralidade dos nossos. Daí a necessidade 
          de vermos como estamos sempre diante de limites, de lugares que não são essencialmente 
          nossos, mas que assumimos - por algum motivo, em algum momento - como sendo, os encarnando.
        </p>

        <p>
          Hoje entendo que aquele CD - que evidentemente ainda guardo aqui - marca minha primeira 
          possibilidade de real pertencimento a uma família, a um grupo social. Filiação que sempre 
          é ostensiva, que precisa do crivo dos outros, de sua aprovação ou negação para se sustentar 
          como fato de realidade. O menino, ali, nos anos idos, precisava construir as bases de quem 
          ele tentava ser; hoje, elas fincadas em memórias e experiências muito diversas, basta apenas 
          frequentá-las. Sei que o Bahia não é o melhor time do mundo, como sei que são invejáveis os 
          4 gols de Índio em um único jogo e a crença cega dos pernambucanos em seu título de 87. 
          Sei, sobretudo, que tudo que sou, eu poderia - fosse outro o mundo, fossem outros os dias - 
          não ser. Calhou de ser assim, calhei de ganhar aquele disco, e de nascer naquele estado, 
          e de amar a quem amei, e de escrever agora estas palavras como um pranto. A única certeza 
          é que este processo está longe de acabar. E que me perdoem os pobres colegas de van que 
          tiveram que, naqueles meses, escutar a mesma música na voz dos Doces Bárbaros.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1cjek81NefxOsoHd1WhtUrD0a4aH9zZHy" alt="torcedores ajoelhados" />

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}