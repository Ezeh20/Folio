import React from 'react'
import Layout from '../../Layout'
import About from './about-section/about'
import Contact from './contact-section/contact'
import Cta from './cta-section/cta-section'
import Experience from './experience-section/experience'
import Projects from './projects-section/projects'
import styles from './index.module.scss'
import Skills from './Skills/skills'
import { motion } from 'framer-motion'

const Main = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className={styles.index}>
            <Layout>
                <Cta />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact/>
            </Layout>
        </motion.div>
    )
}

export default Main