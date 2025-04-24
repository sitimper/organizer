import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/common/Homepage";
import NotFound from './pages/common/NotFound';
import ToolsBrowser from './pages/tools/ToolsBrowser';
import Tools from './pages/tools/Tools';
import AddTool from './pages/tools/addTool/AddTool';
import Tool from './pages/tools/Tool';

export default function App() {
  return (
  <>
    <Routes>
      <Route index element={<Homepage />}></Route>
      <Route path="tools">
        <Route index element={<ToolsBrowser />}></Route>
        <Route path=":toolType">
          <Route index element={<Tools />}></Route>
          <Route path=":toolId" element={<Tool />}></Route>
          <Route path="add" element={<AddTool />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}