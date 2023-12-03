import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IngredientItem from '../Common/Constructor/ConstructorBasesItem';
import ConstructorBases from '../Common/Constructor/ConstructorBases';
//import { ConstructorPortions } from "./ConstructorPortions";
//import { setModal } from "../../store/reducers/modalReducer";
// import "../../Assets/Styles/SmoothieConstructor.scss";

export const SmoothieConstructor = () => {
  const dispatch = useDispatch();

  const currentSetup = useSelector((state) => state.currentSetup);
  const ingredients = useSelector((state) => state.ingredients);
  const portions = useSelector((state) => state.portions);

  const [portionBaseCoef, setPortionBaseCoef] = useState(150);
  const [choosedPortion, setChoosedPortion] = useState(portions[0]);

  useEffect(() => {
    const portionSize = choosedPortion.size;
    const baseCoef = currentSetup.baseRatio;
    const exactBaseValue = (baseCoef / 100) * portionSize;

    setPortionBaseCoef(exactBaseValue);
  }, [choosedPortion, currentSetup.baseRatio]);

  const calcIngredientAmount = () => {
    return Math.floor((choosedPortion.size - portionBaseCoef) / 10) * 10;
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setModal("none"));
    }
  };

  return (
    <div className="constructor" onClick={closeModal}>
      <div className="constructor__window">
        <div className="constructor__image">
          <img src="" alt={currentSetup.id} />
        </div>
        <div className="constructor__content-box">
          <div className="constructor__settings">
            <div>
              <h3>{currentSetup.name || "Custom"}</h3>
              <span>{`${choosedPortion.name} portion (${choosedPortion.size}ml)`}</span>
              <ConstructorBases choosedPortion={choosedPortion} />
              <div className="constructor__portions">
                {portions.map((portionsItem, index) => (
                  <ConstructorPortions
                    key={index}
                    {...portionsItem}
                    index={index}
                    setChoosedPortion={setChoosedPortion}
                    choosedPortion={choosedPortion}
                    portions={portions}
                  />
                ))}
              </div>
            </div>
            <ul className="constructor__list">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  {...ingredient}
                  smoothieIngredients={currentSetup.ingredients}
                  ingredientsMaxAmount={calcIngredientAmount()}
                  key={ingredient.id}
                />
              ))}
            </ul>
          </div>
          <div className="constructor__total-price">
            <button>Price</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothieConstructor