import React, { useState } from "react";
import { InputText } from "../../components";
import { InputTextStateProp, InputTextTypeEnum } from "../../types/generalTypes";
interface signInMethodProps {
	email: string;
	password: string;
}

function SignIn({}) {
	const [email, setEmail] = React.useState<InputTextStateProp>("");
	const [password, setPassword] = React.useState<InputTextStateProp>("");

	const signIn = (): boolean => {
		let returnValidation = true;
		const params: signInMethodProps = {
			email: email.toString(),
			password: password.toString(),
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
		if (signIn()) {
			// redireccionar a home con la info del usuario seteada
			window.location.href = "/";
		}
	};

	return (
		<div
			className='flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5'
			id='sign-in-container'>
			<form onSubmit={onSubmit}>
				<div className='mb-6'>
					<InputText
						value={email}
            name={'email'}
						setValue={setEmail}
						label={"Username or email address"}
						type={InputTextTypeEnum.email}
						required={true}
						placeHolder={"ejemplo@apexsystems.com"}
					/>
				</div>
				<div className='mb-6'>
        <InputText
						value={password}
						setValue={setPassword}
            name={'password'}
						label={"Password"}
						type={InputTextTypeEnum.password}
						required={true}
					/>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						<a href='#'>Forgot Password</a>
					</label>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Sign in
				</button>
			</form>
			<div id='create-acount-container'>
				<p>
					New to Apex’s Movies Room? <a href='/signup'>Create an account</a>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
