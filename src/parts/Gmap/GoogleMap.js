import { Link } from "react-router-dom";
import OntherHeader from "../OntherHeader";

const GoogleMap = () => {
    return (
        <>
           <OntherHeader />
            <div className="map">
                <div className="embad">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299487.1337878085!2d133.03344726562491!3d36.13842925151492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002bb27bc38cd71%3A0x705da5e7d586ae4f!2sTakayama%20Ouan!5e0!3m2!1sen!2sin!4v1672166731768!5m2!1sen!2sin" style={{ width: "100%", height: "80vh", border: "none" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <Link to="/"><i className="fa-regular fa-circle-xmark"></i></Link>
                </div>
        </div>
    
    </>)
}

export default GoogleMap;