import React from "react";
import "./NewFlavors.scss";
// import { PiHandWavingBold } from "react-icons/pi";
import { LuPointer } from "react-icons/lu";
import image from "../../../Assets/1.png";

export const NewFlavors = () => {
  return (
    <div className="new_flavors">
      <div className="new_flavors-left">
        <h2>Brighten Your Day with Our Vibrant Smoothies</h2>
        <div>
          <div className="hand_hand-icon">
            {/* <p>New Drink, New Day</p> */}
            {/* <div className='icon'><PiHandWavingBold /></div> */}
          </div>
          <p>
            Embark on a flavor journey with our exquisite selection of
            smoothies.
            <br />
            Crafted for freshness and wellness, each sip is a celebration of a
            new day <br />
            filled with vitality. Elevate your mornings with our enticing
            blends, carefully
            <br />
            curated to kickstart your day on a refreshing note.
          </p>
          <p>
            Discover the perfect harmony of taste and health. <br />
            Don't miss out – order your revitalizing smoothie now <br />
            and enjoy a special discount
          </p>
        </div>
        <div className="latest-flavours-btn">
          <div>Order Now</div>
          <div>
            <LuPointer />
          </div>
        </div>
      </div>
      <div className="new_flavors-right">
        <img className="flavors-img" src={image} alt="" />
      </div>
    </div>
  );
};

export default NewFlavors;
