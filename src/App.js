import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/index.page";
import PageNotFound from "./pages/PageNotFound/PageNotFound.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
}

export default App;


