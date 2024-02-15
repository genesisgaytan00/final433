import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="links">
                <Link href="/">Home </Link> 
                <Link href="/resume">Resume </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
