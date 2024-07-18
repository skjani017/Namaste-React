import React from "react";
import ReactDom from "react-dom";

// * Header
// * - Logo
// * - NavItems
// * Body
// * - search
// * - RestaurantContainer
// * - RestaurantCard
// * - img
// * - Name of Res , Star Rating , cuisine , Delivery title
// * Footer
// * -Copy right
// * - Links
// * - Address
// * - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dcassetcdn.com/design_img/3974548/882337/27273220/vmq81j0p81cm4957rx3gxy7fw4_image.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Menu</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Sing in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
      className="res-logo"
        alt="biryani"
        src="https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg"
      ></img>
      <h4>Magana Foods</h4>
      <h4>Hyderabadi Biryani</h4>
      <h4>4.9/5</h4>
      <h4>15 Mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
