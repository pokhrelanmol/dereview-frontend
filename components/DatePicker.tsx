import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DateOfBootcampFinished = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  console.log(startDate);
  return (
    <DatePicker
      className="py-2 px-4"
      maxDate={new Date()}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/MM/yyyy"
      showYearDropdown
      scrollableMonthYearDropdown
    />
  );
};
export default DateOfBootcampFinished;
