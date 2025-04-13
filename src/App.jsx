import Landingpage from "./Component/Landingpage";
import  "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Component/Form";
import  "./App.css"
import Register from "./Component/Register";
import Howitworks from "./Component/How_It_Works";
import Header from "./Component/Header";
import Thanks from "./Component/Thanks";
import Survey from "./Component/Survey";
import StepForm from "./Component/test";


function App() {
  return (
    <div >

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/~thank" element={<Thanks/>}/>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Register/>}/>
      <Route path="/how-it-works" element={<Howitworks/>}/>
      <Route path="/survey" element={<Survey/>}/>
      <Route path="/about" element={<StepForm/>} />


      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;