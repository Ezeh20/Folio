import React from 'react'
import Button from '../../../../Components/Button/button'
import Socials from '../Socials/socials'
import styles from './content.module.scss'
import content from './data'
const { greeting, name, image, details, role, cta } = content

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentTop}>
        <p className={styles.greeting}>{greeting}</p>
        <div className={styles.group}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
        <p className={styles.details}>{details}</p>
        <div className={styles.btn}>
          <Button btnType='cta'>{cta}</Button>
        </div>
      </div>
      <Socials type='small' />
      <div className={styles.imgCta}>
        <img src="/public/img/cta.svg" alt="cta" className={styles.ctaImg} />
      </div>
    </div>
  )
}

export default Content