import React, { useEffect } from "react";
import SecondTable from "./SecondTable"
import CheckboxSelection from "./dipartment"

export const SecondPage = () => {
  const [test,setTest] = React.useState("vddv")
  useEffect(()=>{
    console.log(test)
    setTest("text")
  })
  return (
    <div>
        <SecondTable/>
        <CheckboxSelection/>
    </div>
  )
}
