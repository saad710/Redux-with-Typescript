import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch} from 'react-redux';
import { useTypedSelector } from './redux/hooks';

function App() {
  const dispatch = useDispatch();
  const active: any  = useTypedSelector((state) => state.test);
  console.log(active)

  const ItemData = [
    {
        "Product_name" : "Shoe-Black",
        "id" : 100,
    },
    {
        "Product_name" : "Shoe-White",
        "id" : 200,
    },
    {
        "Product_name" : "Shoe-Blue",
        "id" : 300,
    },
]

  const ProductItem : any = useTypedSelector((state) => state.item)
  console.log(ProductItem)

  const handleClick = () => {
    dispatch({ type: 'test-data', result: active.test.map((a:any) => {
      return {...a , active:'yes'}
    }) })
    dispatch({ type: 'item-data', result : ItemData })
  }
  return (
    <div className="App">
      {
        active?.test.map((a:any)=> (
          <h1 key={a.id}>{a?.name}</h1>
        ))
      }
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;