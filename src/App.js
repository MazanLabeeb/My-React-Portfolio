import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/index.page";
import PageNotFound from "./pages/PageNotFound/PageNotFound.page";
import Projects from "./pages/projects/projects.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
}

export default App;


