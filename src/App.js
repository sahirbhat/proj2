

import { BrowserRouter, Route, Routes } from "react-router-dom";

 import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/auth/Login";
function App() {
  return (
    < >
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>}> 

      <Route index element={<Home/>}/> 
      <Route path="Contact" element={<Contact/>} /> 
      <Route path="Login" element={<Login/>} /> 
     

    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
