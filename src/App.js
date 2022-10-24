import logo from './assests/logo.svg';
import './App.scss';
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <img src={logo} className="App-logo" alt="logo"/>
    </>
  );
}

export default App;
