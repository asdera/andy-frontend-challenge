import React, { FC } from "react";
import styles from "./EventProfile.module.scss";

interface EventProfileProps {}

const EventProfile: FC<EventProfileProps> = () => (
  <div className={styles.EventProfile}>EventProfile Component</div>
);

export default EventProfile;
