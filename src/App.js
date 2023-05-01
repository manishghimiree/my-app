import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Events from "./components/Events";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Home from "./components/Home";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="company" element={<Company />} />
            <Route path="events" element={<Events />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
