import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function Candeias() {
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

        <h2>Candeias, ______________________</h2>
        <hr/>

        <p>
        ____,
        </p>

        <p>
          eu ainda estou tentando nascer. Mesmo que meus braços balancem à vontade do vento. Mesmo que da ponta de 
          meus dedos nada tenha sido fabricado. Eu não desisti. Nem jamais te esqueci, neste trajeto. Pelo contrário. 
          Ainda sinto tua voz a se mover no fundo de meus olhos, ou no fundo de qualquer imagem que eu por sorte consiga 
          distinguir, daqui. Esta lembrança – a de seu corpo, pronunciado – talvez seja a única que hoje não me doa, que 
          hoje não me traga mais nada em seu bojo além de uma sensação aguda que percorre cada um de meus poros. Você 
          ainda está aqui. O que só pode significar que eu ainda estou aqui, também. E só quando você se mostra - próxima 
          mas tênue, longínqua mas tecida em minha carne – é que consigo dizer que estas paredes se assemelham de fato a 
          um corpo. Só então estendo minha rede entre o que me lembro e o que ainda quero viver. E nela me deito; e nela 
          agora eu penso em ti.
        </p> 

        <p>
          Sim, ____, vivo, aqui, eu sinto. Ainda, a tentar fazer com que saiam, temporões, de minhas mãos, alguns frutos. 
          A tentar traduzir as chagas em respostas. A ouvir uns navios distantes e neles tatear algum sentido. Mas me tem sido 
          improvável. Mas me tem resultado impossível. Só hoje entendo os milhões de auto-retratos (prefiro esta grafia) a que 
          tantas pessoas tão diferentes ao longo da história se entregaram e, sob os panos do timbre, se expuseram. Como falar 
          sem partir de uma imagem de si mesmo, ____? E como, sem ter uma única imagem de si mesmo, falar?
        </p>

        <p>
          Estou tentando recomeçar do princípio.
        </p>
        
        <p>
          Estou tentando me recomeçar do princípio. E é diante desta única certeza que me assalta um medo: o de que minha 
          resposta possa ser, ao cabo, impronunciável.
        </p>

        <p>
          Me perdoe por ter te deixado tanto tempo sem notícias. É esta ideia de que eu precisava destruir os contornos e as 
          formas das imagens, uma-por-uma, antes de te dizer o que quer que fosse: de que precisava apenas me deitar e olhar 
          fixamente para o sol, como a tentar me diluir no calor delirante de um dia de dezembro: de que precisava não ser 
          reconhecido na rua por nenhum familiar, por nenhum membro de alguma polícia secreta, por nenhum colega de um trabalho 
          tão mal pago quanto eu: de que precisava não ler mentiras, e esquecer como este país tornou-se o enigma, a margem 
          cercada em que se transformou por ora: de que precisava não fazer testes de alternativas, não ver imagens destinadas 
          ao riso frouxo da derrota consentida: de que precisava compreender o tamanho do cinismo do estado atual das coisas para 
          poder, no instante seguinte, rechaçá-lo em algo. Para talvez conseguir voltar para teu lado um dia. Vivo. E muito mais 
          vivo do que quando parti.
        </p>

        <p>
          Mas, hoje, como muitas vezes, sinto que estou trancafiado no próprio moinho contra o qual pelejo. E também sei que 
          esta espera absurda que te imponho (eu sempre me acho prepotente quando pressuponho o afeto que você possa ter por 
          mim. Sempre sinto como se eu não tivesse este direito, como se tirasse este talvez-sentimento do lugar fluido, móvel, 
          ao qual ele pertence, por origem e decisão única, a ti) não é justa, e sequer entendo o porquê de você aceitá-la. 
          Sendo honesto contigo. Conosco.
        </p>

        <p>
          E no entanto você permanece aqui. Ao menos no instante em que você me ouve.
        </p>

        <p>
          Mas as coisas se tornaram violentas demais para minha cabeça, ____. E é inútil tentar revidar com os punhos. 
          Porque estamos ainda emparedados em nossa própria pele, e não conseguimos até hoje atravessar estes muros que 
          resistem a qualquer chuva, sem sequer esboçar uma rachadura. O mundo parece estar do lado de fora. E, no entanto, 
          as palavras nos açoitando quando estamos distraídos, e os imbecis que nos dizem quem somos e o que vamos ser, e a 
          minha incapacidade de perceber o que eu tenho em comum com aquele homem que está a assobiar no meio-fio da rodovia, 
          esperando que abra o sinal e parem os automóveis. 
        </p>

        <p>
          Mas, pior: esta consciência de que se deveria sentir algo, de que se deveria derramar esta dor pela noite, e 
          visitar por dentro todas as imagens mais óbvias e mais fictícias.
        </p>

        <p>
          Nesta busca existe aqui a minha presença.
        </p>

        <p>
          Neste algo que muito mais penso do que sinto, em verdade. É preciso buscar sem imaginar quando se encontre. Sem que 
          se espere de fato encontrar. Mas deixe. Deixe. Eu tentarei ser menos egoísta nestas cartas, eu te juro. Tentarei 
          olhar o corpo do mundo, no instante em que ele apareça, seja como uma máquina aberta, seja em uma piscada de 
          condescendência. E realmente espero que, tão logo, você perceba algum resultado ao menos nisso, neste esforço 
          do que não poderia, jamais, ser um esforço. Porque seria esse um primeiro sinal de que as coisas estão de fato 
          mudando aí fora, ou ao menos aqui dentro. E então alguém estenderá um primeiro remanso a algo. E será esse o 
          sintoma de que enfim estou de costas às minhas cidades, segurando tuas mãos, te vendo.
        </p>

        <p>
          Creio que ser é, ao cabo, ter a chance de não ter sido. Eis toda a glória e todo o risco do caminho.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="algumasCartas" handleRedirect={handleRedirect}/>
    </div>
  );
}