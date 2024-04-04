
import { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMessage,setErrorMessage]=useState("");

  const calculateBMI=()=>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters=height/100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5) setBmiStatus("Underweight");
      else if(bmiValue<=24.9) setBmiStatus("Normal Weight")
      else if(bmiValue<=29.9) setBmiStatus("Overweight")
      else  setBmiStatus("Obese");
      setErrorMessage("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for both Height and Weight.");
    }
  }
  const clearAll=()=>{
    setHeight("");
    setWeight("");
  }
  return (
    <>
      <div className="bmi_calculator" data-aos="fade-up" data-aos-duration="1000">        
        <div className="data" data-aos="fade-up" data-aos-duration="1000">
          <h1 className='heading'>BMI Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input_Container" data-aos="fade-right" data-aos-duration="1000">
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" value={height} placeholder='Enter your height in cm...' onChange={e=>setHeight(e.target.value)}/>
          </div>
          <div className="input_Container" data-aos="fade-left" data-aos-duration="1000">
            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" value={weight} placeholder='Enter your weight in kg...' onChange={e=>setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBMI} data-aos="flip-up" data-aos-duration="1000">Calculate  BMI</button>
          <button onClick={clearAll} data-aos="flip-up" data-aos-duration="1000">Clear</button>
         {bmi!==null && (<div className="result" data-aos="zoom-in" data-aos-duration="1000" >
            <p>Your BMI is : {bmi}</p>
            <p>Status : {bmiStatus}</p>
          </div>)}
        <p className='copyright' data-aos="fade-up"
     data-aos-duration="1000">
          Designed by <span>Jegan</span>
        </p>
        </div>
      </div>
    </>
  )
}

export default App
