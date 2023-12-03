import React, { useState } from "react";
import { v4 as getUniqId } from "uuid";

const ConstructorBasesItem = ({ name, currentBases }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={getUniqId()}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={getUniqId()}>{name}</label>
      {isChecked && <span>{` (${currentBases[name]} ml)`}</span>}
    </li>
  );
};

export default ConstructorBasesItem;
