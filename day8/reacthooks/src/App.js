import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <h1>Bitcoin Live Data</h1>
      <FetchAPI/>
    </div>
  );
}

function FetchAPI(){
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((responce) => responce.json())
    .then((json) => {
      setData(json.bpi.USD);
    })
  }
  apiGet();

  return(
    <h1>{data.rate}</h1>
  );
}



export default App;
