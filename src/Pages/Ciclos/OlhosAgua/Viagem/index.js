import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Viagem() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Viagem"); 

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/olhos-agua')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Viagem</h2>
        <hr/>

        <p>
          Me sentei numa cadeira e esperei. Esperei a lembrança. Esperei a certeza. Porque elas me redimiriam, eu sabia; 
          e então um dia se tornaria o dia; e o vento varreria toda uma cidade no espaço de um segundo, enfim. Mas ali não 
          havia vento: não havia sequer janelas ali. Me sentei numa cadeira, então. E esperei. A cadeira, de madeira crua, 
          sua almofada preta, rodeada por uma sala escura e solitária, sob uma lâmpada, que, como um pêndulo, contava instantes 
          por baixar e me dividir ao meio, ante um relógio que tentava engarrafar a minha ânsia, entre as paredes que 
          escorriam em bolor, suas únicas verdades, meus panos úmidos e minhas botas, testemunhas mudas, uma nuvem a escoar 
          sua chuva dezenove andares impermeáveis acima, no topo do edifício irrefutável, a cadeira onde eu me sentava a 
          esperar. E aquela sala que, jamais, por um descuido, eu poderia ter chamado de casa. Eu vivia numa sala, apenas. 
          Como vive o verme em um pedaço de carne, como um homem vive na copa de uma árvore, como vive a planta em uma quina 
          de calçada, eu vivia apenas em uma sala. E foi ali que me sentei, a esperar. A pensar em tudo aquilo que provavelmente 
          me cercava, num mundo ao qual inevitavelmente pertencia, apesar de não tê-lo jamais conhecido por completo. Ao 
          redor das paredes havia tesouros, havia esculturas guardadas há milênios, havia espelhos? Nunca pensei canos de 
          esgoto, fios emaranhados, nunca pensei trilhos de metrô ao redor da sala. Pensava num mundo raro, nas formas 
          submersas em que ele poderia me pertencer, ou em como um dia teria me pertencido. Muitas vezes, e também naquele 
          dia, eu me sentava numa cadeira e esperava.
        </p>

        <p>
          Mas, sim, eu me lembro. Daquele dia em que tentava me lembrar de algo. E esperava por sua chegada em mim. Um 
          dia, apenas. Que poderia ter sido o dia de ano novo. E não foi. Que poderia ter sido o dia da criação de uma 
          palavra. E não foi. Que poderia ter sido o dia em que milhares de homens armados deflagrariam a revolução. E 
          não foi. Que poderia ter sido o dia em que uma bomba americana de dois metros e meio de diâmetro aniquilaria 
          de uma vez a vida na Terra. E não foi. Pois foi o dia apenas o osso de um dia. Um dia que não fez parte de nenhum 
          século, de nenhuma década, de nenhuma semana: um dia que pertenceu apenas às suas causas. Por isso eu me lembro 
          tão claramente. Me lembro de ele ter existido, e olho para o molusco oco que ele incrustou no meu peito, para o 
          espaço que ele rasgou aos poucos em mim. Me lembro, como talvez não me lembrasse da cor exata da chama dos fogos, 
          das palavras exatas do fim da fábula, do nome dos reis que caíram como os homenzinhos que de fato eram. Eu me 
          lembro, do fundo deste dia, de fato.
        </p>

        <p>
          E então esperei. Esperei uma resposta, um grito do filho que nunca respirou o mesmo ar que eu, a carta que não 
          se escreveu na ausência das mãos, a água do rio submerso a lavar meus pés imundos de tanto caminhar, sentada, 
          nesta espera. Uma resposta apenas. Um “não” e já seria um começo. Um “sim” e seria um desafio. As duas formas, 
          as duas caras da necessidade: apenas para que eu pudesse me levantar daquela cadeira e reavivar o corpo que 
          sentado me jazia. Eu tomei um gole de água. O relógio marcando duas horas. Mas eu sabia que não eram, que não 
          poderiam ser duas horas naquele instante: e quem o negaria, ou o provaria decerto? Provaria, pois, ao meu corpo? 
          Quem poderia olhar nos olhos de um deus e com alguma certeza afirmar esse número exato, perfeito, arredondado, 
          envolvendo o sentido de todos os meus atos possíveis e todas as formas dispostas ao redor daquele momento, como 
          uma mortalha, um lençol no meu sono, um pano através do qual se vê o céu barrado e sem escolha? Eu tomei outro 
          copo de água. Não, eu não tomei, porque eu estava ali sentada.
        </p>

        <p>
          Um dia antes, eu havia voltado. Depois de ter ido à rua, me sujado de sol, visto o meio-dia dos homens, eu 
          voltei e decidi esperar. Como havia ido, eu não me lembro. Sei que então estavam aos meus olhos aquelas mulheres 
          que me miravam, que procuravam no meu ventre o meu filho, que relembravam as minhas obrigações, que inquiriam a 
          minha fé, que revelavam o que havia fugido de minha pele. E que, não achando nada, me elegeram a turvação de seu 
          dia, um imenso calhau no meio da avenida. E riram, e riram, e riram sem sequer esboçar um único grão deste riso. 
          De madrugada estavam ali, de pernas cruzadas, na antessala do meu sono. Braços dados com aqueles homens que me 
          olhavam, que procuravam no meu ventre as minhas obrigações, que pregavam minha fé, que içavam o que era alvo em 
          minha pele. Eles queriam se ver nas feições do meu filho, mas o filho não havia. E desconversaram entre si. Eu 
          era um ruído espetado entre o tecido de suas vozes, que os impedia de compreender, que desatava o seu nó. Eu 
          desci as escadas, eu me sentei, eu adormeci sentada. Quando acordei, um carteiro nada havia entregado, a televisão, 
          a chave, o bolor estavam em seus postos esperando por meus olhos. A cadeira também estava lá. Nenhuma palavra 
          dita, nenhum silêncio novo, nenhuma brisa que me dissesse que a brisa existiria. Quando percebi, eu já esperava 
          novamente. As mãos vazias. E sim, eu me lembro, também desta vez. Da raiva, da ira: nem uma mentira sequer, uma 
          imagem, um devaneio, uma pílula secreta, um megafone, um saco de pólvora que me trouxesse a miséria da miséria 
          de uma resposta.
        </p>

        <p>
          Mas então a pá me chegou à mão, e eu decidi seguir o que ela me dizia. Chegou-me trazida por aquele deus que 
          enverga o aço frio do ódio incalculável e o faz caber no peito de um só homem, de uma só mulher; que protege e 
          que defende o ódio contra si mesmo para que ele sobreviva e perdure sob a luz do dia; que faz com que ele próprio 
          possa também andar entre os automóveis no privilégio de viver plenamente sua própria negação. Chegou-me a pá à 
          mão, e não me interessava trazida de onde ou por qual motivo. Eu quebrei os azulejos do piso, ao que me veio a 
          certeza que seus desenhos eram incompatíveis, que não formavam imagem alguma, juntos. Quebrados, sim, pareciam 
          enfim assumir a forma de algo, a potência de poder ser a forma de algo, a franqueza que há em tudo isso. A 
          resposta me pareceu então uma fatalidade, um ente banal: eu queria apenas o direito de me prender como um cadeado 
          a um oceano, farta de toda aquela esperança a delimitar meu papel a cumprir em vida. Eu queria deitar meu corpo 
          para sempre em um berço de viração.
        </p>

        <p>
          E cavei. Indiferente ao prédio que poderia ruir sobre mim, à catástrofe de talvez ter que lidar com aquilo que 
          se escondeu apenas por ser incapaz de existir aos olhos, ou por não ter existido jamais, eu cavei. E bem me lembro. 
          Eu cavei ainda mais. Minha febre. Cada grão de terra um tumor pulsando nos meus olhos, um muro imenso entre eu e 
          aquilo que a vida havia preparado para mim. Cuspi com a pá toneladas de terra enquanto passavam os dias caídos em 
          derrocada. A terra não reagia ao meu esforço, às convulsões da pá, ao seu movimento maquinal, mas imprevisto. E 
          por isso eu prosseguia. Como se estivesse retirando camadas, metros, quilos de pele morta, pus, sangue pesado, 
          água doente, cabelos quebrados de sobre meu corpo. A pá insistia, um corpo insistia. Eu imaginava.
        </p>

        <p>
          <em>          
            Era um dia de janeiro, eu esperava em um banco ao lado de um rio. Fazia muito calor. Eu tomava um sorvete há horas, 
            e ele não acabava, ou derretia. Uma velha passou lentamente, segurava um cão, um cão grande e preto. Depois se foi. 
            Lentamente. Quanto a mim, mesmo antes de acordar, eu já esperava. Era um dia de abril. Lavei meu rosto, comi, me 
            troquei, saí. Na rua, as pessoas não me cumprimentavam, tampouco ignoravam a minha existência. Um buraco do qual 
            desatentamente se desvia. Uma pessoa como qualquer outra. Isso lhes seria o bastante, e o possível. Como se fosse. 
            A vida de acordo com a vida. Eu me sentia feliz. Mesmo sabendo e escondendo que não haveria naquela tarde nada 
            além daquele banco, daquele sorvete, daquele cachorro escuro, daquela água incansável que levava as imagens que 
            eu lembrava ou via. Outras pessoas se sentariam em outros bancos, à beira de outros rios. O sol as faria ficar 
            de outras cores, sem que elas o percebessem. Todos se sentariam e esperariam como eu, satisfeitos pelo deleite 
            do encontro ainda possível.
          </em>
        </p>

        <p>
          <em>
            Era um dia de outubro, eu esperava em um bosque como aqueles que povoam as infâncias. Estava encostada numa 
            árvore de tronco marrom e copa verde, como são absolutamente todas. Garoava e ventava muito. Eu bebia o mesmo 
            copo d’água havia horas, e parecia ser impossível acabá-lo um dia. Nenhuma criança passou correndo, apenas um 
            cão negro, e úmido. Na noite anterior, eu sequer havia dormido: eu permaneci desperta em sonhos. Quando foi dia, 
            lavei meu rosto, comi e saí, para poder ficar imóvel sem que ninguém me perguntasse algo, longe das pessoas que 
            pressupunham as dimensões da minha existência, o valor das minhas compras no mercado, o meu pedaço de pão de 
            cultura, o número da página de meu futuro obituário. Eu me sentia necessária para poder observar a mim mesma, 
            enquanto esperava. Pois sabia que viria, ainda que soubesse que não carregava nada além daquela miragem nos 
            bolsos. Minha pele era o que havia de mais exterior a mim, ela se distanciava a ponto de eu já não saber como 
            poderia sentir o instante em que algo chegasse e me resvalasse os ombros. Todos os toques se dissipariam, se 
            perderiam no ar que circundaria meu corpo, na distância da minha pele ao meu cerne. Querer o universo sempre 
            foi sobre desejar viver uma ânsia universal.
          </em>
        </p>

        <p>
          <em>
            Era um dia de agosto, eu te esperava diante de meu corpo sentado numa cadeira. Uma lâmpada sobre mim e minha 
            cabeça, uma sala ao redor. Bolor entupindo os ralos. Cada objeto era apenas a si mesmo e seu próprio mundo. 
            Eu era um rio, eu era uma criança, eu era um cachorro preto rolando nos azulejos. Todas essas coisas que pertencem 
            a suas horas, aos seus movimentos no mundo. E não houve mais nada depois daquele momento. Daquele momento em 
            que eu vi uma resposta rastejando por meu corpo, por meu ventre, pela minha cabeça, como um inseto, um caracol, 
            um bivalve que ali procurava uma casa. Mas eu já não tinha mais forma, mas eu via sem precisar de olhos para 
            ver. As feições de meu rosto não se moviam, absortas. Mas eu pulsava e me revolvia. Eu sabia que algo definitivamente 
            aconteceria, ainda que seu nome não me importasse. Porque havia algo maior, algo que antecedia minha própria 
            ideia sobre mim mesma. Porque havia o sangue estancado antes do corpo, o membro ferido antes do membro, a 
            paisagem vivida antes dos olhos.
          </em>
        </p>

        <p>Abaixava a febre. Baixavam os anos. Circulava a pele. Rodava o mundo. Falava a voz, e também calava.</p>

        <p className={styles.center}>O nada: um ente pleno, mineral, honesto.</p>

        <p className={styles.end}>E, prenhes, desde então, minhas duas </p>

        <p className={styles.center}>mãos.</p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}