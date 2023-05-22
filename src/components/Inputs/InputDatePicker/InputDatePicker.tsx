import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./InputDatePicker.css";
import LabelSubtitle from "../../Labels/LabelSubTitle";

interface InputDatePickerProps {
  setDateValue: React.Dispatch<React.SetStateAction<Date>>;
  dateValue: Date;
  label?: string;
}

const InputDatePicker = ({
  setDateValue,
  dateValue,
  label,
}: InputDatePickerProps) => {
  /**
   *
   * @param value Type Date
   */
  const onChangeEvent = (value: any) => {
    setDateValue(value);
  };

  return (
    <div className="flex flex-col container">
      {label && <LabelSubtitle textSize="text-lg" subtitle={label} />}
      <DatePicker
        className={"bg-gray-800 py-1 mt-1.5 rounded border border-white"}
        onChange={(value) => onChangeEvent(value)}
        value={dateValue}
      />
    </div>
  );
};

export default InputDatePicker;
