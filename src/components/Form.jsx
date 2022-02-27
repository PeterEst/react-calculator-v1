import React, { useState } from "react";

const Form = (props) =>{
    const [firstNum , setFirstNum] = useState();
    const [secondNum , setSecondNum] = useState();
    const [operator , setOperator] = useState("+");
    
    function handleChange(event){
        const { name, value } = event.target;
        
        if(name === "firstNum"){
            setFirstNum(value);
        } else if(name ==="secondNum"){
            setSecondNum(value);
        } else{
            console.log(value);
            setOperator(value);
        }
    };

    function submitNum(event){
        props.onAdd(firstNum, secondNum, operator);
        event.preventDefault();
    };

    return(
        <div className="formStyle">
            <form>
                <div className="dataInput">
                    <label>Enter First Number: </label>
                    <input name="firstNum" type="Number" onChange={handleChange} required/>
                </div>
                <div className="dataInput">
                    <label>Enter Second Number: </label>
                    <input name="secondNum" type="Number" onChange={handleChange} required/>
                </div>
                <div className="dataInput">
                    <label>Choose an operator: </label>
                    <select name="operator" id="operator" onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                </div>
                <div className="submitBtn">
                    <input name="submit" type="Submit" onClick={submitNum}/>
                </div>
            </form>
        </div>
    )
};

export default Form;