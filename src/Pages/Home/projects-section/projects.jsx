import React, { useState } from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import Line from '../../../Components/Line/line'
import styles from './projects.module.scss'
import works from './data'
import Button from '../../../Components/Button/button'

const Projects = () => {
  const [more, setMore] = useState(4)
  return (
    <Container>
      <ContentContainer>
        <div className={styles.main}>
          <div className='lineStyle'>
            <p className={`heading head`}><span className='spans'>03.</span>Work</p>
            <Line />
          </div>
          {
            works.filter((_, idx) => idx < more).map(itm => {
              const { id, img, projectName, projectDescription, tools, github, link } = itm
              return (
                <section className={styles.section} id='work'>
                  <div className={id % 2 !== 0 ? styles.prjScreenshot : `${`${styles.prjScreenshotAlt} ${styles.prjScreenshot}`}`}>
                    <img src={img} alt="img" className={styles.prj} />
                    <div className={styles.overlay} />
                  </div>
                  <div className={id % 2 !== 0 ? styles.prjDetails : `${`${styles.prjDetailsAlt} ${styles.prjDetails}`}`}>
                    <p className={styles.prjName}>{projectName}</p>
                    <p className={styles.projectDetails}>{projectDescription}</p>
                    <div className={styles.toolsGrp}>
                      <div className={styles.tools}>
                        {tools.map(tool => {
                          return (
                            <div>{tool}</div>
                          )
                        })}
                      </div>
                      <div className={styles.links}>
                        <p className={styles.link}>{github}</p>
                        <p className={styles.link}>{link}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
          {
            more >= 8 ? '' : <div className={styles.showMore}>
              <Button btnType='more' onClick={() => setMore(8)}>Show more</Button>
            </div>
          }
        </div>
      </ContentContainer>
    </Container>
  )
}

export default Projects