import { useContext } from "react";
import Online_card from "./Online_card";
import OntherHeader from "../OntherHeader";
import FoodeData from "../../AllFoodeData";
import Orderminilist from "./Orderminilist";


const OnlineOrder = () => {
    const show = useContext("show")
    return (
        <>
            <OntherHeader />
            <section className="section_order_online" style={{ postion: "reletive" }} >
                <Orderminilist />
                <div className="online_order_2">
                    {
                        FoodeData.map((element, ind) => {
                            return <Online_card id={element.id} price={element.price} name={element.name} src={element.image} para={element.para} />
                        })
                    }
                </div>
            </section >
        </>
    )
};

export default OnlineOrder;