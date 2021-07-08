import React, { useState } from "react";

import Initial from "./MultiForms/Initial";


const Index = ({ step }) => {

    const callback = (nextStep) => {
        setCurrentStep(nextStep);
    }

    const getInitialStep = () => {
        return <Initial callback={callback} />
    }

    const [currentStep, setCurrentStep] = useState(getInitialStep());
    return (
        <div>
            {currentStep}
        </div>
    );
};

export default Index;