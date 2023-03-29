import React from 'react'
import styles from './skills.module.scss'
import tools from './data'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import { motion } from 'framer-motion'

const variant = {
    hidden: {
        x: 1000,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .3,
            duration: .3,
        }
    }
}

const variantIconsEven = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1
    }
}

const variantIconsOdd = {
    hidden: {
        y: 100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1
    }
}
const Skills = () => {
    return (
        <Container>
            <ContentContainer type={`about`}>
                <motion.section
                    className={styles.container}>
                    <p className='heading head'>Technologies and tools</p>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: .3, duration: .3, delayChildren: 2 }}
                        viewport={{ once: true }}
                        className={styles.tools}>
                        {
                            tools.map(tool => {
                                const { id, icon, title } = tool
                                return (
                                    <motion.div
                                        variants={id % 2 === 0 ? variantIconsEven : variantIconsOdd}
                                        initial='hidden'
                                        whileInView='show'
                                        transition={{ duration: .2, delay: id * .1, when: "afterParent" }}
                                        viewport={{ once: true }}
                                        key={id} className={styles.tool}>
                                        <div>{icon}</div>
                                        <p className={styles.title}>{title}</p>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.section>
            </ContentContainer>
        </Container>
    )
}

export default Skills