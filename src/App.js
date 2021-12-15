import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Introduction } from "./components/Introduction";
//import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Ciclos } from "./components/Ciclos";

// Basicamente define as rotas da aplicação
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Introduction/>} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path="/sobre" element={<Sobre/>} />
        <Route path='/home' element={<Ciclos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
