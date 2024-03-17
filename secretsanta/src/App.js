import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Emplist from "./components/Emplist";
import Qrscan from "./components/Qrscan";
import UpdateEmp from "./components/UpdateEmp";
import ShowQr from "./components/ShowQr";
import Santaform from "./components/Santaform";
import Empname from "./components/Empname";
import Records from "./components/Records";
import Protected from "./Protected";
function App() {


  return (

    <Router>
      <Routes>
        

      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Protected Component={Home} />}/> 
      <Route path="/emplist" element={<Protected Component={Emplist} />}/>
        <Route path="/empqr" element={<Protected Component={Qrscan} />}/>
        <Route path="/updemp" element={< Protected Component={UpdateEmp}  />}/>
        <Route path="/secretSanta" element={<Protected Component={ShowQr}  />}/>
        <Route path="/santaform/:id" element={< Santaform />}/>
        <Route path="/empname" element={<Empname/>}/>
        <Route path="/records" element={<Protected Component={Records} />}/>
        <Route path="/register" element={<Register/>}/>
        
        
      </Routes>
    </Router>
  );
}

export default App;