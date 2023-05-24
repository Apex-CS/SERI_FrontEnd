import LabelSubtitle from "../../Labels/LabelSubTitle";

interface InputTextAreaProps {
  name?: string;
  label: string;
  id?: string;
  placeHolder?: string;
  required?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  customClassLabel?: string;
}

function InputTextArea({
  name = "",
  label,
  id = "",
  placeHolder = "",
  required = false,
  value,
  setValue,
  customClassLabel = "text-white",
}: InputTextAreaProps) {
  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredValue = event?.target?.value;
    setValue(enteredValue ? enteredValue : "");
  };

  const defaultClassLabel = `my-2 ${customClassLabel}`;

  return (
    <div>
      <LabelSubtitle customClass={defaultClassLabel} subtitle="Synopsis" />
      <textarea
        id={id}
        name={name}
        style={{ outline: "none" }}
        rows={4}
        className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        placeholder={placeHolder}
        required={required}
        onChange={inputHandler}
      />
    </div>
  );
}

export default InputTextArea;
