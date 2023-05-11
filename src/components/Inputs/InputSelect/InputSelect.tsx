import LabelSubtitle from "../../Labels/LabelSubTitle";

interface InputSelectProps {
	label: string;
	id: string;
	data: string[];
	containerClass?: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}
function InputSelect({
	label,
	data,
	id = "inputSelect",
	containerClass,
	value,
	setValue,
}: InputSelectProps) {
	const defaultClassSelect =
		`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 
		dark:placeholder-gray-400 dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500`;
	const defaultClassLabel = "block mb-2 text-lg text-black dark:text-white font-bold";

	// This function is triggered when the select changes
	const onChangeInputSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setValue(value);
	};

	return (
		<div className={containerClass}>
			<LabelSubtitle customClass={defaultClassLabel} subtitle={label} />
			<select
				id={id}
				value={value}
				onChange={onChangeInputSelect}
				style={{height: '2.4rem'}}
				className={defaultClassSelect}>
				{data.map((item) => (
					<option selected>{item}</option>
				))}
			</select>
		</div>
	);
}

export default InputSelect;
