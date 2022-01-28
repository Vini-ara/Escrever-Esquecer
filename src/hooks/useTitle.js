import { useEffect } from "react";

export function useTitle(title) {
  
  useEffect(() => {
    const documentDefined = typeof document !== 'undefined';

    if (!documentDefined) return;

    if (document.title !== title) document.title = title + " | Escrever esquecer";
  }, [title]);
}