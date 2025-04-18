import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/common/Homepage";
import Tools from './pages/tools/Tools';

export default function App() {
  return (
  <>
    <Routes>
      <Route index element={<Homepage></Homepage>}></Route>
      <Route path="/tools" element={<Tools></Tools>}></Route>
    </Routes>
  </>
  );
}