import { InputTextTypeEnum } from "../../../types/generalTypes";
import { objectIsNull } from "../../../utils/utils";
import LabelSubtitle from "../../Labels/LabelSubTitle";

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
	customClassLabel?: string,
}

function InputText({
	type = "text",
	name = "",
	label = '',
	id = "",
	placeHolder,
	required = false,
	value,
	numberValue,
	setValue,
	setNumberValue,
	classNameContainer = 'flex flex-col items-start justify-start relative z-0 mb-6 group rounded',
	onSubmitEvent,
	maxNumber,
	customClassInput,
	customClassLabel = '',
}: InputTextProps) {
	const classLabel = `text-lg text-white  mb-1 ${customClassLabel} `;

	const DEFAULT_CLASS_INPUT = customClassInput
		? customClassInput
		: `
  block py-2 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 
  border-gray-300 appearance-none dark:border-gray-600 rounded
  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`;

	// This function is called when the input changes
	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event?.target?.value;
		if (type === 'number' && setNumberValue) {
			console.log("🚀 ~ file: InputText.tsx:58 ~ inputHandler ~ Number(inputValue):", Number(inputValue))
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
			<LabelSubtitle customClass={classLabel} subtitle={label} /> 
			<input
				onKeyDown={handleKeyboardEvent}
				type={type}
				name={name}
				max={maxNumber}
				min={1}
				value={type !== 'number' ? value : numberValue}
				onChange={inputHandler}
				id={id}
				className={DEFAULT_CLASS_INPUT}
				placeholder={placeHolder}
				required={required}
			/>
			
		</div>
	);
}

export default InputText;
