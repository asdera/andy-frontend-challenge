import React, { FC } from "react";
import styles from "./Filters.module.scss";

interface FiltersProps {}

const Filters: FC<FiltersProps> = () => (
  <div className={styles.Filters}>Filters Component</div>
);

export default Filters;
