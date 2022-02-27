import React from "react";

const Result = (props) =>{
    return(
        <div className="result-container">
         <h1>Final Result : {props.finalResult}</h1>
        </div> 
    )
};

export default Result;