import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChooseSpeed from "./pages/ChooseSpeed/ChooseSpeed";
import ChooseDates from "./pages/ChooseDates/ChooseDates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/choose_speed' element={<ChooseSpeed />} />
        <Route path='/choose_dates' element={<ChooseDates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
