import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddPlayer from './components/AddPlayer'
import AllPlayers from './components/AllPlayers';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route exact path="/" element={<Home />}  />
        <Route path='/addplayer' element={<AddPlayer />} />
        <Route path='/addplayer/update/:id' element={<AddPlayer />} />
        <Route path='/allplayers' element={<AllPlayers />} />
      </Routes>
    </Router>
  );
}

export default App;
