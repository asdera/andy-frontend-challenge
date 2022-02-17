
import { FC } from "react";
import Events from "../Events/Events";
import styles from "./Homepage.module.scss";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => (
  <div className={styles.Homepage}>
    <Events />
  </div>
);

export default Homepage;
