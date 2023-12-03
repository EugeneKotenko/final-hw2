import React from "react";
import Contact from "../Common/contact/Contact";
import { OurTeam } from "../Common/OurTeam/OurTeam";
import styles from "../../Assets/Styles/About.module.scss";
import mapimage from "../../Assets/mapimage.png";

export const About = () => {
  return (
    <section>
      <div className={styles.PageTitleMain}>
        <div className={styles.PageTitleInner}>
          <h2 className={styles.PageTitle}>
            Crafting Brighter Days with Vibrant
            <span className={styles.textSpan}> Smoothies</span>
          </h2>
        </div>
      </div>
      <div className={styles.aboutUsMainContainer}>
        <div className={`${styles.aboutUsInner} ${styles.wrapper}`}>
          <img src={mapimage} alt="Map Image" />
          <div className={styles.aboutUsText}>
            <h2 className={styles.aboutUsTitle}>About Us: </h2>
            <p>
              Welcome to our vibrant world, where we're dedicated to brightening
              your days through the art of smoothie crafting. At [Your Company
              Name], we transcend the ordinary, infusing each blend with passion
              and purpose. Our journey began with the powerful belief that
              wellness should be a delightful experience. We take pride in
              curating an exquisite selection of smoothies, designed to
              invigorate your senses and elevate well-being. What sets us apart
              is our commitment to freshness and flavor. Every sip is a
              celebration, a symphony of taste marking the start of a new day
              filled with vitality.
            </p>
          </div>
        </div>
        <OurTeam />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
};

export default About;
