import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function Fevereiro() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Fevereiro"); 

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

        <h2>Fevereiro</h2>
        <hr/>

        <p className={styles.center}><strong>1</strong></p>

        <p>
          Estar cercada por toda aquela gente apenas me enchia de uma ânsia por mim mesma. Como morrer de sede a esperar 
          o naufrágio do navio. Como o som da palavra <em>boca</em> precede um mínimo formigamento. Havia em cada uma daquelas pessoas, 
          eu o sentia, um mesmo sentimento longínquo, paisagens ao sul do ser. As pessoas, elas que então povoavam a rua, 
          com gritos escandidos, com gestos enfáticos; elas que então queriam mostrar para si próprias sua unidade sólida, 
          sua bela cidade nativa por direito, as palavras robustas, e no rastro de seus passos dar a ver este sentido, as 
          pessoas. As pessoas, em seu intento de provar como as estruturas de prédios espelhados e os disparates dentro de 
          horas exaustas em coletivos subterrâneos faziam sim sentido, ao cabo do dia, na equação da justiça, da liberdade, 
          da vida humana, às pessoas. As pessoas que queriam mostrar ao mundo como conheciam seus próprios nomes, e então 
          chamar-se uma a uma, sim, as pessoas. Assim como eu também queria, povoava, e dizia. Assim como eu ali estava, 
          ao lado das pessoas. Porque nós sabíamos que deveríamos ser palpáveis, reais, vivos, e que, juntos, entornados 
          em um cadinho, surgiríamos, quando já frios, numa casca, áspera, dura, rígida, puros, perfeitamente, matéria 
          decantada, forma, fim. E se, afinal, nós éramos a imensa maioria, cantando o mesmo canto, chorando o mesmo choro, 
          quem, de olhos escancarados, não se assustaria conosco? Quem não acreditaria, não cederia em sua voz? Quantos 
          impérios não poderiam emergir molhados de alma e ouro do seio daquele dia para propor um caminho aos estandartes 
          da vida que nós éramos? E por quantos instantes eu consegui crer nisso tudo? Porque havia um espaço que aqueles 
          olhos fixos escavavam em minha cara. Porque havia aqueles olhos exalando seu brilho morno do décimo ou nono andar 
          de um prédio próximo. Porque eles não se abalavam pelo ruído que nós produzíamos juntos naquela rua, pela mácula 
          que nós éramos no tapete ocre do normal. Porque eles me lembravam de que havia algo a mais do que todos nós. E 
          então eu estava nua, e então eu estava em dúvida, e então eu estava em mim mesma, no espaço de um instante, e 
          uma vez mais. Os olhos escorados no parapeito buscavam. E, em cada casa, eu pensava, talvez ninguém conseguisse 
          entender metade das palavras que cantavam nossas bocas, como se estivéssemos latindo, balindo, balbuciando sons 
          desconexos em um idioma esquecido, sem que houvesse um só intérprete para dar sentido àquilo, para retransmitir 
          a lisura de uma pedra a um ouvido talhado em arestas. Eu também gritava, apesar de tudo. Apesar daqueles olhos. 
          Que me viam, que me violavam. Que expunham os fios do sono e do silêncio tecidos na atmosfera, cingindo cada 
          muro possível, cada mundo provável, tornando cada pessoa uma escultura de mármore, longínqua e oblíqua, distante: 
          algo fincado em seus limites, em seus eixos, em seu hoje. Minha boca gritava. Aquela gente queria dizer que 
          estava viva para o mundo e, se o mundo assentisse com a cabeça, que elas fariam dele enfim a sua casa. Mas os 
          olhos. Eu também queria. Eu também queria acreditar. Eu acreditaria. Mas meu corpo ardendo em febre, ali, 
          profanado pelos olhos. Eu deveria escutar a incessante batida, a incansável canção que soou por aquele dia. Era 
          dia. Eu escutava. E isso bastava para torná-los, canção e dia, minimamente reais? Pois foi um mesmo tilintar 
          insuportável o que nos fez estar lá, a desejar suar o calor de outros corpos, e a gritar com ódio as canções 
          que jamais compusemos, que minha memória não conhecia até estalar aquela hora, mas cujo significado percorriam, 
          voltando e indo, umas mãos estendidas, provavelmente as minhas. Como poderia ser nossa a sede se o corpo ainda 
          era meu? Eu poderia dizer a qualquer um o que costumo pensar antes de dormir, e colocar quantas colheres de 
          açúcar desejasse numa xícara, e, dentre os milhares de livros da maior biblioteca, eu poderia escolher o que 
          melhor me servisse de travesseiro ou de deus. E isso seria o bastante para dizer que sou eu eu mesma? Porque 
          aqueles olhos, em sua busca imóvel, seguiriam até o fim a me perguntar: quem? Porque entre meu corpo e o corpo 
          que aqueles olhos viam parecia haver uma neblina, uma barricada farpada, um ruído que minava a mensagem, que 
          torcia uma imagem para sempre perdida, para sempre perdida. Eu estava no meio daquela gente tateando por um nós. 
          Mas eu não o reconheceria se ele não me gritasse um nome familiar, se ele não me convencesse de sua verdade, de 
          sua urgência, de minha necessidade de carregá-lo em meu bolso, como um documento, como uma resposta pronta, um 
          verso decorado, um lugar-comum, um salmo, um só, esqueça, esqueça: ele era impossível, ele era inadiável.
        </p>

        <p>Por isso abri meus olhos e segui, fiel a um ritmo, ao longo do dia.</p>

        <p>Sim: ao cabo de tudo, éramos todas, todos, nós, enfim.</p>

        <br />
        <br />
        <br />
        <br />

        <p className={styles.center}><strong>3</strong></p>

        <p>
          Um corpo, seu ruído, em vagas, me despertou. Refiz os olhos e olhei. Por entre as linhas estreitas da fumaça, 
          desviando das quinas e das pontas cegas, cedendo às curvas que se impunham, enfim, exausto, aportei no esboço 
          daquela mulher. Ela. Era preciso ler aquele corpo. Mas o corpo oscilava, mas o corpo bradava, mas o corpo despido 
          seria irreconhecível ante uma máscara. Nua e, ao mesmo tempo, barrada. Os olhos não desistiram ante o apelo 
          daquela voz que insistia em desalojar o corpo, que insistia em passar suas escavadeiras no mundo para que fosse 
          possível nele viver em paz. Ali, o nada. Ali, o algo. Ali, o desleixo do hoje. Passei então a ouvir os gritos, 
          pela primeira vez. Ainda que estremecessem minha janela, tinham sido incapazes de me despertar. Sua boca os 
          ensaiava, os moldava, eu via. Mas as palavras, rotas, deixavam cair, pelo trajeto, sua matéria, como mãos a 
          transportar uma água indiferente e fria. Em que continente submerso estaria a verdade do que dizia? Em que grota, 
          acuada, teria ela se escondido? (Meus olhos buscavam respostas, meu corpo pedia perguntas.) Seu corpo. Instituindo, 
          inaugurando novamente o tempo, e a incerteza. Eu era a mim. Ela era a ela. E nós dois, juntos, o que seríamos? 
          Pois, sua verve, e meu sono; sua força, e minha ânsia; seu hoje, e meu degredo existiam; pois alguém teria que se 
          arruinar, alguém teria que se mapear, se fotografar, se compreender de uma maneira definitiva, como a aceitar as 
          pancadas dos martelos que nos forjavam as formas, que independiam de nosso controle ainda que dissessem respeito 
          apenas a nós, ainda que.
        </p>

        <p>
          Seu corpo ruiu. Eu vi. Eu a vi, sem forças. Pelo estrondo de suas pálpebras a desafinar aquela canção que 
          entrava, subterrânea, pelo ar, eu a vi. E ninguém o escutou, ninguém além de meus olhos o escutou. Seu corpo, 
          ali, estava, então: entregue, derrotado, sendo levado pelas marés anárquicas da multidão, suas correntes dúbias 
          e imprevistas. O corpo, absorto, impedido de cair pela presença de uma e mais outra pessoa, de seus ventres, 
          costas, ombros, pulsos, sexos, no esforço inconsciente de fincá-lo. Meus olhos enfim repletos daquele corpo. 
          Soletrando suas fronteiras, seus segredos, seu salitre. O corpo, maleável e, por isso mesmo, indestrutível. Ele 
          era meu, ele era de meus olhos. Ele ali existia. Me completando, me preenchendo, me transbordando, me afogando. 
          A boca em vômito, resumida, muda. O nojo. O peso. O ódio. O corpo me ocupando. Eu era um sujeito pobre, e nunca 
          estivera tão miserável. Por poder ter tudo de uma única vez. O escarro, o gozo se derramando de mim, o amor me 
          transformando em um bicho. Um amor, o amor? Por quem se, naquela hora, só havia seres sem rosto, só havia uma 
          rua onde se via um prédio, só havia homens com o nome de mim, de mim, de mim, de mim, de mim, e o corpo?
        </p>

        <p>Outro ruído.</p>

        <p>
          Acordando, acordado por ele. Por ela. Seus olhos respirando aliviados. Suas ideias reassumindo os seus postos. 
          Suas imagens que me fugiam: imagens de terras desconhecidas, deuses disformes, aves raríssimas, antepassados 
          perdidos, versos jamais escritos, horas assassinadas, uma canção, um leito, um peito. Ela. Eu. Ele. Ela. Isto. 
          Eu. Algo. Aquilo. Você. Eu. Um silêncio regido por um ruído. Que não me dissessem nunca seu nome, e que não nos 
          chamassem jamais de par, ou de povo. Que não nos coubéssemos. Pois éramos um e éramos um. Pois éramos também dois. 
          Mesmo que todos tenham partido, mesmo que o mundo tenha permanecido o mesmo. Nada era igual, para mim. A verdade 
          mentia. Seus olhos claros, negros nos espelhos. E ninguém para contê-los. Ninguém para chamar a noite de noite. 
          Eu pagaria com a eternidade o custo do hoje. Eu daria cada dia de vida para que ela vivesse em seu corpo, e no 
          meu. Mas, naquela hora, já bastavam as bombas, as canções anestesiadas, e os seus silêncios, aos gritos. E ela. 
          Para que se pudesse existir, enfim, outro.
        </p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}