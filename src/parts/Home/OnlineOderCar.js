import { Link } from "react-router-dom";

const OnlineOderCard = () => {
    return (<>
        {/* <div className="master_oder"> */}
        <div className="odercard">
            <div>
                <h1>delivery service</h1>
                <h4>availabe  9:00 am - 10:00 pm</h4>
            </div>
            <Link to="/order">order online now</Link>
            <i class="fa-solid fa-truck"></i>
        </div>
        {/* </div> */}
    </>)
}

export default OnlineOderCard;