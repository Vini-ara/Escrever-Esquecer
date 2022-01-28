import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function BoaNova() {
  const [transition, setTransition] = useState(false);

  const navigation = useNavigate();

  useTitle("Boa nova");

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

        <div className={styles.backLink} onClick={() => handleRedirect('/algumas-cartas')}>
          <MdWest size="3rem" />
        </div>

        <h2>Boa Nova, ______________________</h2>
        <hr />

        <p>
          ____,
        </p>

        <p>
          Walter Benjamin preferiu morrer a ser morto, sem saber que no dia seguinte as fronteiras se abririam. A ética é um
          abismo que nos pode roubar a razão mais evidente, mas é também um lugar se pode cair sem medo do ridículo. Pois quem
          dirá que Benjamin se precipitou ou desesperou, por mais que tenha desperdiçado a chance de gozar uma confortável velhice
          em <em>New York</em>? Sua morte foi o fecho mais preciso para sua obra, e também para sua vida, diz-se. Sua morte – como
          querem nos acostumar a pensar sobre os homens comuns, como nós – não foi um erro: foi parte de um sistema vivo de leitura
          da realidade, e seu remate. Diz-se.
        </p>

        <p>
          Mas me calha então algo na cabeça, ____, diante da vegetação confusa deste lugar, de sua completa falta de formas. Seria
          mesmo preciso cobrir a morte de sentido – como um lençol que se joga sobre um corpo – para concluirmos que <em>a vida valeu
            a pena</em>? Não há também aqueles que se engasgam no meio de uma frase sobre a maneira correta de se fisgar um peixe de
          água doce? Não há também aqueles que chocam a cabeça no meio-fio ao sair de um hotel talhado em mofo? A morte raramente
          consente uma frase no tom exato, dificilmente permite que se explique o mal-entendido, ou que se equacione a graça da
          piada. As palavras são apenas guindastes dos portos dos vivos: realizam sua função e, então, segue-se a navegar em sua
          distância. ____. A morte não nos pede palavra nenhuma; muito menos nos diz. Tampouco a vida é uma história a ser contada.
          Por que nos é tão difícil assumir o absoluto caos que se mostra o conjunto das coisas que fazemos, quando, insones, nos
          distanciarmos do mundo alguns passos?
        </p>

        <p>
          Talvez pelo mesmo motivo que combinemos nossas peças de roupas, ou que interpretemos os nossos sonhos, ou que alguns 
          aplaudam o pôr do sol. Eu realmente não sei te dizer algo definitivo sobre disso.
        </p>

        <p>
          E entendo que nada pareça dizer respeito ao que estou aqui a tentar fazer, ____. Mas posso te dizer, já neste instante, 
          o suficiente: eu não desejo uma coesão absoluta, e eu sequer me amo a este ponto. A questão é sobre nos darmos o direito 
          de existir sem que se sinta nisso alguma forma de crime, contra nós próprios ou contra alguém que esteja a passar. E talvez 
          o primeiro passo seja mesmo assumir que não, não faz nenhum sentido, nem ao cabo, nem ao princípio. Que o sentido é em verdade 
          feito a cada instante, parte-por-parte, nos gestos não percebidos por ninguém. E que seus blocos, juntos, montados, não resultam 
          numa casa, num país, numa paisagem: que faltarão sempre pedaços. Por isso mesmo, hoje, vejo quantas vezes a morte de um homem 
          surge contra sua própria verdade posta incessantemente em vida. Porque, de longe, estamos certos de que o fim é capaz de dar 
          um acabamento à coisa, de pôr num ponto a impressão de que o percurso foi feito rumo àquele instante, e de que as ações se 
          sucederam apenas para culminar num cerrar de olhos sereno, que dispõe simetrias, que cristaliza excelentes romances e 
          mensagens construtivas.
        </p>

        <p>
          A ética de Benjamin não poderia admitir que naquele instante triunfassem as vozes da imbecilidade sobre o seu corpo.
        </p>

        <p className={styles.end}>
          O resto, quem estabeleceu fomos nós – sempre tão vivos – que assistimos o filme a
        </p>

        <p className={styles.end}>
          partir do fim.
        </p>

        <p>
          Pois uma coisa é a forma como um homem enxerga as suas mãos; outra, é a forma como queremos enxergá-lo a partir daquilo que 
          ele fez com elas. Mas naquele lugar tão raro, no delta do termo, os dois rios correm no mesmo espaço, ao mesmo tempo.
        </p>

        <p>
          E se a ética naquela fronteira europeia trouxe o suicídio como resposta inquestionável, aí ela te faz a acordar às cinco e 
          meia da manhã para cruzar duas ou três cidades todos os dias, e aqui ela me lançou nesta estrada em busca de uma definição. 
          Somos sistemas simultâneos, ____. Nossa resistência aqui não é heroica, não é dramatizada num ato e, por isso, não nos sentimos 
          nunca como uma unidade que prossegue a tentar. Se aqui nossos otários nunca usaram um uniforme, nunca tiveram coragem de fechar 
          sequer uma avenida; se sua tortura tem sido outra, que nós, juntos e separados, seguimos diariamente sofrendo; se há uma total 
          ausência de formas para qualquer violência, hoje, como se nos perguntassem o tempo inteiro se temos certeza de estarmos vivos, 
          fazendo a morte aparecer como o único presente estável, lúcido, e possível, _____, quem ligará os pontos quando perdermos, diante 
          de todos os livros que jamais deixaremos escritos?
        </p>

        <p>
          José Bonifácio – não aquele, é claro – era conhecido por sua lábia. Sabia trocar água por leite em copo e ainda receber o troco. 
          Conseguia ornar o que bem entendesse, dizia. Os que eram de trabalho sabiam, e riam, de José Bonifácio. Certo. Zeca, o padeiro, 
          então teve um sonho. Sonhou que desenterrava inúmeras moedas do chão do Ferrolho. Acordou sobressaltado, duvidando se deveria ficar 
          feliz ou ressabiado por poder ganhar dinheiro sem o ter trabalhado. Ficou feliz, então. Logo em seguida, novamente duvidou: agora, 
          da natureza daquele sonho. Ele, que batizou a filha com o nome dado por uma cigana; ele, que passou mel numa pedra todos os dias 
          por anos e anos e anos; ele, que punha no carro aqueles cujas famílias queriam entregar aos cuidados do finado Francisco Xavier, 
          ele. A única saída era falar com Bonifácio. O amigo não titubeou: há de ir ver, com seus olhos vivos, o sonhado. Hei de ver também. 
          Perfeito e, aliás, eu te dou uma parte. Ah, não carecia, mas já que me é oferecido. Foram. Com pás nas mãos. Onde você sonhou? Eu 
          não sei, imagino que foi deste lado da casa. Certo. Foram. Madrugadas em madrugadas. Zeca tinha mais de cem quilos na época, peso 
          inverso à sua capacidade de manejar uma pá. Bonifácio, sempre apostando num número numa roleta, era ágil, mas excessivamente magro. 
          Sua vida era andar pelas ruas atrás dos amigos, num asseio municipalmente invejado, juntando as partes das refeições em cada parada, 
          ganhando cigarros e copos meio cheios, contando casos sobre homens enganados pelas mulheres. Achei. Como? Tem uma coisa aqui, pode 
          ver. Minha nossa senhora. Me ajuda a puxar. Minha nossa senhora. Me ajuda aqui, porra, pelo amor de deus. Pera aí; no três. Três. 
          Meu deus. Você sabe de quem era esse baú? Eu não tenho ideia. Vai ter que quebrar o cadeado. Quebraram o cadeado. A manhã havia 
          esperado até aquele instante para dar uma resposta aos dois. Mas era nublada. Pode ficar com as moedas, Bonifácio, isso não vale 
          nada tem uns três séculos. Eu acho que ainda consigo fazer algum negócio com isso, e você me deve uma camisa nova. Zeca odiava que 
          o trabalho não fosse bem remunerado.
        </p>

      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect} />
    </div>
  );
}