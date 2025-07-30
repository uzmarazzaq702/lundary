import React, { useState } from "react";
import StepOne from "../components/bookNow/Step1";
import Steptow from "../components/bookNow/Steptow";
import Stepthree from "../components/bookNow/Stepthree";
import Stepfour from "../components/bookNow/Stepfour";
import Stepfive from "../components/bookNow/Stepfive";
import Stepsix from "../components/bookNow/Stepsix";

const BookNow = () => {
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    if (step < 6) {
      setStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      {step === 1 && <StepOne onNext={goToNextStep} />}
      {step === 2 && <Steptow onBack={goToPreviousStep} onNext={goToNextStep} />}
      {step === 3 && <Stepthree onBack={goToPreviousStep} onNext={goToNextStep} />}
      {step === 4 && <Stepfour onBack={goToPreviousStep} onNext={goToNextStep} />}
      {step === 5 && <Stepfive onBack={goToPreviousStep} onNext={goToNextStep} />}
      {step === 6 && <Stepsix onBack={goToPreviousStep} />}
    </div>
  );
};

export default BookNow;
