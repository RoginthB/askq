"use client";
import { useState } from "react";
import { Step1 } from "../components/step1Comp";
import {Step2} from "../components/step2Comp";

export default  function Steps() {
  const[stepNo,setStepNo]= useState(1);
  const onHandelStep=(step)=>{
    setStepNo(step);
    console.log(step)
  }
  return (
    <>
      <div className="flex min-h-10 w-full flex-row items-start justify-between pt-6 bg-white dark:bg-black sm:items-start">
        <button onClick={()=>onHandelStep(1)} className="w-full px-2">
        <Step step ="Step 1"  description ="Upload Your Document."/>
        </button>
        <button onClick={()=>onHandelStep(2)} className="w-full px-2">
        <Step step = "Step 2" description = "You can Ask your Qustions."/>
        </button>
      </div>
      <div className="min-h-90 w-full ">
        {stepNo===1 ?  <Step1 step ="Step 1"  description ="Upload Your Document." />: <Step2 step ="Step 2"  description ="You can Ask your Qustions." />}
        
      </div>
      
    
    </>
  );
}


export function Step(props) {
    return (
        <div  className="mb-8 hover:cursor-pointer mx-2 border-t-4 border-blue-200 pb-6 dark:border-blue-700 w-full">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">{props.step}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">{props.description}</p>
        </div>
    );
}
