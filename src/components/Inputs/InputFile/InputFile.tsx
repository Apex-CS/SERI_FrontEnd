import { ChangeEvent, useState } from "react";

interface InputFileProps {
	label: string;
	accept?: string;
	value: any;
	setValue: React.Dispatch<React.SetStateAction<any>>;
}
function InputFile({ label, accept = "image/png, image/jpeg", value, setValue }: InputFileProps) {
	const id = "file_input";
	const defaultClassLabel = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
	const defaultClassButton =
		"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400";

	const [currentFile, setCurrentFile] = useState<File>();
	const [progress, setProgress] = useState<number>(0);
	const [message, setMessage] = useState<string>("");

	const [state, setState] = useState({
		photo: "",
	});

	const { photo } = state;

	const handlerInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		const selectedFiles = files as FileList;
		setCurrentFile(selectedFiles?.[0]);
		setProgress(0);
	};

	const [file, setFile] = useState<File>();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		
		console.log("🚀 ~ file: InputFile.tsx:36 ~ handleFileChange ~ e.target.files:", e.target.files)
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleUploadClick = () => {
		if (!file) {
			return;
		}

		// 👇 Uploading the file using the fetch API to the server
		fetch("https://httpbin.org/post", {
			method: "POST",
			body: file,
			// 👇 Set headers manually for single file upload
			headers: {
				"content-type": file.type,
				"content-length": `${file.size}`, // 👈 Headers need to be a string
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("🚀 ~ file: InputFile.tsx:38 ~ onChange ~ event:", event);
		event.persist();
		setState((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};

	return (
		<div>
			<label
				className={defaultClassLabel}
				htmlFor={id}>
				{label}
			</label>
			<input
				accept={accept}
				className={defaultClassButton}
				onChange={handleFileChange}
				id={id}
				type='file'
			/>

			<div>{file && `${file.name} - ${file.type}`}</div>
		</div>
	);
}

export default InputFile;
