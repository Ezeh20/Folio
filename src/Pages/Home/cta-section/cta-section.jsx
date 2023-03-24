import React from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/Container'
import Content from './Content/content'
import styles from './cta-section.module.scss'
import Ref from './ref/ref'
import Socials from './Socials/socials'


const Cta = () => {
    return (
        <div className={styles.cta}>
            <Container>
                <div className={styles.ctaContent}>
                    <Socials />
                    <ContentContainer>
                        <Content />
                    </ContentContainer>
                    <Ref className={styles.ref} />
                </div>
            </Container>
        </div>
    )
}

export default Cta