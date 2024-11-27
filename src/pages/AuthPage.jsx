import React, { useState } from "react";
import SingUp from "../components/SingUp";
import SinginForm from "../components/SinginForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  console.log(step);
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-orange-500 to-orange-100">
      <div className="w-full min-h-screen container mx-auto lg:max-w-[1240px] flex justify-center items-center ">
        {step === 1 && <SingUp setStep={setStep} />}
        {step === 2 && <SinginForm setStep={setStep} />}
      </div>
    </div>
  );
}

export default AuthPage;
