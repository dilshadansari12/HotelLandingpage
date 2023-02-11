
const ChefsCardv = (props) => {
    return (<>

        <div className="card">
            <img src={props.img} alt="here a img tag" width="14%" />
            <h2>{props.name}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur dignissimos reprehenderit commodi,</p>
            <h3>{props.price}</h3>
            <i className="fa-solid fa-basket-shopping"></i>
        </div>

    </>)
};

export default ChefsCardv;