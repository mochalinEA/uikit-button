import React from 'react';

import styles from './index.module.scss';

export const Button = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default Button;
