import { Routes, Route } from "react-router-dom";
import MedicationList from "./pages/MedicationList";
import MedicationDetail from "./pages/MedicationDetail";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MedicationList />} />
      <Route path="/medications/:id" element={<MedicationDetail />} />
    </Routes>
  );
}