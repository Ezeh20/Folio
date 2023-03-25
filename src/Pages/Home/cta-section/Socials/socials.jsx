import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styles from './socials.module.scss'
import { delay, motion } from "framer-motion"

const icons = [
    {
        id: 1,
        icn: <FiGithub />,
    },
    {
        id: 2,
        icn: <FiLinkedin />,
    },
    {
        id: 3,
        icn: <FiTwitter />,
    },
    {
        id: 4,
        icn: <FiMail />,
    },
]
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

const social = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    }
}
const Socials = ({ type }) => {
    return (
        <motion.div
            variants={variant}
            initial='hidden'
            animate='show'
            className={type === 'small' ? `${styles.socialsAlt} ${styles.socials}` : `${styles.socials}`}>
            {
                icons.map((itm) => {
                    const { id, icn } = itm
                    return (
                        <motion.div key={id}
                            initial={{ scale: .5 }}
                            animate={{ scale: 1, color: '#64ffdaff', opacity: .7 }}
                            transition={{ duration: .5, delay: id * 0.5 }}
                            whileHover={{ opacity: 1 }}
                            className={styles.icons}>
                            {icn}
                        </motion.div>
                    )
                })
            }
            <div className={styles.line} />
        </motion.div >
    )
}

export default Socials