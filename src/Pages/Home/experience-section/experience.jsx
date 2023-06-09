import React, { useState } from 'react'
import Container from '../../../Components/Container/container'
import ContentContainer from '../../../Components/ContainerContents/container'
import Line from '../../../Components/Line/line'
import content from './data.jsx'
import styles from './experience.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { GiParrotHead } from "react-icons/gi";



const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(content[0]);

  const { xp, title, period, shalaye1, shalaye2, shalaye3, shalaye4, shalaye5 } = selectedTab

  return (
    <Container>
      <ContentContainer type='exp'>
        <motion.section
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, }}
          viewport={{ once: true }}
          id='experience' className={styles.exp}>
          <div className={`lineStyle`}>
            <p className={`heading head`}><span className={`spans`}>02.</span>Experience</p>
            <Line />
          </div>
          <section className={styles.myExp}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                {
                  content.map((itm) => {
                    const { id } = itm
                    return (
                      <li key={id} className={`${itm === selectedTab ? styles.selected : styles.li} `}
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
            <main className={styles.main}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedTab ? selectedTab.id : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.animate}
                >
                  {selectedTab &&
                    <div className={styles.content}>
                      <div className={styles.xpHeader}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.period}>{period}</p>
                      </div>
                      {shalaye1 && shalaye1.length > 1 && <div className={styles.place}><GiParrotHead className={styles.icn} /> <p>{shalaye1}</p></div>}
                      {shalaye2 && shalaye2.length > 1 && <div className={styles.place}><GiParrotHead className={styles.icn} /> <p>{shalaye2}</p></div>}
                      {shalaye3 && shalaye3.length > 1 && <div className={styles.place}><GiParrotHead className={styles.icn} /> <p>{shalaye3}</p></div>}
                      {shalaye4 && shalaye4.length > 1 && <div className={styles.place}><GiParrotHead className={styles.icn} /> <p>{shalaye4}</p></div>}
                      {shalaye5 && shalaye5.length > 1 && <div className={styles.place}><GiParrotHead className={styles.icn} /> <p>{shalaye5}</p></div>}
                    </div>
                  }
                </motion.div>
              </AnimatePresence>
            </main>
          </section>
        </motion.section>
      </ContentContainer>
    </Container>
  )
}

export default Experience