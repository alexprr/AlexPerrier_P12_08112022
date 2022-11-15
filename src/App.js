import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navigate to="/user/12" />} />
      <Route path="/user/:id" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
