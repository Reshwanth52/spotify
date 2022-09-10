import { createContext, useContext, useReducer } from 'react';
import './App.css';
import Data from './components/Data';
import Navbar from './components/Navbar';
import { reducer, intialState } from './components/reducer';

export const UserContext= createContext()

function App() {

  const [state, dispatch] = useReducer(reducer,intialState)
  return (
    <div className="App">
        <Data/>
    </div>
  );
}

export default App;
