import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./components";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
