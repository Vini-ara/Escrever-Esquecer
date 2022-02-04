import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { data } from '../../data/data';

import styles from './styles.module.scss';


export function TextsNavigation({currentCiclo, handleRedirect}) {
  const [cicloRoute, setCicloRoute] = useState('');
  const [prevRoute, setPrevRoute] = useState(''); 
  const [nextRoute, setNextRoute] = useState('');

  const current = useLocation()

  useEffect(() => {
    const cicloHref = data[currentCiclo].href
    const chapters = data[currentCiclo].data

    const routes = chapters.map(e => {
      const chapterRoutes = e.content.map(i => {
        return i.href
      })
      return chapterRoutes
    })

    const routesArray = routes.flat()

    const currentPathArray = current.pathname.split('/')
    const currentPath = currentPathArray[currentPathArray.length - 1]
    
    const currentIndex = routesArray.indexOf(currentPath)

    
    if(currentIndex === 0) {
      setPrevRoute(null)
      setNextRoute(routesArray[currentIndex + 1])
    } else if(currentIndex >= routesArray.length - 1) {
      setNextRoute(null)
      setPrevRoute(routesArray[currentIndex - 1])
    } else {
      setNextRoute(routesArray[currentIndex + 1])
      setPrevRoute(routesArray[currentIndex - 1])
    }

    setCicloRoute(cicloHref)
  }, [current, currentCiclo])
  

  return(
    <div className={styles.container}>
      { prevRoute && 
        <button className={styles.navButton} onClick={() => handleRedirect("/" + cicloRoute + '/' + prevRoute)}>
          Anterior
        </button>}
      { nextRoute && 
      <button className={styles.navButton} onClick={() => handleRedirect("/" + cicloRoute + '/' + nextRoute)}>
        Próximo
      </button>}
    </div>
  );
}