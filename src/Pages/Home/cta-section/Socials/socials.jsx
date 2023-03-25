import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styles from './socials.module.scss'

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

const Socials = ({ type }) => {
    return (
        <div className={type === 'small' ? `${styles.socialsAlt} ${styles.socials}` : `${styles.socials}`}>
            {
                icons.map((itm) => {
                    const { id, icn } = itm
                    return (
                        <div key={id} className={styles.icons}>
                            {icn}
                        </div>
                    )
                })
            }
            <div className={styles.line} />
        </div>
    )
}

export default Socials