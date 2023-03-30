import { InputTextTypeEnum } from "../../../types/generalTypes";
import { objectIsNull } from "../../../utils/utils";

interface InputTextProps {
	type?: string;
	name?: string;
	label?: string;
	id?: string;
	placeHolder?: string;
	required?: boolean;
	value: string | number;
	setValue: React.Dispatch<React.SetStateAction<string | number>>;
	classNameContainer?: string;
  customClassInput?: string;
}

function InputText({
	type = "text",
	name = "",
	label,
	id = "",
	placeHolder,
	required = false,
	value,
	setValue,
	classNameContainer,
  customClassInput,
}: InputTextProps) {
	const classLabel = `
    absolute text-sm text-gray-500 dark:text-gray-400 
    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0
    peer-focus:font-medium 
    peer-focus:scale-75
    peer-focus:-translate-y-6
    peer-focus:text-blue-600
    peer-focus:dark:text-blue-500 
    peer-focus:left-0
    `;
	const customClass = `--tw-translate-y: -1.5rem`;

  const DEFAULT_CLASS_INPUT = customClassInput ? customClassInput: `
  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
  border-gray-300 appearance-none dark:text-white dark:border-gray-600 
  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`

	// This function is called when the input changes
	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const enteredValue = event?.target?.value;
		setValue(enteredValue ? enteredValue : "");
	};

	const classContainer = `relative z-0 mb-6 group ${classNameContainer} `;

	return (
		<div className={classContainer}>
			<input
				type={type}
				name={name}
				value={value}
				onChange={inputHandler}
				id={id}
				className={DEFAULT_CLASS_INPUT}
				placeholder={placeHolder}
				required={required}
			/>
			{label && (
				<label
					htmlFor={id}
					style={
						placeHolder !== undefined || value !== undefined
							? { transform: `translateY(-20px)` }
							: { transform: `translateY(0px)` }
					}
					className={classLabel}>
					{label}:
				</label>
			)}
		</div>
	);
}

export default InputText;
