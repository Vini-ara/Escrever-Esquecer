import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Introduction } from "./Pages/Introduction";

import { Sobre } from "./Pages/Sobre";
import { Home } from "./Pages/Home";
//import { Toamasina } from "./Pages/Ciclos/Toamasina";
import { PronunciarOChao } from "./Pages/Ciclos/PronunciarOChao";
import { OFutebolASerEscrito } from "./Pages/Ciclos/PronunciarOChao/OFutebolASerEscrito";
import { ONarrador } from "./Pages/Ciclos/PronunciarOChao/ONarrador";

// Basicamente define as rotas da aplicação
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Introduction/>} />
        <Route path='home' element={<Home />}/>
    
        <Route path="pronunciar-o-chao" element={<PronunciarOChao />}/>
        <Route path="pronunciar-o-chao/o-futebol-a-ser-escrito" element={<OFutebolASerEscrito />} />
        <Route path="pronunciar-o-chao/o-narrador" element={<ONarrador/>} />

        <Route path="sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
