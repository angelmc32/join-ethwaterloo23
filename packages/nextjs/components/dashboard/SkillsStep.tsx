import { ChangeEvent, useState } from "react";
import { skillsArray } from "~~/fixtures";

// Seleccion del role del perfil
const SkillsStep = ({ actions }: { actions: any }) => {
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
    <div className="bg-white rounded-lg p-8">
      <h4 className="text-xl font-bold text-blue-600">Step 2</h4>
      <h2 className="text-3xl font-bold text-red-500">What can you do?</h2>
      <div>
        <fieldset className="grid grid-cols-3 gap-4 p-8">
          {skillsArray.map(skill => (
            <div key={skill} className="space-y-5">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id={`skills-${skill}`}
                    name="skills"
                    type="checkbox"
                    onChange={handleSelectionChange}
                    value={skill}
                    className="h-4 w-4 rounded border-gray-300 accent-red-600 focus:ring-red-600 hover:cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-lg leading-6">
                  <label htmlFor={`skills-${skill}`} className="font-medium text-gray-900">
                    {skill}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </fieldset>
      </div>
      <div className="flex gap-8 justify-center">
        <button
          type="button"
          className="rounded-lg bg-white px-6 py-2 text-lg font-semibold text-red-600 ring-2 ring-inset ring-red-600 hover:bg-red-300"
          onClick={actions.prevStep}
        >
          Go back
        </button>
        <button
          type="button"
          disabled={selection.length == 0}
          className="rounded-lg bg-red-600 px-6 py-2 text-lg font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-500 disabled:bg-red-600/40"
          onClick={() => actions.nextStep({ type: "skills", payload: selection })}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default SkillsStep;
