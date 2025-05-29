// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormValidation from "./pages/FormValidation";
import DebounceThrottle from "./pages/DebounceThrottle";
import HooksShowcase from "./pages/HooksShowcase";
import ModalDemoPage from "./pages/ModalDemoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormValidation />} />
      <Route path="/debounce-throttle" element={<DebounceThrottle />} />
      <Route path="/hooks" element={<HooksShowcase />} />
      <Route path="/modal-manager" element={<ModalDemoPage />} />
    </Routes>
  );
}

export default App;
