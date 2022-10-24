import React from "react"
import logo from './assests/logo.svg';
import './App.scss';
import Navigation from "./components/navigation";
import {Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container"

function App() {
  return (
    <>
      <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={
            <h1>/</h1>
          }/>
          <Route path="/home" element={
            <h1>Home</h1>
          }/>
        </Routes>
        <img src={logo} className="App-logo" alt="logo"/>
      </Container>
    </>
  );
}

export default App;
