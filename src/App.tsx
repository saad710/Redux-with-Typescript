import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch} from 'react-redux';
import { useTypedSelector } from './redux/hooks';

function App() {
  const dispatch = useDispatch();
  const active  = useTypedSelector((state) => state.test);
  console.log(active)


  return (
    <div className="App">
        
    </div>
  );
}

export default App;
