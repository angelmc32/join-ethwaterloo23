import { useCallback, useState } from "react";
import InterestsStep from "./InterestsStep";
import RoleStep from "./RoleStep";
import SkillsStep from "./SkillsStep";

const steps = [{ name: "Role" }, { name: "Skills" }, { name: "Interests" }];

const Signup = () => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const nextStep = useCallback(
    ({ type, payload }: { type: "role" | "skills" | "interests"; payload: any }) => {
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
    },
    [step],
  );

  const prevStep = useCallback(() => {
    if (step > 0) setStep(v => v - 1);
    else return;
  }, [step]);

  const actions = {
    nextStep,
    prevStep,
  };

  return (
    <div className="z-10 xl:w-4/5">
      {/* <SignupStepper currentStep={step} steps={steps} />

      <pre>{JSON.stringify({ role, skills, interests })}</pre> */}

      <div>
        {step == 0 ? (
          <RoleStep actions={actions} />
        ) : step == 1 ? (
          <div className="pt-20">
            <SkillsStep actions={actions} />
          </div>
        ) : (
          <div className="pt-20">
            <InterestsStep actions={actions} role={role} skills={skills} interests={interests} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
