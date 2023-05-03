import { InputTextTypeEnum } from "../../../types/generalTypes";
import { objectIsNull } from "../../../utils/utils";

interface InputTextProps {
	type?: string;
	name?: string;
	label?: string;
	id?: string;
	placeHolder?: string;
	required?: boolean;
	value?: string | number;
	numberValue?: number,
	setValue?: React.Dispatch<React.SetStateAction<string>>;
	setNumberValue?: React.Dispatch<React.SetStateAction< number>>;
	classNameContainer?: string;
	customClassInput?: string;
	onSubmitEvent?: () => void;
	maxNumber?: number;
}

function InputText({
	type = "text",
	name = "",
	label,
	id = "",
	placeHolder,
	required = false,
	value,
	numberValue,
	setValue,
	setNumberValue,
	classNameContainer = 'relative z-0 mb-6 group',
	onSubmitEvent,
	maxNumber,
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

	const DEFAULT_CLASS_INPUT = customClassInput
		? customClassInput
		: `
  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
  border-gray-300 appearance-none dark:text-white dark:border-gray-600 
  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`;

	// This function is called when the input changes
	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event?.target?.value;
		if (type === 'number' && setNumberValue) {
			setNumberValue(Number(inputValue))
		} else if (setValue){
			setValue(inputValue);
		}
	};

	const handleKeyboardEvent = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.code === "Enter" && onSubmitEvent) {
			onSubmitEvent();
		}

		// if (event.code)
	};

	// const classContainer = `relative z-0 mb-6 group ${classNameContainer} `;

	return (
		<div className={classNameContainer}>
			<input
				onKeyDown={handleKeyboardEvent}
				type={type}
				name={name}
				max={maxNumber}
				value={type !== 'number' ? value : numberValue}
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
