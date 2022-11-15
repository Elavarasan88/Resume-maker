import Resume from "./Resume";
import React,{useRef} from "react";
import { useReactToPrint } from "react-to-print";
import './index.css'

const Print = () =>{
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  return(
    <div>
      <div className="button-container">
      <button type="button" onClick={handlePrint}>
        {" "}
        Print Resume{" "}
        </button>
      </div>
      <div ref={componentRef}><Resume/></div>
    </div>
  )
 }
 export default Print