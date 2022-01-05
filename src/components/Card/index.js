import { useState } from "react";

import { Loading } from "../Loading";

import styles from "./styles.module.scss";

export function Card({ cardNumber, imgSrc, children, pathTo, redirectFunction }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`${styles.card} ${styles[`card${cardNumber}`]}`} onClick={() => redirectFunction(pathTo)}> 

      <img
        className={`${styles.cardImg} ${!isLoading ? styles.imgActive : ''}`}
        src={imgSrc}
        alt="card"
        onLoad={() => setIsLoading(false)}
      />

      {isLoading && <Loading className={styles.loading} />}

      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}