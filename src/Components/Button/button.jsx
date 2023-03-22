import React from 'react'
import styles from './button.module.scss'

const Button = ({children, onClick}) => {
    return (
        <div className={styles.button} onClick={onClick}>{children}</div>
    )
}

export default Button