import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddPlayer from './components/AddPlayer'
import AllPlayers from './components/AllPlayers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path='/addplayer' element={<AddPlayer />} />
        <Route path='/allplayers' element={<AllPlayers />} />
      </Routes>
    </Router>
  );
}

export default App;
