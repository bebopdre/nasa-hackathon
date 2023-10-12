import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChooseSpeed from "./pages/ChooseSpeed/ChooseSpeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/choose_speed' element={<ChooseSpeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
