
interface SignButtonProps {
    title: string;
    onClickFunction: () => void,
    flagAction: boolean,
  }

function SignButton({onClickFunction, flagAction, title}: SignButtonProps) {
    return ( 
        <>
            <div>
                <button onClick={onClickFunction} type="button" className="focus:outline-none text-white bg-blue-900 hover:bbg-blue-700 focus:ring-4 focus:bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900">
                    {title}
                </button>
            </div>
            {flagAction && (
                <div>
                    <p>aqui va un icono</p>
                </div>
            )}
            </>
     );
}

export default SignButton;