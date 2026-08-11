import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ButtonDemoPage from "./pages/ButtonDemo/ButtonDemoPage";
import InputDemoPage from "./pages/InputDemo/InputDemoPage";
import ControlDemoPage from "./pages/ControlDemo/ControlDemoPage";
import TabsControlDemo from "./pages/TabsDemo/TabsDemoPage";
import SlidersDemoPage from "./pages/SliderDemo/SlidersDemoPage";
import TagDemoPage from "./pages/TagDemo/TagDemoPage";

function App() {
  return (
    <div className="bg-black min-h-screen text-[#E0E0E0] font-sans antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/buttons" replace />} />
          <Route path="/buttons" element={<ButtonDemoPage />} />
          <Route path="/inputs" element={<InputDemoPage />} />
          <Route path="/controls" element={<ControlDemoPage />} />
          <Route path="/tabs" element={<TabsControlDemo />} />
          <Route path="/sliders" element={<SlidersDemoPage />} />
          <Route path="/tags" element={<TagDemoPage />} />
          <Route path="*" element={<Navigate to="/buttons" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
