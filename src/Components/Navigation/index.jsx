import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/container'
import menu from './data'
import styles from './navigation.module.scss'
import { AnimatePresence, motion } from "framer-motion"
import Button from '../Button/button'

const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    const listsVariant = {
        hidden: {
            x: "100%",
            opacity: 0,

        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
               
                when: "beforeChildren"
            }
        }
    }
    const listVariant = {
        hidden: {
            opacity: 0,
            y:-100

        },
        visible: {
            opacity: 1,
            y:0,
            transition: {
                delay:1,
                staggerChildren: 5,
            }
        }
    }

    return (
        <motion.header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <Link to='/' className={styles.logoContainer}>
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: .5, type: "spring" }}
                            src="/public/logo.svg" alt="logo" className={styles.logo} />
                    </Link>
                    <div
                        className={styles.menuShow}>
                        <div className={toggle && styles.backdropalt} />
                        <motion.ul
                            variants={listsVariant}
                            animate="visible"
                            initial="hidden"
                            className={!toggle ? styles.menus : `${`${styles.menus} ${styles.menusOpen}`}`}>
                            {
                                menu.map((itm) => {
                                    const { id, number, text, to } = itm
                                    return (
                                        <motion.li
                                            variants={listVariant}
                                            className={styles.list} key={id}>
                                            <span>{number}</span>  <Link to={to} className={styles.navi}>{text}</Link>
                                        </motion.li>
                                    )
                                })
                            }
                            <Button >Resume</Button>
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