import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import RobotCard from './components/card/RobotCard'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/userlist/Index';
import Description from './pages/userdescription/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/robot/:id" element={<Description />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
