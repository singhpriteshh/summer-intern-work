import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
    <First/>
    <Second/>
    <New/>
    </div>
  );
}



function First(){
  var name = 'Bhavsar';
  return(
    <h1>Harsh {name} </h1>
  );
}


function Second(){
  var a= 10, b=20;
  return(
    <h1> value of {a} and {b} is {a+b} </h1>
  );
}

function New(){
  function check(){
    alert("button clicked");
  }
  return(
    <>
    <button onClick={check}>clik me</button>
    </>
  );
}
  


  



export default App;
