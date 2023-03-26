import { motion } from 'framer-motion'
import React from 'react'
import Button from '../../../../Components/Button/button'
import Socials from '../Socials/socials'
import styles from './content.module.scss'
import content from './data'
const { greeting, name, details, role, cta } = content
const variant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: .5,
      duration: .5
    }
  }
}

const contentTop = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .7,
      duration: .5
    }
  },
  des: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .9,
      duration: .5
    }
  },
  btn: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.1,
      duration: .5
    }
  },
  img: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: .5
    }
  },
}

const Content = () => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={variant}
      className={styles.content}>
      <div
        className={styles.contentTop}>
        <p className={styles.greeting}>{greeting}</p>
        <motion.div
          variants={contentTop}
          initial='hidden'
          animate='show' className={styles.group}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </motion.div>
        <motion.p
          animate='des'
          initial='hidden'
          variants={contentTop}
          className={styles.details}>{details}</motion.p>
        <motion.div
          initial='hidden'
          animate='btn'
          variants={contentTop}
          className={styles.btn}>
          <Button btnType='cta'>{cta}</Button>
        </motion.div>
      </div>
      <Socials type='small' />
      <motion.div
        initial='hidden'
        animate='img'
        variants={contentTop}
        className={styles.imgCta}>
        <img src="/public/img/cta.svg" alt="cta" className={styles.ctaImg} />
      </motion.div>
    </motion.div>
  )
}

export default Content