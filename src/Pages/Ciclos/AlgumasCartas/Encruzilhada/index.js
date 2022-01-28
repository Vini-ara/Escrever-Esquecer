import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Encruzilhada() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Encruzilhada");

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

        <h2>Encruzilhada, ______________________</h2>
        <hr/>

        <p>
          ______,
        </p>

        <p>
          A saída mais fácil seria nos livrarmos do peso do corpo. E, no entanto, esta seria a saída mais difícil. 
          Assim pela vida seguiremos esbarrando em nosso próprio cansaço, em nossa fome, em nosso sentido mais ínfimo. 
          Sempre sem resposta. E nas convenções a que aderimos, aos papéis que, mesmo a contragosto, assinamos. E essas 
          coisas nos unindo por nossa ânsia, por nossa miséria mais previsível: e o corpo: sempre usado ou sem uso a outros 
          olhos. Cedendo ao tempo, a si mesmo, à sua envergadura, suas linhas tortas, seus pés em ponta, quando tomado 
          por inteiro. Sem uma guerra possível, contra seus movimentos. Porque a própria luta seria sua repetição, ao 
          primeiro contato. E porque é impossível esmurrar as vozes que nos adentram os ouvidos, nos mobilizam os 
          músculos e nos fazem moldar esfinges, pavimentar avenidas, escrever textos, andar. Por isso sinto que só 
          sairemos quando o absurdo falar a nosso favor, como uma tela diante de nosso próprio corpo. E então, quando 
          nos mirassem a cara, e nos calculassem um preço pelo diâmetro de nossas olheiras, nós responderíamos, serenos 
          e indesculpáveis: pedra-sim-folha-raiz-não-nuvem. Mas aqui estou eu a te dizer algo como se fora alguma espécie 
          de lei barrada, para ti, para nós, para mim, ou para eles. Por isso olho para os cantos mais agudos das esquinas, 
          e sinto. Olho para chico antonio a rodar no vazio, a fazer sua voz se enredar nas dobras de seu corpo, as linhas 
          perderem o tino, a caçoar dos franceses que se perguntavam, durante o almoço, onde os poetas se esconderiam quando 
          secassem as lavouras, e sinto. Olho para os homens de turbante ou para a irmã-multidão que sobe e desce ruas 
          empedradas a desenhar um país fora de controle, avesso ao seio de suas próprias previsões e normas, e sinto. 
          Olho para os carros cobertos de flores que passam aqui diante de meus olhos, seguidos por uma mancha humana em 
          um coro impreciso, e para os meses em que todo o afeto decantado em trens do subúrbio foi pacientemente se 
          canalizando para este único momento, e sinto. Olho para as casas baixas de todas as cidades que se ergueram em 
          ilhas, em ermos, em montes, em fundos de vale com a calma miraculosa daqueles que tinham certeza de que a vida 
          não era um erro, e de que seu trabalho se encaixaria perfeitamente numa genealogia, seja de deus, seja dos homens, 
          seja de sua família, natural ou adotiva, e sinto. Olho para você, e para todas as combinações por muito pouco 
          inverossímeis que ocorreram no corpo de alguém para que você tenha se tornado a pessoa que um dia surgiu diante 
          de meus olhos numa manhã em que nenhum presidente foi assassinado, em que nenhuma bomba caiu, em que nenhum deus 
          retornou, e sinto que devo sentir tudo novamente. Depois vieram os dias em que desarmamos alguma catástrofe sem 
          percebermos, ou em que não encontramos um semiconhecido pelas ruas do centro, mas cuja memória jamais nos escapará, 
          mesmo que sua raiz seja irrastreável, impossível de ser reformulada em algum esforço. E aí se vê como o absurdo é 
          mais que uma escolha, ___: é algo que dá forma ao nosso próprio corpo, como o reconhecemos e então o desconhecemos. 
          Como é algo que se mescla ao dia e que em nossos poros se torna teor. Sinto que é preciso aceitar a existência do 
          corpo, que é preciso saber que nossa razão é remendada com seus veios. Porque o corpo, quanto mais ferido, quanto 
          mais submerso, tanto mais real se torna, mais incontornável para qualquer manifesto, para qualquer tentativa de 
          aliviar ou escancarar o sofrimento deste mesmo corpo. A saída mais fácil é sim a mais óbvia. Mas a mais honesta 
          é sem dúvidas a outra. (É também preciso aceitar que se veja com os olhos). Como se com isso pudéssemos retomar 
          algum vau sobre um destino. Como se com isso criássemos uma reserva de negação, um núcleo que mesmo vazio quebrasse 
          a simetria em que nos inscrevem todos os dias. Porque aceitar o limite me parece aceitar o que pode ainda ser 
          feito; e porque aceitar o acaso é também retornar ao que parimos, ____, como rastros.  E sim, há rastros. E há um 
          caminho que pode ser decalcado. Há um reino sem rei. Um algo.
        </p> 
        
      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}