interface InputSelectProps {
    label: string,
    id: string,
    data: string[],
}
function InputSelect({label, data, id = 'inputSelect'} : InputSelectProps) {
    console.log("🚀 ~ file: InputSelect.tsx:7 ~ InputSelect ~ data:", data)
    const defaultClassSelect = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const defaultClassLabel = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';

	return (
		<div>
			<label
				htmlFor={id}
				className={defaultClassLabel}>
				{label}
			</label>
			<select
				id={id}
				className={defaultClassSelect}>
				<option selected>Choose a country</option>
				<option value='US'>United States</option>
				<option value='CA'>Canada</option>
				<option value='FR'>France</option>
				<option value='DE'>Germany</option>
			</select>
		</div>
	);
}

export default InputSelect;
