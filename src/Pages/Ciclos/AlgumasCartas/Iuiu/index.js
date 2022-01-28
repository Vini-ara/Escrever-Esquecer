import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Iuiu() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Iuiu");

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/algumas-cartas')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Iuiu, ______________________.</h2>
        <hr/>

        <p>
          ________,
        </p>

        <p>
          Eu não me queixo. Nunca foi sobre isso, sobre pedir piedade. Tenho tudo sob meus olhos. Todo o desespero 
          debaixo do braço. Ele é previsto. Sim, incalculável. Mas ainda previsto. Toda a dor. À espera da floração. 
          À espera tímida. Eu jamais a negaria. E jamais faria dela desespero, ou inquietude. Seria como dizer que 
          ela me é exterior. Exterior à vida que prevejo ao meu próprio corpo. Estranha ao gesto de abrir os olhos, 
          de descobrir o dia pela vez primeira, novamente. Nunca. Ela é parte de mim. E é dela que eu quero que 
          surja o que quer que seja. Das minhas mãos em carne viva. Por saber quem mente, por saber por que está a 
          mentir. Meu peito: viração. Feira. Larva. Quina. Fresta. Porta. Síncope calma. Este tipo de química que 
          ocorre no corpo, tornando-o possivelmente algo. Jamais revelando seus motivos. As pancadas que nos deram 
          nas pernas. E as coisas que concluímos a partir disso. Porque o gesto sempre errará a equação. Da semente 
          rude, um jambeiro. Do amor, cordilheiras. As neves eternas nuns olhos. Nossa distância impressa em cada 
          instante de violência. A música de nossa própria voz. Que independe tantas vezes do que dizemos. Ou se 
          dizemos. Por isso não me desespero. Ante o morado que tinge os meus braços. Ante a lembrança do escarro 
          e do berro em um dia agora distante, e redivivo. De onde não fujo. Nem nego. Arar desertos à noite. 
          Deliberar outra vez com a morte. Por isso não me desespero. Por isso trago a serenidade nos dedos. Tenho 
          o céu molhando os cabelos. Penso em ti e jamais me arrependo. Para o escultor, o vazio neutro. Para o 
          bailarino, aonde conduzir os seus membros. Não duvide nunca do que pretendo. Não pense que estou aqui para 
          esquecer a voz em que te ouvia. Estou apenas levando-a para mais amplos campos. A voz é o sal da terra. 
          A voz é o sal do corpo. E ser justo ao corpo é não se cercar por seus limites. É saber que ele é um retalho, 
          mesmo que o desminta o espelho. É pulverizá-lo em meia voz, à voz-meia. Talvez seja este o segundo movimento. 
          De algo maior. Que parta de um sim ao reino das coisas. De sua simultaneidade à palavra. Círculos de mesmo 
          centro e diâmetros distintos. Nunca se tocam. Nunca se excluem. A voz é a única dobra possível. E é a voz o 
          que busco (agora o percebo) e não a palavra. Afundo a caneta na terra e te busco. E mesmo assim não me 
          desespero. Porque sei que este esforço será um dia transitivo. Que este esforço me levará para mais perto de 
          ti, de nós, ao cabo. E quando falarem “país” eu entenderei “dia”. E quando falarem “desejo” eu escutarei 
          “distância”. E nisso está a razão desta viagem. Eu não preparo uma canção. Eu preparo minha garganta para 
          cantar o que quer que seja. Não acredite nunca nesta distância. Ou acredite, porque ela é real. Mas saiba 
          interpretá-la. Ou não queira interpretá-la, porque ela não guarda em si nenhum sentido. E é isso, é esse o 
          nexo. É essa a tábua que você colocará entre o continente e o barco. Você entenderá como sempre, como quem 
          planta sementes. E pode ver como ainda me justifico. Aí está a voz que te digo. Bamba, mínima. Pelos socos, 
          pelos beijos fortuitos de agradecimento, pelo desprezo ao imprevisto.  Reticente. Maleável, e trêmula, ainda. 
          E eu não me queixo. Não se trata disso. Se trata de buscar a matéria, de assumir o estado das formas. De 
          respirar a névoa de onde brota o dia. De pisar este istmo. De gritar este ó. De assumir este vínculo. Entre o 
          pensado e o impensável. Despir a cidade de todo o concreto. Despir da capa maravilhosa o miolo dos livros. 
          E então lê-los. 
        </p> 

        <p className={styles.center}>
          Não pense ser tudo mentira.
        </p>

        <p className={styles.end}>
          Não pense demasiadamente, ___.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}