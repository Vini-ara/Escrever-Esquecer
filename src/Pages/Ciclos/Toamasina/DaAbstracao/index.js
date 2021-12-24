import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function DaAbstracao() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/toamasina')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Da abstração</h2>
        <hr/>
        <p>
          O mar floriu os continentes, mas nós não lhe demos absolutamente nada 
          em troca. Nós o enchemos de pedaços de madeira pregados uns aos 
          outros, e então dissemos com orgulho desmedido que fomos <em>em navio</em> 
          para algum porto empoeirado e distante. Estão nisso ilustrados, 
          enfim, de maneira sucinta, dois dos principais processos que levaram 
          a humanidade ao processo de degeneração e alienação vultuosas que 
          conduz, na melhor das hipóteses, aos Estados bélicos e, na pior, à 
          incompreensão dos ciclos da natureza. Com sua licença, prosseguirei 
          neste raciocínio, que se pretende desdobrar simultaneamente em 
          reflexão sobre a forma e sobre os efeitos, ao abordar a abstração 
          como 1) distanciamento da verdade objetiva sobre o mundo e 2) 
          distanciamento da verdade objetiva sobre nós mesmos, estando ambas 
          as premissas absolutamente circunscritas uma na outra – a despeito 
          do oxímoro da imagem. Andemos pelo mar, portanto.
        </p>

        <p>
          Convenhamos, em primeiro lugar, que um veleiro não é um veículo. 
          Um veleiro é, na melhor das hipóteses, um veículo de veículos. 
          Supondo que os pregos e a cola que unem as tábuas de maneira em 
          um barco sejam suficientemente bem manejados, notemos que o barco 
          é um objeto imóvel. A mobilidade que propicia o deslocamento está, 
          e como o esquecemos, no vento que sopra, na onda que quebra, na 
          maré que escorre, em última instância na Terra que supostamente 
          giraria. A linguagem, como um tirano, erra. 
        </p> 

        <p>
          O mesmo se mostra quando deslocamos uma pena e a recolocamos sobre 
          uma mesa como esta em que escrevo estas palavras: enfatizamos 
          sempre a mão ou a pena, mas a mesa – sua indispensável e plana 
          solidez – jamais: <em>a caneta está sobre a mesa</em> dizemos, nunca <em>a mesa está 
          sob a caneta</em>. Convenhamos, ademais, que é este mesmo princípio que, 
          até então, nos tem feito contar as histórias dos monarcas, mas nunca 
          as dos jograis que os mantiveram – indiretamente, como as nuvens 
          aos homens – vivos. A linguagem permanece errando.
        </p>

        <p>
          Por que então temos insistido, consciente ou inconscientemente, neste tipo de 
          escolha linguística, que é também – como não deixaria de ser – histórica 
          e moral, como se vê? A resposta é, pois, tão clara quanto o problema: a 
          inata tendência humana à abstração <em>cômoda</em>. Com cômoda eu quero, 
          em primeiro lugar, atentar para os atalhos pérfidos que elegemos para o 
          caminho entre nós e as coisas reais; em seguida, para a própria compreensão 
          das relações que o real tem para consigo mesmo, as quais observamos 
          raramente com olhos suficientes nus (e nisto insistirei em texto futuro, 
          valendo-me a vontade do Senhor em cumpri-lo). 
        </p>

        <p>
          Nosso uso da linguagem tem acompanhado com passos velozes e peremptórios 
          os próprios usos que temos destinado ao mundo factível e natural, isto é, 
          a transformação da existência em finalidade. Quando escolhemos colocar 
          sob o luar do escopo do uso uma relação tão magnânima quanto a que se 
          constrói entre barco – veículo de veículos –, mar – veículo <em>stricto sensu</em> 
          – e pessoa – corpo veiculado –, resolvemos, em última instância, expandir 
          para o mundo nossa certeza do esgotamento das características e posições 
          possíveis para um objeto. Com este delito moral o discreto leitor já está 
          familiarizado, contudo, já que sai aos mercados de sua cidade todos os 
          dias e pode observar o que ali se tem operado, e por isso nisso não me 
          estenderei.
        </p>
        
        <p>
          O comodismo é, retomando, a palavra que melhor resume como temos fundido 
          causas a consequências, meios a pressupostos, éticas a procedimentos, 
          locais a ocasiões. Entendo, portanto, que a sociedade, tal qual se desenha, 
          a partir da infinidade de opções de conforto para os sentidos que oferece, 
          acarretará a curto ou médio prazo por alterar as próprias configurações do 
          que podemos chamar de nosso idioma, o pão que tínhamos sovado com tanta 
          paciência pelos últimos séculos. Mas as palavras não são – ou não deveriam 
          ser – móveis esculpidos, luxuriantes tapetes ou salas arejadas. As 
          palavras são caminhos talhados em meio a uma mata virgem; ou ainda, 
          invertendo o meio para o acessório, a própria faca com que se desbasta. 
          Não devemos crer nas palavras como atalhos, nem nos vestir com elas 
          buscando estancar o frio. Um idioma é uma maneira de tentar. Uma letra, 
          em sua indisfarçável sinuosidade, é como a mãe que oferece ao filho 
          contrariado um amargo remédio, mas que tão logo o curará, caso o tome 
          apropriadamente.
        </p>

        <p>
          A questão, novamente colocada, pode ser melhor ilustrada pela seguinte 
          parábola, notória à sabedoria popular de determinadas regiões deste país. 
          Certa feita, um camponês foi encaminhado para um hospital em virtude de 
          uma incomum sobredose de água: pasmos, todos os presentes ouviram o homem 
          balbuciar que havia ingerido sucessivamente vinte e oito copos do líquido 
          vital. O homem vomitava muito e precisou repousar por dias, ingerindo 
          alimentos salobros e condimentados neste ínterim. Após o período, os 
          médicos aconselharam o camponês sobre a ingestão correta do líquido, 
          no que foram rebatidos com afirmações sobre a impossibilidade de algo 
          tão puro e bom poder deixar um ser-humano em estado tão deplorável. A 
          conclusão lógica do camponês foi, portanto, que a água que ele havia 
          ingerido estava, de alguma maneira, contaminada. 
        </p>

        <p>
          O que se extrai de conto tão simplório? Primeiramente, o aspecto principal 
          daquilo que vínhamos até então discutindo: que a necessidade não faz a 
          medida do excesso, e a recíproca é verdadeira; o mesmo se aplicaria à 
          qualidade e à quantidade, é evidente. Mas, para além disso, algo que 
          provavelmente passou despercebido pela maioria dos leitores – até dos 
          mais atentos – que até aqui estão acompanhando esta argumentação: a 
          reiteração da água como ponto de torção para aquilo que chamamos de comodismo. 
          Como? Mais uma vez surgiu esta imagem, em contexto e registro distintos, 
          de fato: mas não notamos a reiteração, preocupados com o significado que 
          a imagem poderia assumir. O leitor argumentou por mim neste momento, e 
          pode comprová-lo para si próprio – ou a mim pessoalmente, sendo notório 
          o lugar onde vivo.
        </p>

        <p>
          Assim como os marujos são veiculados pelos navios e, sobretudo, pelas águas, 
          somos nós veiculados pelo sentido mas, sobretudo, pelas palavras. Cabe a 
          nós, como legítimos marinheiros, aprender a manejar cordas, velas, âncoras, 
          timões e – a despeito porém conscientes do inegável despautério que é o 
          acaso e toda a sorte de forças que podem subitamente nos subsumir por 
          mais que saibamos lidar com elas – navegar.
        </p>

        <p>
          O segundo ponto levantado a princípio, e que aqui adentro também com a graça 
          de Deus e permissão do leitor, começa com a citação da trajetória do famoso 
          filósofo que desistiu de escrever quando deduziu que jamais havia avistado 
          uma única palavra em estado de natureza. Sua obra, então cultuada aos sete 
          cantos do planeta, como se sabe, passou a ser o eloquente silêncio que então 
          carregava.
        </p>

        <p>
          Mas se aqui ainda falamos, pois, então, iniciemos a partir da deserção de 
          tão afamado filósofo nossas segundas considerações. Em primeiro lugar, 
          caberia pensar na motivação que antecedeu tão insuportável conflito: o 
          que teria levado o filósofo a procurar sentido na natureza? Como viemos 
          argumentando, esta questão é – para além de suas consequências – 
          absolutamente salutar: é necessário procurar algo, de fato. No entanto, 
          assim como não se procuram (usualmente) flores na prefeitura ou prefeitos 
          nos campos, tampouco se deveria procurar palavras no mundo objetivo. 
          A relação entre os dois tipos de natureza que existem – a humana, sagrada 
          em abstração, e a objetiva, sagrada em forma – não pode ser traçada a 
          partir de uma relação tão (reitero o conceito) cômoda, surpreendente 
          sobretudo vinda dos termos de um filósofo.
        </p>

        <p>
          A palavra faz parte da natureza humana. O gosto, a textura, a cor fazem 
          parte da natureza objetiva. Chamá-los por estes nomes é já o contrassenso 
          que necessitamos e que aqui estamos a delinear. Sendo humana a palavra, ela 
          é abstração; sendo a palavra abstração, ela é humana. Notemos que em nada 
          nosso raciocínio interfere na existência daquilo que é de natureza objetiva, 
          e que ambas as verdades estão resguardadas pela matéria divina que 
          transformam ou encarnam.
        </p>

        <p>
          As palavras somos nós. Fazem parte da maneira como construímos pontes 
          sagradas entre nossa carne factível e o dia indiferente, mas necessário. 
          As palavras necessitam desta consciência para que possam assentar lugares 
          produtivos em nossos corpos tristes, para que não cometamos os erros de 
          abstração que invertem as consequências às causas e, portanto, nós ao 
          mundo. Um erro de abstração é um erro de humanidade, e aí está uma 
          recíproca a mais. Pode, portanto, ser a palavra – ou seja, a abstração – 
          uma fonte dos equívocos que fomentamos em nossa própria natureza? Nossa 
          resposta será afirmativa.
        </p>

        <p>
          Notemos, assim, como uma relação deletéria com o mundo significa 
          simultaneamente uma relação deletéria para conosco e para com as 
          palavras. Consequência e causa entram em um moto-contínuo, e é esta 
          vida que temos, para além da solidez dos paralelepípedos e para muito 
          além da viscosidade do mar, que lidar. Analisemos, pois, o derradeiro 
          caso que trarei a este texto e então passemos às considerações finais.
        </p>

        <p>
          Há um homem muito rico, por herança, que tem como hábito roubar todos 
          aqueles que passam pela porta de sua suntuosa residência. Muitas vezes 
          estes roubos terminam em assassinatos torpes a sangue frio, ou em outras 
          consequências sérias aos afetados, como ferimentos e amputações. Todos 
          em determinada vila sabem que este homem padece de hediondo vício, mas 
          sua posição social distinta faz com que o fidalgo permaneça reinando 
          incólume entre seus criados. Certa feita, ao ser questionado por um 
          amigo – minutos antes de assaltá-lo – o motivo desta prática, responde 
          o homem com a seguinte fala: <em>eu nunca roubei ninguém, meu amigo. A única 
          coisa que faço é tomar de volta tudo aquilo que é meu, mas que está 
          disperso pelo mundo. As coisas chamam por mim, e eu atendo seu chamado</em>.
        </p>

        <p>
          Ora, logo se veem dois aspectos nesta insólita historieta. A primeira é 
          como a distância do impulso ao ato passa pela escolha de determinada 
          palavra (não podemos saber em que medida, é claro – Deus o saberá). A 
          segunda é como este homem afirma ouvir um chamado das coisas, ou seja, 
          é evidente, por meio de palavras. Sua distorção de caráter e espírito 
          deriva-se diretamente de uma relação igualmente distorcida com as 
          palavras, desde seus pressupostos mais óbvios. Este homem não pode 
          aceder à sua natureza porque não pode aceder à natureza objetiva – e 
          cá o leitor tem a derradeira recíproca do texto.
        </p>

        <p>
          A abstração, pois, não é mera questão de barcos, água e marinheiros: 
          ela é algo crucial para que se compreenda o estado de coisas na atual 
          sociedade que, justamente equivocados, chamamos de moderna ou desenvolvida. 
          Ora, nossos vícios de linguagem, nossos erros situacionais denotam como 
          não temos acedido a nossa própria natureza, e como o mundo tem escorrido 
          pela fresta de nossas imprecisões. 
        </p>

        <p>
          Por isso concluo afirmando uma vez mais a falibilidade futura do que 
          digo: caso um dia haja alguma sorte de maquinário que faça com que o 
          olhar de um ser-humano escorra sobre o mundo e, como uma rede, o recolha, 
          creio que nossa questão de hoje estará resolvida, e então toda esta 
          problemática sobre as naturezas se dilacerará - assumindo eu, sem 
          lamentações, a minha obsolescência. No entanto, enquanto tal efeméride 
          não se situa no tempo (e notem como a imaginação é também um regime de 
          abstração, sobre o qual futuramente falaremos, permitindo-o a graça de 
          Deus), observemos a importância de assumirmos não só esta distância, 
          mas os seus termos e as maneiras como os temos relacionado.
        </p>

        <p>
          Não saber o que é por natureza um barco ou o mar tem feito com que estes 
          elementos estejam sendo mal-manejados, usados para propósitos espúrios, 
          considerados meios, trajetos, empecilhos para o que determinada nação 
          ou indivíduo pretenda. Notem como não digo que o pensamento faz com que 
          estas coisas existam equivocadamente, mas sim como nós temos 
          equivocamente existido ao longo do tempo em que nos expomos a elas. 
          Deus assegura sua existência e a nossa, mas Deus não pode assegurar 
          que estejamos construindo distâncias seguras entre essas existências.
        </p>

        <p>
          Com isto posto, ponho termo à reflexão que me inspirou o dia. Devemos 
          agir com consciência, falar com consciência, orar com consciência 
          igualmente. No entanto, a despeito de todos nossos esforços mais justos 
          e respeitáveis, nos lembremos ao menos por um segundo que as flores 
          continuarão surgindo dos acontecimentos, nos acontecimentos, quer as 
          vejamos ou não, quer saibamos ou não delas. A maturidade de nossa 
          natureza passa por não achar que haja nisso nenhum achaque, nenhum 
          tipo de contradição insuportável. Não há e nem não pode haver, isso 
          caso haja entre nós algo que empenhemos para tentarmos dar conta 
          daquilo que – com perdão da palavra – seja real.
        </p>
        
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}