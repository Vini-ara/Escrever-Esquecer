import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function TodoOFutebolEFeminino() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Todo futebol é feminino");

  function handleRedirect(path) {
    
    setTransition(true)
    setTimeout(() => navigation(path), 1000)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className={`${styles.container} ${transition ? styles.transition : ''}`}>

      <Header handleRedirect={handleRedirect}/>

      
      <section className={styles.wrapper}>
      
        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Todo futebol é feminino</h2>
        <hr/>

        <p>
          Diante da imbecilidade reacionária que se manifesta como resposta às 
          crescentes demandas por novas formas e espaços de se viver o futebol, 
          não respondamos nada. Não se pode jogar um esporte cuja regra sempre 
          pertencerá, alegadamente, a um dos lados. Por isso, antes de tentarmos 
          usar termos como <em>inclusão e representatividade</em> a nosso favor, cabe 
          pensar muito mais em quais sistemas estamos tentando nos incluir ou 
          representar, e <a href="https://dibradoras.com.br/2021/04/22/ignorando-futebol-feminino-super-liga-se-esgotou-antes-mesmo-de-comecar/"
          target="_blank" rel="noreferrer">se vale a pena reafirmá-los</a> na tentativa de nossa 
          inserção naquele espaço.
        </p>
        
        <p>
          Esta posição, aqui, neste projeto, significa deixar de buscar uma política 
          representativa que tente dar conta da infinidade de formas que existem de 
          se viver o futebol - uma tarefa obviamente inútil ao cabo: significa, em 
          lugar disso, dobrar o jogo topológica, estética e ontologicamente sobre 
          si mesmo, ver no próprio jogo a vida de sua vida, quase sempre coberta 
          pela espuma dos dias das mesas redondas. (E sim, está claro que a primeira 
          saída não é em nada vã: abdicar de jogar o jogo da democracia representativa 
          seria deixá-la falir ainda mais).
        </p>

        <p>
          Com este tipo de declaração de princípios, queria apenas me adiantar a eventuais 
          críticas que pudessem surgir sobre a necessidade e <em>utilidade</em> da discussão que 
          se está aqui a sugerir. <a href="https://revistacult.uol.com.br/home/entrevista-jacques-ranciere/"
          target="_blank" rel="noreferrer">A estética não é o campo minado da política</a> no qual se 
          segrega, cá no futebol, a cada dia, recursos, espaço, oportunidades a dezenas de 
          milhares de corpos <a href="https://twitter.com/dolores_editora/status/1394321560366985223"
          target="_blank" rel="noreferrer">rotulados como femininos</a>, unicamente por serem rotulados como 
          femininos. Não: como uma lembrança que emerge do cheiro de uma fruta, a estética 
          existe para lembrar que o mundo vive materialmente também de outras formas, e que 
          estas formas muitas vezes depõem contra o campo das discussões políticas mais 
          óbvias ou objetivas, podendo também motivá-las. Entre a política e a estética há 
          em comum a ética, e por isso muitas vezes tenta-se – proposital ou acidentalmente 
          – sobrepor-se estes campos. É preciso plantar os pomares e conservar as árvores 
          de pé, mas é preciso também lembrar que a experiência de uma fruta é o que nos 
          faz ter certeza de que este esforço vale, ao cabo ou a princípio, a pena – fim 
          da metáfora.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1RG7Drsb11OzqrOElddbNNIbZUIb7W3N2" alt="materia de jornal"/>

        <p className={styles.center}>*</p>

        <p>
          A história do futebol não é a história da virilidade: no jogo, a virilidade sempre 
          pôde muito pouco. Iniciado como irmão gêmeo do rúgbi, o futebol quis ser outra coisa, 
          dispensar as fórmulas de cavalheiros, o contato corporal incessante, a necessidade de 
          exibição de corpos pré-formados unicamente para aquela finalidade. Quanto menos provável 
          o corpo, mais ele obriga o jogo a ser (re)pensado. Que fariam um Garrincha, em suas pernas 
          impossíveis, ou um Romário, em seu 1,67m, no esporte hoje intitulado de <em>alto rendimento</em>? 
          Estariam fadados ao mundo do resto, é claro, do <em>baixo rendimento</em>. No futebol, no entanto, 
          consagraram-se ao longo dos anos jogadores fisicamente tão distintos como Maradona, Didi, 
          Formina, Manga, Jorge Campos, Sissi e não há modelo algum que explique esta vida das formas 
          de ser no campo. (Inclusive, torna-se significativo notar como a polarização Messi - 
          Cristiano Ronaldo é, hoje, também uma polarização estética, de projetos de corpo e 
          gestualidade praticamente opostos, unidos apenas por algum tipo de ética do trabalho 
          aplicada ao jogo).
        </p>

        <p>
          O futebol traz consigo, portanto, este paradoxo: consagrou-se como uma base do 
          campo social moderno ocidental - portanto, masculino - ao mesmo tempo em que 
          não cessou de trazer consigo formas corporais e gestuais que provocam um 
          dissenso no seio desta ordem. A ideologia é forte a ponto de ter conseguido 
          esconder, anos e anos a fio, no corpo de seus reis, a própria imagem do 
          corpo de seus reis. Note-se então como a <a 
          href="https://feminismoclasse.medium.com/sobre-acumula%C3%A7%C3%A3o-primitiva-globaliza%C3%A7%C3%A3o-e-reprodu%C3%A7%C3%A3o-fb35b752b384"
          target="_blank" rel="noreferrer"> Inglaterra, ao se atrelar à tradição
          de um futebol rural, arcaico e violento</a> tornou-se, a despeito de ter 
          simplesmente <em>inventado</em> o esporte, um território à margem do futebol, pelo 
          menos até promulgação da lei Bosman e à entrada em massa de imigrantes no 
          país. Tendo uma seleção pouco vitoriosa até os dias de hoje, a Inglaterra 
          parece pagar ainda o preço pela escolha por honrar uma linhagem masculinizada 
          - portanto, "física" e combativa – do jogo, que fez com que os ingleses, 
          quando não se agrediam nos arredores dos estádios, acabassem aplaudindo 
          jogadores como Pelé e Eusébio em seus gramados.
        </p>

        <p>
          Criado como esporte de cavalheiros, mas consagrado gradativamente - desde as primeiras seleções 
          vitoriosas de Uruguai e Argentina dos anos 1920 - como esporte do engano e do erro, o futebol 
          conta a história de uma deriva incessante: a do corpo no espaço. Como já dito por aqui, o fato 
          de se tratar de um esporte não-vetorial, isto é, sem direção pré-determinada, fez com que 
          dinâmicas do corpo fossem reconstruídas como uma forma de burlar a <a
          href="https://www.teses.usp.br/teses/disponiveis/8/8138/tde-10092015-161946/pt-br.php"
          target="_blank" rel="noreferrer">rigidez da lei</a>: Garrincha, 
          claro, é o grau zero disso. A introdução do drible, do caos, do fingimento como parte do 
          jogo - algo que vem, digamos sem medo, como grande contribuição latinoamericana para o mundo - 
          significou também a transformação do futebol em um esporte da não-repetição por excelência - 
          não se dá o mesmo drible 5 vezes seguidas, não se cobra a mesma jogada ensaiada 8 vezes - 
          nisso contrastando frontalmente com os demais esportes profissionais.
        </p>

        <p>
          O ideal de corpo olímpico não condiz, portanto, com a realização do corpo no futebol, 
          que em nada reproduz o tipo ariano que reinava na praça do mercado ateniense, ali 
          como tradução e expressão de um ideal de sociedade em equilíbrio. O corpo do futebol é, 
          em verdade, <em>potencialmente qualquer um</em>. O gestual do futebol - da postura ética de Sócrates 
          à frieza malandra de Romário e à explosão lasciva de Maradona - também raramente se repete 
          mesmo entre aqueles que alcançam igual destaque ali. Não há formas prontas, não há moral, 
          não há perfeição: o futebol goza no real: um jogo é sempre mais do que a soma de seus 
          jogadores, mais do que a soma de seus lances: é o encontro daquilo que poderia ter 
          sido com aquilo que não foi, diante daquilo que ocorreu: o futebol é 1 + algo.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=15sO98o-cF0u5Z-N5Vos9lx45oPoB-sSu" alt="mulheres jogando futebol"/>  

        <p>
          Nisso entendemos onde vive o corpo dos jogadores de futebol: no resto do 
          sistema simbólico que tenta monopolizar e direcionar o próprio jogo. Diante 
          das estruturas simbólicas que erguem estádios modernos, criam hierarquias, 
          segregam pessoas, existe um resto: e o resto é o próprio jogo, em sua dinâmica 
          interna, real. Gozando no masculino - na ideia de poder e ordem que permeiam seu 
          mundo -, o futebol goza também no feminino – naquilo que é sem nome fixo, sem 
          ordenação rígida, sem discurso pré-formado, sem local determinado para o corpo. 
          O jogo é linguagem e não-linguagem em sobredeterminação, por isso pode perdurar 
          e se adaptar a contextos, ideias, pessoas incessantemente.
        </p>

        <p>
          Não é exagerado dizer, assim, que <em>todo futebol é feminino</em>. E este paradoxo 
          existir no seio das estruturas mais masculinizadas da sociedade torna um tanto 
          mais interessante esta constatação: todo desejo de ordem produz um resto 
          simbólico, e no futebol este resto está justamente no centro:&nbsp; 
          <a href="https://youtu.be/njvZPEmqJMo" target="_blank" rel="noreferrer">nos corpos 
          que não temem por um único segundo o julgamento pelo absurdo</a>, pela 
          desrazão ou pela afetação de um movimento imprevisto, de uma quebra 
          de ritmo, de um meneio malicioso. A contrapartida de não se assumir 
          esta verdade do corpo no jogo parece ser, justamente, o enrijecimento das 
          estruturas simbólicas em que os sujeitos se inserem, para que se excluam 
          justamente os modos-de-ser e as corporalidades tidos como desviantes 
          naquilo que cerca o futebol: o corpo se manterá, então, como um segredo 
          escondido no centro do campo, no real.
        </p>

        <p>
          O medo da presença do feminino no jogo é o medo de que se revele o fato de que, 
          afinal, o jogo não nos pertence, nem como indivíduos, nem como grupo. Revelar o 
          feminino do futebol significaria, para muitos, o risco de abdicar de uma (falsa) 
          posição de controle sobre o real e sobre o possível: para estes, a bola é apenas 
          uma abstração, um empecilho para que duas equipes se destruam mutuamente. Maldosa 
          dialética: é a existência intransponível do feminino que faz com que se tente 
          perdurar por tanto tempo as estruturas (pretensamente) rígidas do que seria masculino, 
          já que a defasagem para o real é aquilo que possibilita que estas estruturas 
          possam sempre se readaptar.
        </p>   
        
        <img src="https://drive.google.com/uc?export=view&id=1JYOwFjpMgb5Ph_GrH3nRzFMNK_SWdZ93" alt="torcedoras do grêmio"/>

        <p>
          Neste ponto já entendemos que não há um jogo de oposições aqui: nossa constatação é sobre, 
          justamente, o fato de que as estruturas simbólicas são sempre insustentáveis. Por isso, 
          antes de reiterar uma dicotomia que afirme a valia de seus dois lados, um projeto 
          possível é pensar como estamos lidando com termos interdependentes, que existem 
          em/por causa de um momento particular de nossa história, e que podem deixar de 
          existir em outro, tornados inoperantes. Pelé sagrou-se rei - posição absoluta do 
          poder soberano masculino - a partir de seu corpo desviante, insinuante, imprevisível, 
          deslocado da ordem. Já o deslocamento que é proposto pela ideia de que alguém 
          identificado como mulher possa ameaçar esta posição simbólica parece, por outro lado, 
          reiterar o discurso de uma ordem que abstrai <a 
          href="https://www.theguardian.com/football/gallery/2009/dec/14/mamacha-womens-football-championships-lima"
          target="_blank" rel="noreferrer">a vida dos corpos</a> - que tenta ou 
          desdenhar deste fato, ou ignorá-lo ruidosamente, como a tapar os ouvidos e gritar 
          em busca do silêncio. 
        </p>

        <p>
          Mas esta ideia, antes de uma aporia, é justamente uma porta de saída. Se é por sempre ter 
          sido feminino que o futebol conseguiu perdurar em sua masculinidade - em seu movimento 
          de ocultação do vazio -, o movimento oposto também vive como latência do mesmo processo: 
          é o feminino que, no fim das contas, faz com que o futebol simplesmente exista: é pelo 
          feminino do corpo que as estruturas falam, é pelo real que se move o mundo simbólico. 
        </p>

        <p>
          Enxergar esta dependência, esta vida feminina do corpo de Marta ou de Pelé, parece ser, 
          sim, uma posição política estratégica para se deixar nítido o absurdo do discurso 
          pré-formado sobre o lugar do jogo, sobre o impossível corpo sem corpo dos jogadores. 
          O futebol já se curvou à América Latina algumas vezes: justamente por observar que, 
          aqui, estava a própria verdade escondida da lei que se imaginava então conhecer à 
          exaustão. Cabe a nós, portanto, lançar luz e mais luz aos paradoxos, ao invés de 
          reiterar uma oposição com outra oposição: é necessário, num drible de corpo, buscar 
          sempre a contradição da contradição. Somos seres reais: sejamos - como quando jogamos - 
          um pouco honestos conosco.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1cJI0SKM-QrFIvTSxpm8dyGIT3nLIrET4" alt="jogadoras"/>

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}