"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="rtl mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
              <li>
                      <Link href="/">
                        דף הבית
                      </Link>
                    </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">שירותים</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/runoff-management-at-the-permit-stage">
                        מסמכי ניהול נגר ליוזמות נדל׳׳ן בשלב ההיתור
                      </Link>
                    </li>
                    <li>
                      <Link href="/green-construction">
                        חוות דעת הידרולוגית לתקן בנייה ירוקה
                      </Link>
                    </li>
                    <li>
                      <Link href="/pikuah">דו׳׳ח פיקוח עליון</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-left" />
                  </div>
                </li>
                <li>
                  <Link href="/contact">צור קשר</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/#">
                  <span className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
