import React, { useEffect } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styles from './socials.module.scss'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


const icons = [
    {
        id: 1,
        icn: <FiGithub />,
        link: 'https://github.com/Ezeh20?tab=overview&from=2023-04-01&to=2023-04-02'
    },
    {
        id: 2,
        icn: <FiLinkedin />,
        link: 'https://www.linkedin.com/in/chijioke-ezeh-b00ba9209'
    },
    {
        id: 3,
        icn: <FiTwitter />,
        link: 'https://twitter.com/Cii_jay11000'
    }
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
                    const { id, icn, link } = itm
                    return (
                        <motion.div key={id}
                            initial={{ scale: .5 }}
                            animate={{ scale: 1, color: '#64ffdaff', opacity: .7 }}
                            transition={{ duration: .4, delay: id * 0.8 }}
                            whileHover={{ opacity: 1 }}
                            className={styles.icons}>
                            <Link to={link} target='_blank' className={styles.link}>
                                {icn}
                            </Link>
                        </motion.div>
                    )
                })
            }
            <div className={styles.line} />
        </motion.div >
    )
}

export default Socials