import React, { memo } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className={styles.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default memo(Layout)