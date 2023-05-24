import LabelSubtitle from "../../Labels/LabelSubTitle";

interface InputTextProps {
  type?: string;
  name?: string;
  label?: string;
  id?: string;
  placeHolder?: string;
  required?: boolean;
  value?: string | number;
  numberValue?: number;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setNumberValue?: React.Dispatch<React.SetStateAction<number>>;
  classNameContainer?: string;
  customClassInput?: string;
  onSubmitEvent?: () => void;
  maxNumber?: number;
  customClassLabel?: string;
}

function InputText({
  type = "text",
  name = "",
  label = "",
  id = "",
  placeHolder,
  required = false,
  value,
  numberValue,
  setValue,
  setNumberValue,
  classNameContainer = "flex flex-col items-start justify-start relative z-0 mb-6 group rounded",
  onSubmitEvent,
  maxNumber,
  customClassInput,
  customClassLabel = "",
}: InputTextProps) {
  const classLabel = `text-lg text-white  mb-1 ${customClassLabel} `;

  const DEFAULT_CLASS_INPUT = customClassInput
    ? customClassInput
    : `
  block py-2 px-2 w-full text-sm text-gray-900 bg-white border-0 border-b-2 
   appearance-none rounded
   focus:outline-none focus:ring-0 peer`;

  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target?.value;
    if (type === "number" && setNumberValue) {
      const numberValue = Number(inputValue);
      if (typeof numberValue === "number" && !isNaN(numberValue)) {
        setNumberValue(numberValue);
      }
    } else if (setValue) {
      setValue(inputValue);
    }
  };

  const handleKeyboardEvent = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.code === "Enter" && onSubmitEvent && value !== "") {
      onSubmitEvent();
    }
  };

  return (
    <div className={classNameContainer}>
      <LabelSubtitle customClass={classLabel} subtitle={label} />
      <input
        style={{ outline: "none" }}
        onKeyDown={handleKeyboardEvent}
        name={name}
        max={maxNumber}
        min={1}
        value={type !== "number" ? value : numberValue}
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
