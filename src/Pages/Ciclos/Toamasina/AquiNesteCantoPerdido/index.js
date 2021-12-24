import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function AquiNesteCantoPerdido() {
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

        <h2>Aqui neste canto perdido de mundo o que</h2>
        <hr/>

        <p> Tenho para mim o mundo foi criado em um fim de tarde como este</p>

        <p> como este? </p> 

        <p> um fim de tarde como este; </p>

        <p>daí nos vemos aqui andando neste pedaço esquecido da terra. veja lá como a vida tem sido: </p>

        <p>mas eu aposto que deus não se ocupa muito com isso </p>
        
        <p>isso?</p>

        <p>nisso também</p>

        <p>nisso também?</p>

        <p>como quase não se ocupou na criação deste mundo. é isso o que eu vejo.</p>

        <p>e você diz as coisas assim desse jeito?</p>

        <p>desse jeito. eu não acho que ele se importe com a gente neste momento.</p>

        <p>neste momento?</p>

        <p>também em nenhum outro. mas em particular neste.</p>

        <p>e isso você também diz assim?</p>

        <p>
          porque tem lógica. deus não deve fazer as coisas de graça. tem que ter um motivo ao menos. 
          se não ele não tinha feito nada; eu penso. e penso que tem que ter um motivo. se deus se 
          bastasse ele nada tinha feito. ele tinha ficado numa rede como eu gostaria
        </p>

        <p>eu também</p>

        <p>de estar agora mas acompanhe:</p>

        <p>diga;</p>

        <p>a gente assume que deus tem um propósito;</p>

        <p>tá bem. mas primeiro a gente assume que deus existe</p>

        <p>e que fomos criados à sua imagem</p>

        <p>é importante dizer.</p>

        <p>e se criar o mundo foi um propósito</p>        

        <p>antes de tudo</p>

        <p>então a gente tem que ter um propósito também.</p>

        <p>em que?</p>

        <p>em tudo. que faz e vive nesta vida:</p>

        <p>no entanto:</p>

        <p>calmo sigo;</p>

        <p>me diga então que propósito há em não sei dormir:</p>

        <p>descansar, assim simples;</p>

        <p>sim então em sonhar:</p>

        <p>sonhar de desejar ou sonhar de dormir?</p>

        <p>sonhar de dormir:</p>

        <p>deixe eu ver;</p>

        <p>diga então</p>

        <p>aí já eu não sei responder assim.</p>

        <p>mas olhe só:</p>

        <p>então você diz que deus criou o mundo sem motivo.</p>

        <p>eu digo?</p>

        <p>diz sem dizer mas diz;</p>

        <p>eu nunca pensei nisso.</p>

        <p>pode pensar agora:</p>

        <p>penso:</p>

        <p>mas pense da boca pra fora:</p>

        <p>é uma ordem também isso?</p>

        <p>força do hábito de fato.</p>

        <p>mas acho em alguns pontos é fácil responder sua pergunta;</p>

        <p>já agora?</p>

        <p>
          porque. vamos supor que deus criou o homem para que o homem o 
          amasse. nesse caso me parece que isso seria algo que não convém 
          com aquilo que dele temos sabido
        </p>

        <p>naturalmente</p>

        <p>então imagino que deus tenha criado os homens para que os homens pudessem ser um</p>

        <p>dia felizes</p>

        <p>felizes como deus?</p>

        <p>felizes como homens e como deus. deus criou a tristeza. ele não pode ter sido apenas </p>

        <p>feliz ou ao menos se bastar nisso</p>

        <p>você está me dando um nó meu amigo</p>

        <p>é pra isso que eu ganho não é?</p>

        <p>nós ganhamos</p>

        <p>sim</p>

        <p>mas então prossiga</p>

        <p>a gente assume que deus criou o homem para ser feliz?</p>

        <p>pelo menos neste instante assumimos</p>

        <p>então você compreende que existe um motivo?</p>

        <p>o motivo.</p>

        <p>o motivo?</p>

        <p>
          e deus nos criaria para sermos felizes? ou criaria a tristeza por 
          estar entediado com a felicidade? quer dizer. ele não tinha nada 
          para fazer e resolveu complicar as coisas para todos é isso?
        </p>

        <p>é mas não é.</p>

        <p>já chegamos nesse ponto?</p>

        <p>eu vou explicar</p>

        <p>vá lá</p>

        <p>
          vamos pensar o seguinte. deus nos criou para sermos felizes porque 
          isso o faz feliz. deus temperou a carne com sal e tristeza porque 
          deve se sentir triste às vezes. uma forma de deus ser menos triste 
          é criar os homens para serem felizes
        </p>

        <p>e então</p>

        <p>pode sonhar também mundos para si.</p>

        <p>mas falta algo nisso:</p>

        <p>falta o que?</p>

        <p>falta o resto das coisas ora. só o homem deve ou pode ser feliz? todo o resto do mundo é um cenário para a </p>
        
        <p>
          eu não sei
        </p>

        <p>
          alegria do homem? porque eu acho que se o homem nasceu pra ser 
          feliz também o mundo nasceria pra enganar a tristeza
        </p>

        <p>também esta conversa?</p>

        <p>e nada mais do que isso agora</p>

        <p>também aquele besouro?</p>

        <p>aquele besouro também.</p>

        <p>mas como no corpo dele</p>

        <p>
          ele está correndo atrás de sua comida de um lugar fresco de uma 
          parceira algo assim ora. que nem a gente à nossa maneira
        </p>

        <p>eu sou casado</p>

        <p>você me entendeu.</p>

        <p>sim sim mas se for assim veja só:</p>

        <p>diz.</p>

        <p>
          você então se põe a desdenhar daquela imagem e semelhança 
          que está escrita nos livros ao cabo é isto?
        </p>

        <p>aí meu amigo você se complica.</p>

        <p>e por que?</p>

        <p>
          porque se o mundo fosse apenas para nosso gozo e se deus nos fez 
          de fato à própria imagem então ele seria o mais vaidoso dos 
          vaidosos. como se dissesse que só os que são como ele podem 
          aproveitar do dia, como se este fosse o nosso banquete
        </p>

        <p>admito;</p>

        <p>
          então eu creio que o mundo só exista para isso. lâmpada para os 
          pés. porque deus quer ser feliz outra vez. ou menos triste. ou 
          triste às vezes. e todo o resto é só miragem de olhos castos 
          sobre o preço que se dá aos dias.
        </p>

        <p>sim.</p>

        <p>sim?</p>

        <p>sim sim. mas aqui neste canto perdido de mundo o que?</p>

        <p>
          porque se há luz no coração de tudo não deve haver vazio. não 
          deveria. mas como sentir alguma coisa aqui? e por que mais temos 
          conversado tanto sobre essas coisas como sobre quaisquer outras?
        </p>

        <p>só duvidamos porque tem sido difícil você sabe.</p>

        <p>sim sim ser feliz tem sido difícil</p>

        <p>viver viver no caso</p>

        <p>sim</p>

        <p>mas é necessário crer neste momento;</p>

        <p>em que?</p>

        <p>no mundo eu não sei</p>

        <p>sim</p>

        <p>ser feliz tem sido difícil</p>

        <p>pelo menos que somos parte dele em algum lugar e de alguma maneira;</p>

        <p>ser feliz</p>

        <p>nem que seja apenas por saber</p>

        <p>andamos para fora do fim de tarde. quem acompanha a quem meu amigo?</p>

        <p>mas seguimos seguimos</p>

        <p>há nisso algo em que nos unimos.</p>

        <p className={styles.end}><em>[15km]</em></p>

        <p>Mas naquilo do fim de tarde há crença ou há o que se sabe?</p>

        <p>assim de onde?</p>

        <p>eu me lembrei agora.</p>

        <p>não eu não sei de onde.</p>

        <p>real?</p>

        <p>sim. honestamente.</p>

        <p>por que a gente diz coisas que então não sabe de onde vem?</p>

        <p>isso não acontece.</p>

        <p>como uma ave não sabe de onde vem o vento?</p>

        <p>não sou uma ave.</p>

        <p>mas você</p>

        <p>eu entendi eu entendi</p>

        <p>você acabou de fazer isso</p>

        <p>ora</p>

        <p>mas a gente sabe ou na verdade não</p>

        <p>olha;</p>

        <p>existe que algo sente em nós. é isso. e que sabe só depois que entende o que sente</p>

        <p>sim</p>

        <p>
          eu me sinto bem nos fins de tarde. me sinto feliz. mesmo com tudo 
          que passa e zune. nessa escuridão absoluta agora só o medo o 
          sussurro a morte sinto. sinto falta. o que nos pode estar ouvindo 
          os sinais que as coisas riscam em nossos corpos. na tarde é tudo 
          real. aqui é tudo presságio.
        </p>

        <p>mas</p>

        <p>
          no fim de tarde todas as promessas se calam sabe? as coisas são 
          de fato sozinhas em sua matéria viva e se realizam sem promessas
        </p>

        <p>sem?</p>

        <p>sem promessas.</p>

        <p>
          então se deus criou o mundo num fim de tarde e se no fim de tarde 
          não há promessas logo deus criou o mundo sem promessas isso?
        </p>

        <p>assim não literalmente porra.</p>

        <p>mas agora agora</p>

        <p>eu acho que sim acho a despeito de tudo eu acho.</p>

        <p>e por que?</p>

        <p>dê aqui a lanterna:</p>

        <p>ai;</p>

        <p>olhe esta flor</p>

        <p>vermelha</p>

        <p>igual a tantas outras vimos não vimos temos visto</p>

        <p>prevista</p>

        <p>e isso a faz algo menos do que se mostra?</p>
        
        <p>não faz</p>

        <p>era sobre isso que te dizia</p>

        <p>eu não entendo</p>

        <p>
          porque em primeiro lugar não há promessas. porque mesmo que a 
          gente sinta que essa flor é bela ou viva ou vermelha ela não 
          precisa disso para que exista
        </p>

        <p>sim</p>

        <p>porque escrever a palavra “flor” a afunda num discurso mole que a faz perder o viço</p>

        <p>sim</p>

        <p>
          e ao redor deste país há infinitas coisas que nascem morrem e que não nunca 
          serão vistas ou ditas
        </p>

        <p>não</p>

        <p>até que desapareçam sem deixar testemunha no caminho. abandonando a coisidade da coisa.</p>

        <p>ora.</p>

        <p>não há promessa de felicidade ou morte ou vida nisso</p>

        <p>e quanto à nossa firma acerca</p>

        <p>é-se. a felicidade de nós para nós existe. ser feliz é tão único quanto ser triste. só gostamos de compartilhar às vezes os motivos</p>

        <p>e siga</p>

        <p>no segundo</p>

        <p>isto</p>

        <p>havendo milhares de flores diferentes o que persiste sendo promessa é o homem que diz <em>flores vermelhas</em>. o que transforma o dia em imagem parada e corrente</p>

        <p>mas deus criou também as palavras em suas promessas:</p>

        <p>não foi lá bem isso.</p>

        <p>desde o do jardim quando se saiu dando nome aos bois e às pulgas e aos tigres de bengala</p>

        <p>e</p>

        <p>e então o mundo enfim existia. no instante em que o disseram</p>

        <p>daí digo. que ele criou apenas em nós homens a promessa</p>

        <p>som e sentido</p>

        <p>ou não. porque ela não vive no dia e se sim é porque nós a inventamos.</p>

        <p>sim.</p>

        <p>não vive nessa flor que em terceiro vive de si pra si mas. já concordamos com isso. a promessa é humana</p>

        <p>é humana. a felicidade não carece de promessas.</p>

        <p>porque não é humana</p>

        <p>sim</p>

        <p>porque é humana também.</p>

        <p>e também.</p>

        <p>sendo assim cá nós dois estamos ainda sozinhos neste ermo de vida</p>

        <p>ninguém nos prometeu nada meu amigo</p>

        <p>você sabe que sim prometeu</p>

        <p>a esperar o que quem sei lá</p>

        <p>também assim não duvide</p>

        <p>só há dúvida porque um dia houve uma promessa</p>

        <p>as minhas eu fabrico</p>

        <p>mas isto foge de você.</p>

        <p>você viu como eles</p>

        <p>você sabe que não deveria.</p>

        <p>é humana.</p>

        <p>sim é humana.</p>

        <p>eu queria um ponto no mundo que fosse um pouco menos frágil. ou que fosse frágil da maneira como eu gostaria que</p>

        <p>as coisas seguem nascendo do solo meu amigo</p>

        <p>é o que se diz de fato</p>

        <p>neste exato momento</p>

        <p>dizem e seguem a dizer que dizem</p>

        <p>mas a noite é por excelência o turno de duvidar.</p>

        <p className={styles.end}><em>[25 km]</em></p>

        <p>Estamos nós dois aqui jogando uma partida contra a realidade e eu já estou cansado de vencer</p>

        <p>e vencer?</p>

        <p>contra ninguém.</p>

        <p>
          e somos nós mesmos também as peças. o mundo foi transformado em um jogo inesgotável. 
          dele não se escapa. temos ordens temos artérias temos ideias temos.
        </p>

        <p>deus observa o jogo em silêncio.</p>

        <p>e mesmo quando vencemos perdemos. por sabê-lo. porque a partida prossegue e agora mais uma vez é dia claro.</p>

        <p>de fato não nos prometeu nada.</p>

        <p>não inventamos. não escrevemos quaisquer regras</p>

        <p>pintaram todo o mundo de branco e preto</p>

        <p>fale baixo.</p>

        <p>este é um jogo terrível e só o covarde se dá ao luxo de não jogar</p>

        <p>fale baixo.</p>

        <p>no instante em que se sabe.</p>

        <p>fale baixo.</p>

        <p>se eu pudesse me esqueceria de todo o futuro do passado.</p>

        <p className={styles.end}><em>[27 km]</em></p>

        <p>É impossível ser justo neste continente</p>

        <p>ou se erra para um ou se erra para outro. nunca se acerta. o continente é imenso as pessoas se descentram a justiça é cega deus é cego a luz aqui a nos cegar.</p>

        <p>escolher a verdade é mentir de algum jeito. diante de tamanho despautério.</p>

        <p>e mentir é ainda mais canalha do que isso. é se esconder do que pode ser ainda possível.</p>

        <p>o continente é imenso.</p>

        <p>inabitável em palavras.</p>

        <p>os discursos nos abandonaram aqui no meio do real. de mãos vazias. de olhos secos.</p>

        <p>mas não há lado de fora nem lado de dentro. </p>

        <p>tudo é uma só coisa sem nome sem lado sem fronteira.</p>

        <p>eu creio nisso como quem se lembra de um avô falecido</p>

        <p>que a distância repõe em sonho.</p>

        <p>o continente é perplexo.</p>

        <p>pois há incontáveis pessoas perigos pactos périplos pelejas perímetros páginas palcos poços possíveis passados percursos partidas paguros passagens presenças</p>

        <p>perícias palanques padres presságios purezas padrinhos pesos promessas palácios paisanas pupilas países palavras.</p>

        <p>confiei que enfim me entendesse.</p>

        <p>justiça está em não negar que há sorte.</p>

        <p>justiça está em saber errar.</p>

        <p>ao menos nisso triunfamos sobre deus.</p>

        <p className={styles.end}><em>[29 km]</em></p>

        <p className={styles.end}><em>[30 km]</em></p>

        <p>de fato. é tarde uma vez mais.</p>
      </section>

      <TextsNavigation currentCiclo="toamasina" handleRedirect={handleRedirect}/>
    </div>
  );
}