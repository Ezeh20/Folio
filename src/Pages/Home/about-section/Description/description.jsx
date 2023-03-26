import React from 'react'
import aboutMe from './data'
import styles from './description.module.scss'

const { para, para2, me, final } = aboutMe

const Description = () => {
    return (
        <div className={styles.intro}>
            <p className={``}>{me}</p>
            <p>{para}</p>
            <p>{para2}</p>
            <p>{final}</p>
        </div>
    )
}

export default Description