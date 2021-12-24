import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function Isto() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Isto</h2>
        <hr/>
      
        <p> -não: </p>
        <p> isto-sim: </p>
        <p> eis-eis-outra-vez-sim-eis: </p>
        <p> eis-outra-outra-vez-eis-sim: </p>
        <p> quente-dentro-fora-sim-isso: </p>
        <p> quente-quente-onda-sim-quente: </p>
        <p> quente-ainda-ainda-quente-sim-isto: </p>
        <p> como-não-quente-como-não-quente-sim: </p>
        <p> se-não-quente-como-onde-ir-não: </p>
        <p> lado-fora-como-fora-se-não-quente: </p>
        <p> onde não-sim: onde-onde: quando não: </p>
        <p> agora: </p>
        <p> agora: sim-sim: </p>
        <p> agora-agora-agora: </p>
        <p> parte-da-parte-fora-parte-dentro-sim: </p>
        <p> parte-agora-dentro-parte: sim-eis: </p>
        <p> agora-agora-agora: </p>
        <p> sim: </p>
        <p> agora-ainda-mais-agora-ainda-mais-sim: </p>
        <p> parte-de-dentro-parte-dentro-isto: sim: </p>
        <p> isto-sim-isto-ser-isto-agora: </p>
        <p> sentido: </p>
        <p> sentido-mina-brota-sim-agora: </p>
        <p> calor-fora-calor-parte-dentro-sim-agora: </p>
        <p> calor-escorre-calor-mina-molha-agora: </p>
        <p> calor-dentro-calor-parte-meio-agora: </p>
        <p> calor-desce-calor-gira-dentro-agora: </p>
        <p> quente-escorre-dentro-sim-sentido-agora: </p>
        <p> agora: </p>
        <p> tudo-agora-só-agora-tudo-só-tudo-só-agora: </p>
        <p> desce-o-sim-espiral-do-sim-agora: </p>
        <p> calor-curva-em-que-calor-do-sim-esgota: </p>
        <p> calor-volta-isto-descendo-tudo-agora: </p>
        <p> curto-cresce-calor-quente-move-agora: </p>
        <p> sim: </p>
        <p> calor-inteiro-nada-inteiro-agora: </p>
        <p> calor-sereno: frio-movente: frio-do-quente-do-agora: </p>
        <p> calor-frio-ainda-ainda-ainda-quente: </p>
        <p> calor-frio: calor-caminho: </p>
        <p>  cala-agora: </p>
        <p> gira-roda-gira-gira-gira-roda: </p>
        <p> corre-sal-vontade-quente-outro-sobe-fora: </p>
        <p> passa-centro-dobra-fio-acima-roda: </p>
        <p> toca-rela-roça-passa-corta-lado-fora: </p>
        <p> agora: </p>
        <p> agora-sim-agora-perto-sim-perto-agora: </p>
        <p> calor-força-limite-força-do-limite-fora: </p>
        <p> dentro-agora: agora-fora: agora: </p>
        <p> lado-de-dentro-lado-de-fora: </p>
        <p> empurra-limite-dobra-curso-algo: </p>
        <p> calor-si-mesmo-pulso: sim: </p>
        <p> empurrar-por-si-mesmo-dobra: </p>
        <p> dentro-breve-lado-fora: </p>
        <p> algo-a-si: tudo: algo: agora: </p>
        <p> curso-esteio-cadena-pulso: </p>
        <p> agora: </p>
        <p> 
          de-fora-escorrendo-espirando-dobrando-descendo-animando-espantando-tingindo-salgando-subindo-girando-rodando-tornando-cindindo-escorando-esbatendo-forçando-forçando-forçando-forçando-forçando-forçando-forçando-forçando-forçando:
        </p>
        <p> agora: </p>
        <p> tudo-pulso-tudo-pulso-tudo-a-dobra: </p>
        <p> dobra-o-plano-dobra-o-sim-o-sim-a-dobra: </p>
        <p> dobra-a-firme-enquanto-dura-sim-a-dobra: </p>
        <p> perde-exala-toca-o-sim-o-sim-pra-fora: </p>
        <p> pulsa-sim-e-sim-limite-fora-agora: </p>
        <p> tudo-perde-tudo-o-sim-o-sim-pra-fora: </p>
        <p> dobra-não-o-sim-o-sim-o-sim-a-dobra: </p>
        <p> cede-fundo-cede-no-sim-sim-agora: </p>
        <p> cede-ali-cede-ali-ali-agora: </p>
        <p> afrouxa-pulso-pulso-pulso-sim-afrouxa: </p>
        <p> lado-de-dentro-lado-de-dentro: </p>
        <p> lado-de-fora-lado-de-fora: </p>
        <p> restos-calor-espira-gira-rola: </p>
        <p> desce-resta-afasta-tempera-lenta-lenta-agora: </p>
        <p> empurra-agora: </p>
        <p> lado-de-dentro: lado-de-fora: </p>
        <p> lado-de-fora: lado de fora: </p>
        <p> lado-de-dentro-agora: </p>
        <p> vento-frio-entra-toma-não-lá-fora: </p>
        <p> rola-restos-aqui-dentro-empurra-fora: </p>
        <p> ser-maior-ser-tudo-ser-algo-ser-agora: </p>
        <p> ceder: </p>
        <p>
          ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder-ceder:
        </p>
        <p> agora: </p>
        <p> isto-agora: </p>
        <p> isto: agora: </p>
        <p> sendo-outro-sendo-algo-ainda-agora: </p>
        <p> deixar-ser: </p>
        <p> não-deixar-cessar: </p>
        <p> ser-maior-e-maior: </p>
        <p> empurrar-e-mais-ainda-empurrar-pra-fora: </p>
        <p> empurrar-dentro-dobrar-dentro-lado-fora: </p>
        <p> quando-pulsar-correr-pulsar-ser-pra-fora: </p>
        <p> quando-ser-ser-ser-sim-ceder: </p>
        <p> ser-ceder: </p>
        <p> não-deixar-de-cessar: </p>
        <p> quando: </p>
        <p> sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim </p>
        <p> sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim </p>
        <p> sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim </p>
        <p>
          sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim 
        </p>
        <p>sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim </p>
        <p>sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim </p>
        <p>
          sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-sim-sim-sim-sim-ser-sim-sim-sim-sim-sim-sim-ser:
        </p>
        <p> sim-sim-sim-ser-ceder: </p>
        <p> sim-sim-ser: </p>
        <p> sim-sim: </p>
        <p> sim- </p>
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}