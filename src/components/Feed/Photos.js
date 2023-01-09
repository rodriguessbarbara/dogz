import React from 'react'

import styles from './Photos.module.css';

const Photos = ({photo}) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title}/>
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

export default Photos