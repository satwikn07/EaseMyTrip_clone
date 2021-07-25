import React, { useState } from "react";
import styles from "../../style/paymentPage.module.css"
import Modal from "react-modal"
const paymentOptions = [
    {
        icon: "fas fa-credit-card",
        title: "Credit/Debit Card"
    },
    {
        icon: "fas fa-university",
        title: "Net Banking"
    },
    {
        icon: "fas fa-wallet",
        title: "Wallet"
    },
    {
        icon: "fas fa-credit-card",
        title: "UPI"
    },
    {
        icon: "fas fa-money-check",
        title: "EMI"
    },
    {
        icon: "fas fa-gift",
        title: "GiftCard"
    },
]
const year = []
for (let i = 2021; i < 2055; i++) {
    year.push(i)
}
console.log(year)
const PaymentPage = () => {

    const [payment, setPayment] = useState(false)
    const [message, setMessage] = useState(false)


    return (
      <div className={styles.payment_main_div}>
        <div className={styles.pay_wallet_div}>
          <img
            className={styles.wallet_image}
            src="https://bus.easemytrip.com/img/walletIcon.svg"
            alt=""
          />
          <p className={styles.wallet_pay_info}>
            You have to login to use your{" "}
            <span className={styles.wallet_amnt}>wallet amount</span>
          </p>
          <button className={styles.wallet_login_btn}>LOG IN</button>
        </div>

        <div className={styles.payment_option_div}>
          <div className={styles.payment_details_options}>
            <div className={styles.pay_options_div}>
              {paymentOptions.map((item, i) => (
                <div key={i}>
                  <i style={{ padding: "12px" }} className={item.icon}></i>{" "}
                  <span style={{ padding: "10px" }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.payment_fill_div}>
      
              <div className={styles.pay_card_num}>
                <label>Enter Your Card No.</label>
                <input
                  className={styles.card_num_input}
                  type="tel"
                  placeholder="xxxx xxxx xxxx xxxx"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  maxlength="19"
                />
                <br />
              </div>
              <div className={styles.pay_card_num}>
                <label>Enter Card Holder Name</label>
                <input
                  type="tel"
                  placeholder="Card Holder Name"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  maxlength="19"
                />
                <br />
              </div>
              <div className={styles.exp_cvv_div}>
                <div>
                  <label htmlFor="">Expiry Date</label>
                  <br />
                  <select className={styles.exp_month}>
                    <option value="">Month</option>
                    {[
                      "01",
                      "02",
                      "03",
                      "04",
                      "05",
                      "06",
                      "07",
                      "08",
                      "09",
                      "10",
                      "11",
                      "12",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <select className={styles.exp_year}>
                    <option value="">Year</option>
                    {year.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="">CVV</label>
                  <input className={styles.card_detail_cvv} type="text" />
                </div>
              </div>
              <div className={styles.save_card_details}>
                <input type="checkbox" />{" "}
                <span className={styles.checkbox_label}>
                  Save this card for faster checkout
                </span>
              </div>
              <div className={styles.price_submit_btn}>
                <h3 className={styles.h3_heading_fare}>
                  Total Fare : ₹ <span className={styles.total_fare}>1200</span>
                </h3>
                <button onClick={()=>setPayment(true)}>Make Payment</button>
              </div>
              <div className={styles.pay_secure_info}>
                We use 128-bit secure encryption providing you a SAFE payment
                environment
              </div>

            <Modal className = {styles.modal} isOpen = {payment} onRequestClose = {() => setPayment(false)} style = {{overlay: {backgroundColor: "grey", border: "1px solid grey"}}}>
              <div style = {{background: "white", width: "70%", height: "23vh", padding: "5px"}}>
                <h2 style = {{textAlign: "center", color: "#348AEE"}}>Enter OTP</h2>
                <div style = {{display: "flex"}}>
                  <input style = {{height: "60px", width: "60px", marginRight: "5px", textAlign: "center"}} type="text" />
                  <input style = {{height: "60px", width: "60px", marginRight: "5px", textAlign: "center"}}  type="text" />
                  <input style = {{height: "60px", width: "60px", marginRight: "5px", textAlign: "center"}}  type="text" />
                  <input style = {{height: "60px", width: "60px", marginRight: "5px", textAlign: "center"}}  type="text" />
                </div>
                <div>
                  <button onClick={()=>setMessage(true)} style = {{color: "white", background: "#83D6FF", padding: "10px", marginLeft: "35%", marginTop: "5%"}}>Submit</button>
                </div>
              </div>
              
            </Modal>
            <Modal className = {styles.modal} isOpen = {message} onRequestClose = {() => setMessage(false)} style = {{overlay: {backgroundColor: "grey", border: "1px solid grey"}}}>
              <div style = {{background: "white", width: "80%", height: "30vh", padding: "5px"}}>
                <h2 style = {{color: "#EF6614", textAlign: "center", marginTop:"19%"}}>Your seat is booked.</h2>
                <h3 style = {{color: "#0CB482", textAlign: "center"}}>Thank you for booking with us!!</h3>
              </div>
              
            </Modal>
          </div>
        </div>
      </div>
    );
}

export default PaymentPage
