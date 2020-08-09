import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <h1 className={styles.title}>
          <Link to='/'>{siteTitle}</Link>
        </h1>
      </div>
    </div>
  </div>
)

export default Header
