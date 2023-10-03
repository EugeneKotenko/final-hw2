import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/HomePage.module.scss";

const teamData = [
  {
    name: "Dionna Furr",
    role: "Explore Bio",
    image: "./static/images/team1.jpeg",
  },
  {
    name: "Ebony Hooks",
    role: "Explore Bio",
    image: "./static/images/team2.jpeg",
  },
  {
    name: "Eric Blair",
    role: "Explore Bio",
    image: "./static/images/team3.jpeg",
  },
  {
    name: "Jordan Clark",
    role: "Explore Bio",
    image: "./static/images/team4.jpeg",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order");
  };

  useEffect(() => {
    const handleScroll = () => {
      let offset = window.scrollY;
      document.querySelector(
        `.${styles.parallaxImage}`
      ).style.transform = `translateY(${offset * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={styles.homeSection}>
        <div className={styles.parallaxContainer}>
          <img
            className={styles.parallaxImage}
            src="./static/images/back_image1.jpg"
            alt="Smoothie"
          />
          <div className={styles.centeredCaption}>
            <h1 className={styles.homeSectionTitle}>New Drink, New Day</h1>
            <div className={styles.homeSectionText}>
              <p>
                With our wide variety of smoothies and healthy drinks, we are
                sure to help you make the right choice to start your day.
              </p>
            </div>
          </div>
          <div className={styles.imageCaption}>
            <h2>Hurry up to get smoothies at a discount!</h2>
            <p>It is very tasty and useful.</p>
            <button onClick={handleOrderNow} className={styles.orderNowButton}>
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          {teamData.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className={styles.teamMemberImage}
              />
              <h3 className={styles.teamMemberName}>{member.name}</h3>
              <p className={styles.teamMemberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
