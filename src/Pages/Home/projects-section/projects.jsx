import React from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import Line from '../../../Components/Line/line'
import styles from './projects.module.scss'

const Projects = () => {
  return (
    <Container>
      <ContentContainer>
        <div className={styles.main}>
          <div className='lineStyle'>
            <p className={`heading head`}><span className='spans'>03.</span>Work</p>
            <Line />
          </div>
          <section className={styles.section} id='work'>
            <div className={styles.prjScreenshot}>
              <img src="/public/img/ceejay.jpg" alt="img" className={styles.prj} />
              <div className={styles.overlay} />
            </div>
            <div className={styles.prjDetails}>
              <p className={styles.prjName}>Project 1</p>
              <p className={styles.projectDetails}>A project about nyash</p>
              <div className={styles.toolsGrp}>
                <div className={styles.tools}>
                  <p>Js</p>
                </div>
                <div className={styles.links}>
                  <p>github</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ContentContainer>
    </Container>
  )
}

export default Projects