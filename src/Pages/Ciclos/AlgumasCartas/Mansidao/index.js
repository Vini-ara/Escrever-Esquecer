import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function Mansidao() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/algumas-cartas')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Mansidão, ______________________.</h2>
        <hr/>

        <p>
          ______,
        </p>

        <p>
          não acontecendo nada posso concluir que o mundo não girou um único grau e no entanto aqui estamos 
          respirando vezes incontáveis e buscando alguma coisa no meio de todas as outras que se inauguram aos 
          nossos olhos a cada segundo qual é a diferença entre ter nada e ter absolutamente tudo e se escrever 
          é ser deus é ser velho como deus é dar formas às coisas como deus a verdade é que sempre haverá ateus 
          agnósticos politeístas fabricando refutando os nossos mundos que aqui neste espaço ao menos circulam e 
          aderem e descolam e se batem com outros mundos já consagrados pelo uso você mesma leu ___ as galáxias ___ 
          o ulysses ___ as memórias ___ e sabe de onde veio esta forma e onde foram ___ parar todas as minhas 
          vírgulas ___ e como arfa esta caneta ambidestra insegura você tentando lançar uma imagem ao abismo de 
          nossas córneas e o peso do peito em riste dos imbecis convictos sobre nossas ideias antes mesmo de elas 
          saírem ao sol meu deus como sentir-se em casa num mundo tão grande as metáforas canalhas cansadas as 
          estéticas fadadas árcades modernistas eu estou realmente tentando sei que estou realmente tentando mesmo 
          que tudo o que mais tenha desejado desde que te conheci tenha sido te desterrar te demonstrar a falsa 
          pureza dos atos de um homem pontue o texto antes de lê-lo e agora eis o saldo eis esta carta escrita dum 
          canto calmo do mundo toda palavra é um vício incutido em nosso corpo e o fato mais bisonho é ter que escrever 
          sobre a crença na incapacidade de dizer imbecis que nos falam que todos os tijolos todos os silêncios todos os 
          equívocos são feitos apenas de consenso puristas elitistas mistificadores dos outros nunca olharam alguém no 
          olho nunca foram um passo além de seu próprio corpo ser natural é ser artificialíssimo alberto caeiro enterrado 
          sob uma árvore de sentido manuel bandeira diante de um cineasta e aquela jornalista que me diria que isto não é 
          uma carta que isto é incompreensível para as massas olhe a quantidade de recordos aos quais nos amarramos mesmo 
          que deitados na solidão dos espaços eternos isso é sim uma carta ora as citações as imagens os nomes as lembranças 
          todas estas fatalidades fazem parte desta carta e seguem me impedindo de restaurar ou de destruir em meus 
          poros as provas da existência destas coisas porque nelas vivem meus gestos a cada dia e nelas tantos outros 
          se perdem eis uma nova cidade em um mesmo país mas eis também as mesmas memórias somos sim uns ressentidos e 
          quem pode ser culpado por querer ver os milagres que se pode produzir no meio do algo penso em quem ao menos 
          tentou fazer alguma coisa usar as formas disponíveis na atmosfera e que na violência de um português castiço 
          caiba um desespero imenso lobo em pele de cordeiro o meu está atento à crase à posição dos pronomes será ele 
          portanto falso ___ e uma vez mais as questões deste tipo nem um único passo em direção à reinauguração de um 
          homem futuro que se chamaria de mim lá no haiti no século dezoito incendiaram degolaram os homens e a sua 
          liberdadezinha e aqui por ora sequer o direito a estar preso a alguma cidade ou alguma vizinhança toda a violência 
          calada afetiva sublimada sorrida eu sei como ler prosa assim é insuportável gênio é quem escreve mas herói mesmo 
          é quem lê e se eu apostasse minhas fichas poucas num romance a sociedade amanheceria a mesma e revigoraria sua 
          vitória em cada uma das minhas linhas para sempre secretas lá vem o ressentimento descendo a ladeira a 
          impossibilidade de se desgarrar dos seus olhos das imagens que sustentam de pé um desejo mais uma pá de 
          argamassa no que ainda chamam de si pois talvez só se possa amar alguém se você nunca o tiver conhecido por 
          dentro ou se só o tiver assim conhecido a morte é fiel como um cão faminto o tempo passando e já não me 
          importa mais o tempo é uma abstração para neuróticos obsessivos não há nisso pessimismo há lançar-se na 
          procura de um discurso que não seja cínico que seja fiel ao que sinto e desejo para a vida para você eu 
          bem que preferia estar te contando uma história em que se aprendesse algo sobre a fauna sobre a flora sobre 
          a humanidade inteira escrever deveria ser como plantar depois de arar o solo e então conceber e então regar 
          e então cuidar desde a semente até que nascessem palavras que te contradissessem todas as expectativas as 
          imagens os sonhos o esforço condicionado mas não pense que desisti de buscar a traição de um discurso coerente 
          imagine pois o que mais quero é acreditar que este contrato em que a mentira é consentida mesmo até esperada 
          nos dê a realidade em contrapartida eu buscarei sim eu tentarei sim não pense pois eu tentarei pela primeira 
          vez novamente eu tenho tentado todos os dias não pense jamais que as coisas não nos pensam eu aqui mesmo sigo 
          como coisa demasiadamente consciente é um grande erro tentar dançar ao som da própria voz
        </p> 
        
      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}