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

const titleColoDefault = "text-yellow-500 mb-2";

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
      {label && (
        <LabelSubtitle
          customClass={titleColoDefault}
          textSize="text-lg"
          subtitle={label}
        />
      )}
      <DatePicker
        className={"bg-white py-1 mt-0 rounded border text-black border-white"}
        onChange={(value) => onChangeEvent(value)}
        value={dateValue}
      />
    </div>
  );
};

export default InputDatePicker;
