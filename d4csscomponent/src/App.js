import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Applying CSss to react component</h1>
    </div>
  );
}

function First(){
  return(
    <>
    {/* inline style */}
    <h1 style={{color : "red"}}>This is heading</h1>
    <b style={{color:"blue",fontSize:25}}>this is bold tag</b>
    </>
  );
}

const mystyle = {
  color:"red",
  fontSize: 20,
  fontFamily: "Arial",
}

function Second(){
  return(
    <div>
      {/* block style */}
      <i style={mystyle}>hello world how are you doing</i>
      <h3>this is heading three</h3>
    </div>
  );
}

function Third(){
  return (
    <>
    {/* external style */}
    <h5>this is heading 5</h5>
    </>
  );
}

export default App;
export {First,Second,Third};
