import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Introduction } from "./Pages/Introduction";

import { Sobre } from "./Pages/Sobre";
import { Home } from "./Pages/Home";

// Basicamente define as rotas da aplicação
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Introduction/>} />
        <Route path='/home' element={<Home />}/>
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
