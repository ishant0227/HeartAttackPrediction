import Landingpage from "./Component/Landingpage";
import  "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Component/Form";
import  "./App.css"
import Register from "./Component/Register";
import Howitworks from "./Component/How_It_Works";


function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/Form" element={<Form />} />
      <Route path="/login" element={<Register/>}/>
      <Route path="/how-it-works" element={<Howitworks/>}/>


      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;