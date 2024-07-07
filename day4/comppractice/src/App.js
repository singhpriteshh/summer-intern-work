import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>Hello World!</h1>
  );
}



function Msg(){
  return(
    <>
    <h2>this is messasge</h2>
    </>
  );
}


function New(){
  return(
    <>
    <h3>this is new messasge</h3>
    </>
  );
}


function Practice(){
  return(
    <>
    <Msg/>
    <New/>
    <h4>this is practice component</h4>
    </>
  );
}

export default App;
export {Practice};