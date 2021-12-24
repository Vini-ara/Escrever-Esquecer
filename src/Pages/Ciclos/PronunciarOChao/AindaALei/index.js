import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";

export function AindaALei() {
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
      
        <div className={styles.backLink} onClick={() => handleRedirect('/pronunciar-o-chao')}>
          <MdWest  size="3rem" />
        </div>

        <h2>Ainda a lei</h2>
        <hr/>

        <h3>1</h3>

        <p>
          Muitos relatos apontam que o primeiro gol de bicicleta da história foi anulado. 
          Isso ocorreu, ao que consta, porque o árbitro da partida, diante daquele gesto antinatural 
          e ainda sem nome, não teve reação senão concluir que aquilo <em>deveria</em> ser irregular. 
          A <em>chilena</em> não estava prevista, tampouco era proibida: qualquer tipo de decisão 
          seria necessariamente uma <em>arbitrariedade</em>, e implicaria coibir ou postular uma 
          nova possibilidade para todo o esporte: mas diante do inominado, o futebol sempre 
          deixou claro que precisa operar no vácuo da lei.
        </p>

        <p>
          Com o passar dos anos, ficou nítido que havia uma diferença de base entre o futebol 
          e os demais esportes, algo que explica sua popularização irrestrita e que se mostra 
          todos os dias diante da capacidade infinita de se criar modalidades e formas adaptadas 
          para um mesmo objeto, a partir do mesmo conjunto mínimo de regras. <em>No futebol, a lei é 
          impredicável</em>. Isto significa, pois, que é impossível tentar descrever de maneira a 
          esgotar o número de possibilidades que se possam engendrar em campo, já que haverá 
          sempre a absoluta exposição ao acaso que fará com que a lei gire, necessariamente, 
          em falso.
        </p>

        <p>
          Tome-se como exemplo a regra do toque na mão. Em abstrato, parece ser algo muito 
          simples pensar que, se a bola encosta na área do corpo correspondente ao que se 
          chama de braço, o lance é irregular. Pois bem: eu, que sou - ainda - relativamente 
          jovem, me lembro de ver as interpretações desta regra serem alteradas algumas 
          vezes. Há alguns anos, se comentava sobre a intenção do jogador em levar sua mão 
          à bola: e então o árbitro poderia, a partir de uma leitura corporal, propor uma 
          (absurda) análise psicológica de um jogador. Então, alterou-se a regra para anular 
          todo e qualquer toque de mão, o que se mostrou hediondo diante da possibilidade 
          de se chutar deliberadamente a bola na mão do adversário ou de prejudicar jogadores 
          em posturas naturais. Hoje, consideram-se ainda – ao menos no momento em que esse 
          texto foi escrito – uma série de variáveis como a distância da bola ao jogador, a 
          expansão do corpo, a relevância do toque, a velocidade do chute. 
        </p>

        <p>
          O que se vê é que, em resumo, mesmo a regra primordial do futebol é puramente 
          interpretativa e contextual – e nisto vige, afinal, algo próprio ao ato impossível 
          de legislar.
        </p>

        <p>
          A história do futebol é a história de como as regras sempre precisaram correr 
          atrás do vácuo deixado pela imprevisibilidade dos gestos. Se é possível recuar 
          de cabeça para o goleiro pegar com as mãos, hoje não é permitido deitar-se para 
          isso (porque alguém o fez). Se um mergulho na área gera um cartão amarelo, isso 
          surge para inibir que os jogadores enganem deliberadamente o árbitro (no entanto, 
          alguns que tropeçam sozinhos acabam sendo punidos por uma interpretação sobre o 
          seu corpo). Se o bandeira tem uma tarefa árdua, a implantação de câmeras fará 
          com que ela seja diferentemente árduo - agora de uma maneira bem mais idiotizada 
          pelos que presenciam esse esforço infinito em <em>estar certo</em>.
        </p>

        <p>
          Existe no futebol, portanto, uma clara argumentação sobre aquilo que nossa vida 
          jurídica parece incessantemente recalcar: a impossibilidade de ser puramente justo. 
          Por isso, é sintomático que todos os esportes que façam sucesso nos Estados Unidos 
          tenham um ostensivo protagonismo dos árbitros, que interrompem o jogo a torto e a 
          direito, observam monitores, fazem gestos histriônicos e usam microfones com 
          impressionante nitidez: está ali um argumento sobre a própria performatividade de 
          um modelo jurídico que enganou Tocqueville a partir da crença - talvez em algum momento 
          ingênua - de que se seria, no fim do dia, justo. Assim, diante das críticas sobre o 
          fato de o futebol - diferentemente do tênis ou do rugby - não ser um <em>esporte de cavalheiros</em>, 
          uma primeira resposta seria: sim, de fato, não há aqui um pacto burguês como o do cavalheirismo, 
          posto que o conjunto de regras do futebol mostra a cada momento o seu inabalável 
          cinismo, a sua perpétua incompletude.
        </p>

        <p>
          Mas a regra não pode ser abstraída, e aí está o ponto mais interessante da coisa. 
          Os jogadores não podem se trucidar indefinidamente - pelo menos após 1974 - 
          ou sair de campo quando bem entenderem, por exemplo. As regras existem ali da 
          mesma maneira como há regras na menor das frases de um falante de um idioma 
          qualquer: mas elas estão constantemente - e literalmente, no caso - em jogo. 
          Deve-se falar, portanto, não de uma ausência de regras ou de um esforço para 
          burlá-las - o que rebaixaria moralmente o futebol aos olhos dos <em>cavalheiros</em> - 
          mas de uma proposição sobre o próprio significado do que significa <em>regrar</em>.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1q8UYC2RXoiqb05OedJ5O0Bbzyj-dN_O4" alt="gol do flamengo" />

        <h3>2</h3>

        <p>
          Diversas práticas alegadamente <em>antidesportivas</em> do futebol giram em torno das faltas, 
          e se manifestam em seu léxico imenso. <em>Cavar a falta</em>, <em>chamar a falta</em>, <em>mergulhar</em>, <em>se jogar</em>, 
          <em>matar o lance</em>. A falta - a infração máxima, aquela capaz de interromper todo o movimento 
          do jogo - é, tanto quanto o drible, uma arma para se vencer no futebol. Isto significa - e 
          todos o sabem, e todos o fazem - que, para ganhar, é preciso operar sobre a infração a ponto 
          de ela se tornar, em determinados contextos, desejável ou necessária. Tem-se, assim, no 
          futebol um jogo que internalizou a quebra da regra como parte de seu funcionamento, que 
          assumiu a borda do ingovernável como parte do artifício. E que não cessa de fazer esse 
          movimento, forçando então mudanças constantes na enunciação da regra - imagine, por exemplo, 
          o mundo do futebol antes dos cartões ou da linha de impedimento, e de onde surgiu 
          a demanda por isso.
        </p>

        <p>
          Contra a ilusão da clareza, o futebol é portanto o jogo da ilusão deliberada. 
          Não entender que, na lógica do jogo, o fingimento, a dissimulação e a mentira não 
          carregam nenhum aspecto moralmente condenável é sustentar uma oposição colonial que 
          situou <em>sem lei, sem rei e sem fé</em> uma boa parte do mundo. Curiosamente, aquela em 
          que o futebol foi, senão fabricado, inventado. 
        </p>

        <p>
          Nisto situa-se, mais uma vez, a velha discussão sobre como o conceito de <em>malandragem</em> 
          se dividiu em condenação a priori ou marca de identidade nacional. De um lado, a 
          crença de que um povo sem algum tipo de regramento estrito seria fadado ao fracasso 
          eterno por meio de sua confusão; do outro, a crença de que qualquer forma de regramento 
          significaria a falência das características de determinado povo, o que na prática 
          levaria a uma condenação da vida social à absoluta aleatoriedade. E no entanto nada disso. 
          Voltando a Oswald - nosso primeiro filósofo-futebolista -, sabemos que a <em>alegria é a 
          prova dos nove</em>. Isso significa, aos olhos do futebol, observar como nenhum modelo de 
          regramento que não preveja sua própria dissolução está fadado, necessariamente, ao cinismo: 
          por isso, a iminência do caos - no drible, no fingimento, no absurdo da interpretação 
          - é necessária para que o futebol possa de fato existir como tal.
        </p>

        <p>
          O dilema do futebol - e nisso Wisnik já versou o bastante - é o dilema de qualquer sociedade 
          ausente dos núcleos de poder da civilização ocidental: operar a partir de formas de regramento 
          que não sejam pautadas em instituições abstratas ou valores pretensamente universais. O futebol 
          não é um jogo de cavalheiros não por sua ausência de pacto, mas porque seu pacto é, no fim das 
          contas, outro: é o pacto da lei com a existência de seus limites.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1jHBW815m9y8KddLADNtrKEdKNROZcDt2" alt="futebol no presidio" />

        <h3>3</h3>

        <p>
          Por isso, a passagem do futebol brasileiro à era do chamado <em>profissionalismo</em> foi tão 
          traumática. Feita à moda militar, essa passagem se deu, no Brasil, a partir da 
          eminência de nomes como Zagallo, Cláudio Coutinho, Parreira, Felipão: nomes que, 
          diante de uma demanda interna por ordem, ofereceram formas disciplinares fundadas em 
          arbítrios próprios, autoritarismo, arroubos - Zagallo toma o lugar de Saldanha e 
          coloca as coisas <em>no lugar</em>; Jorge Mendonça aquece por 22 minutos em 1978 aos olhos 
          de Coutinho; Parreira e Felipão não admitem nenhuma participação no maior 
          fracasso da história da maior seleção da história, mesmo tendo, até então, 
          assumido todo o sentido da eventualidade de seu sucesso. 
        </p>

        <p>
          Existiu, portanto, um movimento de modernização conservadora também no futebol 
          brasileiro, que explica como, hoje, o Brasil - também no futebol - permanece 
          como fornecedor de <em>commodities</em> e matéria-prima para países centrais no mundo 
          ocidental. Zagallo, Parreira, Coutinho e Felipão surgem para o futebol como nomes 
          responsáveis por internalizar a <em>voz da lei</em> diante daquilo que era visto como 
          puramente aleatório e que, por isso, precisava ser domado: o paralelo é portanto 
          com governos militares que, à custa de anos de atraso social, repressão e dívida 
          externa, impuseram uma sociedade que se gabava, ostensivamente, de <em>estar em ordem</em> 
          - mesmo que essa ordem não significasse nenhum tipo de mudança estrutural 
          comprometida com algo que não fosse repreender seus antípodas. Zagallo contra 
          Dadá e Romário, Coutinho contra Mendonça, Felipão contra Djalminha e Romário 
          outra vez: a voz da ordem precisa impor-se a qualquer custo, e selecionar seus 
          alvos: aqueles que escolhem não se submeter, não se docilizar.
        </p>

        <p>
          Pode-se argumentar que, nos nomes dos treinadores elencados, passam todos os 
          títulos que o Brasil já logrou receber em Copas. E isto é a mais pura verdade, 
          assim como os méritos que obviamente vigem ali. Mas o que significa essa 
          constatação? Pensar o futebol a partir do resultado significa, em primeira instância, 
          subtrair tudo aquilo que ele internaliza como dobra na lei, como iminência de 
          catástrofe: ver o filme a partir do fim. Não é exagero, portanto, afirmar que, para 
          bancar, explicar e justificar os triunfos de uma trajetória de individualidades 
          luminosas e imprevistas, a cultura da <em>voz da ordem</em> tenha como negativo a completa 
          exclusão do Brasil no verdadeiro profissionalismo do esporte, um processo que inclui 
          infraestrutura, investimento de longo prazo, formação continuada e porosidade a 
          outras culturas - justamente tudo aquilo que os governos brasileiros insistentemente 
          negaram ao seu povo ao longo dos anos, em nome dessa mesma ordem. Por isso, a 
          cooptação do futebol pelo nacionalismo ufanista se mostra, justamente, como uma 
          maneira de direcionar a potência daquilo que se vê em campo e a inscrição de 
          limites para aquela ética que se espraiou em campo: <em>o Brasil é o país do futebol</em> 
          porque nunca quis se assumir a possibilidade de o futebol ser o país do Brasil.
        </p>

        <p>
          Longe da teleologia dos resultados - que sequer se sustenta de perto, pensando-se na 
          verdadeira trajetória das seleções brasileiras até seus títulos -, o que se 
          tem é um cenário em que se confunde, deliberadamente, a necessidade de um 
          projeto com a necessidade da lei, justamente para que não se instaure projeto 
          nenhum. Uma confusão que desmente, com efeito, a própria história do futebol, 
          a maneira como sua proposição sobre a legalidade redimensiona indefinidamente 
          o que significa estar diante da lei: no futebol nunca se está sob a lei, mas, 
          no sentido oposto, é a lei que está sob o pés dos que a pisam.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1zl4M9fnsWTy5SduLhTR7U45iNh6R-31Z" alt="jogo de futebol" />

        <h3>4</h3>

        <p>
          Os gênios do futebol sempre foram aqueles que mais flertaram com o risco do 
          ostracismo e, não à toa, a história do futebol brasileiro é tão permeada de 
          jogadores de carreira curta, repleta de hipóteses não realizadas, de vícios 
          e violências - de Heleno de Freitas a Dener. Parece que, por mais que o jogo 
          admita e precise do descumprimento da lei, em algum momento ocorre a efetuação 
          do recalcado. Mas, por outro lado, características como a reversibilidade 
          constante (não há turnos de defesa e ataque) e a possibilidade de se ter um jogo 
          coletivo resolvido de forma individual em um ou dois segundos fazem com que o 
          futebol admita e, mais, necessite da existência de indivíduos que neguem o sentido 
          de qualquer discurso ou de qualquer tipo de organização <em>a priori</em>, mesmo estando 
          ali inseridos pela necessidade da genialidade – o imperativo da própria exclusão.
        </p>

        <p>
          Aí está o espaço em que surge alguém como Ronaldinho Gaúcho. Antes de qualquer drible, 
          antes de qualquer noite europeia, talvez o lance que mais resuma a posição que 
          o <em>bruxo</em> assumiu no futebol mundial seja bem mais singelo. O jogo é Atlético 
          Mineiro e São Paulo pela Libertadores, já no fim da carreira do jogador. Há uma 
          interrupção, e Ronaldinho dirige-se ao goleiro rival para trocar algumas palavras 
          e, em um mundo pré-coronavírus, dividir uma água. O jogo retorna com Ronaldinho 
          incógnito e desmarcado dentro da área adversária, sem impedimento diante de um 
          lateral. O gol sai com naturalidade. O título inédito sairá da mesma forma, mas 
          com a naturalidade dos milagres.
        </p>

        <p>
          Alguns anos depois, Ronaldinho está preso no Paraguai diante da alegação de 
          portar documentos falsos, bancados por um grupo de estelionatários locais. Ali, 
          com algumas peladas e churrascos em um presídio, depois com a prisão domiciliar 
          em um hotel, aquele que foi o último postulante ao título de melhor jogador da 
          história passa mais da metade de um ano, inapelavelmente. Até ser posto em 
          liberdade e voltar a fazer comerciais, sem alusão alguma - é claro - 
          ao fato, mas perdendo o posto até então vitalício de embaixador do 
          Barcelona. 
        </p>

        <p>
          O que essa história diz sobre o futebol? Em absoluto, nada. No entanto, como um sintoma, 
          ela parece mostrar que a questão da lei – a guisa de um recalque - precisa sempre 
          retornar ao real daqueles que pretenderam desafiá-la. Como uma lembrança do fato de 
          que o futebol não é uma ilha e nem se presta a nenhum tipo de cooptação por aquilo 
          que não é o futebol: os espaços estão, o tempo todo, sobredeterminados. A ausência 
          de um projeto social e o contraste de maneiras irreconciliáveis de se lidar com a 
          lei retorna a partir da queda vertiginosa das figuras, da fugacidade das carreiras, 
          da falta de fomento a modalidades vistas como menos importantes, da incapacidade de 
          se criar a diferença a partir do esforço social de organização. O futebol não 
          explica o mundo, tampouco o mundo explica o futebol, já o dissemos: a relação entre 
          as duas coisas está justamente no vazio representacional proposto pelo acaso, pelo 
          contraste da glória com a normalidade, pela imprevisibilidade das formas e, por fim, 
          pela inegável diferença recíproca que o jogo propõe ao campo social.
        </p>

        <p>
          Maradona, Adriano, Garrincha, Fashanu, Escobar, Barbosa, Ananias são pessoas 
          cujas histórias não carregam moral alguma. E isso é uma das coisas mais difíceis 
          de se admitir em um mundo cujas leis são pautadas em porquês simples, determinações 
          deliberadas, essencialistas, tecnocratas. Não existe nenhuma ligação óbvia entre o 
          lado de dentro e o lado de fora: estamos em uma fita de Moebius, e os lados não 
          cessam de nos driblar.
        </p>
        
        <img src="https://drive.google.com/uc?export=view&id=1b5mvjpA6il26XnpdKDinfvBKOWlojbjc" alt="jogador querendo pisar no outro" />

        <h3>Final para Pelé, aos 80 anos</h3>

        <p>
          Pelé joga a Copa de 66 apenas com a perna esquerda, graças a entradas deliberadas 
          dos portugueses em um mundo sem cartões. Pelé dá uma cotovelada e desacorda um 
          uruguaio em 70. Pelé torna notórios gols <em>quase</em> realizados. Pelé beija Mohamed Ali. 
          Pelé pára uma guerra na África, mas ninguém sabe muito bem se isso é verdade. 
          Pelé tem um filho preso por tráfico, mas homenageado pelos Racionais MCs. Pelé 
          é campeão do mundo antes de completar a maioridade. Pelé faz dezenas de gols nos 
          times da marinha, do exército e da aeronáutica. Pelé é recebido pela cúpula militar 
          após ser campeão do mundo. Pelé inventa o futebol nos Estados Unidos e diz <em>love, 
          love, love</em>.
        </p>

        <p>
          É difícil encontrar uma vida com termos mais irredutíveis que a de Pelé. Talvez por 
          isso seja óbvio que estejamos diante do melhor jogador da história: não só pelos 
          milhares de lances antológicos, mas justamente pelo fato de estar ali aquele que mais 
          mimetizou na vida social as contradições do futebol e, no campo de futebol, as contradições 
          da vida social. A maneira como Pelé se apossou da lei em campo está defletida na maneira 
          como a lei se esforçou para, fora de campo, se apossar de Pelé - <em>aparentemente</em> sem nenhum 
          tipo de contestação por parte de Edson. Estando perpetuamente às margens da lei quando 
          em campo - redefinindo mais do que ninguém o alcance do impossível -, Pelé assumiu um 
          papel central fora dele - tendo inclusive o aparente privilégio de tornar-se nome de 
          lei ainda em voga no Brasil.
        </p>

        <p>
          Talvez aí esteja o resumo do ponto em que nos encontramos diante da dupla visão reducionista 
          que diz que o futebol <em>é só um esporte</em> ou daquela outra que diz que <em>o Brasil é o país do futebol</em>, 
          e a isso se resume sua vida social: de lado a lado, mais uma vez fica recalcada a discussão 
          sobre a lei, até que ela retorne na forma de catástrofe ou aporia. Não se pode reduzir um termo 
          ao outro, de maneira alguma. Quando Pelé chapela 4, 6 ou 8 jogadores na Vila Javari 
          (todos têm certeza e dizem um número diferente), o que está em jogo não é de que forma a 
          sociedade explicaria a existência assombrosa daquela genialidade, nem mesmo de que maneira 
          aquela genialidade explicaria, no sentido oposto, as faltas da sociedade que a teria gerado: 
          há um porvir, uma lacuna no possível que, entalhada pelo gesto irrepetível e nunca documentado, 
          mostra-se de forma arrebatadora e impele a algo ainda sem nome, nunca predicado 
          (neste exemplo derradeiro, ao menos, o árbitro teve o bom-senso de não atrapalhar).
        </p>

        <img src="https://drive.google.com/uc?export=view&id=1OKQ0l9mHqssjxjcu_jkz-6p54WaHkQYa" alt="cabeceio" />

      </section>

      <TextsNavigation currentCiclo="pronunciarOChao" handleRedirect={handleRedirect}/>
    </div>
  );
}