import styles from './styles.module.scss'; 

export function TextsPagination({data, isActive, handleRedirect}) {
  

  return(
  <div className={`${styles.content} ${isActive ? styles.activePage : ''}`}>
    <h2>{data.heading}</h2>
    {data.content.map((e, index) => (
      <div key={e.name} className={`${styles.card} ${index % 2 === 0 ? styles.cardEven : ''}`} onClick={() => handleRedirect(e.href)}>
        <h3>{e.name}</h3>
      </div>
    ))}
</div>
);
}