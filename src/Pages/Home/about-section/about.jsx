import React from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import styles from './about.module.scss'
import { motion } from 'framer-motion'
import Description from './Description/description'
import Images from './image/image'
import Line from '../../../Components/Line/line'

const About = () => {
  return (
    <Container>
      <ContentContainer type='about'>
        <motion.section
          id='about'
          initial={{ opacity: 0, y:200 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className={styles.about}>
          <div className={`${styles.header} head`}>
            <p className='heading'><span className='spans'>01.</span>About me</p>
            <Line />
          </div>
          <div className={styles.group}>
            <Description />
            <Images />
          </div>
        </motion.section>
      </ContentContainer>
    </Container>
  )
}

export default About