import { Link } from "react-router-dom";

const Header = () => {
    return (<>
        <header className="header">
            <div className="start_c">
                <nav>
                    <Link to="/">home</Link>
                    <Link to="/order">menu</Link>
                    <Link to="/FinalOrderholder">order</Link>
                    <img src="img/logo.png" alt="" width="7%" />
                    <Link to="#">story</Link>
                    <Link to="/location">location</Link>
                    <Link to="/about" href="#about">about</Link>
                    

                    
                </nav>

                <div className="img">
                    <figure><img src="img/ddd.png" alt="" /></figure>
                    <div className="txt-heading">
                        <h1>Japanese ramen mastery in bowl</h1>
                        <Link to="/order">order now </Link>
                    </div>
                </div>

            </div>
        </header>
    </>)
};

export default Header;

