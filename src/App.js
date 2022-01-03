import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Introduction } from "./Pages/Introduction";

import { Sobre } from "./Pages/Sobre";
import { Home } from "./Pages/Home";

import { Toamasina } from "./Pages/Ciclos/Toamasina";
import { PronunciarOChao } from "./Pages/Ciclos/PronunciarOChao";
import { TerOlhosParaVer } from "./Pages/Ciclos/TerOlhosParaVer";

import { OFutebolASerEscrito } from "./Pages/Ciclos/PronunciarOChao/OFutebolASerEscrito";
import { ONarrador } from "./Pages/Ciclos/PronunciarOChao/ONarrador";
import { TopologiasDoJogo } from "./Pages/Ciclos/PronunciarOChao/TopologiasDoJogo";
import { ImagensImagens } from "./Pages/Ciclos/PronunciarOChao/ImagensImagens";
import { AindaALei } from "./Pages/Ciclos/PronunciarOChao/AindaALei";
import { Ingenuidade } from "./Pages/Ciclos/PronunciarOChao/Ingeunidade";
import { NucleosVazios } from "./Pages/Ciclos/PronunciarOChao/Nucleos Vazios";
import { DianteDoOutro } from "./Pages/Ciclos/PronunciarOChao/DianteDoOutro";
import { TodoOFutebolEFeminino } from "./Pages/Ciclos/PronunciarOChao/TodoOFutebolEFeminino";
import { Afetacao } from "./Pages/Ciclos/PronunciarOChao/Afetacao";
import { ImagensDaViolencia } from "./Pages/Ciclos/PronunciarOChao/ImagensDaViolencia";
import { MelancoliaDeTime } from "./Pages/Ciclos/PronunciarOChao/MelancoliaDeTime"
import { Pe } from "./Pages/Ciclos/PronunciarOChao/Pe";
import { MasSeDeusEPorNos } from "./Pages/Ciclos/PronunciarOChao/MasSeDeus";
import { AliancasDemoniacas } from "./Pages/Ciclos/PronunciarOChao/AliancasDemoniacas";
import { OsDeusesDoFutebol } from "./Pages/Ciclos/PronunciarOChao/OsDeusesDoFutebol";


import { AquiNesteCantoPerdido } from "./Pages/Ciclos/Toamasina/AquiNesteCantoPerdido";
import { ArvoreGenealogica } from "./Pages/Ciclos/Toamasina/ArvoreGenealogica";
import { AsFotografias } from "./Pages/Ciclos/Toamasina/AsFotografias";
import { DaAbstracao } from "./Pages/Ciclos/Toamasina/DaAbstracao";
import { DeusEGrande } from "./Pages/Ciclos/Toamasina/DeusEGrande";
import { Isto } from "./Pages/Ciclos/Toamasina/Isto";
import { PorQualLadoDoCorpo } from "./Pages/Ciclos/Toamasina/PorQualLadoDoCorpo";
import { VoltaremosAEsteTopico } from "./Pages/Ciclos/Toamasina/VoltaremosAEsteTopico";



import { ContraOPopular } from "./Pages/Ciclos/TerOlhosParaVer/ContraOPopular";
import { CorpoRestoLixo } from "./Pages/Ciclos/TerOlhosParaVer/CorpoRestoLixo";
import { EmNarita } from "./Pages/Ciclos/TerOlhosParaVer/EmNarita";
import { NaoHaLadoDeFora } from "./Pages/Ciclos/TerOlhosParaVer/NaoHaLadoDeFora";
import { NaoVerOJaVisto } from "./Pages/Ciclos/TerOlhosParaVer/NaoVerOJaVisto";
import { PorUmaNovaCinefilia } from "./Pages/Ciclos/TerOlhosParaVer/PorUmaOutraNovaCinefilia";
import { TranseEOuNarrativa } from "./Pages/Ciclos/TerOlhosParaVer/TranseEOuNarrativa";



// Define as rotas da aplicação
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Introduction/>} />
        <Route path='home' element={<Home />}/>
    
        <Route path="pronunciar-o-chao" element={<PronunciarOChao />}/>
        <Route path="pronunciar-o-chao/o-futebol-a-ser-escrito" element={<OFutebolASerEscrito />} />
        <Route path="pronunciar-o-chao/o-narrador" element={<ONarrador/>} />
        <Route path="pronunciar-o-chao/topologias-do-jogo" element={<TopologiasDoJogo/>} />
        <Route path="pronunciar-o-chao/imagens-imagens" element={<ImagensImagens/>} />
        <Route path="pronunciar-o-chao/ainda-a-lei" element={<AindaALei />} />
        <Route path="pronunciar-o-chao/ingenuidade" element={<Ingenuidade/>}/>
        <Route path="pronunciar-o-chao/nucleos-vazios" element={<NucleosVazios />}/>
        <Route path="pronunciar-o-chao/diante-do-outro-em-nome-de-si" element={<DianteDoOutro/>} />
        <Route path="pronunciar-o-chao/todo-o-futebol-e-feminino" element={<TodoOFutebolEFeminino/>} />
        <Route path="pronunciar-o-chao/afetacao" element={<Afetacao/>} />
        <Route path="pronunciar-o-chao/imagens-da-violencia" element={<ImagensDaViolencia/>} />
        <Route path="pronunciar-o-chao/melancolia-de-time" element={<MelancoliaDeTime/>} />
        <Route path="pronunciar-o-chao/pe" element={<Pe/>} />
        <Route path="pronunciar-o-chao/mas-se-deus-e-por-nos" element={<MasSeDeusEPorNos/>} />
        <Route path="pronunciar-o-chao/aliancas-demoniacas" element={<AliancasDemoniacas/>} />
        <Route path="pronunciar-o-chao/os-deuses-do-futebol" element={<OsDeusesDoFutebol/>} />

        <Route path="/toamasina" element={<Toamasina/>} />
        <Route path="toamasina/aqui-neste-canto-perdido" element={<AquiNesteCantoPerdido/>} />
        <Route path="toamasina/arvore-genealogica" element={<ArvoreGenealogica/>} />
        <Route path="toamasina/as-fotografias" element={<AsFotografias/>} />
        <Route path="toamasina/da-abstracao" element={<DaAbstracao/>} />
        <Route path="toamasina/deus-e-grande-a-baia-e-grande" element={<DeusEGrande/>} />
        <Route path="toamasina/isto" element={<Isto/>} />
        <Route path="toamasina/por-qual-lado-do-corpo" element={<PorQualLadoDoCorpo/>} />
        <Route path="toamasina/voltaremos-a-este-topico" element={<VoltaremosAEsteTopico/>} />

        <Route path="/ter-olhos-para-ver" element={<TerOlhosParaVer/>} />
        <Route path="/ter-olhos-para-ver/contra-o-popular" element={<ContraOPopular/>} />
        <Route path="/ter-olhos-para-ver/corpo-resto-lixo" element={<CorpoRestoLixo/>} />
        <Route path="/ter-olhos-para-ver/em-narita" element={<EmNarita/>} />
        <Route path="/ter-olhos-para-ver/nao-ha-lado-de-fora" element={<NaoHaLadoDeFora/>} />
        <Route path="/ter-olhos-para-ver/nao-ver-o-ja-visto" element={<NaoVerOJaVisto/>} />
        <Route path="/ter-olhos-para-ver/por-uma-outra-nova-cinefilia" element={<PorUmaNovaCinefilia/>} />
        <Route path="/ter-olhos-para-ver/transe-e-ou-narrativa" element={<TranseEOuNarrativa/>} />

        <Route path="sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
