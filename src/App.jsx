import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  BimContent,
  SupportBim,
  Education,
  Contacts,
} from "./pages/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bim_content" element={<BimContent />} />
      <Route path="/support_bim" element={<SupportBim />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
