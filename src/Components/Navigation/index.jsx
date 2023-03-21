import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/container'
import menu from './data'
import styles from './navigation.module.scss'

const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logoContainer}>
                        <img src="/public/logo.svg" alt="logo" className={styles.logo} />
                    </div>
                    <ul className={styles.menus}>
                        {
                            menu.map((itm) => {
                                const { id, number, text, to } = itm
                                return (
                                    <li key={id}>
                                        <span>{number}</span>  <Link to={to}>{text}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.buger} onClick={() => setToggle(!toggle)}>
                        <div className={!toggle ? styles.line1 : `${`${styles.line1} ${styles.line1alt}`}`} />
                        <div className={!toggle ? styles.line2 : `${`${styles.line2} ${styles.line2alt}`}`} />
                        <div className={!toggle ? styles.line3 : `${`${styles.line3} ${styles.line3alt}`}`} />
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navigation