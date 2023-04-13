import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
interface InputDatePickerProps {
	setDateValue: React.Dispatch<React.SetStateAction<Date>>;
	dateValue: Date;
}

const InputDatePicker = ({ setDateValue, dateValue }: InputDatePickerProps) => {
	/**
	 * 
	 * @param value Type Date
	 */
	const onChangeEvent = (value: any) => {
		setDateValue(value);
	};

	return (
		<div className='flex container '>
			<DatePicker
				className={"bg-gray-800"}
				onChange={(value) => onChangeEvent(value)}
				value={dateValue}
			/>
		</div>
	);
};

export default InputDatePicker;
