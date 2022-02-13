import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

export function MiCandidato() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("Mi candidato es el pueblo, organizado y construyendo"); 

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

        <h2>Mi candidato es el pueblo, organizado y construyendo</h2>
        <hr/>

        <p>
          Vi sua barba imensa, vi sua voz dispersa, vi suas mãos seguras, vi as cordas a tremular no ritmo de suas unhas, 
          vi suas palavras caírem, as vi desabar de sua boca, e me atingirem a cara como tijolos, e como não se importava 
          com a dor que me causava, e como seguia no leito de suas palavras, e como seguia porque um rio não se estanca 
          até um fim, até um equilíbrio, até que a terra o diga que ali está o bastante, que ali a vazão cessa, que ali se 
          cumpre seu motivo, e vi que prosseguia ao largo de dias, tornando a minha cara carne viva, as minhas faces vermelhas, 
          e tão verdadeiras por se revelarem ao lume pela vez primeira, em sua essência, em sua primavera de sangue, e a 
          dor acostumada a si mesma, e a dor a construir suas catedrais, e a se acomodar em suas preces, e como aquele homem 
          atirava suas palavras contra mim, e como a gravidade as fazia cair em meu rosto, o ruído abafado pelo som de sua 
          voz em vigília, e tudo isso calado eu vi. Ele desconhece meu idioma. Ele visita a antessala do meu sono. Ele tem 
          as faces lisas como mármore e cruas como a história. O pus, as cascas, o sangue pisado: o corpo. Há algo que me 
          faz sobreviver à luz do dia. E é por ele que eu colapso contar. 
        </p>

        <p>
          <em>mi candidato es el pueblo, organizado y construyendo</em>. Eu me lembro, sim: essas letras, essas talvez 
          palavras. Era exatamente isso o que não se lia no muro em pé, ao meu lado direito, ao lado direito dos automóveis, 
          também de toda aquela gente parada em frente e atrás de mim na fila interminável. Eram exatamente essas letras 
          que deixavam um espaço vazio, – <em>mi candidato</em> – ausente como feridas nos tijolos, no cimento – <em>es el pueblo</em> – 
          mas sem abalar a solidez daquela parede – <em>organizado</em> – mas sem abrir lacunas porque a furtar aquele 
          metro – <em>y construyendo</em> – para se evadir. E o muro, ainda que fora exatamente – <em>mi candidato</em> – o 
          mesmo muro onde se achavam – <em>es el pueblo</em> – essas letras todos os dias, ainda que fora – <em>organizado</em> – 
          o mesmo muro onde essas letras dormiam – <em>y construyendo</em> – esperando passantes que as lessem, permanecia 
          ali, a jazer, complacente, um covarde, em pé, ao lado direito de meu ombro direito, do nosso – <em>Mi candidato</em>.
        </p>

        <p>
          Eu me lembro bem de estar ali. Como se lembra de algo que aconteceu, mas que já se tornou uma pedra, um seixo, 
          um calhau em algum arroio da cabeça. Como populações de cores diversas vistas sob árvores de signos e de florestas, 
          mas que a memória em visita insiste em dizer apenas: eis paisagens. Por isso mesmo não me recordo do trajeto até 
          ali, de como me surgiu a vontade de pôr meus sapatos mais lustrosos e sair rumo ao lugar que me cabia ao lado 
          daquela parede, a mesma de todos os dias mesmos. Sem passos, sem trajetos, sem esquinas: a imagem surge sólida, 
          intransponível. É um totem. Dos seus contornos eu me lembro bem: não eram duas as nuvens, tampouco me cercavam 
          homens brancos, nem usavam trajes de linho ou fitilhos de cetim as mulheres. Não eram olhos brilhantes e ávidos, 
          não havia cabelos riscados, não pesavam corpos delineados através do pó da noite, da noite que nem mesmo era noite, 
          escuridão de luzes que não eram ancestrais. Isto foi o que se decantou em mim. Isto e aquele muro atado a sua ausência.
        </p>

        <p>
          Eu me lembro bem de estar ali. Como se lembra de algo que aconteceu, mas que já se tornou uma pedra, um seixo, 
          um calhau em algum arroio da cabeça. Como populações de cores diversas vistas sob árvores de signos e de florestas, 
          mas que a memória em visita insiste em dizer apenas: eis paisagens. Por isso mesmo não me recordo do trajeto até 
          ali, de como me surgiu a vontade de pôr meus sapatos mais lustrosos e sair rumo ao lugar que me cabia ao lado 
          daquela parede, a mesma de todos os dias mesmos. Sem passos, sem trajetos, sem esquinas: a imagem surge sólida, 
          intransponível. É um totem. Dos seus contornos eu me lembro bem: não eram duas as nuvens, tampouco me cercavam 
          homens brancos, nem usavam trajes de linho ou fitilhos de cetim as mulheres. Não eram olhos brilhantes e ávidos, 
          não havia cabelos riscados, não pesavam corpos delineados através do pó da noite, da noite que nem mesmo era noite, 
          escuridão de luzes que não eram ancestrais. Isto foi o que se decantou em mim. Isto e aquele muro atado a sua ausência.
        </p>

        <p>
          Mas antes, um dia antes do dia seguinte – e disso também me lembro –, de dentro de meu quarto, apesar do chiado 
          dos rádios e dos livros interceptando os sinais do mundo, eu me lembro que, para dentro dos meus ouvidos, rebentavam 
          em ondas violentas inúmeros urros, berros, presságios ululantes, balidos sem corpo que surgiam não de pessoas ou de 
          suas bocas, mas que nasciam de casas, de bairros, de cidades inteiras, que partiam e retornavam desses lugares a 
          eles mesmos, irreconhecíveis como se o vento os estivesse produzindo. Como se existisse ao redor das pessoas alguma 
          natureza urgente e intransponível. Por isso não há imagens aqui. Pois o que havia naquele antes eram apenas respostas 
          trêmulas, respostas a pedidos maquinalmente divinos de calma e de pressa, pelas milhares de vezes que pecamos e que 
          nos perdoamos sob nossos lençóis brancos, que nos erguemos ante os, apesar de finitos, infinitos fios de cabelo que 
          se alojaram no véu de nossos dedos, e que nos fizeram suportar contando-os até o último segundo da tormenta. Palavras 
          órfãs. O que havia era um presságio, era uma necessidade de perdão e de clemência, que surgia da noite sem que 
          nenhum de nós soubesse sua origem ou seu destino. Naquela noite, ali, estávamos imersos em nós mesmos, enredados 
          em nossa própria voz, barrada, corsária, perdida, ouvindo os ecos do que ainda havia de ser. Um dia. Era-se algo, 
          sim: deveria-se ser.
        </p>

        <p>
          Pela manhã, rebentou como uma comunhão, à força da necessidade: aí está enfim uma imagem. Mas não havia comunhão 
          alguma. O que havia era dúvida, e a dúvida é sempre a mesma coisa que o medo. Rebentou como rebenta uma manhã 
          nublada, um século imprevisto, como rebenta um natimorto de dentro de um útero e que se insiste em chamar, por 
          alguma sorte de dignidade, nossa, dele, da vida, de filho. Como se formássemos uma ciranda de amputados, numa 
          enorme festa para todos aqueles que, por um infantil descuido das mãos do acaso, soubessem que, no dia seguinte, 
          morreriam. Saímos. Todos. Povoamos as calçadas de sapatos, respiramos o ar subentendido das coisas, traçamos uma 
          linha prevista, olhamos para as costas uns dos outros, tomamos nossas posições sem contestar nem ao corpo, nem à 
          cabeça. Nós sabíamos aonde ir e onde permanecer. E o meu lugar era justamente ao lado daquele muro burro e surdo 
          e cego que não fazia nada além de esperar comigo à minha direita, ainda que insistissem para que ele falasse, 
          para que ele pegasse em armas ou se insurgisse contra toda a ordem da sociedade. Ele não salvou a minha vida. 
          Ele não me decifrou suas letras para que eu soubesse como auxiliá-lo, para que eu compreendesse sua causa. Diziam 
          os jornais que éramos seres desejosos e injustos, traçavam mapas do entorno do país e nos instruíam sobre como 
          deveríamos deixá-lo habitar as nossas cabeças. Pessoas bem trajadas instituíam e removiam feriados e homenagens 
          póstumas. Aviões sobrevoavam o Pacífico. micandidatoeselpuebloorganizadoyconstruyendo.
        </p>

        <p>
          A imagem estática, a espera silenciosa. A imagem sedimentando-se nos corpos, tornando-se parte dos indivíduos, 
          juntando-se às dores nas pernas cansadas, à necessidade de se fazer novas chaves para a casa, de reconstruir o 
          parapeito derrubado pela chuva, de agasalhar o filho, de comprar balas para o revólver. Os olhos derrotados para 
          o que víamos. Eu sabia que precisava sentir algo também, ter esperança em tudo ou não esperar mais nada pelo 
          resto da vida. Eu sabia que deveria necessitar de algo, pontuar-me em ânsias, como agulhas que se fincassem no 
          mínimo milímetro do mínimo órgão, na mínima célula, no mínimo segundo da vida de meu corpo. Eu sabia que deveria 
          me atentar aos anúncios tecnicolor nos televisores que nos informariam que havia uma guerra nalguma parte do 
          planeta, possivelmente na nossa. Eu tinha que esperar até que o sentisse. Essa era minha obrigação sem nome. 
          Esperar não como uma pedra espera, não como uma árvore espera, não como espera uma jazida sob a terra, mas como 
          se espera um trem, como se espera um prato de sopa fria, como se espera um dia para morrer: a palavra é a mesma, 
          o ato é em tudo distinto.
        </p>

        <p>
          <em>micandi</em> Meu corpo não suava, também não tremia. Nós esperávamos, com a cara encostada nas horas. As 
          letras se distanciavam, tornavam-se minúsculas exigindo mais esforço aos olhos, exigindo a contração de toda a 
          cara. <em>datoeselpu</em> Aqueles dias se sustentavam como se fossem um espetáculo que envolvesse as vidas de 
          todos aqueles mulheres e homens, mesmo os que não suspeitassem que fossem atores. <em>ebloorganizadoycons</em>. 
          Em que cada um necessitava representar a si mesmo dentro dos limites de seu papel, em que cada um sabia exatamente 
          sua marcação, suas falas, seu figurino, e mesmo assim desconhecia qual era a peça, quem a assistia, quem a dirigia, 
          qual o seu final. <em>truyendomica</em> Por isto aquele muro me constrangia, por isso ele me violentava, me 
          inquiria daquela maneira: porque também aceitava seu lugar, seu tempo, suas letras expostas ao sol e à fumaça, 
          ininteligíveis para as massas, para mim, para ela. <em>ndidatoese</em> Ninguém faria nada a partir daquilo. 
          Ninguém pensaria em sua infância a partir daquilo. Sua voz era só uma dentre as vozes que vagavam pela atmosfera 
          gasta da cidade. <em>lpuebloorgan</em> Os olhos olhavam, nós nos vigiávamos contra nossos próprios atos. Impossível 
          a fuga quando não se sabe de quem fugir. <em>izadoycons</em> Ou quando somos incumbidos de calma e furiosamente 
          continuar existindo. Como desafiar esta ordem? Como desafiar a fome que dizem que possuímos? E não se tinha mais 
          nada senão a urgência da realidade. E aquele muro. Como se o passado desse razão às ações. Como se o passado 
          mitigasse a chuva que eu sinto agora na pele. <em>truyendomi</em> 
        </p>

        <p>
          Como se eu não estivesse aqui neste exato momento. Como se meu corpo não estivesse aqui, apoiado, aqui, exausto, 
          aqui, sustentando seu peso ansioso, exatamente agora. Nem um passo, ao menos, nem um sinal de que a espera finda. 
          E talvez seja isso irrelevante, e talvez acabe esta fila em si mesma, ou se bifurque indistintamente, ou cesse 
          diante de algum outro muro em que se escrevam as mesmas palavras que meus ombros margeiam, sempre indiferentes 
          se haverá para cada um de nós um brilhante automóvel ou um pelotão de fuzilamento. Penso que alguém deve ter ao 
          menos essa resposta. E penso que me humilharia para que uma, só uma dessas letras ressoasse claramente no trajeto 
          dos meus olhos à minha cabeça, e fizesse com que eu esboçasse um mínimo sentimento, que me aproximasse de alguma 
          fagulha da realidade. Negar e, por outro lado, também negar. Um silêncio tenso, tramado: o nosso rei, ubíquo, mas 
          finito, rei. Mudo, dono de cada palavra um dia produzida. E o velho a tocar em meus dedos, como a uma corda, como 
          a um alaúde. Mas também e ainda o velho.
        </p>

        <p>
          Escrevo no ar. Escrevo com a palma das mãos. Escrevo com os olhos fechados. Como se pode tentar a verdade além 
          disso? Onde a impossibilidade no dia mais possível? Sobrevivem às palavras grafadas os tijolos, sobrevive o vento 
          ao corpo que sustento: qual é, afinal, o saldo? Que canhoto vindo de outro estado o compreenderia? Que sonho lhe 
          diria que algo existe, e pulsa, e vive, e roda, sob a pele de alguém jamais pressentido? Mundo estritamente vigiado, 
          mundo subterrâneo onde as enterro: no ar. Saber que se perderá para sempre este relato. Palavra magra que aqui 
          desenho. E que aqui arremesso, e que aqui confio a teu som, à tua matéria, às formas de tua presença, ao lado 
          deste muro – ó velho, ó sono, ó legião – buscando. Buscando a dor que desejo sentir, buscando a dor que me despertaria 
          desta realidade em que nos encarceram. É aqui
        </p>

        <p>
          m-i-c-a-n-d-i-d-a-t-o-e-s-e-l-p-u-e-b-l-o-o-r-g-a-n-i-z-a-d-o-y-c-o-n-s-t-r-u-y-e-n-d-o que entrego (de olhos 
          fechados posso te ouvir novamente) ao mundo, as minhas, outra vez, palavras. E tento escutar.
        </p>
      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}