import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Result from "./Result";


function App() {
    const [result , setResult] = useState("")

    function addResult(firstNum, secondNum, operator){
        if(operator === "+"){
            console.log("Run Addition of ",firstNum," and ",secondNum,".");
            const calc = Number(firstNum) + Number(secondNum);
            setResult(calc);
        } else if(operator === "/"){
            console.log("Run Division of ",firstNum," and ",secondNum,".");
            const calc = Number(firstNum) / Number(secondNum);
            setResult(calc);
        } else if(operator === "-"){
            console.log("Run Subtraction of ",firstNum," and ",secondNum,".");
            const calc = Number(firstNum) - Number(secondNum);
            setResult(calc);
        } else{
            console.log("Run Multiplication of ",firstNum," and ",secondNum,".");
            const calc = Number(firstNum) * Number(secondNum);
            setResult(calc);
        }
    }

    return (
    <div>
     <div className="container">
        <Header />
        <Form 
            onAdd={addResult}
        />
        <Footer />
     </div>
     <Result 
        finalResult={result}
     />
    </div>
    )
}

export default App;