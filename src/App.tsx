import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Application from './pages/Application';
import YourDataPage from './pages/YourDataPage';
import LastDataPage from './pages/LastDataPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application/step1" element={<Application />} />
        <Route path="/application/step2" element={<YourDataPage />} />
        <Route path="/application/step3" element={<LastDataPage />} />
      </Routes>
    </Router>
  );
};

export default App;
