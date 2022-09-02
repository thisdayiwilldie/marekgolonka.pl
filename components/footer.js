import Nav from '../components/nav'
import NavSocials from '../components/nav-socials'
import Image from 'next/image'
import Link from "next/link"

const Header = () => {

  const copyRightYear = new Date().getFullYear();

    return (
        <>
          <footer className="page__footer content">
           <Link href="/"><a title="Logo"><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></a></Link>
            <p>Copyright Marek Golonka | {copyRightYear}</p>
            <Nav></Nav>
            <NavSocials></NavSocials>
          </footer>
        </>
    )
}

export default Header