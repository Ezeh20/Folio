import React from 'react'
import styles from './button.module.scss'
const buttonType = {
    default: 'default',
    cta: 'cta',
    more:'more',
    contact:'contact'
}

const Button = ({ children, onClick, btnType }) => {
    return (
        <div className={`${styles.button}  ${styles[buttonType[btnType]]}`} onClick={onClick}>{children}</div>
    )
}

export default Button