import React from 'react'
import styles from "../../style/midSection.module.css"
const MidSection = () => {
    return (
        <div>
            <div className={styles.mid_div}>
                <h1>Why EaseMyTrip for Bus Booking?</h1>
                <div className={styles.grid_div}>
                    <div className={styles.grid1}></div>
                    <div className={styles.grid2}></div>
                    <div className={styles.grid3}></div>
                    <div className={styles.grid4}></div>
                </div>
            </div>
            <div className={styles.couponInfo}>
                <h1 className={styles.couponInfo_heading} >Book Cheap Bus Tickets and Get Discount</h1>
                <div className={styles.couponInfo_description} >
                    <h4>Book Cheap Bus Tickets and Get Discount</h4>
                    <p>With simpler and smarter way of online bus booking at EaseMyTrip.com, be ready to travel any destination of India. We list more than 10,000 bus routes across India and provide great facility of online bus reservation. Explore the wide options of buses and choose to travel with Volvo buses, luxury buses, AC/Non-AC buses, sleeper buses or several other buses at reasonable rates. Best discounts and cash back offers are available on bus ticket. Be free from standing in the long queue of bus counters and go for bus booking online with EaseMyTrip.com. Be sure for a memorable & secure journey!</p>
                </div>
            </div>
            <div className={styles.FQA_div}>
                <h1 className={styles.FAQ_heading}>FAQ</h1>
                <div className={styles.FAQ_q_a}>
                    <div>
                        <h3>Q) Why should I book bus tickets with EaseMyTrip.com?</h3>
                        <p>A: EaseMyTrip is one of the best platforms to book bus tickets that come up with latest technological updates keeping its users in mind. Wide options for buses are available with great offers and discounts. Book Now</p>
                    </div>
                    <div>
                        <h3>Q) What are the payment methods for booking bus tickets?</h3>
                        <p>A: With EaseMyTrip bus booking, you have the ease of choosing different methods for payments. Payment options like Debit/Credit Card, Net Banking, Wallets, PhonePe and EMI with various banks are available for the convenience of the customers.</p>
                    </div>
                    <div>
                        <h3>Q) How to avail discount on bus booking with EaseMyTrip?</h3>
                        <p>A:There are several offers and discounts are available on our website. On this link only, you can find out the ongoing deals on bus tickets .</p>
                    </div>
                    <div>
                        <h3>Q) What to do if I lose my ticket?</h3>
                        <p>A: The online booking facility allows you having a copy of your bus ticket in your inbox. You can obtain this again from your email I’d.</p>
                    </div>
                    <div>
                        <h3>Q):How can I cancel my bus ticket at EaseMyTrip?</h3>
                        <p>A:You can cancel your ticket by going to my account segment and then clicking on bus option. The amount of refund will be credited to the original payment method.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidSection
