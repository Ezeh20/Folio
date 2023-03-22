import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/container'
import menu from './data'
import styles from './navigation.module.scss'
import {  motion } from "framer-motion"
import Button from '../Button/button'


const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    const variants = {
        open: {opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }
    return (
        <motion.header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logoContainer}>
                        <img src="/public/logo.svg" alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.menuShow}>
                        <div className={toggle && styles.backdropalt} />
                            <motion.ul
                                animate={toggle ? 'open' : 'closed'}
                                transition={{ duration: .5 }}
                                variants={variants}
                                className={!toggle ? styles.menus : `${`${styles.menus} ${styles.menusOpen}`}`}>
                                {
                                    menu.map((itm) => {
                                        const { id, number, text, to } = itm
                                        return (
                                            <li className={styles.list} key={id}>
                                                <span>{number}</span>  <Link to={to} className={styles.navi}>{text}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <Button>Resume</Button>
                            </motion.ul>
                    </div>
                    <div className={styles.buger} onClick={() => setToggle(!toggle)}>
                        <div className={!toggle ? styles.line1 : `${`${styles.line1} ${styles.line1alt}`}`} />
                        <div className={!toggle ? styles.line2 : `${`${styles.line2} ${styles.line2alt}`}`} />
                        <div className={!toggle ? styles.line3 : `${`${styles.line3} ${styles.line3alt}`}`} />
                    </div>
                </nav>
            </Container>
        </motion.header>
    )
}

export default Navigation