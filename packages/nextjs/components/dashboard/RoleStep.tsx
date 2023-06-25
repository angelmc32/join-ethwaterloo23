import HackerCard from "../surfaces/HackerCard";

const roles = ["Project", "Designer", "Developer"];

// Seleccion del role del perfil
const RoleStep = ({ actions }: { actions: any }) => {
  // Tres botones, cualquiera de ellos, cambia el current step al siguiente
  // y define en el formulario el tipo de perfil que es el usuario
  return (
    <div className="container w-full py-8 flex flex-col items-center">
      <div className="bg-white w-4/5 flex flex-col items-center py-2 rounded-md justify-center mb-8">
        <h4 className="text-xl font-bold text-blue-600">Step 2</h4>
        <h1 className="text-3xl font-bold text-red-600">Select a role</h1>
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 gap-4 xl:gap-8 w-4/5">
          {roles.map((role, index) => (
            <div key={role + index}>
              <HackerCard role={role} actions={actions} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleStep;
