interface InputFileProps {
	label: string;
}
function InputFile({ label }: InputFileProps) {
	const id = "file_input";
	const defaultClassLabel = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
	const defaultClassButton =
		"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400";

	return (
		<div>
			<label className={defaultClassLabel} htmlFor={id}>{label}</label>
			<input
				className={defaultClassButton}
				id={id}
				type='file'
			/>
		</div>
	);
}

export default InputFile;
