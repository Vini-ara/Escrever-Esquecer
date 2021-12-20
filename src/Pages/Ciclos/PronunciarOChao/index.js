import styles from "../ciclos.module.scss";

import { Header } from "../../../components/Header";
import { TextsPagination } from "../../../components/TextsPagination";
import { useState } from "react";
import { TextsPaginationNav } from "../../../components/TextsPaginationNav";



export function PronunciarOChao() {
  const [page, setPage] = useState(1)



  const data = [
    {
      heading: "Escrever com os pés",
      content: [
        {
          name: "O futebol a ser escrito",
          href: "o-futebol-a-ser-escrito"
        },
        {
          name: "O narrador",
          href: "o-narrador"
        }
      ]
    },
    {
      heading: "Poéticas do futebol",
      content: [
        {
          name: "Topologias do jogo",
        },
        {
          name: "Imagens, imagens",
        },
        {
          name: "Ainda a lei",
        },
        {
          name: "Ingenuidade",
        },
        {
          name: "Núcleos vazios",
        },
        {
          name: "Diante do outro, em nome de si"
        }
      ]
    },
    {
      heading: "O corpo, o algo, o nada",
      content: [
        {
          name: "Todo futebol é feminino",
        },
        {
          name: "Afetação",
        },
        {
          name: "Imagens da violência",
        },
        {
          name: "Melancolia de Time",
        },
        {
          name: "Pé",
        }
      ]
    },
    {
      heading: "Deus é um gol sem trave",
      content: [
        {
          name: "Mas se deus é por nós",
        },
        {
          name: "Alianças demoníacas",
        },
        {
          name: "Os deuses do futebol",
        }
      ]
    }
  ]

  function handleNavClick(pageNumber) {
    setPage(pageNumber)
  }

  console.log(window.location.pathname)

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Pronunciar o Chão</h2>
          <p>
            Os textos deste volume, pela primeira vez pensados como um conjunto, foram escritos entre os anos de 2018 e 2021.
            Desta forma, faz-se aqui um esforço para que eles, muitas vezes espaçados por anos,
            lugares e pelo testemunho dos mais diversos fatos, não se tornem nem redundantes nem meramente contraditórios,
            mas se espraiem como que induzidos por seus movimentos recíprocos.
            Se o futebol é uma teoria sobre o acontecimento, aqui se está também a jogar.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {data.map((e, index) => (
            <TextsPagination key={e.heading} data={e} isActive={page === index + 1}/>
          ))}
          <TextsPaginationNav 
            pages={data} 
            handleNavClick={handleNavClick} 
            activePage={page}
          />
        </div>

      </section>
    </>
  )
}