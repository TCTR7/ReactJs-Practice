// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormValidation from "./pages/FormValidation";
import DebounceThrottle from "./pages/DebounceThrottle";
import HooksShowcase from "./pages/HooksShowcase";
import ModalDemoPage from "./pages/ModalDemoPage";
import ToastDemoPage from "./pages/ToastDemoPage";
import FileUploadPage from "./pages/FileUploadPage";
import ChartDashboardPage from "./pages/ChartDashboardPage";
import ZustandPage from "./pages/ZustandPage";
import VirtualizedListPage from "./pages/VirtualizedListPage";
import TodoPage from "./pages/TodoPage";
import LanguagePage from "./pages/LanguagePage";

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
      <Route path="/charts" element={<ChartDashboardPage />} />
      <Route path="/zustand" element={<ZustandPage />} />
      <Route path="/virtual-list" element={<VirtualizedListPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/i18n" element={<LanguagePage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
