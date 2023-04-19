interface InputTextAreaProps {
	name?: string;
	label: string;
	id?: string;
	placeHolder?: string;
	required?: boolean;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

function InputTextArea({
	name = "",
	label,
	id = "",
	placeHolder = '',
	required = false,
	value,
	setValue,
}: InputTextAreaProps) {
	// This function is called when the input changes
	const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const enteredValue = event?.target?.value;
		setValue(enteredValue ? enteredValue : "");
	};

	return (
		<div>
			<label
				htmlFor='synopsis'
				className='block mb-2 text-sm font-medium  dark:text-white'>
				{label}:
			</label>
			<textarea
				id={id}
                name={name}
				rows={4}
				className='block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				value={value}
                placeholder={placeHolder}
                required={required}
				onChange={inputHandler}
			/>
		</div>
	);
}

export default InputTextArea;
