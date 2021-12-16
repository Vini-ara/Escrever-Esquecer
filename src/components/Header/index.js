import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import Logo from "../../assets/flor.png";

export function Header({handleRedirect}) {
  const navigation = useNavigate()

  function Redirect(route) {
    console.log([window.location.pathname, route])
    if (route === window.location.pathname) {
      console.log("equal")
      return window.location.reload();
    }

    if(handleRedirect) {
      return handleRedirect(route)
    } else {
      return navigation(route)
    }
  }

  return (
    <header className={styles.header}>
      <button className={styles.Logo} onClick={() => Redirect("/home")}>
        <img src={Logo} alt="flamboyant" />
        <h1>
          ESCREVER <strong>ESQUECER</strong>
        </h1>
      </button>
      <nav>
        <button onClick={() => Redirect("/sobre")}>Sobre / Contato</button>
        <button to={''} className={styles.random}>Leve-me a qualquer lugar</button>
      </nav>
    </header>
  )
}