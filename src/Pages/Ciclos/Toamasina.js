import styles from "./styles.module.scss";

import { Header } from "../../components/Header";

export function Toamasina() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Toamasina</h2>
          <p>
              O verso de Nelson Cavaquinho para lembrar de como a experiência do cinema é uma experiência do corpo.
              <i>Ter olhos para ver</i> é um ciclo de textos que foram encomendados inicialmente para tratar de tópicos do cinema
              brasileiro: mas muito além de críticas, temos aqui declarações verborrágicas de amor.
            </p>
            <p>
              Nas revisões para além de seu contexto inicial, esta seção está em vias de tornar-se outra coisa.
              Abrir-se para um discurso sobre a experiência sensível que o cinema não cessa de possibilitar.
            </p>
            <p>Vamos ver o que vai dar.</p>
        </div>
        <div className={styles.content}> 
          <div className={styles.card}>
            <img 
              src="https://drive.google.com/uc?export=view&id=10bW91H9UNbW6yEsknWteiUkroF5hOsq3" 
              alt="flamboyant" />
            <h3>As fotografias</h3>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <img 
              src="https://drive.google.com/uc?export=view&id=1vQ20mL2VSBKnnrU-uikWj6ZxvRdvd68N" 
              alt="por do sol" />
            <h3>Mi candidato es el pueblo, organizado y construyendo</h3>
          </div>
          <div className={styles.card}>
            <img 
              src="https://drive.google.com/uc?export=view&id=1VKn3u3lAE2iGXdVMPqtqzdmvwrj-qYN4" 
              alt="Capa de um livro" />
            <h3>Da abstração</h3>
          </div>
        </div>  
      </section>
    </>
  );
}