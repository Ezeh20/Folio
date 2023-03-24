import React from 'react'
import Container from '../../../Components/Container/container'
import Content from './Content/content'
import styles from './cta-section.module.scss'
import Socials from './Socials/socials'

const Cta = () => {
    return (
        <div className={styles.cta}>
            <Container>
                <div className={styles.ctaContent}>
                    <Socials />
                    <Content />
                    <p>email</p>
                </div>
            </Container>
        </div>
    )
}

export default Cta