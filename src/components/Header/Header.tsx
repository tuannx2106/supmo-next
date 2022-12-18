import Link from 'next/link'
import React from 'react'
import s from './Header.module.scss'

const Header = React.memo(() => (
  <div className={s.root}>
    <div className={s.logo}><img src="/img/img_brand-logo.png" alt="brand name" /></div>
    <ul className={s.navList}>
      <li><Link href="/">Blog</Link></li>
      <li><Link href="/">Socials</Link></li>
      <li><Link href="/">Past Socials</Link></li>
      <li><Link href="/">Clubs<img className={s.iconArrowDown} src="/img/ico_chevron-down.png" alt="arrow down" /></Link></li>
      <li><Link href="/">Contact</Link></li>
    </ul>
  </div>
))

export default Header
