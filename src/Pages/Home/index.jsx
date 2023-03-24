import React from 'react'
import Layout from '../../Layout'
import About from './about-section/about'
import Contact from './contact-section/contact'
import Cta from './cta-section/cta-section'
import Experience from './experience-section/experience'
import Projects from './projects-section/projects'

const Main = () => {
    return (
        <>
            <Layout>
                <Cta />
                {/** <About />
                <Experience />
                <Projects />
                <Contact /> */}
            </Layout>
        </>
    )
}

export default Main