import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function OsDeusesDoFutebol() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Os deuses do futebol");

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

        <h2>Os deuses do futebol</h2>
        <hr/>
        
        <p>
          Se existem de fato os chamados <em>deuses do futebol</em>, a verdade é que eles odeiam 
          as preces e oferendas. Quando evocados, trazem consigo catástrofes, anticlímax, 
          quase-acontecimentos, negações. Perde-se por causa dos deuses do futebol quando 
          não se pode apontar nenhum culpado: quando <a href="https://www.youtube.com/watch?v=QXKYfDhtqKo"
          target="_blank" rel="noreferrer">a bola perfeita raspa a trave e sai</a>, 
          quando o movimento atlético do goleiro faz com que ele tome o gol, quando o time 
          bem montado perde por uma única bola, quando o mais fraco <em>quase</em> consegue uma 
          façanha histórica.
        </p>

        <p>
          O futebol é um esporte amoral, já o dissemos: seus deuses só podem ser, 
          portanto, também amorais. Quem dirá que o Real Madrid <em>deveria</em> ter a história 
          que tem, <em>deveria</em> ter triunfado sobre times menores e mais carismáticos? Quem 
          dirá que a seleção brasileira de 1982, ou a esforçada seleção da Croácia, ou o 
          Brasil de Domingos da Guia e Leônidas da Silva, ou o carrossel holandês, ou 
          Marta, Cristiane e Formiga <em>deveriam</em> ter perdido suas chances históricas em Copas 
          do Mundo? Quase ninguém, naturalmente, dotado de um senso de justiça ou estética 
          mínimos. Mas os deuses do futebol não querem saber de nada disso.
        </p>

        <p>
          Ante a goleada suntuosa, os deuses do futebol preferem o <a href="https://www.youtube.com/watch?v=h_iDsjl5rNk&t=30s"
          target="_blank" rel="noreferrer">1 a 0 aos 45 do 
          segundo tempo</a>. Ante o gol do craque, os deuses preferem o do jogador medíocre. 
          Ante a confluência dos acontecimentos, os deuses querem a fratura e a cisão. Não 
          há narrativas possíveis para eles, não há histórias com começo, meio e fim. A 
          potência não se converte em resultado, nem as causas serão explicação. Adeus à 
          moral cristã: no futebol não se consegue nada simplesmente ao se merecer.
        </p>

        <p>
          Por isso, os deuses parecem rir sempre que há um empate. Já que, diferentemente 
          dos esportes aristocráticos, o futebol admite plenamente esta possibilidade: 
          mais que isso, ela está dada como posição inicial do jogo. Se os times não 
          se mexerem, se não se submeterem à contingência da bola, o jogo empatará. 
          Este é, portanto, o único sacrifício admitido pelos deuses do futebol: 
          ou você se expõe à catástrofe e ao caos, ou não poderá vencer jamais. 
          Eles, no entanto, não garantem recompensa alguma àquele que está se 
          sacrificando, apenas entregam - displicentemente - uma hipótese nas 
          mãos de quem se dignar.
        </p>

        <p>
          Muito mais que um panteão de santos, os deuses do futebol desenham-se 
          como uma enorme variedade de Exus. Ante o signo do que <em>é</em> - na rigidez 
          do placar que condiciona destinos, que sela o movimento em algo acabado 
          e que não condiz em nada com o jogo -, o futebol está erguido sobre 
          o que <em>poderia ter sido</em>, o que <em>será assim que possível</em>, o que <em>não 
          foi e nem sequer seria</em>, o que <em>haveria de ser</em>, toda essa multiplicidade 
          de tempos verbais que fazem jus àquele que atira sua pedra pelas 
          fendas do tempo-espaço, fazendo com que ela caia no ontem.
        </p>

        <p>
          Os deuses do futebol, portanto, riem dos gráficos, estatísticas, 
          discussões sobre pênaltis e mãos na bola. Remediar os ritos é fazê-los 
          ganhar força, como punição: não à toa, Marcelo Bielsa segue sem ganhar 
          um único título, enquanto Di Matteo ou Rijkard trazem consigo algumas 
          das maiores glórias do futebol. Os deuses sabem que é preciso muita 
          coisa explicável para que algo aconteça, da mesma maneira que sabem 
          que é necessário o inexplicável agindo simultaneamente, e no mesmo 
          lugar. O que os deuses do futebol fazem lembrar é que não existe 
          resultado sem corpo, porque o jogo é um objeto situado no encontro 
          turbulento do espaço-tempo - que não cessam de, diferentemente, 
          ser a mesma coisa.
        </p>

        <p>
          O corpo tem seus exus individuais porque precisa mover-se pelo inexplicável. 
          O futebol tem seus deuses porque precisa existir como dobra na estatística, 
          no resultado, na decisão do árbitro, nos recortes sempre despóticos em que 
          ele se encarcera. Sim, os deuses do futebol preferem as peladas infinitas 
          das ruas, em que ninguém sabe ao certo qual foi o placar, em que ninguém 
          se lembrará tão logo o jogo recomece em outra ocasião: mas os deuses 
          precisam, sobretudo, para se provar certos e vivazes, das grandes 
          finais de Copa, das câmeras em seus zooms, da crença que exista 
          alguma glória. <a href="https://www.youtube.com/watch?v=5sUJPsohjVM"
          target="_blank" rel="noreferrer">Os deuses do futebol precisam de música para dançar</a>.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}