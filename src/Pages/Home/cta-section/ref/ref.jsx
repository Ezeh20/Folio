import { motion } from 'framer-motion'
import React from 'react'
import styles from './ref.module.scss'

const variant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5
    }
  }
}

const Ref = () => {
  return (
    <motion.div
      variants={variant}
      initial='hidden'
      animate='show'
      className={styles.ref}>
      <p className={styles.email}>chijioke1ezeh@gmail.com</p>
      <div className={styles.line} />
    </motion.div>
  )
}

export default Ref