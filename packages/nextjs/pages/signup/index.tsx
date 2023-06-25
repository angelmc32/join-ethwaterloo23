import { useCallback, useState } from "react";
import { NextPage } from "next";
import InterestsStep from "~~/components/InterestsStep";
import RoleStep from "~~/components/RoleStep";
import SignupStepper from "~~/components/SignupStepper";
import SkillsStep from "~~/components/SkillsStep";

const steps = [{ name: "Role" }, { name: "Skills" }, { name: "Interests" }];

const Signup: NextPage = () => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const nextStep = useCallback(({ type, payload }: { type: "role" | "skills" | "interests"; payload: any }) => {
    switch (type) {
      case "role":
        setRole(payload);
        break;
      case "skills":
        setSkills(payload);
        break;
      case "interests":
        setInterests(payload);
        break;
    }

    if (step < steps.length - 1) setStep(v => v + 1);
    else return;
  }, []);

  const prevStep = useCallback(() => {
    if (step > 0) setStep(v => v - 1);
    else return;
  }, []);

  const actions = {
    nextStep,
    prevStep,
  };

  return (
    <>
      <SignupStepper currentStep={step} steps={steps} />

      <pre>{JSON.stringify({ role, skills, interests })}</pre>

      <div>
        {step == 0 ? (
          <RoleStep actions={actions} />
        ) : step == 1 ? (
          <SkillsStep actions={actions} />
        ) : (
          <InterestsStep actions={actions} />
        )}
      </div>
    </>
  );
};

export default Signup;
