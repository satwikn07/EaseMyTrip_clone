import React from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "../../style/footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.blue_div}>
        <div className={styles.dark_blue}></div>
        <div className={styles.Light_blue}></div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.foooter_Links}>
            <div>
              <h5 className={styles.footer_links_heading}>OUR PRODUCTS</h5>
              <ul className={styles.unorderList}>
                <Link>
                  <li className={styles.listGroup}>Book Flights</li>
                </Link>
                <Link>
                  <li className={styles.listGroup}> Flight Status </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Hotel Booking </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Trains </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}> Lowest Airfare Calendar</li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Domestic Flights </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>International Flights </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Holiday Packages </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Bus </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Cabs </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}> Franchise</li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Mice </li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className={styles.footer_links_heading}>EMT INFO</h5>
              <ul className={styles.unorderList}>
                <Link>
                  <li className={styles.listGroup}>Privacy Policy </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Terms & Conditions </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>User Agreement </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Investors Relation </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}> Mobile App</li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Achievements </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Career </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>About Us </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className={styles.footer_links_heading}>SITE DIRECTORY</h5>
              <ul className={styles.unorderList}>
                <Link>
                  <li className={styles.listGroup}>Flight by City</li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Holidays </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Airlines </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Airports </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Flight Schedule </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Train Routes </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Bus Routes </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Hotel Directory </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Travel Guides </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Blog </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Travel Updates </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Sitemap </li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className={styles.footer_links_heading}>AIRLINE OFFERS</h5>
              <ul className={styles.unorderList}>
                <Link>
                  <li className={styles.listGroup}>Air India </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>JetKonnect </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>GO FIRST </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Indigo </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Spicejet </li>
                </Link>
                <Link>
                  <li className={styles.listGroup}>Vistara </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.footer_pay_info}>
              <h5 className={styles.footer_links_heading}>
                PAYMENT & SECURITY
              </h5>
              <div className={styles.card_images}>
                <div>
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUfXPqq0ydPRYN7hWJEqDrLfg8br-_9b1D9irzkIQ24pUPobX6Rfh_rKDOdJ4S9Nw5R8&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAL3jJ5Vv_Segr03nJY6e89zID4_hOyIko4W5LaPwRYSjCv92CfqYHaCbV_LwaiIylTA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Logo-2014-present.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAABEVBMVEX///83OYv0byAJekQ1N4ozNYkxM4gwMoj7+/0oKoQtL4b29vrU1Oapqs3x8fcqLIXn5/FVVpoAekXf3+zR0ePl5e9DRZLt7fXFxt0+QI/Ly99RU5qDhLSYmcB4ea1gYaC1tdJ6e69qa6VvcKiRkr1ZW5yhosfBwduvsNBnaKVBQ5D95tn++PPv9/T0bBSx1MP4o3KKi7ikcy5KmHDsbyH96uBMTZeQwqr6u5b4p3zg7+gkiFj3llz1fjr828lboX7zaADJ4dY2jF/3jVGBtJn7xqidnW/ccCRadzr70LtKdzw5dz2scy5ddzr5sYqadDCMdDL1gkN3dTTMcSeaxK/S590dIIKBgUjgw6X4nGq718iYegxxAAAM4ElEQVR4nO2bCZfaRhLHR0yrJQQIGAHiECBOwcyYhHiGjJPYThw7ibPZbJzDu8n3/yArqY8qgWEWYe/z5NXvJc82R6v17+q6WpydEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEA+TcrfbaJTLZS+h2WzWan6M65ZKdr4B/WSUZjpSgn/icP9HakNuGJ1Op9VqbTa9Xr0+Gw6X48koWPcrUdnNMeK61UvGiUeKiQeLR5sM4uHmYbf5cevRbplMYprcjP/n3OJWAu/Ug/bRA/p1JxlGjJQMZiXDOfEfbDPulz/ALbw35owZ+2Cct/rHLmX3cs+ALB6P1Ssf5C7eC+6I75UiwbSmpeNGnJv7xTWYWe1/mBt5D5Tr5kEtDLMTHjWgOzgsLjOOG+9+rp7Jv3z+6LSBws6BVUzhwVEOtDy7T9xJ7bQpb3P35Dr984svPzlpnNLUukcKgw+9Y0YM97kLrUUrOmnKO3z1VBjGJ+fPTzKM2vJ+LerH+P5Sn9+jBeP9Iz3QYa5vVj+nhvHy/DTDaKBVjGMqS6IqNzOh5TgtahMQN4nSKVl1rJF/ypS3ef11ITWMR8/PTzOMiqPnyS43vTg3Wi6H9Y2BZn/cHmlstLtgxiZNueq9TQf7U+v9Oownq8Lq09gwvnlxfn5xgmGUJg5IMW/EeXicNDe9dr8FYvDBEctoL0z0xXaa2pfL7QWO3Nta2K7vJ7m6mytLv/52VSgUYsP45OL8JMOotfTUzWETvbEGjUyRbZXie0pvzcczdhtl8bLMrksB2iLIR/po6+A94pejSn8dDCYiTV+0QSa7Jq4Yg2fmytc8T3idq6exFKtPzx69jKU4v/grtxYRbBFrjUNnVNV3JPILfzqczZISYzgOQYzSWuyC2WwpbqIG6YrZw3urDYYB2VujP6lfxumcJfJ+bhqbcUUJVV7OkismewynZ6F4rT6bCDf2qpBy9cXzRIsTDAOW3+gs8BtdrYU5S28pMixZZFgL0GLOZenh9ISSXfCTVmZvlZELklfyRq3ET6M3YmfL2URK2C5Kz2s6AYzjLR31orjik2SLFFZPvvky1eI8r8ewkaPrNfA7YBd8mvy71FeqmeiD3lCtthMIgaYgrjnHmymCTbfpJi+48071ndG32hML3oYpgBb2nGfne5u6i0Lh6XcXQosXObUoQy7AxxmH1lcTYZfpNX2dh3Dk+SIVkZkl13qm3QK7zKRUIJIYoLZm+/JTZ5nuoS58I9CqemoPWlPx2uunYo8Ufjo/P8kwKlp6w1zjVSzpBa+uhWr6rs2p/iDkVawl1rIJW8Sc4bSk1FN3Hvvi+N9uAJ+Mq2GeSUGKqeGUtaxIi74lPmi25E6S7qJQ+P4HaRj5PIY9glU05xmR1NSsnrCChaXuGpVqzbFSjEvXGRb1DWVDcaj3A2sldzrVN8+sTn057Bko/y2mFgVGC1p4l1JSVe1eC3eR8Jm0i3zJZ3OG8iK4xTNvqqyAX8pezkC7C5SFNjZaMhkaAmRoU2RoqBp2JnYSVdQ3Tbb23FLJLQfgQ4VdeGxXCzU+30ihr77VWnz/4ymGEaEalY3DbqPRjcJ5MDRUpDV7cs/7+pN8oIsJu6KNRSrp15G4qmljl5qVDUTUanyj/rAq+l4W36jGGRgpM1Ija+prmkqLrtSLMbVyrwualTKMPMmn3ce71LR4HNEsp+roNbNmkZwECisQ692Bmr2KLW0s7qjd7XbbsbijngVu0pkktxkMZS90AEFJe1deT6/q6zzQHKlETkrKJ9Isru9WIMaNNowvjtbCz3Zd4kCfjXHOWE90rcMKSiY9HZFVbMn2CzsJzLQcJLnZEmHJE6mjBz6lNNHxeSSk3mxrEcnKgOmq//orpMXqp4vchtE43NIyA5362jM1T9ZCEdXSRix8gzvCA4p+cnZMlk06MKEqgZgj4jOEHnOU7ktfFTXQXbp6WkDc/CO3xwiNrZlmwDl5GdzFEL4fKKNWscW7r6UVL/meOq8211bADGGOJZ2rSC2UezNFspbwaoW1WH12kTPHcNcH2zi4gqrozYQ6t67ez6wugv29/UJr0NyZhl3yy4uJATkon4kL25Depf5at50smMOnGS0KNz/kTD6bw8NNWq4Nww70FnHgvARKFj5J163UP9QBT748yHZCSjWvG04ndcNx0BetQEQqW/cThBYVKYXZ04JeZ7ZImnxe5DKMbuewRTNH1ZPNobaADriLqdbCEQtVmxwSl3EjQGm+XUtl6JiOtaWgKWs/ewRaxKvSlJuIVeGE5dlqS4vv/5nPY8zxFknPuLYmxVRB2YaAMYQEXJsV48JYypsD4nJnFoIDKkXTSZxqbsuQjtaS3sDW/ohPXAi5fAjD3H29pUXO5BO1tOK76Q2HSSvOqWaacTKvquhXnLX+fkM7B9YSGzzcDhpJGElPJp1qcTMHV2FHkw7jJvog8uLQUtQJhxmnE2XpnZiJSr4/t+0iZ1XShK4v6wiztF1vMcSdTlG7utpdGFaov9/XL6bpU5IJIXFNLjrIncvWpr4c9Ns4IR9XLR1sWdrCuASvC24K2gRjv6TyOuVNEm633UWSY+RJPkOYOS6jvCVqWAotoEvBOjr7qo0htogNXKuDTbHZIJj255Uwaje8WvYIoNvDBslby2AeRjCazt3PKlqLZVOFKNw9wQn4ziZ5/M0RWqBVNHBLawGzSn1WPHldgnFw4ZHuDjMmqrUuJFZmve3uy6maIAWzjGW/nfYtofbTBcrZQpdFs8qSy2vhs5Wfd5S4+ZcMJM//OEIKuweNyTpuaTXglmR9CH7AGioDctfa7fGZMOo+MrT959H2GkpZPg6b4oOuTmzRCUSoi7WOOqSQDUfB9Y67uPlFSvH4qIrE21l+CVpeUYeV+jrgWKomQrYS+1NhAnACxw4cR3ch2FQhs22AsiMtY6SnqHJ5xvETC8/ebJvFr8oqjivOoKXFWKaNE+oyVVbiPqQNfCm18IY7rf8a0nC293TJnqLB4GW9RXBPqb3zZIi1xPb26mbLKmRycfHyyHIEtbQuu/iNOVre1BE0UVOiE8aTsf123QLfIFv/EWpp7T+Zh1YYc0K4a9C/gxLb7XqJmfgpoeufs1tE5VkXxz56gFpa5gzXS5Bvx3eZvuGhMzR2uQ7D+aCD0jRrJG4c/AC0cXaBvaVcbnKFJbom5KaN7fLGCrBDvv0qo8VvSorfjy1S23CDsl0gqS23jTizPLHrN0wLvyCrcEhDVdP/naDyjatPlQewGWSuIl7f0sLsZQ65n+HsYvXbj0qKI5XIdF2KmUOiBsSXqjiWiA6Ws2ZrJwE3h3sPYG30ABMfl13X96JpHfmF6hRp0cpqwbO9D1yvr36TrYscjV/0lBazMo5u0YF5zfdowRicq1hL8fUFWI8z3b2gBMWkpO3banXiGhUXJUXkEbysFnycKfivcb2u6tMXOY5TvRnshDpWG/dAi2H6UnfbnZtmfTTTMXCdunZ7DQ7W2f/cTamfbSsmQ+PhZdtXTjJT67FWmBnqFiLqzWcqrTgm2VREcL6Oyq2zpPaAMFIVa+T1sqU430zLrjqzUcewKCXHdf0Oi53ClJuXYFKZhclqsR2cIAHXyebjY5JNhV2Bq1iZVcQ9CEe4qmyLhlnjdumstNaNFfGhRg/tmgNXbtS3hHVm8/Zai5Hx4xkt5FkmABH1lzx5t8YN3hYVnYy78Afwzlv5Ti1weGrIcf1dNfrJqjc38mNvl2K1QhO+dugBzngVIJcwHWe4qNln5V6xWkz+K77FriajRXG9NZI6JLr59SJXsqlnVI7CxaKSEmWLqGb8TkWikrxSpW4kvR5m9AKhT60yn88rizCMlF5tPWDl8BNIUY+lfSPTNDZBW1xiPoiL2nn81TlefOw7eW8rNt0KKVZP/y2kODrZzI0fzftxCd5+Hw9a+YtgMpmMgn54z2go19p9QPZV2tJavfnP43zJ5seC7f5Pz2ah2szayerTiLr69tlfL4QUH2amHws2hLRsVyHh+s0qkeLq7Pdkh3x5dN79sHD7EGrZzmnbsxshRfrE2onPPn/c+OUw6KFnhiY7Sf1dLMWft2dnfzzOl2w+FPx1x6lW0RM+re0dkra00ifi/7o4f5En2XwoLIzsOYsz3/nI1Rv5DPjn+ZLNhwI6ghBSDHY7Q69v7lIpHj3Pl2w+FPCpRCLFOxqG13d38icjL/Mlmw+FNi7VGe+9ozF0fSukOHv0946luG40TGt2/A8h/z646rlsxrjVGX3Uv+H80LhBsVp1HIsbrdk6eq+/unl4eGkNHEbdcjPPr6YJgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiA+Ev4LEOUQ7Um6QaoAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.socialMediaInfo}>
                <h5 className={styles.footer_links_heading}>FOLLOW US ON</h5>
                <div className={styles.icons_div}>
                  <div>
                    <img
                      className={styles.logiImage1}
                      src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                      alt=""
                    />{" "}
                  </div>
                  <div>
                    <img
                      className={styles.logiImage2}
                      src="https://cdn.icon-icons.com/icons2/726/PNG/512/TWITTER_icon-icons.com_62686.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={styles.logiImage3}
                      src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={styles.logiImage4}
                      src="https://i.ibb.co/GH5gHRK/367593-48.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className={styles.logiImage5}
                      src="https://i.ibb.co/nQyjbQG/1161953-48.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.download_div}>
            <h6>Download</h6>
            <h5>EaseMyTrip App</h5>
            <div className={styles.store_Links}>
              <img src="https://i.ibb.co/ssY2MGg/playAppp.png" alt="" />
            </div>
            <div className={styles.store_Links2}>
              <img src="https://i.ibb.co/Vjt7RR7/appstore.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bottom_line}></div>
        <div className={styles.copyRight_div}>
          <div className={styles.copyRight_content}>
            Copyright © 2021 EaseMyTrip
          </div>
          <div className={styles.companies_logos}>
            <img
              src="https://www.easemytrip.com/images/common/footer-btm-sprite.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
