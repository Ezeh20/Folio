import React from 'react'
import Container from '../Container/container'
import ContentContainer from '../ContainerContents/container'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <Container>
      <ContentContainer>
        <div className={styles.Footer}>
          <div className={styles.footerContent}>
            <p>Built by CJ</p>
            <p>Design inspired by brittany chiang</p>
          </div>
        </div>
      </ContentContainer>
    </Container>
  )
}

export default Footer