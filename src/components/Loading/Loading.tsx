import React from "react";
import { Grid } from "antd";

import styles from "./Loading.module.scss";

function Loading() {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.loading}>
      <img
        src="assets/logo.svg"
        width={isMobile ? 600 : 800}
        alt="Hack Global Events"
      />
      Loading...
    </div>
  );
}

export default Loading;
