import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import SkillsFrontend from "./pages/SkillsFrontend";
import SkillsBackend from "./pages/SkillsBackend";
import SkillsAutomacao from "./pages/SkillsAutomacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/skills/frontend" element={<SkillsFrontend />} />
        <Route path="/skills/backend" element={<SkillsBackend />} />
        <Route path="/skills/automacao" element={<SkillsAutomacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
