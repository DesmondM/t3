import React, {useState} from "react";
const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

function App() {
    // const step =3
    const [step, setStep]= useState(0)
    const [isOpen, setIsOpen]= useState(true)
  function handlePrevious(){
    if(step>0) setStep(s=>s-1)
  }
  function handleNext(){
    if(step<3) setStep(s=>s+1)
  }
  return (
    <>
    <button className="close" onClick={()=>setIsOpen((is)=>!is)}>x</button>
    {isOpen&&
    <div className="steps">
     <div className="numbers">
        <div className={step>=1?'active':''}>1</div>
        <div className={step>=2?'active':''} >2</div>
        <div className={step>=3?'active':''}>3</div>

     </div>
     <p className="message">Step {step}: {messages[step-1]}</p>
     <div className="buttons">
        <Button textColor='#fff' bgColor='#7950f2' text='Previous' onClick= {handlePrevious} ><span>👈</span>Previous</Button>
        <Button textColor='#fff' bgColor='#7950f2' text='Next' onClick={handleNext}>Next<span>👉</span></Button>
     </div>
    </div>
    }
    </>
  )
}

function Button({textColor, bgColor, onClick, children}){
    return(
        <button
        style={{backgroundColor:bgColor, color:textColor}} onClick={onClick}>{children}</button>

        
    )

}

export default App;
