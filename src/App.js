
import './App.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import TopNav from "./pages/dashboard/components/TopNav";
import Hero from "./pages/dashboard/components/Hero";
import Footer from "./pages/dashboard/components/Footer";
import Prince from "./pages/dashboard/components/Prince";
import Button from "./pages/dashboard/components/Button";
import Tic from "./ticTacToe/Tic"
import Toe from "./ticTacToe/Toe";
import CounterComponent from "./pages/dashboard/components/CounterComponent";
import ValueComponent from "./pages/dashboard/components/ValueComponent";
import UserComponent from "./pages/dashboard/components/UserComponent";
// import Cards from "./pages/dashboard/components/Card";
// import Form from "./userStore/Form";
import Form from "./pages/dashboard/components/Form";
import ContestForm from "./userStore/ContestForm";
import FormikSample from './pages/dashboard/components/FormikSample'
import Clock from "./clock/Clock";


function App() {

  return (
    <div className="App">
      {/*<Router>*/}
      {/*    <Routes>*/}
      {/*        <Route path ='/' element={<Body/>}/>*/}
      {/*    </Routes>*/}
      {/*</Router>*/}
      {/*  <Toe/>*/}
        <Toe/>
        {/*<StateMgtWithReducer/>*/}
        {/*<CounterComponent/>*/}
        {/*<ValueComponent/>*/}
      {/*<UserComponent/>*/}
      {/*  <Cards/>*/}
      {/*  <Form/>*/}
      {/*  <Form/>*/}
      {/*  <ContestForm/>*/}
      {/*  <FormikSample/>*/}
      {/*  <Clock/>*/}
    </div>
  );
}

export default App;
