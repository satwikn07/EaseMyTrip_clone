import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../style/nav.module.css";
const LinkList = [
    {
        to: "/flights",
        title: "FLIGHTS",
    },
    {
        to: "/hotels",
        title: "HOTELS",
    },
    {
        to: "/trains",
        title: "TRAINS",
    },
    {
        to: "/bus",
        title: "BUS",
    },
    {
        to: "/holidays",
        title: "HOLIDAYS",
    },
    {
        to: "/cars",
        title: "CABS",
    },
    {
        to: "/activities",
        title: "ACTIVITIES",
    },
    {
        to: "/giftcard",
        title: "GIFT CARD",
    },
    {
        to: "/carters",
        title: "CARTERS",
    },
];

const Navbar = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showHelpline, setShowHelpLine] = useState(false)
    const [showAccount, setShowAccount] = useState(false)

    const handleMoreHover = () => {
        setShowOptions(!showOptions)
        setShowAccount(false)
        setShowHelpLine(false)
    }

    const handleHelpLineHover = () => {
        setShowHelpLine(!showHelpline)
        setShowAccount(false)
        setShowOptions(false)
    }

    const handleAccountHover = () => {
        setShowAccount(!showAccount)
        setShowHelpLine(false)
        setShowOptions(false)
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.app_logo}>
                <img
                    className={styles.logo_image}
                    src="https://www.easemytrip.com/new-header/emtlogo_new.svg"
                    alt=""
                />
            </div>
            <div className={styles.navLinks_options}>
                {LinkList.map((item, i) => {
                    return (
                        <>
                            <NavLink
                                activeStyle={{
                                    color: "orangered",
                                    borderBottom: "4px solid orangered",
                                }}
                                className={styles.navLinks}
                                to={item.to}
                            >
                                {item.title}
                            </NavLink>
                            <div className={styles.vertical_line}></div>
                        </>
                    );
                })}
                <span
                    onMouseOver={handleMoreHover}
                    className={styles.navLinks}
                >
                    MORE &nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i>
                    {showOptions ? (
                        <div className={styles.selectOption}>
                            <div>
                                <Link className={styles.moreOptions}>OFFERS</Link>
                            </div>
                            <hr />
                            <div>
                                <Link className={styles.moreOptions}>CORPORATE TRAVELS</Link>
                            </div>
                            <hr />
                            <div className={styles.link3}>
                                <Link className={styles.moreOptions}>AGENT LOGIN</Link>
                            </div>
                        </div>
                    ) : null}
                </span>
            </div>
            <div className={styles.right_options}>
                <div>
                    <div onMouseOver={handleHelpLineHover}> <i style={{ color: "grey", padding: "0px 0px" }} className="fas fa-headset" aria-hidden="true"></i> <span className={styles.right_span}>24x7 Helpline</span>&nbsp;<i style={{ float: "right" }} class="fa fa-angle-down" aria-hidden="true"></i></div>
                    {showHelpline ? <div className={styles.helpLineOptions}>
                        <div><Link className={styles.helpLineContact}>Tel : 011 - 43131313, 43030303</Link></div>
                        <hr />
                        <div><Link className={styles.helpLineContact}>care@easymytrip.com</Link></div>
                    </div> : null}
                </div>
                <div>
                    <div onMouseOver={handleAccountHover}><i style={{ color: "grey", padding: "0px 5px" }} class="fas fa-user"></i><span className={styles.right_span}>My Account</span>&nbsp;<i style={{ float: "right" }} class="fa fa-angle-down" aria-hidden="true"></i></div>
                    {showAccount ? <div className={styles.accountSection}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb_ZfgrLalDPDvBKFqOHhb6khHvIF4ero7u_YuwSxc0lXZpj557ELj_gimy467wvSPXMusqp=CAU" alt="" />
                            <button className={styles.loginBtn}>LOGIN OR SIGNUP</button>
                        </div>
                        <hr className={styles.hr} />
                        <Link className={styles.bokkingLinks}><i class="fas fa-chevron-right"></i><span className={styles.icon_space}>My Booking</span></Link>
                        <br />
                        <Link className={styles.bokkingLinks}><i class="fas fa-chevron-right"></i><span className={styles.icon_space}>My Booking</span></Link>
                    </div> : null}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
