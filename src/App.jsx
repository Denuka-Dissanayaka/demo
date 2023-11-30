import Home from "./pages/Home";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
