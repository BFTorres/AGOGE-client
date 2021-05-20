import React from 'react'
import styles from './animated-image.module.scss'

const Image = () => (
  <img
    className={styles.image}
    src="../images/london.png"
    alt="randomised!"
  />
)

export default Image