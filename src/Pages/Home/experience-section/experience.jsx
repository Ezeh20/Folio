import React, { useState } from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import Line from '../../../Components/Line/line'
import content from './data.jsx'
import styles from './experience.module.scss'
import { motion, AnimatePresence } from 'framer-motion'


const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(content[0]);
  console.log(selectedTab)

  return (
    <Container>
      <ContentContainer type='exp'>
        <section id='experience' className={styles.exp}>
          <div className={`lineStyle`}>
            <p className={`heading head`}><span className={`spans`}>02.</span>Exp</p>
            <Line />
          </div>
          <section className={styles.myExp}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                {
                  content.map((itm) => {
                    const { id } = itm
                    return (
                      <li key={id} className={`${itm === selectedTab ? styles.selected : ""} liSkills`}
                        onClick={() => setSelectedTab(itm)}>
                        <div className={styles.con}>
                          {itm.xp}
                        </div>
                        {itm === selectedTab ? (
                          <motion.div className={styles.underline} layoutId="underline" />
                        ) : null}
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
            <main>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedTab ? selectedTab.id : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab &&
                    <div>
                      <p>{selectedTab.shalaye1}</p>
                      <p>{selectedTab.shalaye2}</p>
                      <p>{selectedTab.shalaye3}</p>
                      <p>{selectedTab.shalaye4}</p>
                      <p>{selectedTab.shalaye5}</p>
                    </div>
                  }
                </motion.div>
              </AnimatePresence>
            </main>
          </section>
        </section>
      </ContentContainer>
    </Container>
  )
}

export default Experience