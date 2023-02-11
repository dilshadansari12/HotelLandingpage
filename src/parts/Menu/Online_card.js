import { useContext } from "react";
import { APidatas } from "../../App";
import { showDAts } from "../../App";

const Online_card = ({ src, name, price, para, id }) => {

    const setoderdata = useContext(APidatas);
    const spredopdata = useContext(showDAts);


    return (
        <div className="order_cards_part_1">
            <div>
                <img src={src} alt="online order" width="300px" height="200px" />
            </div>
            <div className="online_order_text" >
                <div className="Order_last_txt">
                    <h1 style={{ textTransform: "captlize" }} >{name}</h1>
                    <h3>{price}$</h3>
                </div>
                <p>{para}</p>

                <button onClick={() => {
                    if (spredopdata) {
                        setoderdata([{ ...spredopdata }, { id: id, name: name, src: src, price: price, para: para }])
                        alert("t")
                    } else {
                        setoderdata([{ id: id, name: name, src: src, price: price, para: para }]);
                        alert("f")
                    }
                }} ><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
};

export default Online_card;