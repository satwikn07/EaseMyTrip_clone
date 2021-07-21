import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../style/nav.module.css"

const LinkList = [
    {
        to: "/flights",
        title: "FLIGHTS"
    },
    {
        to: "/hotels",
        title: "HOTELS"
    },
    {
        to: "/trains",
        title: "TRAINS"
    },
    {
        to: "/bus",
        title: "BUS"
    },
    {
        to: "/holidays",
        title: "HOLIDAYS"
    },
    {
        to: "/cars",
        title: "CABS"
    },
    {
        to: "/activities",
        title: "ACTIVITIES"
    },
    {
        to: "/giftcard",
        title: "GIFT CARD"
    },
    {
        to: "/carters",
        title: "CARTERS"
    }
]

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.app_logo}>
                <img className={styles.logo_image} src="https://www.easemytrip.com/new-header/emtlogo_new.svg" alt="" />
            </div>
            <div className={styles.navLinks_options}>
                {LinkList.map((item, i) => {
                    return <>
                        <NavLink activeStyle={{ color: 'orangered', borderBottom:"4px solid orangered" }}  className={styles.navLinks} to={item.to}>{item.title}</NavLink>
                        <div className={styles.vertical_line} ></div>
                    </>
                })}
                <span className={styles.navLinks}>MORE
                    {/* <select className={styles.selectOptions}>
                        <option value="">OFFER</option>
                        <option value="">CORPORATE TRAVEL</option>
                        <option value="">AGENT LOGIN</option>
                    </select> */}
                </span>
            </div>
        </nav>
    )
}

export default Navbar
