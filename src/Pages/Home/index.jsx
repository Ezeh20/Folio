import React from 'react'
import Layout from '../../Layout'
import About from './about-section/about'
import Contact from './contact-section/contact'
import Cta from './cta-section/cta-section'
import Experience from './experience-section/experience'
import Projects from './projects-section/projects'
import styles from './index.module.scss'

const Main = () => {
    return (
        <div className={styles.index}>
            <Layout>
                <Cta />
                <About />
            </Layout>
        </div>
    )
}

export default Main