import React from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/Container'
import Content from './Content/content'
import styles from './cta-section.module.scss'
import Ref from './ref/ref'
import Socials from './Socials/socials'
import { motion } from "framer-motion"

const variant = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}

const Cta = () => {
    return (
        <motion.div
            initial="hidden"
            animate="show"

            variants={variant}
            className={styles.cta}>
            <Container>
                <div className={styles.ctaContent}>
                    <Socials />
                    <ContentContainer>
                        <Content />
                    </ContentContainer>
                    <Ref className={styles.ref} />
                </div>
            </Container>
        </motion.div>
    )
}

export default Cta