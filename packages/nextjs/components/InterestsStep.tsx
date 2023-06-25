import { ChangeEvent, useState } from "react";
import skills from "~~/fixtures/skills";

// Seleccion del role del perfil
const InterestsStep = ({ actions }: { actions: any }) => {
  // Tres botones, cualquiera de ellos, cambia el current step al siguiente
  // y define en el formulario el tipo de perfil que es el usuario
  const [selection, setSelection] = useState<string[]>([]);

  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked && !selection.includes(value)) {
      setSelection([...selection, value]);
    } else {
      const newSelection = selection.filter(sk => sk != value);
      setSelection([...newSelection]);
    }
  };
  return (
    <>
      <h1>What are you interested in?</h1>
      <div>
        <fieldset>
          {skills.map(skill => (
            <div key={skill} className="space-y-5">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id={`skills-${skill}`}
                    name="skills"
                    type="checkbox"
                    onChange={handleSelectionChange}
                    value={skill}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor={`skills-${skill}`} className="font-medium text-gray-900">
                    {skill}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </fieldset>
      </div>
      <button
        type="button"
        disabled={selection.length == 0}
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => actions.nextStep({ type: "interests", payload: selection })}
      >
        Finish
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={actions.prevStep}
      >
        Go back
      </button>
    </>
  );
};

export default InterestsStep;
