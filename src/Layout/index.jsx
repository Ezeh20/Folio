import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            {children}
            {/**<Footer /> */}
        </div>
    )
}

export default Layout