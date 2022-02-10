import React from "react";

import styles from "./PageLayout.module.scss";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.widthLimit}>{children}</div>
    </div>
  );
}

export default PageLayout;
