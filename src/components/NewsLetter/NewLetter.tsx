import React from "react";
import Button from "../Inputs/Button/Button";
import InputText from "../Inputs/InputText/InputText";

function NewsLetter() {
  /**
   * Metodo post que enviara informacion, probablemete un correo para inscribir
   * dicho correo a la suscribcion de la pagina
   *
   * NOTA: Falta validar si habra una respuesta por ejemplo que diga si el correo
   * ya esta registrado o algun mensaje en especifico.
   */
  const suscribeNewsLetter = (event: React.FormEvent<HTMLFormElement>) => {
    let params = event.target;
  };

  const [email, setEmail] = React.useState<string>("");

  return (
    <form
      className=" container mr-3 mt-10 w-full flex flex-col  "
      onSubmit={suscribeNewsLetter}
    >
      <div className="flex flex-col">
        <h1 className=" flex font-bold text-3xl hover:font-bold text-yellow-400 dark:text-yellow-400">
          Join our Newsletter
        </h1>
        <h2 className="flex dark:text-white">
          get weekly access to our movie recommendations!
        </h2>
      </div>

      <div className="flex flex-col items-start justify-around">
        <div className="w-full flex justify-between py-0 h-auto">
          <InputText
            value={email}
            setValue={setEmail}
            type={"email"}
            placeHolder={"janedoe@apexsystems.com"}
            classNameContainer={`relative z-0 mb-1 group flex w-4/5 items center mt-4`}
            customClassInput={`w-full bg-white border border-gray-300 text-gray-500 text-sm rounded-lg  
						block w-60 mr-3 p-2.5 bg-transparent`}
          />
          <div className="flex flex-col w-3/7 h-auto py-0 items-center justify-center">
            <Button
              type="submit"
              label="JOIN"
              customClass={`flex w-full items-center justify-center mt-3 bg-yellow-500`}
            />
          </div>
        </div>
        <h5 className="text-gray-300 text-sm">
          No spam, we hate it more than you do
        </h5>
      </div>
    </form>
  );
}

export default NewsLetter;
