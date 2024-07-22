import { CDN_URL } from "../Utils/Constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="biryani"
          src= {CDN_URL}
        ></img>
  
        <h4>{name}</h4>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;