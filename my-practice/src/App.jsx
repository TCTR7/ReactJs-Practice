// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormValidation from "./pages/FormValidation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormValidation />} />
    </Routes>
  );
}

export default App;
