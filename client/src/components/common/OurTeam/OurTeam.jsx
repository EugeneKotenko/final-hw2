import React from "react";
import styles from "./OurTeam.module.scss";
import teamData from "../../../Assets/userData";

export const OurTeam = () => {
  return (
    <>
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
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
        </div>
      </section>
    </>
  );
};
