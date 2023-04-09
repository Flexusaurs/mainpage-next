import Link from "next/link";

const Header = () => {

    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href='/'>Itay Haim</Link>
                </div>
                <div className="links">
                    <Link href='/about'>About</Link>
                    <Link href='/code/repos'>Code</Link>
                    <Link href='/posts'></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;