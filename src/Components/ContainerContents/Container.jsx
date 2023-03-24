import React from 'react'
import styles from './contentcontainer.module.scss'



const ContentContainer = ({ children, type }) => {
    return (
        <div className={`${styles.content} ${styles[type]}`}>
            {children}
        </div>
    )
}

export default ContentContainer