import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { interestsArray } from "~~/fixtures";

type TInterestsProps = {
  actions: any;
  role: string;
  skills: string[];
  interests: string[];
};

// Seleccion del role del perfil
const InterestsStep = ({ actions, role, skills }: TInterestsProps) => {
  const { data: sessionData } = useSession();
  const router = useRouter();
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

  const handleSubmit = async () => {
    actions.nextStep({ type: "interests", payload: selection });
    const data = {
      role,
      skills,
      interests: selection,
    };
    try {
      if (!sessionData) return;
      const res = await fetch(`http://localhost:3000/api/users?id=${sessionData.user.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(res);
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8">
      <h4 className="text-xl font-bold text-blue-600">Step 3</h4>
      <h2 className="text-3xl font-bold text-red-500">What are you interested in?</h2>
      <div>
        <fieldset className="grid grid-cols-3 gap-4 p-8">
          {interestsArray.map(interest => (
            <div key={interest} className="space-y-5">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id={`interest-${interest}`}
                    name="interests"
                    type="checkbox"
                    onChange={handleSelectionChange}
                    value={interest}
                    className="h-4 w-4 rounded border-gray-300 accent-red-600 focus:ring-red-600 hover:cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-lg leading-6">
                  <label htmlFor={`interest-${interest}`} className="font-medium text-gray-900">
                    {interest}
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
          onClick={handleSubmit}
        >
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default InterestsStep;
