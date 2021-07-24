import React from "react";
import Carousel from "react-elastic-carousel";
import "../../style/slide.css";

const CarosalComponent = () => {
  const breakPoints = [
    {
      width: "100%",
      itemsToShow: 4,
      itemsToScroll: 1,
      activePage: false,
    },
  ];
  const items = [
    {
      id: 1,
      title: "Bus Deal",
      image: "https://www.easemytrip.com/images/bus-img/emtbus-7may-hp.png",
      description:
        "Enjoy Bus Tickets to Different Destinations At A Discount up to Rs. 500",
      promocode: "EMTBUS",
      validity: "Validity: 31 st july, 2021",
    },
    {
      id: 2,
      title: "Intercity Bus Offer",
      image: "https://www.easemytrip.com/images/bus-img/intercity-bus-hp.png ",
      description:
        "Book Intrcity Smart Bus Tickets And Enjoy 200 Flat Discount",
      promocode: "BUS200",
      validity: "Validity: 31 st july, 2021",
    },
    {
      id: 3,
      title: "RSRTC Offer",
      image: "https://www.easemytrip.com/offer-img/rajas-hp.png ",
      description: "Enjoy RSRTC Bus Booking at Zero Convenience Fees",
      promocode: "",
      validity: "",
    },
    {
      id: 4,
      title: "VRL Travel Offer",
      image: "https://www.easemytrip.com/images/bus-img/vrl-bus-6apr21-hp.png ",
      description: "Get Instant Discount of 10% on Bus Booking",
      promocode: "EMTVRL",
      validity: "Validity: 31 st july, 2021",
    },
    {
      id: 5,
      title: "10% Bus Booking",
      image: "https://www.easemytrip.com/images/bus-img/bus10-7may-hp.png ",
      description: "Get Instant Discount of 10% on Bus Booking",
      promocode: "BUS10",
      validity: "Validity: 31 st july, 2021",
    },
    {
      id: 6,
      title: "Easeday Offer",
      image:
        "https://www.easemytrip.com/images/bus-img/easeday-bus-7may-hp.png ",
      description:
        "Enjoy Best Offers on Bus Tickets for Your Favorite Bus Routes",
      promocode: "EASEDAY",
      validity: "Validity: 31 st july, 2021",
    },
  ];

  return (
    <div className="styling-example">
      <h1 className="h1-heading">Offers & deals</h1>
      <Carousel
        breakPoints={breakPoints}
        autoTabIndexVisibleItems={true}
        className="rec.rec-arrow"
        enableAutoPlay autoPlaySpeed={3000}
      >
        {items.map((item) => (
          <div className="sliderDiv" key={item.id}>
            <img src={item.image} alt="" />
            <div className="deal_offer_info">
              <h3 className="deal_offer_heading">{item.title}</h3>
              <p className="deal_offer_description">{item.description}</p>
              <div
                className={item.promocode.length === 0 ? null : "promocode_div"}
              >
                {item.promocode.length === 0 ? null : (
                  <p className="promoCode">
                    <span className="promo_color">Promocode :</span>{" "}
                    {item.promocode}
                  </p>
                )}
              </div>
              <div
                className={
                  item.validity.length === 0 ? null : "validity_through"
                }
              >
                {item.validity.length === 0 ? null : (
                  <span className="validity_information">
                    <i style={{ color: "grey" }} class="fas fa-clock"></i>{" "}
                    {item.validity}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarosalComponent;
