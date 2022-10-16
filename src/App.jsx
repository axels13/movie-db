import PanelApi from "./components/PanelApi/PanelApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PanelApi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
