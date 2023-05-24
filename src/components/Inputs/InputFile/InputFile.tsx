import { ChangeEvent } from "react";
import "./InputFile.css";
import LabelSubtitle from "../../Labels/LabelSubTitle";
interface InputFileProps {
  label: string;
  accept?: string;
  valueImage: File | string;
  setValueImage: React.Dispatch<React.SetStateAction<File | string>>;
  customClassLabel?: string;
}
function InputFile({
  label,
  accept = "image/png, image/jpeg",
  valueImage,
  setValueImage,
  customClassLabel = "",
}: InputFileProps) {
  const id = "file_input";
  const defaultClassButton = `block h-auto border-0 border-b-2  w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer
    bg-white dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400`;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setValueImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex  w-full flex-col justify-start items-start">
      <LabelSubtitle
        textSize="text-lg"
        customClass={customClassLabel}
        subtitle={label}
      />
      <input
        accept={accept}
        className={defaultClassButton}
        onChange={handleFileChange}
        id={id}
        type="file"
      />
    </div>
  );
}

export default InputFile;
