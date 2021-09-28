import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Component = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Component.propTypes = {
  children: PropTypes.node,
};

Component.defaultProps = {
  children: null,
};

export default Component;
