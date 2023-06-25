// Seleccion del role del perfil
const RoleStep = ({ actions }: { actions: any }) => {
  // Tres botones, cualquiera de ellos, cambia el current step al siguiente
  // y define en el formulario el tipo de perfil que es el usuario
  return (
    <div className="container">
      <h1>Select a role</h1>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => actions.nextStep({ type: "role", payload: "dev" })}
      >
        Developer
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => actions.nextStep({ type: "role", payload: "designer" })}
      >
        Designer
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => actions.nextStep({ type: "role", payload: "business" })}
      >
        Business
      </button>
    </div>
  );
};

export default RoleStep;
