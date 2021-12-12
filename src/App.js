import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Introduction } from "./components/Introduction";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";

// Basicamente define as rotas da aplicação
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduction/>} />
        <Route path='home' element={<Home/>} />
        <Route path="sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
