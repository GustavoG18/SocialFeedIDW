import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigPage from "../pages/ConfigPage/ConfigPage";
import Home from "../pages/Home/Home";

const Router = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<ConfigPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;