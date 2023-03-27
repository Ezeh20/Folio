import React from 'react'
import styles from './image.module.scss'

const Images = () => {
    return (
        <div className={styles.person}>
            <div className={styles.personContainer}>
                <div className={styles.filter} />
                <div className={styles.halo} />
            </div>
        </div>
    )
}

export default Images