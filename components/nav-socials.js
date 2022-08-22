import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
// import {
//     fabLinkedin,
//     faAmbulance,
//     faChrome ,
// } from "@fortawesome/free-solid-svg-icons";

import {faLinkedin,faGoogle,} from "@fortawesome/free-brands-svg-icons";


const NavSocials = () => {
    return (
        <>
            <nav className="socials">
                <ul className="socials__list">
                    <li className="socials__element"><Link href="/"><a className="socials__link"><FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: 20 }}
                    /></a></Link></li>
                     <li className="socials__element"><Link href="/"><a className="socials__link"><FontAwesomeIcon
                        icon={faGoogle}
                        style={{ fontSize: 20 }}
                    /></a></Link></li>
                     <li className="socials__element"><Link href="/"><a className="socials__link"><FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: 20 }}
                    /></a></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavSocials