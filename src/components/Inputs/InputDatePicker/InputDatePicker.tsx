import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

export type DateType = string | null | Date;
export type DateRangeType = {
    startDate: DateType;
    endDate: DateType;
    
};
export type DateValueType = DateRangeType | null;

interface InputDatePickerProps {
    startDate: DateType,
    endDate: DateType,
}

const InputDatePicker = ({
    startDate = new Date(),
    endDate = new Date(),
}) => {
    const [value, setValue] = React.useState<DateValueType>({
        startDate,
        endDate
    });
    
    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    
    return (
        <div>
            
            <Datepicker
                value={value}
                onChange={handleValueChange}
                asSingle
                
            />
        </div>
    );
};

export default InputDatePicker;
