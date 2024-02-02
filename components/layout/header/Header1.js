import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={` rtl main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                {/* <div className="header-top">
                    <div className="auto-container">
                        <div className="top-inner">
                        <div className="top-left">
                            <ul className="info clearfix">
                            <li><i className="icon-2"></i><Link href="tel:912136660027">+91-213-666-0027</Link></li>
                            <li><i className="icon-3"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="social-links clearfix">
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div> */}
                {/* Header Upper */}
                <div className=" rtl header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo">
                            <Link href="/"><img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796761/hydro-plan/w4cl1nh1pny4tuhy3mez.jpg" alt="" /></Link>
                            </figure>
                        </div>
                        <div className=" rtl menu-area clearfix">
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                            </nav>
                        </div>
                        <ul className="menu-right-content">
                            <li className="btn-box">
                            <Link href="/contact">הצעת מחיר מהירה</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`} style={{direction: 'rtl'}}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                            <figure className="logo">
                                <Link href="/">
                                <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796761/hydro-plan/w4cl1nh1pny4tuhy3mez.jpg" alt="/" />
                                </Link>
                            </figure>
                            </div>
                            <div className="rtl menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            </div>
                            <ul className="menu-right-content">
                            <li className="btn-box">
                                <Link href="/contact">הצעת מחיר מהירה</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
