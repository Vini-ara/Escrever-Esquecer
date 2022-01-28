import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function ArvoreGenealogica() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Árvore genealógica");

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Árvore genealógica</h2>
        <hr/>

        <p>Em 2016, Victor Heringer fotografou uma calçada arruinada pela raiz de uma árvore.</p>

        <p>
          Em 2014, o engenheiro agrônomo Gaspar Yamazaki não recomendava a plantação de 
          Acácias-Rubras próximo a áreas residenciais, em função de suas <em>raízes grandes, 
          superficiais e violentas</em>.
        </p>

        <p>
          Em 2013 meu avô desistiu da teimosia dos dias. Deixou atrás de si, contudo, um imenso campo florido, 
          onde escrevi este livro.
        </p>

        <p>1983 presenciou os relatos de Chris Marker sobre Amílcar Cabral.</p>

        <p>Um zepelim sobrevoa o Farol da Barra quando vige o número 1934 nos calendários.</p>

        <p>Nasce Zeca em uma ilha repleta de árvores ao ano de 1924.</p>

        <p>
          Em 1859, Darwin publica <em>A Origem das Espécies</em>. Antes, em 1831, havia pisado na Bahia pela primeira e última vez. 
          Maior que a beleza da vida pode ser a crueldade do homem que vê no mundo um cabedal.
        </p>

        <p>Wenceslas Bojer chega a Madagascar em 1824.</p>

        <p>
          Na cidade de Lisboa, em 1536, Fernão de Oliveira decide publicar uma gramática. Quase simultaneamente, seres-humanos 
          rotulados como portadores de pele-negra são forçados a desembarcar numa praia do Recôncavo Baiano pela primeira vez.
        </p>

        <p>
          Os portugueses chegam a Benguela em 1578, à Bahia em 1500, a Moçambique em 1498, e a Cabo Verde em 1460. 
          Eles já conheciam as palavras morte e vida, datadas de 1266 e 947, respectivamente, 
          segundo o dicionário Houaiss.
        </p>

        <p>
          Este texto se encerra no ano de 2020, e é dedicado a José Ramos Santos, Beatriz e Victor Heringer, a 
          quem, por não ter conhecido, jamais cessarei de conhecer.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}