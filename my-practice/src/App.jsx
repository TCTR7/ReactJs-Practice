// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormValidation from "./pages/FormValidation";
import DebounceThrottle from "./pages/DebounceThrottle";
import HooksShowcase from "./pages/HooksShowcase";
import ModalDemoPage from "./pages/ModalDemoPage";
import ToastDemoPage from "./pages/ToastDemoPage";
import FileUploadPage from "./pages/FileUploadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormValidation />} />
      <Route path="/debounce-throttle" element={<DebounceThrottle />} />
      <Route path="/hooks" element={<HooksShowcase />} />
      <Route path="/modal-manager" element={<ModalDemoPage />} />
      <Route path="/toast" element={<ToastDemoPage />} />
      <Route path="/upload" element={<FileUploadPage />} />
    </Routes>
  );
}

export default App;
