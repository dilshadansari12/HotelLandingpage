import FinalOrdercard from "./FinalOrdercard";
import OntherHeader from "../OntherHeader";
import { showDAts } from "../../App";
import { useContext, useEffect, useState } from "react";



const FinalOrderholder = () => {
    const orderdata = useContext(showDAts);
    console.log(orderdata)

    return (
        <>
           
            <OntherHeader />
            {
                orderdata.map((element, index) => {
                      { console.log(element.name)}
                    return(<FinalOrdercard name={element.name} src={element.src} para={element.para} price={element.price}  />)
                })
            }
            {/* <FinalOrdercard /> */}
        </>
    )
}

export default FinalOrderholder;