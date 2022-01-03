import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function TranseEOuNarrativa() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/ter-olhos-para-ver')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Transe e/ou Narrativa</h2>
        <hr/>
        
        <p className={styles.center}><strong>I</strong></p>

        <p>
          Há, durante o indispensável <strong>Branco Sai, Preto Fica</strong>, pelo menos seis longas sequências de personagens 
          subindo ou descendo escadas e rampas. A mais longa destas sequências, em que Marquim desce um elevador em casa, tem cerca 
          de 2 minutos e meio, e provavelmente contribui para os comentários que criticam no filme sua “lentidão” e sua “falta de ritmo” 
          – comentários esses que se esforçam por não compreender a relação entre permanência e acontecimento histórico como impressa a 
          cada dia no corpo daqueles indivíduos feridos, amputados, e radicalizada na própria estrutura da obra como seu ritmo.
        </p>

        <p>
          Mas a questão sobre estas sequências aqui é outra, e se liga sobretudo ao espaço/tempo que estas ações e acontecimentos 
          “secundários” à trama de determinados filmes têm ocupado em algumas obras nacionais contemporâneas, sobretudo do cinema 
          mineiro. Aqui se poderia listar, então, <strong>No Coração do Mundo</strong> (Gabriel Martins e Maurilio Martins, 
          2019), <strong>A Vizinhança do Tigre</strong> (Affonso Uchoa, 2014), <strong>A Cidade Onde Envelheço</strong> (Marília 
          Rocha, 2016), <strong>O Homem das Multidões</strong> (Cao Guimarães e Marcelo Gomes, 2013), <strong>Trabalhar Cansa</strong> (Juliana 
          Rojas e Marco Dutra, 2014), <strong>Chuva é Cantoria na Terra dos Mortos</strong> (João Salaviza e Renée Nader, 2018) e, 
          particularmente, <strong>Temporada</strong> (André Novais, 2018), um dos filmes - estou certo - mais importantes da história do cinema nacional.
        </p>
        
        <p>
          Sobre este último interessa particularmente observar como a construção da profundidade psicológica de Juliana, personagem 
          magistral de Grace Passô, passa não por monólogos emocionantes, acontecimentos traumáticos e pirotécnicos ou cenas de dramaturgia 
          exacerbada: o que se tem é um mosaico de dias úteis, em que ir ao trabalho, ouvir mensagens de áudio ou ter diálogos na beira de 
          um piscinão contribuem, sutil e silenciosamente, à emancipação final da personagem – entendida não pela chave liberal do empoderamento, 
          mas a partir daquilo que Judith Butler chamou de agência, isto é, a atuação do indivíduo a partir de sua reflexão sobre si e o mundo, 
          em sua falibilidade universal.
        </p>

        <p>
          A questão é notar a partir desses exemplos como, mais do que uma escolha estética particular, a preferência pela narrativa do 
          simples, por um mundo sem <em>plot twist</em>, tem sido uma tendência do cinema brasileiro contemporâneo, com largas implicações 
          políticas sobre aquilo que deveria ou poderia ser narrado, pelo que é considerado como digno de nota ou não: as tais condições de 
          dizibilidade e visibilidade de Jacques Rancière aqui outra vez.
        </p>

        <p>
          Neste movimento dialético em que o segundo plano e o primeiro plano alternam suas posições sucessivamente e se contestam – numa 
          genealogia que se poderia rastrear a partir do <a href="https://vimeo.com/68514760" target="_blank" rel="noreferrer">neorrealismo italiano</a> e 
          que tem em Eduardo Coutinho a grande paternidade por aqui – o filme se mostra como espaço que não admite a crença <em>a priori</em> no 
          relevante, e parte então para a narração do cotidiano – <em>descontidianizado</em>, portanto –, para o diálogo trivial – <em>destrivializado</em>, 
          então – como força de existência e marca de acontecimento. Para o filme, esta escolha imprime esteticamente a marca de uma obra que verá o 
          diálogo <em>como</em> acontecimento, que preferirá a câmera estática à direção ostensiva, que terá poucos cortes ou efeitos visuais, que 
          utilizará a trilha sonora não para tentar induzir emoções, mas como parte mesma desta dialética de fundo e frente, e que, enfim, verá seus 
          personagens como fins e não como meios para aquilo que seria uma mensagem abstrata.
        </p>

        <p>
          <em>
            O cinema é visto, então, como uma poderosa máquina de narratividade: composição de algo a partir daquilo que não parecia sequer 
            um objeto de fato. A existência do objeto já é, assim, um ato político.
          </em>
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1kTFfY32KWpHVdGIqRSwsZlL9SfqvyMRV" alt="cena de filme, cadeirante em escadaria" />
        
        <p className={styles.center}><strong>II</strong></p>

        <p>
          É agonizante assistir <strong>Hitler 3º Mundo</strong>. José Agrippino de Paula, um dos pais esquecidos do Tropicalismo, carrega 
          uma câmera angulosa – em constante movimento ou parada em posições que distorcem aquilo que é filmado, à moda expressionista – 
          atuações com gestos marcados e repetições – que se remetem à dramaturgia de um Tadeusz Kantor – e um encontro doloroso do simbólico 
          com o cotidiano óbvio, resultando em um dos filmes mais impactantes que se produziram em resposta à ditadura civil-militar brasileira 
          – por isso, aliás, nunca lançado comercialmente, como diversas outras excelentes obras do período. A imagem de um jovem Jô Soares 
          vestido de gueixa a alimentar como porcos os habitantes de uma favela, sob uma câmera que não se incomoda em se movimentar bruscamente 
          e esbarrar nas pessoas, é algo que não passará despercebido nem pelo mais cínico dos espectadores – e sim, se pode discutir eticamente 
          o sentido destas imagens, mas sua força é absolutamente inegável.
        </p>

        <p>
          Muitos outros filmes deste período parecem querer trazer na forma algum tipo de compulsão na imagem, que distorce deliberadamente o 
          que seria narrado e desconforta aquele que observa. Para além do paradigmático <strong>Terra em Transe</strong>, cujo próprio nome é 
          sintomático do que aqui se expõe, seria possível citar <strong>Jardim de Guerra</strong> e suas intermináveis cenas de 
          tortura, <strong>O Jardim das Espumas</strong> na mesma linha, mas com baixos corporais nítidos, <strong>São Paulo Sociedade Anônima</strong>, 
          com a metrópole e o capital em pleno movimento de (auto)destruição e, enfim, até uma obra de um cineasta mais “tradicional” como Nelson 
          Pereira dos Santos no godardiano <strong>Quem é Beta?</strong>. É claro que a existência de diversos contraexemplos do mesmo período, é 
          bom dizer, mostra que não há aqui tentativa nenhuma de esgotar uma interpretação sobre a fase mais produtiva do cinema brasileiro, mas 
          mostrar que há um tipo de tendência significativa nela.
        </p>

        <p>
          E é, em verdade, esta tendência ao transe, ao movimento, que parece unir – mediada pela diferença formal e ética, evidentemente – os 
          cineastas do Cinema Novo e o grupo da Belair que o tentou responder prontamente. Que se pense no Rio de Janeiro pintado por, cada qual 
          com suas cores, é claro, Carlos Diegues em <strong>A Grande Cidade</strong> e Rogério Sganzerla em <strong>Copacabana Mon Amour</strong>: ambas 
          as cidades são filmadas ao nível da rua e com câmera na mão, ambas são evocadas deixando claro os limites da representação – a histórica 
          sequência de Antonio Pitanga que abre o primeiro, por exemplo, e a igualmente histórica interpelação aos marinheiros estadunidenses no 
          segundo –; ambas são construídas como um local em que está ausente qualquer projeto progressista de país; ambas, por fim, deslocam a 
          qualquer custo os indivíduos – espectadores e personagens – de sua condição de observadores passivos da realidade.
        </p>

        <p>
          Tem-se neste momento do cinema nacional, portanto, uma espécie de radicalização da experimentação que a Nouvelle Vague propunha a 
          partir do ímpeto de expor sua representação à contingência do dia, das ruas, dos jornais. Talvez porque nossos dias, ruas, jornais 
          tragam consigo um grau de violência muito maior em todos os níveis da vida psíquica e social.
        </p>

        <p>
          <em>
            O cinema, neste caso, é visto como uma máquina de decomposição: as convenções, os paradigmas conservadores são internalizados e 
            radicalizados pela forma, levados às últimas consequências.
          </em>
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1sE3jQ2KQ95N5PUHkYXvbwnUgJiB5xZIF" alt="cena de filme" />

        <p className={styles.center}><strong>1 e/ou 2</strong></p>
       
        <p>
          Resumiu-se em dois esquemas bem genéricos (e não-totalizantes) duas tendências que contrastam (e não opoem) dois momentos distintos 
          (e não antagônicos) do cinema nacional. Na contemporaneidade, vê-se a extrema narratividade que toma forma a partir da dedicação à 
          vida mínima e à construção; nos 1960 e 1970 vê-se o movimento que parece dissolver a realidade e todos os viventes, que parece 
          apontar, na melhor das hipóteses, para a necessidade de se destruir o mundo tal como se conhece e, na pior, para a constatação de que 
          alguém já estava a realizar isso. Mas que se pode tirar, enfim, desta aproximação?
        </p>

        <p>
          Digamos, então, que parece haver um pressuposto distinto para o que o cinema teria como função em determinado contexto da realidade 
          social. Nos anos 1960 e 1970 deste nosso recorte, parece estar em jogo uma visão de que, em um mundo em que a violência é radicalizada 
          como forma de coesão social, o cinema deveria dar uma resposta à altura, formal e tematicamente, transformando qualitativamente o 
          sentido sua experiência para que não perdesse seu lugar no mundo, não decaísse em cinismo. O transe é o saldo formal desta resposta. 
          Desta maneira, ecoando Ismail Xavier, se poderia dizer que o diretor requisita para si um papel de intérprete da realidade 
          social <em>como um todo</em>, e é esta realidade que ele colocará, mesmo que a partir de metáforas e símbolos, dentro da obra: 
          realidade violenta resulta em forma violenta.
        </p>

        <p>
          Já na leitura de certo cinema da contemporaneidade, a função da representação cinematográfica parece estar um ponto diferente: 
          ela é princípio de construção ante aquilo que é visto como dissolução ou silenciamento no plano social. Se há um Estado cuja única 
          função, na educação, na cultura, na economia, é separar os que possuem dos que não possuem – educação, cultura, dinheiro –, o cinema 
          também responde com a necessidade de se narrar alguma coisa sobre a parte dos sem parte. A resposta à tentativa de instaurar o nexo 
          social por uma suposta racionalidade instrumental é, dialeticamente, a contestação de que, caso esta realidade pretenda-se de fato 
          puramente instrumental, já não haveria mais racionalidade alguma em jogo. Noutra palavras, quando Juliana diz que seu namorado 
          em <strong>Temporada</strong> <em>joga handebol</em>, ou quando Neguim e Junim em <strong>A Vizinhança do Tigre</strong> improvisam 
          insultos sobre a base eletrônica de um celular velho, a diferença em voga é a do dizer e do não-dizer, logo, do existir e do não-existir 
          como objeto/sujeito: qualquer forma de cálculo social que desconsidere estas possibilidades latentes de existência é, no mínimo do mínimo, 
          puro cinismo.
        </p>

        <p>
          A graça é, portanto, que o contraste entre estas leituras distintas de momentos históricos distintos traz consigo uma semelhança 
          inevitável: há violência em ambas as respostas, mesmo que elas se distanciem em diversos aspectos formais e éticos. O transe está para 
          a violência do Estado militar como a narratividade está para a violência do Estado neoliberal. E estas duas respostas – que não esgotam 
          nenhuma das obras, mas constituem algumas linhas de força delas; e que não são as únicas resultantes críticas delas ou de seu contexto, 
          mas que foram as que se escolheram aqui neste texto – trazem como intenção e consequência deslocamentos na percepção sobre o que seria a 
          função do cinema, ou do Estado, ou as inúmeras combinações entre estas variáveis – e cabe à crítica dizer em quais filmes isso se dá com 
          mais força, mais amplitude, mais profundidade, com quais diferenças e semelhanças, é evidente.
        </p>

        <p>
          Ler os movimentos de algo com a proporção do cinema brasileiro, portanto, deve passar por um esforço de buscar o igual no diferente e o 
          diferente no igual. Como se viu – e este é o saldo destes apontamentos – qualquer leitura crítica deve ter como pressuposto que há linhas 
          de forças que unem e separam simultaneamente obras de tempos históricos distintos ou aproximados, e que é possível olhar essas obras em 
          diversas chaves, com diferentes ganhos de análise. No caso de nossa leitura, e aqui findo, parece estar em jogo uma arte que atravessa os 
          anos a observar nas condições sociais uma ampla distância daquilo que idealmente deveria se dar; mas as resultantes disso, individual ou 
          historicamente, se distinguem justamente naquilo que se aproximam – porque do diagnóstico são propostas respostas distintas – e se aproximam 
          naquilo que se distanciam – porque suas diferenças correspondem de certa forma à necessidade de uma resposta. Transe e Narratividade (como a 
          ditadura civil-militar e a democracia representativa conservadora) são pares opostos e, ao mesmo tempo, complementares.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1L-S37wU5U0y59Mc7_hGeXJf65e9QsH_-" alt="muro pixado" />
        
      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}