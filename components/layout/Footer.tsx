import React from "react"

import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    // Render
    return (
        <footer className={styles.footer}>
            <div className={styles.help}>
                <a href="https://nextjs.org/docs">Documentation</a>

                <a href="https://nextjs.org/learn">Learn</a>

                <a href="https://github.com/vercel/next.js/tree/master/examples">Examples</a>

                <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Deploy</a>
            </div>
        </footer>
    )
}

export default Footer
