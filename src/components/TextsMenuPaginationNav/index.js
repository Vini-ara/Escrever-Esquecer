import styles from "./styles.module.scss";

export function TextsPaginationNav({pages, handleNavClick, activePage}) {
  
  return(
    <div className={styles.contentNavigation}>

      {/* botões de navegação entre os capitulos dos ciclos */}

      {pages.map((e, index) => (
        <button
          key={index}
          onClick={() => handleNavClick(index + 1)}
          className={activePage === index + 1 ? styles.activePage : ""}
        >
          {index +1}
        </button>
      ))}
    </div>
  );
}