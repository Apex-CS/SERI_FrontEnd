import { useState } from "react";
import { redirect } from "react-router-dom";

function SignIn() {
  const [isLogin, setIsLogin] = useState(false);
  const [flagAction, setFlagAction] = useState(false);
  console.log("🚀 ~ file: SignIn.tsx:6 ~ SignIn ~ flagAction:", flagAction)
  /**
   * Funcion que envia informacion al servidor
   * para validar el usuario y constraseña y establecer informacion
   * del usaurio en el sistema
   */
  const signIn = () => {
    if (!flagAction) {
        // return redirect("/signin");
        window.location.href = '/signin';
    }
    setFlagAction((prevState) => !prevState);

  };
    
    

  /**
   * Funcion que borra la informacion local del usuario
   * y
   * aun falta por definir si cambia algun estado en el servidor / BD
   */
  const signOff = () => {};

  return (
    <>
      <div>
        <button onClick={signIn} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Sign Off</button>
      </div>
      {flagAction && (
        <div>
            <p>aqui va un icono</p>
        </div>
      )}
    </>
  );
}

export default SignIn;
