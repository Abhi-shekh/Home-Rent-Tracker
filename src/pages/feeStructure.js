import React, { useState } from 'react';

const FeeStructure = () => {
  const [activeMonth, setActiveMonth] = useState(null);

  const handleMonthClick = (month) => {
    setActiveMonth(activeMonth === month ? null : month);
  };

  return (
    <div className=" flex justify-between w-80 mx-auto my-20 flex-col">
      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
        <div
          key={month}
          className={`cursor-pointer p-4 border border-gray-300 rounded ${activeMonth === month ? 'bg-gray-200 font-bold' : ''}`}
          onClick={() => handleMonthClick(month)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default FeeStructure;
