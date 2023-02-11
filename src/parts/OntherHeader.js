import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const OntherHeader = () => {
    return (
        <div className="onther_g">
            <nav className="ohter_header_nav text-decoration-none">
                <Link to="/">home</Link>
                <Link to="/order">menu</Link>
                <Link to="/FinalOrderholder">order</Link>
                <img src="img/logo.png" alt="" width="50px" />
                <Link to="/sroty">story</Link>
                <Link to="/location">location</Link>
                <Link to="/about" href="#about">about</Link>
            </nav>
        </div>
    )
};


export default OntherHeader;