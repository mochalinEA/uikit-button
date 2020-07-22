import React from 'react';

import styles from './index.module.scss';

export const Button = ({ children, ...props }) => (
  <button className={styles.button} {...props} >{children}</button>
);

export default Button;
