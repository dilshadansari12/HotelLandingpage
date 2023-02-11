import OnlineOderCard from "./OnlineOderCar";
import { Link } from "react-router-dom";


const Footer = () => {
   return (<>
      <footer className="footer">
         <div className="master_oder">
            <OnlineOderCard />
         </div>
         <div className="master_f">
            <div className="footer_img">
               <img src="img/logo.png" alt="footer logo" />
               <h5>Boutique Hotels & Resorts (旅館) </h5>

            </div>

            <div className="footer_i">
               <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-instagram"></i>
               <Link to="/location"><i className="fa-solid fa-location-dot"></i></Link>
            </div>
         </div>
      </footer>


   </>)
};


export default Footer;