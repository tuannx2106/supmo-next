import Link from 'next/link'
import React from 'react'
import s from './Header.module.scss'

const Header = () => (
  <div className={s.root}>
    <div className={s.logo}><img src="/img/img_brand-logo.png" alt="brand name" /></div>
    <ul className={s.navList}>
      <li><Link href="/">Blog</Link></li>
      <li><Link href="/">Socials</Link></li>
      <li><Link href="/">Past Socials</Link></li>
      <li><Link href="/">Clubs</Link></li>
      <li><Link href="/">Contact</Link></li>
    </ul>
  </div>
)

export default Header
