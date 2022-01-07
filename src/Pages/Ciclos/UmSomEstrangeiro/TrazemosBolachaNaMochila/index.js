import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function TrazemosBolachaNaMochila() {
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

      <Header handleRedirect={handleRedirect} />


      <section className={styles.wrapper}>

        <div className={styles.backLink} onClick={() => handleRedirect('/um-som-estrangeiro')}>
          <MdWest size="3rem" />
        </div>

        <h2>Trazemos bolacha na mochila</h2>
        <hr />

        <p className={styles.end}><em>E o tênis molhado por dentro soa como protesto</em></p>

        <p className={styles.end}><em>Me impede num dia de sorte eu não descobrir</em></p>

        <p className={styles.end}><em>O nome daquilo que eu quero</em></p>

        <p className={styles.end}>(Summer Nights)</p>

        <p>
          <em>Estética da fome</em> é um termo que caiu em desuso como operador crítico. De um processo de assumir uma falta como aspecto 
          constitutivo e estrutural de nossa arte (justamente porque existe e sempre existiu de fato a limitação técnica imposta pelo 
          subdesenvolvimento), e de postular a transformação desta falta em algum tipo de identidade ou de particularidade nacional, passou-se 
          a, majoritariamente, na inserção na roda da mídia de massas e na melhora geral das condições sociais nas últimas décadas, buscar o 
          compromisso com a técnica como causa e consequência do fazer.
        </p>

        <p>
          A verdade é que a questão não é simples: por um lado, ao transformar a falta em emblema a-histórico corre-se o risco de mistificar 
          a carência e a pobreza, de relativizar o aspecto marcardo e violento do que produz perda, de justificar um processo amplo de 
          espoliação de nossa qualidade de vida e de criação em prol de uma identidade; por outro lado, tentar disputar uma corrida cega 
          em busca da técnica pode significar assumi-la como uma espécie de norte primeiro da arte, de horizonte a ser alcançado por 
          qualquer obra que queira ser levada a sério, acima mesmo do que seria propriamente seu conteúdo enunciativo ou formal. É como se, no 
          primeiro lado, qualquer obra criada nas condições precárias pudesse ser considerada boa simplesmente por existir na adversidade, e, 
          no outro lado, qualquer obra criada neste mesmo contexto seja ruim simplesmente por lhe faltar algo da capacidade de reprodução ou 
          difusão necessárias para se estabelecer o que seria um padrão Globo de qualidade.
        </p>

        <p>
          Esta encruzilhada parece ser, em verdade e ao cabo, inseparável de todo o percurso formativo da criação artística nacional, 
          justamente porque seus termos partem de uma condição social concreta, que pode ser resumida, por um lado, no mote mais que batido 
          e canalha do <em>para quê poetas em tempos de fome</em>, e, por outro, no que seria <em>representatividade</em> pura, algo que dá 
          valor a uma produção artística basicamente pelo fato de ela se dar a ver. De lado a lado, o que se tem é, assim, a imposição direta 
          de um contexto de falta social sobre o de criação artística, um condicionamento que parece sempre fincar nossas obras de arte no solo 
          triste da pobreza e da ausência, limitando tanto a criação quanto a crítica. É interessante pensar, assim, justamente como a crítica 
          de música contemporânea por essas bandas (e entenda-se pós-anos 1980) tem, salvo momentos luminosos como os textos de Walter Garcia, 
          caído nesta falsa dicotomia entre celebração carnavalesca (e a crítica de rock nacional dá aula disso) e lamentação depressiva (onde 
          finca mais o pé a crítica de rap, apesar de também cair por vezes no outro lado). É como se o que menos importasse fosse a forma ou o 
          objeto, fosse a performance ou a execução, mas sempre - sempre - um diálogo natimorto com uma realidade mistificada e idealizada, cuja 
          função é unicamente podar e limitar.
        </p>

        <p>
          Nisto vive, portanto, o grande interesse na obra de um artista como niLL. Na discografia do rapper de Jundiaí, o debate sobre a 
          persistência e os eixos de uma <em>estética da fome</em> ganha ares complexos e engraçadamente literais, vide sua obsessão com o 
          tema da comida em suas letras, e sua Sound Food Gang, cujo emblema é um pedaço de pizza. A presença da comida - este elemento 
          fundamental, primário em qualquer debate político de qualquer nível - parece ser um indicador, um sintoma do esforço que niLL 
          emprega em suas composições: não esconder o contexto da falta, nem celebrá-lo cegamente: situá-lo, portanto, como dado de realidade.
        </p>

        <p>
          Que se observem versos como <em>trazemos bolacha na mochila</em> (160293), <em>hoje é o youtube que vai pagar o almoço</em> (Valete 
          de Copas), <em>em plena sexta-feira/ Quase meia-noite, e eu em casa terminando um beat</em> (Minha Mulher Acha que Eu Sou o 
          Brad Pitt), <em>e quando cantarem meu nome em suas músicas/ O que que eu faço?</em> (Stay High), <em>Mas falar de comida no rap não 
            pode/ Quem inventou isso?/ Nego, eu tô com fome</em> (Loopers), <em>E a vida me olha torto, pede truco/ Aí eu vi que nem dá pra comprar 
              tênis do Turco</em> (Summer Nights), <em>Mandaram umas camisa pra nós usar/ Bem hoje que nossa casa vai alagar, por que será?</em> (Capital 
              Steez). O que se nota nestes trechos, no meio de uma constelação de outros possíveis, é um tipo particular e muito raro de subjetivação 
              no rap brasileiro: em vez de uma retórica triunfalista - em que se celebra a vitória sobre os obstáculos e a posição onde se 
              está <em>hoje</em> -, tem-se outra, de cunho muito diverso, em que se observam as brechas, os apesares, o contexto para qualquer 
              tipo de triunfo que se pretenda usufruir. Isto não significa uma condenação, é claro, ao discurso do triunfo, que move todos os dias 
              muita gente a correr atrás de seu próprio sonho; também não significa assumir a necessidade de se portar uma retórica da falta como 
              emblema. Significa, enfim, observar como se constrói uma carreira singular a partir de uma poética singular, e é neste ponto em que 
              estamos agora.
        </p>

        <p>
          niLL apresenta músicas gravadas independentemente sem que isso signifique uma baixa de qualidade sonora: estão dados termos de uma 
          busca particular de incorporar influências como a de MF DOOM e do Vaporwave, nas exigências técnicas destas referências. Mesmo assim, 
          a letras e a produção das canções - com a adição de áudios de whatsapp, de conversas de fundo, mesmo de quebras de continuidade – remetem-se 
          à falta, à quebra e à adversidade, ademais de fabricarem uma cena em que se situa um contato direto com a vida do indivíduo Davi Rezaque de 
          Andrade, em seu dilema de restaurar a ligação de energia de sua casa, atingida por um caminhão, por exemplo. niLL, portanto, a partir 
          de <em>Regina</em>, parte de um esforço de recolocar em cena a verdade do contexto de produção de sua obra, os lugares por onde passou, 
          as circunstâncias que viveu: em suma, a <em>fome</em> que sentiu. Torna-se interessante e complexo este esquema em que falta e ganho, 
          vitória e derrota, possibilidade e impossibilidade se iluminam e completam de lado-a-lado: é como se fizesse parte da obra não só o produto 
          entregue, mas também seu cenário; e é como se o cenário fosse não só o palco, mas o teatro, o bairro em que está o teatro e o caminho que 
          se faz para se chegar ao teatro. Totalizando-se então um outro palco.
        </p>
        

        <p>
          Assim, nos termos de nosso esquema inicial, pode-se dizer que o ganho técnico não exclui a falta, mas possibilita dialeticamente melhor 
          observá-la, colocá-la melhor em cena. 160293, por exemplo, cumpre o papel de ser não só uma canção, mas uma <em>canção da canção</em>: a 
          falta é tematizada (<em>trazemos bolacha na mochila</em>) ao mesmo tempo em que é incorporada à música, onde se ouve niLL dizer que 
          quer <em>desenrolar esse refrão</em>, e um segundo indivíduo, que aparentemente é o produtor Adalberto, rir do dito. A situação de 
          enunciação é, em <em>160293</em>, jogada para dentro da música, diretamente transposta, re-situando uma produção que apenas tematizaria a 
          falta (e que apenas <em>tematizando</em>, correria o risco de mistificá-la). Neste esforço de colocar suas canções dentro de uma cena 
          enunciativa particular - e é interessante pensar a quantidade de pretensas informações sobre a vida de niLL que se pode pinçar unicamente 
          ouvindo suas faixas - tem-se a construção de uma poética muito particular, em que os ganhos se situam em um contexto específico e relativo, 
          e as perdas são parte do próprio processo de produção dos ganhos – <em>calculando os danos e desmoronando sempre</em>.
        </p>

        <p>
          Os exemplos são muitos. Em <em>Atari Level 2</em>, uma canção sobre a fragilidade dos laços amorosos - assim como <em>Jovens Telas Trincadas</em> - 
          o que está em jogo não é apenas o sentido das relação humanas, mas o próprio limite físico em que a comunicação é possível, internalizado na 
          canção pela abrupta quebra de ritmo e pela mimetização de uma falha na placa de vídeo, que remete diretamente ao contexto tanto daqueles que 
          estão <em>trancados em quartos escuros fazendo clássicos</em> quanto dos que os escutam nas mais diversas condições. Já em <em>Tarsila</em>, os 
          versos de niLL se debruçam sobre os termos de sua própria produção independente, dos dilemas que cercam a música e que, nesta faixa, são trazidos 
          diretamente para dentro dela. <em>Alluka e Aqualtune</em> valem-se também da mudança brusca de ritmo e da quebra, respectivamente, que levam a um 
          deslocamento da experiência de audição.
        </p>
        
        <p>
          Mas um dos momentos mais interessantes deste processo pode ser observado nas inserções de Adalberto ao longo da 
          mixtape <em>Sound Food Station</em>, uma síntese dos projetos capitaneados por niLL na Sound Food Gang. Nestas entradas, 
          o produtor aparece como uma espécie de comentarista do disco, situando ali o contexto em que o rap tem ganhado locais 
          sociais, colocando conselhos para os que estão ouvindo o álbum, e mesmo arrematando o disco passando o telefone de contato 
          para shows. O contexto de produção e circulação da obra, novamente, é trazido com toda a força para dentro do disco, cujo 
          arremate escolhido é a lembrança a cada audição de que não existe obra de arte sem as condições materiais que a sustentem, 
          sem os shows e views que ajudem também a pagar o jantar. Os comentários de Adalberto cumprem, assim, a função de uma espécie 
          de moldura da obra, parte indissociável do todo das canções do disco, à guisa do narrador de Walter Benjamin que diz a si mesmo 
          ao dizer o outro.
        </p>

        <p>
          É neste sentido que se pode falar da <em>estética da fome</em> de niLL como uma maneira de se pensar ao mesmo 
          tempo novas formas de dizibilidade possível pela música, limites e possibilidades materiais da criação de música 
          no Brasil, o contexto de produção de rap independente ou exercícios de autoficcionalização (etc etc etc) sem se 
          afastar um palmo do que é o próprio conteúdo e formato das canções. O que se vê a partir de <em>Regina</em>, passando 
          pela mixtape <em>Sound Food Station e</em> por <em>Good Smell parte 1</em>, portanto, é um exercício dialético em que 
          texto e contexto se retroalimentam em sentido, se intensificam e complexificam, propiciando uma leitura privilegiada 
          sobre a própria arte contemporânea no Brasil – que fabrica contextos tanto quando depende deles. Este texto é, enfim, 
          mero apontamento sobre todas as pontes que se podem erguer a partir desta obra. Que se possa, tão logo, observar as 
          leituras que sairão daí.
        </p>


      </section>

      <TextsNavigation currentCiclo="umSomEstrangeiro" handleRedirect={handleRedirect} />
    </div >
  );
}