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
		"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
	const defaultClassLabel = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

	// This function is triggered when the select changes
	const onChangeInputSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setValue(value);
	};

	return (
		<div className={containerClass}>
			<label
				htmlFor={id}
				className={defaultClassLabel}>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={onChangeInputSelect}
				className={defaultClassSelect}>
				{data.map((item) => (
					<option selected>{item}</option>
				))}
			</select>
		</div>
	);
}

export default InputSelect;
