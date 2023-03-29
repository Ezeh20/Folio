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
            duration: .6
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
                <section
                    className={styles.container}>
                    <p className='heading head'>Technologies and tools</p>
                    <div className={styles.tools}>
                        {
                            tools.map(tool => {
                                const { id, icon, title } = tool
                                return (
                                    <motion.div
                                        variants={id % 2 === 0 ? variantIconsEven : variantIconsOdd}
                                        initial='hidden'
                                        whileInView='show'
                                        transition={{ duration: .2, delay: id * .1 }}
                                        viewport={{once:true}}
                                        key={id} className={styles.tool}>
                                        <div>{icon}</div>
                                        <p className={styles.title}>{title}</p>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </section>
            </ContentContainer>
        </Container>
    )
}

export default Skills