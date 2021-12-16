import styles from './styles.module.scss';
import LoadingSvg from '../../assets/loading.svg';

export function Loading() {
  return(
    <div className={styles.Container}>
      <img src={LoadingSvg} alt="loading animation" />
    </div>
  ); 
}