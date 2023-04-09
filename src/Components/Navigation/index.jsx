import React, { useEffect, useState } from 'react'
import Container from '../Container/container'
import menu from './data'
import styles from './navigation.module.scss'
import { motion } from "framer-motion"
import Button from '../Button/button'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../assets/logo.svg'


const Navigation = () => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        let handler = () => {
            setToggle(false)
        }
        document.body.style.overflow = toggle ? 'hidden' : ''
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [toggle])

    const listsVariant = {
        hidden: {
            x: '100%',
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
            x: 100

        },
        visible: {
            opacity: 1,
            x: 0,
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
                            transition={{ delay: .5, duration: .5, type: "spring" }}
                            src={logo} alt="logo" className={styles.logo} />
                    </Link>
                    <div
                        className={styles.menuShow}>
                        <div className={toggle ? styles.backdropalt : undefined} />
                        <motion.ul
                            variants={listsVariant}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                            className={!toggle ? styles.menus : `${`${styles.menus} ${styles.menusOpen}`}`}>
                            {
                                menu.map((itm) => {
                                    const { id, number, text, to } = itm
                                    return (
                                        <motion.li
                                            variants={listVariant}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: id * .35, type : "tween" }}
                                            className={styles.list} key={id}>
                                            <span>{number}</span>  <Link to={to} smooth className={styles.navi}>{text}</Link>
                                        </motion.li>
                                    )
                                })
                            }

                            <a href='https://drive.google.com/uc?export=download&id=1V7xDv1U2LVnDHJWz2FEWjMOZ_7oMlTC2' rel="noopener noreferrer" download='Chijioke-resume.pdf'>
                                <Button>Resume</Button>
                            </a>
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