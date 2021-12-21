import * as React from "react";
import './App.css';
import Games from './components/Games';
import GameEdit from './components/GameEdit';
import GameView from './components/GameView';
import GameAdd from './components/GameAdd';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* all your routs should be implemented here */}
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/editGame' element={<GameEdit />} />
        <Route path='/viewGame' element={<GameView />} />
        <Route path='/addGame' element={<GameAdd />} />
      </Routes>
    </div>
  );
}

export default App;
