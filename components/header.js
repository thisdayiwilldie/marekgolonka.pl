import Nav from '../components/nav'
import NavSocials from '../components/nav-socials'
import Image from 'next/image'
import Link from "next/link"
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
// console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))


const Header = () => {

  const [show, setShow] = useState(true);
  return (
    <>
      <header className="page__header">
        <Link href="/"><a className="logo" title="Logo"><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></a></Link>

      <nav className={`menu ${show ? "": "menu__mobile--show"}`} >
        {<button className="menu__hamburger" onClick={() => { setShow(!show) }}>
          <FontAwesomeIcon icon={show ? faBars : faXmark} style={{fontSize: 22 }}/>
        </button>}
          <>
            <Nav></Nav>
            <NavSocials></NavSocials>
          </>
      </nav>
      </header>
    </>
  )
}

export default Header