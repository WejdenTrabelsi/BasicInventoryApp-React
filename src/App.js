
import './App.css';
import Info from "./Info.js";
function App() {
  return (
    <div className="App">
    <Info/>
    <AddItem/>
    <AddItem/>
    <AddItem/>
    </div>
  );
}
/*
function Info(){
const title ="This is my title.";
const showTitle=true;

  return(
    <div>
    
      <h1>{showTitle ?title:"No title"}</h1>
      <p>Manage Your stuff.</p>
    </div>
  );
}
  */
function AddItem (){
  const value="default"
  return(
    <form>
      <label for ="text-form">Type something</label>
      <input type="text" value={value} id="text-form"></input>
      <Info/>
    </form>
  )
}
export default App;
