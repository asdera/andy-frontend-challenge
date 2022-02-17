import { Grid, Typography } from "antd";

import styles from "./Loading.module.scss";
import loadingIcon from "../../images/defaultAvatar.jpeg";

function Loading() {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.loading}>
      <br></br>
      <img
        src={loadingIcon}
        width={isMobile ? 600 : 800}
        alt="Hackathon Global Events"
      />
      <Typography.Title type="secondary">Loading...</Typography.Title>
    </div>
  );
}

export default Loading;
