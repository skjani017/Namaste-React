
import {LOGO_URL} from "../Utils/Constants"
 const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
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
  export default Header;