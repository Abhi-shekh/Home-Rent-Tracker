import './App.css';
import FeeStructure from './pages/FeeStructure';
import DashBoard from './pages/DashBoard';
import MainPage from './pages/MainPage';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/feeStructure" element={<FeeStructure/>}/>
      </Routes>
    </div>
  );
}

export default App;
