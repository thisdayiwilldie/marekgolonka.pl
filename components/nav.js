import Link from "next/link"

const Nav = () => {
    return (
        <>
            <ul className="menu__list">
                <li className="menu__element"><Link href="/"><a className="menu__link">Home</a></Link></li>
                <li className="menu__element"><Link href="/blog"><a className="menu__link">Blog</a></Link></li>
                <li className="menu__element"><Link href="/"><a className="menu__link">Home</a></Link></li>
                <li className="menu__element"><Link href="/"><a className="menu__link">Home</a></Link></li>
            </ul>
        </>
    )
}

export default Nav