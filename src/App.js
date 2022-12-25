import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Index from "./pages/index/index.page";
import PageNotFound from "./pages/PageNotFound/PageNotFound.page";
import Projects from "./pages/projects/projects.page";
import Test from "./pages/test/test.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />

      {process.env.NODE_ENV === "development" &&
        <Route path="/test" element={<Test />} />
      }

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;


