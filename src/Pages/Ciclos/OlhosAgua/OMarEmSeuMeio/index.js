import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { TextsNavigation } from "../../../../components/TextsNavigation";

import { MdWest } from "react-icons/md";

import styles from "../../textos.module.scss";
import { useTitle } from "../../../../hooks/useTitle";

import Youtube from "react-youtube";

export function OMarEmSeuMeio() {
  const [transition, setTransition] = useState(false); 

  const navigation = useNavigate();

  useTitle("O mar em seu meio é um deserto"); 

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

        <h2>O mar em seu meio é um deserto</h2>
        <hr/>

        <p>
          Chegar é apenas sobre intuir o percurso findo. Morreria quantas vezes fosse preciso, para isso. Morreria, com 
          um sorriso no rosto, entre as caixas vazias de um porto. Mas meu corpo continuaria sendo levado, eu o pressinto, 
          entre as mercadorias. Destruídos os relógios, as horas também são destruídas. Quantas vezes possível fosse. Não 
          existe mais calma, porque não existe mais pressa. As linhas, os limites, daqui, de onde os enxergo, provavelmente 
          já não se distinguem. São as mesmas coisas muito distintas. Corto os pés ao pisar em uma concha, queimo os braços 
          se pular no mar. Ter visto tudo é o mesmo que jamais ter enxergado coisa alguma. Quando penso no que vi, revejo, 
          desvejo, edito. Tingem-se de púrpura as nuvens de monções antigas, são prateadas as aves de secretas lagoas. Já 
          não me tangem, fogem, se resguardam da palma-da-mão, as minhas imagens: se negam. Soçobram e se igualam coisas 
          tão distantes, diversas: as mesmas: rolam fugidias e, por fim, estancam, permanecem, se ocultam num qualquer 
          lugar-nenhum. Toda curva é pródiga para neblinas, todo mar para redemoinhos. Tenho as costas estreitas para 
          carregar os seixos que beiram aquele rio. Tenho as mãos pesadas, toneladas, incapazes de segurarem o que quer 
          que seja. Há muito não almejo uma única verdade, porque todas as tenho. Há tanto vejo passarem em alturas impossíveis 
          os dias sobre o casco deste navio. Ainda que cantem como sempre, já não cantam mais as aves. Estive em todos os 
          mares, e todos os mares em mim já estiveram: o que resultou, de fato, foi este barco, esta única coisa possível, 
          ao cabo. Ter visto tudo é como jamais ter enxergado o que quer que seja. Sinto nas costas o vento que emana das 
          coisas quando se dobram sobre si mesmas; quando formam os seus interiores. São ventos que não movem moinhos, mas 
          que não tardariam em derrubá-los. Meu corpo exposto ao sal e ao sol já não consegue mais sentir-se incômodo. E 
          eu não perceberia sequer se as cordilheiras da terra em meu corpo vivessem, como cancros. Por isso, sempre que 
          abro os olhos e busco, me ausento. Por isso, sempre que saio, preciso me repor, sôfrego e arfante, em mim. No 
          espaço que deixo vago, que deixo incerto em minha ausência, no espaço em que tudo basta em si mesmo, nos campos 
          cujos frutos já conheço, porque desde a semente os experimento. Sempre que busco, não encontro apoio, pairo, num 
          vazio grávido, de ânsias, retorno, a mim ainda mais, sedento, por havê-lo procurado. Ter visto tudo é o mesmo do 
          que jamais ter enxergado nada. De que servem os mares, se nenhum deles termina, ou começa? Se sempre retornamos 
          ao mesmo lugar ao cabo de tudo, ao princípio, de que servem os mares? Tivessem antes os sábios razão e caíssemos 
          junto ao nosso inútil barco numa quina que dá no infinitamente. Mas nenhuma bandeira, nenhum risco, ninguém para 
          legitimar um sucesso. Tivesse antes eu razão quando parti pensando em encontrar o mundo no meio do caminho, por 
          já ter encontrado há muito a mim. Mas o caminho não tem sequer meio. E o que encontrei foram apenas faces absurdas, 
          esquadros quebrados, medidas repetidas; apenas formas que jorravam de palavras já conhecidas, o que eu encontrei. 
          O sol, a resvalar em minha pele, a correr a madeira do assoalho, a escorrer pela proa a caminho do fundo do mar. 
          Vi paisagens, as revi: me eram familiares desde o começo, e, se fora possível, seriam ainda mais familiares no 
          fim. Um corpo, contudo, sempre será seus limites. Sonhei, e tornei a sonhar os mesmos sonhos. Mas, pálido de correr 
          o mesmo círculo, sóbrio por já tê-lo percorrido – nem ao menos tonto, nem ao menos mareado, louco ao menos – busquei 
          o centro. O óbvio centro. E estanquei sobre ele. Só depois de decorados os caminhos do mundo, depois de percorridos, 
          depois de desenhados, depois de subsumidos foi que me deserdei, foi que me vi irremediavelmente só. Foi que tombei 
          no mar os mastros, que releguei aos peixes as velas, foi que me deitei sobre as cordas emaranhadas, foi que jazi. 
          Ter visto tudo é o mesmo que jamais ter enxergado coisa alguma. Ainda que tenha tentado, mesmo assim, me insurgir. 
          Sob os dedos, a violência silenciosa que só as coisas imaginadas possuem, prevendo os choques que elas podem 
          produzir com as coisas reais (sentir o barco um útero, esperar que cansado o céu me tornasse outro, me diminuísse 
          para que eu pudesse então crescer, e para saber aonde ir. Sentir o barco um berço, cujo movimento surgisse unicamente 
          para me provocar o sonho, me apontar um melhor caminho, mais seguro, ainda que mais impossível. Sentir o barco uma 
          parte de meu corpo, que se deriva pelo mundo, que consegue ligar os mais distantes e ignotos portos, as línguas mais 
          estrangeiras) e tudo resultou também um círculo: este, sem centro algum. Eu era apenas um homem deitado ao longo dos 
          dias, e aquele navio era um navio. Ter visto tudo é o mesmo do que jamais ter enxergado coisa qualquer. Eu era 
          unicamente eu mesmo. O mar era o mar também. O mar incapaz de molhar um olhar seco. Constantinopla a encostar seus 
          dedos em deus, a Bahia a desesperadamente baixá-lo, Tálinn a negá-lo desde o princípio: respostas várias, diante de 
          um problema repetido. Em nada resultou nenhum esforço; resultou na solidez deste barco. Um eterno ponto de chegada, 
          um eterno ponto de partida. Para qualquer teorema. Nunca nos respondeu voz alguma. Estar onde as vontades mortas de 
          qualquer onda me quiserem, ignorar se há qualquer vontade no que quer que seja, saber que todo o movimento leva a uma 
          única ação: a de estar. Este durante que sempre se reforma, que se reengendra: que nunca é princípio, que não se 
          permite ao fim: que é sempre durante. O mar em seu meio é um deserto. Eu não saberia me guiar pela forma de uma ou 
          outra gota, pelo desenho de uma ou outra nuvem que se fizesse. Nos ignoram as constelações. O irrepetível, a olho 
          nu, diariamente repetido. Uma secura que desola a garganta silente. O barco. Em que mar estará? Estará em algum 
          mar? Não abrirei os olhos. Seria em vão. Há apenas formas do mesmo. O olhar, desejante, erraria. Talvez esteja o 
          barco a milhares de quilômetros de uma costa. Talvez tenha decidido rasgar o continente pelo ventre. Talvez seja 
          este sol o mesmo que alimenta os galhos de árvores monstruosas, que talvez me circundem. Talvez tenha se construído 
          a capital de um país ao redor deste barco. E, no entanto, eu estaria no mar de qualquer maneira. E ele ainda me 
          apontaria um trajeto cuja forma só se conheceria quando fosse tarde demais para vivê-la. Quando fosse irremediavelmente 
          passado. Ancorado, e seguindo. Ter visto tudo é o mesmo do que jamais ter enxergado coisa alguma. É impossível 
          anteceder uma única certeza. Chegar é apenas sobre intuir o percurso findo.
        </p>

        <Youtube 
          className={styles.youtubeVideo}
          videoId="Fb8A-X3RnIE"
        />

      </section>

      <TextsNavigation currentCiclo="olhosAgua" handleRedirect={handleRedirect}/>
    </div>
  );
}