import React from 'react'
import ContentContainer from '../../../Components/ContainerContents/container'
import Container from '../../../Components/Container/container'
import styles from './contact.module.scss'
import Button from '../../../Components/Button/button'

const Contact = () => {
    return (
        <Container>
            <ContentContainer>
                <section id='contact' className={styles.head}>
                    <div className={styles.content}>
                        <div className={styles.shalaye}>
                            <p className={styles.contact}><span className='spans'>04.</span> Contact</p>
                            <p className={`heading ${styles.reach}`}>Get in touch .</p>
                            <p className={styles.GodAbeg}>I'm currently open to any opportunity that may come my way be it paid or unpaid. Kindly reach out</p>
                        </div>
                        <div className={styles.btn}>
                            <Button btnType={`contact`} onClick={() => window.location.href = 'mailto:chijioke1ezeh@gmail.com'}>Contact me</Button>
                        </div>
                    </div>
                </section>
            </ContentContainer>
        </Container>
    )
}

export default Contact