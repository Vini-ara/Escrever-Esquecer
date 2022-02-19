import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

import Youtube from "react-youtube";

export function NaoHaLadoDeFora() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Não há lado de fora");

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

        <h2>Não há lado de fora</h2>
        <hr/>

        <Youtube 
          className={styles.youtubeVideo}
          videoId="78myYdxnH0M"
        />

        <p className={styles.center}><strong>1</strong></p>

        <p>
          <strong>Ladrões de Cinema</strong>, de Fernando Coni Campos, é um filme indispensável 
          na genealogia do audiovisual brasileiro. Para além de ser uma obra que se propõe a pensar 
          a realidade material do Brasil, o filme é um raro testemunho do cinema a tematizar suas 
          próprias condições éticas e de produção: isto é, colocar em jogo no “resultado” aquilo que 
          seria seu “princípio”, desde já acabando com este esquema teleológico ao turvar a ordem 
          pretensamente natural das coisas: negando que haja uma realidade que exista antes do filme, 
          que se suspenda ao longo da obra, que retorne então depois dela: esta é a maneira como se 
          usa a palavra <em>contexto</em> correntemente, afinal.
        </p>

        <p>
          Tem-se aqui em questão, pois, um filme que retrata, no plano ficcional, o processo de 
          realização de <em>outra</em> obra cinematográfica, seus percalços e seus ganhos estéticos. 
          Seria possível então, assim em abstrato, pensar que se veja na tela o processo de preparação 
          de atores, de decisões sobre roteiro, a dificuldade de circulação da obra. Mas – e esta é a 
          grande sacada do filme – Ladrões de Cinema parte de algo que Coni percebe como muito mais 
          fundamental para o processo de criação de qualquer obra a partir de um país como o Brasil 
          dos anos 1970: a relação de classe que viabiliza ou inviabiliza a própria possibilidade de 
          realização artística. O evento que desencadeia a produção do filme por parte dos moradores 
          do morro do Pavãozinho é, assim, o roubo da aparelhagem – câmera, gravadores, rolos de 
          filme – de alguns americanos que rodavam um documentário sobre o carnaval carioca. Apropriação 
          dos meios de produção, com perdão da citação. A partir disso, então, surge entre os personagens 
          do filme a discussão sobre vender os aparatos para ganhar algum dinheiro ou utilizá-lo para 
          criar uma obra sobre o que se desejasse, ideia que evidentemente vence.
        </p>

        <p>
          Tendo o aparato material devidamente <em>apropriado</em>, começam as discussões sobre o 
          que fazer e como fazer. Aqui então surge mais um salto interessantíssimo da obra de Coni 
          Campos: não duvidar da sensibilidade dos malandros, mas mostrar como a familiaridade com a 
          cultura popular e a vida social da periferia faz com que as questões técnicas da obra sejam 
          mera questão de tempo, de adaptação. A escolha por filmar a história de Tiradentes, utilizando 
          o próprio morro como cenário, é outro ponto muito significativo – este tomar posse da história 
          oficial a <em>partir</em> dos termos da sua – e dialoga criticamente com a proliferação de 
          filmes históricos nesta época – estes sim partidários da história nacionalista, oficial – com 
          muito apoio do governo e de sua agência, a Embrafilme.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1O054J0nu-bEyeHxmPq6t-euhM0Kz8NWB" alt="comunidade" />

        <p>
          Resumindo a dança, está em jogo em Ladrões de Cinema a história de como as condições 
          materiais restringem, no presente, os meios para circulação da sensibilidade dos grupos 
          e individualidades – algo que recentemente tentou-se trabalhar, por exemplo, em&nbsp; 
          <strong>Pacarrete</strong>, sem sucesso. Ao ter acesso às condições materiais – 
          não importando a maneira, e disso lembramos por exemplo da história surgimento do 
          movimento Hip-Hop –, tem-se a irrupção de obras que trabalham temas e modos de dizer 
          inovadores, críticos, sensíveis, contrariando qualquer sociologismo sobre o “gosto do povo”. 
          Este movimento de democratização das condições de produção poderia se dar, sinaliza o diretor, 
          por alguma forma de solidariedade de classes como, no filme, a do francês – Jean-Claude 
          Bernardet faz este papel, e isto é brilhante – que dá aos rapazes do morro alguns rolos 
          de filme. Aqui não somos tão adeptos desta ideia, é claro.
        </p>
        
        <p>
          O filme de Coni Campos parece ser, no entanto e a despeito da possível união entre 
          classes, extremamente pessimista quanto à possibilidade de vermos na sociedade brasileira 
          algo análogo à realização do Tiradentes filmado no morro do Pavãozinho: no final do 
          filme, o braço armado do Estado surge para prender os realizadores pelo roubo dos 
          aparelhos, enquanto seu filme é exibido com a logomarca do Brasil – aqui podemos falar 
          de fato de algum tipo de apropriação: a da história dos vencidos pela dos vencedores – 
          cinemas mundo afora. O Estado não parece estar interessado em superar as condições 
          materiais em que se encontra, mas reiterá-la por se favorecer dela como rótulo: desta forma, 
          também interessado em delimitar os rumos e limites do “popular” e do “oficial” ou “erudito”.
        </p>
        
        <p>
          Note-se, enfim, como há na obra uma sinalização para a ligação imediata entre, por um 
          lado, o que se diz, como se diz, por que se diz e, por outro lado, as condições materiais 
          do dizer. Isto não está para além do filme ou é mera sociologia da arte, mas é parte 
          incontornável da experiência estética, porque determina a própria existência da obra, 
          seus locais de circulação e o valor daquilo que será sentido e analisado – pense-se então 
          em uma obra como <strong>Jardim Nova Bahia</strong>, de Aloysio Raulino, e o que está em 
          jogo no ato de dar a câmera para o operário Deutrudes, para então constatar a falsidade 
          desta resolução – neste caso, o pacto de classes é negado.
        </p>

        <p>
          Ladrões de Cinema tenta ser, portanto, a prova de seu próprio argumento: quando se 
          trata de arte no que se chama de mundo subdesenvolvido, <em>não há lado de fora</em>. 
          As condições de produção estão o tempo todo em cena testemunhando e efetuando o gosto 
          e a possibilidade, e isto justifica a existência de uma obra que discute e inverte 
          suas causas e consequências: é tudo a mesma coisa. Qualquer ilusão de autonomia da 
          obra cai por terra imediatamente, pois não há cinismo possível: o real é este plano 
          sempre a cortar, como um teor, a representação.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1Ib9JaigElp3q73JOy4fEV4OY9IZBmulw" alt="dois homens" />

        <p className={styles.center}><strong>2</strong></p>

        <p>
          É extremamente sintomático que os filmes de Rogério Sganzerla e Júlio Bressane 
          tenham sido os mais afetados pela restrição de circulação e difusão dada por um 
          cinema sufocado por gostos alheios e demandas exteriores a ele. Isso resulta, ao 
          cabo, em filmes nunca exibidos publicamente, obras sem restauração ou até mesmo 
          completamente perdidas, como <strong>Carnaval na Lama</strong>, de Sganzerla. Para 
          dois cineastas cuja carreira é permeada por filmes com interação com transeuntes, 
          pelos olhares de curiosos para a câmera e pela quebra constante da ilusão da 
          representação autônoma, este destino para suas obras é uma grande comprovação do 
          acerto crítico do discurso: de fato, era necessário misturar o lado de dentro ao 
          lado de fora para se ter um instante de verdade, ainda que o preço disso seja 
          alto.
        </p>

        <p>
          A história da geração Boca-do-Lixo e Belair parece ser a história de um projeto 
          de radicalização da Estética da Fome do Cinema Novo: a tentativa de superar as 
          contradições de um modelo de cinema que tentava transformar o limite em possibilidade 
          – às vezes mais, às vezes menos como Oswald de Andrade –, acreditando que nisso 
          vivia verdadeiramente a possibilidade de se fazer um <em>filme nacional</em>: 
          internalizando as contradições materiais no plano da obra. Para o “grupo” nunca 
          homogêneo do cinema marginal, isso significava necessariamente suspender todas as 
          premissas de narratividade e representação do cinema hegemônico, que se conservaram 
          mesmo no Cinema Novo e garantiram seu sucesso ante as classes médias – e note-se a 
          maneira como Sganzerla diz certa vez em entrevista sobre ser 
          <em>barrado na porta da Embrafilme</em> e então <em>ter sido forçado ao exílio</em>, 
          junto com Bressane, sob risco de prisão.
        </p>

        <p>
          Que se lembre, como exemplo mais evidente possível disso, como, já nos primeiros 
          7 minutos de <strong>Matou a Família e Foi ao Cinema</strong>, de Júlio Bressane, 
          o jovem personagem <em>já</em> tinha matado a família e <em>já</em> tinha ido ao 
          cinema: a expectativa pela narrativa psicológica e pelo suspense é desarmada 
          imediatamente, e ainda resta uma hora de filme. Não se pode atacar a realidade material 
          sem atacar as resoluções formais que dela surgiram e que a ela foram incorporadas 
          posteriormente. Veja que isto está um passo além da quebra da barreira brechtiana 
          tão comum, por exemplo, no cinema de Carlos Diegues – como na sequência inicial de 
          <strong>A Grande Cidade</strong>: não só criar um diálogo que ultrapassa o espaço 
          diegético, mas mudar o tom de qualquer diálogo – os gritos que permeiam as obras de 
          Sganzerla, a trilha sonora irônica em Bressane –, de qualquer posição entre quem 
          dialoga – é como se os personagens nunca se escutassem –, da relação destas pessoas 
          com o espaço – é um cenário, mas é simultaneamente a rua onde qualquer um pode pisar.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1t2UMxrX5NIK-P6rDF8PUicakLpG7FeUt" alt="pessoas" />

        <p>
          Há, por exemplo, uma sequência histórica de Sganzerla em <strong>Sem Essa, Aranha</strong> em 
          que todos os personagens descem uma rua do morro do Vidigal em mais um capítulo da 
          repetição atordoante de berros como <em>estou com fome</em> e <em>estou com dor de barriga</em>, 
          sobre os impressionantes planos-sequência do diretor. Mas há muito mais do que encenação aí. 
          Os moradores, transeuntes, crianças e cachorros do morro fazem mais do que compor um cenário 
          para uma representação: eles interferem nela e mesmo a delimitam. Os cachorros ameaçam morder 
          os atores, as crianças se colocam na frente da câmera enquanto riem dos personagens, alguns 
          observam curiosos mas correm da câmera quando ela se aproxima. O fundo torna-se a frente, 
          nesta dialética que aqui se tenta defender. Não é como se o Vidigal fosse um cenário pitoresco 
          para os anseios de um grupo exterior a ele: o que Sganzerla deixa na tela é a crença de que 
          esta <em>cena</em> se passa <em>desta forma</em> porque foi gravada <em>neste morro</em>, e em 
          outro qualquer outro lugar o resultado seria distinto. A base material é, portanto, um nível 
          de elaboração da forma e do conteúdo: eis como o país se impõe, não mais como uma 
          abstração nacionalista ou horizonte simbólico.
        </p>

        <p className={styles.center}><strong>3</strong></p>

        <p>
          No Brasil, os anos 1970 e 1980 marcam uma virada no nicho dos documentários: filmes 
          como <strong>Mato Eles</strong>, de Sergio Bianchi, <strong>Cabra Marcado para Morrer</strong>, 
          de Eduardo Coutinho, <strong>Porto de Santos</strong>, de Aloysio Raulino, e <strong>Congo</strong>, 
          de Arthur Omar, principiam um movimento amplo de contaminação 
          do documentário pela ficção, isto é, uma mudança no estatuto assumido para as imagens 
          do real em jogo nessas obras. O que se poderia dizer é que foi alterada substancialmente 
          a crença de que o documentário seria capaz de decifrar e explicar certa essência daquilo 
          ou de quem é retratado, como era procedimento, por exemplo, nos importantes filmes 
          da <strong>Caravana Farkas</strong> nos anos 1960. Com esse movimento, nota-se uma 
          considerável alteração na figura do narrador – que praticamente desaparece –, em certa 
          economia da imagem do essencial e, sobretudo, do papel do diretor. O documentário passa 
          a ser compreendido como um discurso entre discursos, que não esgotará nunca seu objeto 
          e, inclusive, nem mesmo uma posição de puro objeto torna-se possível para o que quer 
          que seja – é cada vez mais difícil responder a simples pergunta <em>sobre o que é este filme</em>?
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1HGmA5UmMdOHC9kKJGW7lGNYp8QX2Q0jd" alt="cena do filme" />

        <p>
          Alguns anos depois, pode-se observar um movimento simétrico ao que foi acima descrito: 
          a contaminação da ficção pelo documentário. Em particular no cinema mineiro contemporâneo, 
          a ficção ganha a premissa de um trabalho de campo para pesquisa de modos de vida de 
          determinados bairros, grupos de indivíduos ou pessoas específicas, o que implica estudos 
          sobre movimentos históricos, criação de textos conjuntamente a comunidades/grupos de 
          indivíduos e formação de atores nestes lugares. Filmes como <strong>A Vizinhança do Tigre</strong>, 
          de Affonso Uchôa, <strong>Arábia</strong>, de Affonso Uchôa e João Dumans, <strong>Temporada</strong>, 
          de André Novais, <strong>No Coração do Mundo</strong>, 
          de Gabriel Martins e Maurílio Martins, e <strong>Baronesa</strong>, de Juliana Antunes, 
          apostam na utilização da realidade como um instante de verdade da ficção, e na ficção 
          como meio de lançar luz para possibilidades latentes da realidade. Um esforço que resulta 
          em obras de enorme alcance crítico pela inserção que se consegue – e em que se baseia – no 
          cotidiano dos bairros e pessoas que aborda.
        </p>

        <p>
          Baronesa, filme magnífico de Juliana Antunes, é uma prova do que se consegue a partir 
          da radicalização da relação ficção-realidade. Mais do que criar uma obra que pretenda 
          <em>abordar</em> questões essenciais sobre mulheres da periferia, a diretora pretende 
          criar um filme em que a vivência de determinadas pessoas em determinados bairros de uma 
          determinada periferia consiga <em>alterar</em> o próprio processo de criação do filme, 
          diminuindo no ato o risco do cinismo e da observação exotizante. Isto significou, para a 
          diretora, anos de pesquisa até o interesse das personagens/atrizes do filme pela realização 
          da obra. Mas esse pressuposto, paralelamente a isso, não altera o horizonte ficcional ou 
          estético do texto e da representação – e é interessante nos perguntarmos a quem damos o 
          direito da “arte” e da mimese e a quem temos designado apenas como representantes da 
          “realidade” ou “das ruas” –, mas cria um poderoso jogo de identificação e distanciamento 
          que consegue criar latências potentes tanto no real quanto na ficção. Nos lembremos da 
          sequência histórica em que as duas personagens principais conversam na porta de suas casas 
          e são surpreendidas por tiros vindos de locais próximos, o que faz com que a câmera caia 
          no chão, sendo rapidamente apanhada de volta. Se a cena é inteiramente ficcional (e eu 
          não estou certo disso – quem souber me diga), há um enorme acerto nesta quebra da 
          passividade na representação da violência, que atinge o próprio olhar do espectador, 
          indo ao solo; mas se a cena é inteiramente não-ficcional, o acerto está em mantê-la 
          dentro da obra de ficção, como um momento de verdade do filme e testemunho do enorme 
          trabalho de pesquisa em jogo em sua formação. Acertos de lado a lado, dúvidas sobre o 
          estatuto das imagens também de lado a lado.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1uYuDQWpS6AWxe4SIb7vCBqyyucVVRBTS" alt="mulher fumando em uma obra" />

        <p>
          Assim, pensar neste tensionamento entre ficção e realidade é justamente conceber que 
          as condições materiais de uma obra não interferem ou condicionam a elaboração de um 
          objeto estético, mas atravessam esta construção de diferentes maneiras, a serem exploradas 
          como instantes de quebra na ficção ou no documentário (como em <strong>Mato Eles</strong>, 
          em que são alternados depoimentos falsos e verdadeiros, sendo impossível distinguir, 
          dado o absurdo deles, qual é qual). É sintomático, assim, que o Brasil tenha dado tanto 
          campo a estes experimentos, e isto parece depor sobre a complexidade sociológica, e 
          consequentemente estética, em que se constituem os planos da experiência sensível por aqui.
        </p>

        <p className={styles.center}><strong>1 + 2 + 3 (Por um realismo especulativo)</strong></p>

        <p>
          O jornalista do programa Roda Viva pergunta a Mano Brown como é seu processo criativo. 
          Mano Brown responde que <em>o maior processo criativo é a necessidade</em>, já que é a 
          música que dá de comer a ele e sua família. Talvez nessa resposta curta e grossa esteja 
          tudo aquilo que se tentou dizer neste texto enorme até aqui. Não há lado de fora. Mas, 
          para além de identificar nisso um atrelamento simples entre realidade e representação – 
          algo que sempre é designado ao <em>popular</em> –, como se as condições materiais fossem 
          refletidas na obra, mero reflexo do real – olha só o determinismo dos eugenistas entrando 
          pela porta dos fundos –, devemos pensar no termo <em>processo criativo</em> colocado em 
          jogo pela resposta. Para Brown, e também aqui, existe um termo do real que se impõe como 
          necessidade <em>da</em> forma, mas não <em>pela</em> forma: as condições materiais atravessam 
          o processo, mas ele permanece sendo elaboração e criatividade, proposição e descoberta. O 
          mundo material é um plano indispensável disso, assim como diversos outros que o atravessam 
          e se atravessam.
        </p>

        <p>
          A representação é assim um gesto: ocorre como necessidade de um princípio de movimento, 
          mas não conserva estes termos iniciais em sua resposta: contém e exclui, simultaneamente. 
          Mas nada disso é novo para o cinema brasileiro, é claro, e aqui se tentou provar este ponto 
          a partir de obras de diversos vieses e locais de enunciação. A mistura de gêneros, a quebra 
          da passividade da observação, a internalização do aleatório, a radicalização da tensão 
          entre ficção e não-ficção, a contaminação de registros e a criação de zonas de indeterminação: 
          todas estas práticas serviram como testemunho de um esforço em não falsificar os termos em 
          que uma obra se constrói e sobre os quais se elabora, isto é, não simplificar a relação 
          entre realidade e ficção, base e representação, processo e obra. Quando aqui se diz que 
          não há lado de fora, isso não pode significar nem pensar o mundo como representação, nem 
          a ficção como expressão imediata de uma realidade: é pensar que qualquer divisão entre 
          mundo e obra é arbitrária, não natural ou óbvia. E que cada obra realizará esta divisão 
          à sua maneira.
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1JjWmaeK57YLs8AxMWFj4JhtR1crYnj9p" alt="opção de resposta" />

        <p>
          Estes instantes de verdade do cinema brasileiro, que nunca se furtou de mexer nestas 
          linhas e divisões e de deixar visíveis as cicatrizes deste processo, parecem ser uma 
          das mais significativas linhas de força desta trajetória. Nem negar o real – buscando 
          o isolamento da autonomia fictícia tão sonhada pelos amantes do entretenimento –, nem 
          negar a representação – buscando sociologizar tudo aquilo que é produzido como arte, 
          colocá-lo numa causação óbvia entre sociedade e obra. O cinema brasileiro traz consigo 
          a marca de um <em>realismo especulativo</em> como interminável busca de formas de 
          justificar sua própria existência na realidade em que se manifesta. Isto significa, 
          assim, assumir que existe um real que escapa à imagem como totalidade, mas que ali
           permanece como instante de verdade e eixo de composição do processo.
        </p>

        <p>
          Em outras palavras, <em>o cinema brasileiro tem sido muito honesto consigo mesmo</em>. 
          E talvez seja justamente esta honestidade com as possibilidades do real e da representação 
          que tenha afastado por tanto tempo os beatos do entretenimento, os conservadores da 
          representação autônoma, os imbecis da busca pelo “popular” e os otários do 
          cultura-não-oferece-nada-à-sociedade: essa dialética mórbida que tenta transformar a maior 
          linha de força em defeito, rebaixando a partir da constatação da distinção. Olhar para os 
          termos do nosso realismo especulativo, contudo, seria olhar para as frestas também desta 
          realidade podre que se fabrica e que se tenta impor como incontornável e unívoca. Foi esta 
          também a tentativa deste texto, enfim.
        </p>

      </section>

      <TextsNavigation currentCiclo="terOlhosParaVer" handleRedirect={handleRedirect}/>
    </div>
  );
}