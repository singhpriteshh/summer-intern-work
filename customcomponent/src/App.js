import logo from './logo.svg';
import './App.css';
import { Second,Third,Fifth } from './customcomp';
function App() {
  return (
    <div>
      <h1>Concept of custom components</h1>
      <Second/>
    </div>
  );
}


function New(){
  return(
    <>
    <p>This is new components</p>
    <Third/>
    </>
  );
}

export default App;
export {New};
