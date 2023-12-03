import React from "react";
import { useSelector } from "react-redux";
import ConstructorBasesItem from './ConstructorBasesItem';
import { v4 as getUniqId } from "uuid";

const ConstructorBases = ({ choosedPortion }) => {
  const currentSetup = useSelector((state) => state.currentSetup);
  const bases = useSelector((state) => state.base);

  return (
    <div className="constructor__bases">
      <ul className="constructor__bases-list">
        {bases.map((base) => (
          <ConstructorBasesItem
            {...base}
            currentBases={currentSetup.base}
            key={getUniqId()}
          />
        ))}
      </ul>
    </div>
  );
};

export default ConstructorBases;
