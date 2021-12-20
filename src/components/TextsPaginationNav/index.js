import styles from "./styles.module.scss";

export function TextsPaginationNav({pages, handleNavClick, activePage}) {
  return(
    <div className={styles.contentNavigation}>
      {pages.map((e, index) => (
        <button
          key={e.heading}
          onClick={() => handleNavClick(index + 1)}
          className={activePage === index + 1 ? styles.activePage : ""}
        >
          {index +1}
        </button>
      ))}
    </div>
  );
}