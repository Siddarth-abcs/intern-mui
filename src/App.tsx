import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import { SecondPage } from './SecondPage';



function App() {

  // hi dear this part just for add React in this page  is use 2-4 time in app
  const [test,setTest] = React.useState("vddv")
  useEffect(()=>{
    console.log(test)
    setTest("text")
  })

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/secondpage' element={<SecondPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
