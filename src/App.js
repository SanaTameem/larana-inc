import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Service from './components/Service';
import Plan from './components/Plan';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
