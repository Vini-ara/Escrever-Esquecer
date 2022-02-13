import { useState } from "react";
import { useNavigate } from "react-router-dom";

import YoutubeBackground from 'react-youtube-background'

import styles from "./styles.module.scss";

export function Introduction() {
  const [transition, setTransition] = useState(false)
  const [ready, setReady] = useState(false)
  
  const navigation = useNavigate();

  const viewWidth = window.innerWidth;

  function handleClick() {
    
    if(viewWidth <= 425) {
      navigation("home")
    }
    setTransition(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.header} ${transition ? styles.transition : ''}`} onClick={() => handleClick()}>
        <h1>
          ESCREVER <strong>ESQUECER</strong>
        </h1>
      </div>

      <div className={`${styles.videoContainer} ${transition ? styles.transition : ''}`}>
        {transition && (
        <YoutubeBackground 
          overlay={ready ? '' : "#000"}
          videoId="bpdd5-UFIok"
          className={styles.video}
          onEnd={() => {navigation('home')}}
          onPlay={() => setReady(true)}
        >
        </YoutubeBackground>
        )}
      </div>
    </div>
  )
}