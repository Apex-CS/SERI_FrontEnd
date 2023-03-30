import React, { useState } from "react";
import { InputText } from "../../components";
import { InputTextStateProp, InputTextTypeEnum } from "../../types/generalTypes";
import SignUpForm from "./SignUpForm";

interface signUpMethosParams {
	email: string;
	password: string;
	userName: string;
}

function SignUp() {
	const [email, setEmail] = React.useState<InputTextStateProp>("");
	const [password, setPassword] = React.useState<InputTextStateProp>("");
	const [userName, setUserName] = React.useState<InputTextStateProp>("");
	const [errorMessages, setErrorMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const signUp = (): boolean => {
		let returnValidation = true;
		const params: signUpMethosParams = {
			email: email.toString(),
			password: password.toString(),
			userName: userName.toString(),
		};
		console.log("🚀 ~ file: SignIn.tsx:20 ~ onSubmit ~ params:", params);
		// aqui se hace el fetch para el webservice de login y esperaremos la respuesta con la informacion
		// NOTA: queda por definir que informacion sera la que se retorna y que funcion tendra?
		// const
		return returnValidation;
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Prevent page reload
		event.preventDefault();
		console.log("onSubmit");
		if (signUp()) {
			// redireccionar a home con la info del usuario seteada
			// window.location.href = "/";
		}
	};
	return (
		<div className='flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5'>
			<form onSubmit={onSubmit}>
				<div className='relative z-0 w-full mb-6 group'>
					<InputText
						setValue={setEmail}
						value={email}
						required={true}
						name={"email"}
						label={"Email"}
						type={InputTextTypeEnum.email}
					/>
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<InputText
						setValue={setPassword}
						value={password}
						required={true}
						name={"password"}
						label={"Password"}
						type={InputTextTypeEnum.password}
					/>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 w-full mb-6 group'>
          <InputText 
            setValue={setUserName}
            value={userName}
            required={true}
            name={'userName'}
            label={'User Name'}
            type={InputTextTypeEnum.text}
          />
					</div>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignUp;
