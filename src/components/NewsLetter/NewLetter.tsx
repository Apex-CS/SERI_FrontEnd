function NewsLetter() {
  /**
   * Metodo post que enviara informacion, probablemete un correo para inscribir
   * dicho correo a la suscribcion de la pagina
   *
   * NOTA: Falta validar si habra una respuesta por ejemplo que diga si el correo
   * ya esta registrado o algun mensaje en especifico.
   */
  const suscribeNewsLetter = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("🚀 ~ file: NewLetter.tsx:10 ~ suscribeNewsLetter ~ event:", event)
    let params = event.target;
    console.log("🚀 ~ file: NewLetter.tsx:12 ~ suscribeNewsLetter ~ params:", params)
  };

  return (
    <form className=" container mr-3 mt-10 w-full flex flex-col  " onSubmit={suscribeNewsLetter}>
      <div className="flex flex-col  mb-6">
        <h1 className=" flex font-bold text-3xl hover:font-bold text-yellow-400 dark:text-yellow-400">
          Joins our Newsletter
        </h1>
        <h2 className="flex dark:text-white">
          get Weekly access to our best deals, tips and tricks
        </h2>
      </div>

      <div className="mb-6 flex">
        <input
          type="email"
          id="email"
          name=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 mr-3 p-2.5 bg-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="janedoe@apexsystems.com"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-36 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join
        </button>
      </div>
      <div className="flex">
        <h5 className="text-gray-300 ">No spam, we hate it more thatn you do!</h5>
      </div>
      
    </form>
  );
}

export default NewsLetter;
