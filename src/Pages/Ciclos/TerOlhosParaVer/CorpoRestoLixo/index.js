import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function CorpoRestoLixo() {
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

        <h2>Corpo, resto, lixo</h2>
        <hr/>

        <p>
          <em>Enfia no cu</em>, e então <strong>Zézero</strong> acaba. É esta a fala final da <em>fada da mídia de massas</em> que 
          aparece para um camponês como uma assombração, e que o convence a ir para a cidade 
          grande em busca dos sonhos de consumo estampados nas revistas que traz consigo. Sonhos 
          estes que o homem, ao cabo, consegue realizar não pelo trabalho, mas pelo resultado da 
          loteria esportiva, em que empregava quase todo o salário de fome que recebia na 
          construção civil.
        </p>
        
        <p>
          No entanto, como uma espécie de Fausto da modernização conservadora, o preço que o camponês 
          paga para ficar rico é perder o nexo com sua família, que desaparece no nada enquanto ele 
          tenta fazer a vida em São Paulo. Diante da desolação da paisagem vazia que encontra em seu 
          retorno ao interior, surge outra vez a <em>fada</em> no mesmo lugar em que se mostrou inicialmente. 
          O camponês, desesperado pela perda de qualquer ligação com o lugar de onde se origina, 
          pergunta a ela que fazer com tanto dinheiro. Já vimos sua contundente resposta, ainda mais 
          enfática por ser repetida três vezes.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1ev7dpdlgBjGqU_IGyiNZI-32yiGajZ1l" alt="boca" />

        <p>
          No começo do filme de Candeias, a câmera passeia pelas revistas de celebridades, pelos jornais 
          populares, pelos filmes Kodak que a fada traz como roupa; a montagem transforma essas referências 
          em colagens, as justapõe e explode sua pretensa naturalidade também a partir do som: a fada faz 
          de tudo pela sedução, também nossa. Nas revistas, muito futebol, bens de consumo, estilo e 
          moda, ilustrações e humor, elementos comuns da vida urbana tecida a partir da publicidade. 
          Mas não é nada disso que convence o camponês a largar sua vida no campo. A chave de leitura 
          social proposta por Candeias é a do corpo, e são as modelos seminuas que fascinarão o homem, 
          e que ele buscará encontrar na cidade grande – inclusive tendo comportamentos agressivos 
          com mulheres que encontrará ali, em busca desta posse.
        </p>

        <p>
          O corpo, ao ser trazido pelas mídias de massa e aí neutralizado de qualquer potência de 
          contestação, é visto no filme como elemento de expropriação pulsional – uma leitura até algo 
          adorniana do capitalismo –, como o local para o qual os desejos dos indivíduos de uma sociedade 
          são canalizados por/como desejos de consumo, simbolização que atrela a posse de algo à posse de 
          si ou do outro, sendo a recíproca verdadeira. E então entendemos a resposta que há naquela 
          frase que fecha o filme. Há ali um argumento sobre o nexo entre corpo e linguagem dentro deste 
          momento social, algo radicalizado pelo close na boca que repete <em>cu</em> com uma ênfase destacada, 
          arredondando-se como o seu referente. O dinheiro toma então o lugar do falo, assume-se como 
          objeto de desejo na ilusão de preencher alguma falta exterior que, em verdade, é constitutiva 
          ao indivíduo: diante daquele mundo então vazio de sentido na passagem do camponês ao burguês, 
          isso só pode resultar em frustração.
        </p>

        <p>
          Há muito claro em <strong>Zézero</strong>, assim, um dos principais eixos ou argumentos do cinema 
          de margem (Boca do Lixo, por exemplo e sobretudo) que emerge no Brasil como projeto estético próprio 
          e resposta eficaz aos sonhos da ditadura civil-militar: a saber, a centralização daquilo que é tratado 
          como resto não-simbolizável do processo autoritário de modernização conservadora do país. Se os 
          discursos hegemônicos são vazios, se as grandes narrativas são puro cinismo diante da desintegração 
          do horizonte de expectativas da vida social, isso significa que o <em>momento de verdade</em> do Brasil 
          estará em tudo aquilo que é tratado como resto, pura exterioridade, <em>lixo</em> do progresso linear. 
          Perder isso de vista é perder o sentido de obras como <strong>A Margem</strong> de Ozualdo Candeias,&nbsp; 
          <strong>A Família do Barulho</strong>, de Júlio Bressane, <strong>Copacabana Mon Amour</strong>, de 
          Rogério Sganzerla, <strong>Mar de Rosas</strong>, de Ana Carolina, ou <strong>O Vampiro da Cinemateca</strong>, 
          de Jairo Ferreira: obras que apostam na decomposição da narrativa linear como ferramenta para a expressão de 
          uma negatividade que – e este é o salto – não simplesmente se contrapõe ao projeto do Brasil-país-do-futuro, 
          mas lhe é inerente como contradição.
        </p>

        <p>
          Júlio Bressane talvez seja o cineasta que, ao longo de sua obra, mais radicalizou esta ideia do resto 
          como verdade da vida social. <strong>O Anjo Nasceu</strong>, por exemplo, trata-se basicamente da 
          trajetória de dois homens que invadem uma casa e torturam por um longo período, e de maneira agoniante, 
          as duas mulheres que ali habitavam, até assassiná-las. Não há ali nenhuma perspectiva de explicar as 
          motivações dos indivíduos, de fazer uma crítica sociológica ao sistema que pariu aqueles sujeitos, ou 
          mesmo à burguesia que se permite ter casas enormes como aquela: o filme é pura negatividade da ordem 
          social, expressa sobretudo na sequência em que o personagem de Hugo Carvana assiste ao pouso na Lua 
          na televisão – mostrado no filme ao longo de quase 4 minutos – e, em uma única frase, resume suas 
          observações sobre o assunto: <em>tremendo otário</em>.
        </p>

        <p>
          Em <strong>A Família do Barulho</strong>, em que a crise do petróleo se manifesta apenas como a 
          possibilidade cafetinar uma odalisca para ganhar algum dinheiro, tem-se a partir da quebra radical 
          da narrativa, da constante dobra do filme sobre si mesmo como representação, a negação de qualquer 
          possibilidade de se agenciar um discurso coerente – como o do Cinema Novo – sobre a realidade 
          brasileira, mesmo que criticando-a. E nisso entende-se, enfim, o sentido da palavra <em>família</em> 
          colocado em jogo pelo título-pastiche da obra – apenas alguns anos após a famigerada Marcha da 
          Família com Deus pela Liberdade – que surge representando três indivíduos que mantém relações 
          corporais ostensivas entre si, que se ofendem e se agridem, que cometem delitos e se prostituem. 
          A mesma palavra surge a negar seu próprio sentido corrente. Pois, se <em>família</em> vinha sendo 
          acima de tudo um nexo de cunho moralizante, abstrato e conservador naquele momento, Bressane coloca 
          o baixo-corporal em cena para desnaturalizar esta relação, e repensar suas possibilidades, disputar 
          o sentido da palavra para si – como fica claro na apoteótica sequência final do filme.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1DLOWHUlm_rpyjl1E1MOesYXmUM9WXTSV" alt="mulher" />

        <p>
          Baixos corporais, violência não-justificada, insultos, lixo, paisagens urbanas caóticas e 
          pobres a se mimetizar por quebra de narrativa, metalinguagem, interpelação direta ao espectador, 
          câmera em movimento, mistura incessante de gêneros, trilha sonora caótica, letreiros e subtítulos 
          excessivos, narrativas sem moral possível. Por mais antinatural que possa parecer, este nicho do 
          cinema brasileiro que aposta na negação de qualquer projeto de sociedade é, em verdade, um grande 
          projeto estético – com seus limites históricos e possibilidade específicas, é claro, como qualquer 
          outro. Está na pura negatividade a crença na latência de algo na realidade social que não coincide 
          com os discursos que se fazem sobre ela: é dela que emerge este mundo, e não do nada: ela o produziu, 
          como produziu a seleção de 70 ou o nacionalismo entreguista. Se a repetição exaustiva do 
          <em>marginal</em> ou do <em>maldito</em> simplesmente esvaziou essas expressões de sentido – 
          assim como fez com aquela <em>seja marginal, seja herói</em> que segue-se estampando por aí em 
          plena vigência das demandas da democracia representativa –, é diante da crença generalizada e 
          antagônica na teleologia de um discurso que se pode, de fato, como nos anos 1970, falar da 
          <em>margem</em> como um projeto estético de alcance em sua negatividade.
        </p>

        <p>
          O próprio Júlio Bressane no filme-ensaio <strong>Viola Chinesa: meu encontro com o cinema brasileiro</strong> 
          parece aclarar um pouco este ponto e sua ligação com as imagens dos baixos-corporais colocados em 
          cena neste projeto. Em seu diálogo com Grande Otelo – esta figura enorme que não cansa de calar 
          dicotomias apressadas entre o popular e o intelectual –, Bressane afirma que 
          <em>não se pode confundir é erotismo com essa rede de onanismo picareta que vem constituindo 
          a mente cinematográfica contemporânea</em>. Este ponto é crucial, e nos faz retornar 
          ao sentido do corpo em jogo em <strong>Zézero</strong>. Não há negatividade-em-si em 
          nenhum objeto: é necessário construí-la como discurso, ou a imagem se tornará objeto 
          e positividade, será apropriada pelo discurso vigente.
        </p>

        <p>
          O corpo pode ser, assim, o corpo da chanchada: o gênero que, e veja só que sintomático, era 
          fomentado pela ditadura, inclusive resultando nesse período em grande parte das maiores 
          bilheterias da história do cinema nacional, <strong>como em Bem Dotado, o Homem de Itu</strong>, 
          <strong>Como é Boa Nossa Empregada</strong> ou <strong>Coisas Eróticas</strong>. Neste caso, 
          o corpo é <em>onanismo picareta</em>, porque representado como objeto passivo de uma 
          sexualidade heteronormativa, que se expressa de maneira complacente ao colocar o espectador 
          como <em>voyeur</em> do óbvio, confirmando os termos do nexo social conservador já imposto – 
          é isso que está em jogo criticamente em <strong>Zézero</strong>. Mas o corpo como <em>erotismo</em>, 
          algo distinto disso, se traduz como desafio e resposta, potência de destituição da ordem, pulsão de 
          desmaterialização dos limites da experiência social. O cinema como erotismo é aquele que coloca o 
          corpo – e, portanto, a sociedade – em situações que redimensionam sua imagem, alienam as 
          impressões cristalizadas sobre si e se dobram sobre as experiências sociais como possibilidade 
          a ser penetrada.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=10-Uy5VOHA30axzRDz9ZWNSGxgppy-1pX" alt="mulher na frente de veraneio da policia" />

        <p>
          Por isso, muito longe ser simplesmente a constatação de uma aporia, este momento do cinema como 
          boca do lixo traz em si um projeto de, pasme, dialética: encontrar no resto da identidade as 
          condições para ser algo distinto. Não há contestação pela contestação. O lixo é tão produto da 
          sociedade capitalista quanto os edifícios espelhados e os automóveis conversíveis, e cada qual 
          revela algo sobre o estado desta sociedade, seu horizonte de expectativas, seu espaço de 
          experiência. O corpo – e nisto está também a aposta de filmes contemporâneos como&nbsp; 
          <strong>Febre do Rato</strong>, <strong>Tatuagem</strong> ou <strong>Divino Amor</strong>, 
          evidentemente em novos termos e lançando luz a novos contextos – sempre trará consigo um 
          <em>a mais</em> não simbolizado. Isto não significa, de forma alguma, abrir mão da representação 
          pontual como espaço de experiência coletiva. Significa, sim, que qualquer objeto pode ser 
          tensionado ao seu limite, desnaturalizado, centralizado a partir de qualquer ponto: toda forma 
          tem seu avesso, todo ato de linguagem é incompleto e, por isso, produtivo: só se veem filmes 
          de 50 anos atrás ou livros de 1800 porque há neles algo que varia e que deixa ou torna a 
          fazer sentido.
        </p>

        <p>
          A distância do resto ao essencial é unicamente uma representação que dê conta de inverter o sentido em jogo. Por isso, diante daqueles que defendem que o cinema deve dizer aquilo que “o povo” quer ouvir, diante da defesa do entretenimento como categoria crítica, ou diante do discurso corrente que associa a arte ao belo – sem pensar que a beleza, como a educação, é uma categoria social – me parece que a grande lição que certo veio submerso do cinema brasileiro tem deixado para a posteridade é um produtivo, dialético e sonoro <em>enfia no cu</em>.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}