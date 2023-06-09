import Home from './pages/Home';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto w-full px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
