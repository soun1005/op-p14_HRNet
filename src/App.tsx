import Home from './pages/Home';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <div className="max-w-screen-2xl container mx-auto h-screen px-8"> */}
        <div className="mx-auto w-5/6">
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
