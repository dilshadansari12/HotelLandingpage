import React, { useRef, useState } from 'react';
import { Badge } from '@mui/material';


// card part

const Orderminilist = () => {
    const curr = useRef();
    const curr2 = useRef();

    const [num, enaum] = useState(false);


    const myfun = () => {

        if (num) {
            curr.current.style.display = "block";
            enaum(false);

        } else {
            curr.current.style.display = "none";
            enaum(true);

        }
    }

    return (
        <>
            <div style={{ position: "absolute", top: "60px", right: "20px", zIndex: "99" }} className="anim cursor-pointer" >

                <div className="d-flex justify-content-center align-items-center" style={{ width: "70px", height: "70px", backgroundColor: "#e9524d", borderRadius: "50%", marginLeft: "10%", marginBottom: "10px", position: "sticky", top: "0" }}
                    onClick={myfun} ref={curr2}
                >
                    <Badge badgeContent={4} color="primary">
                        <i class="fa-solid fa-cart-shopping" href="#about" style={{ fontSize: "2rem", color: "black" }} ></i>
                    </Badge>
                </div>

                <div ref={curr} style={{ width: "400px", background: "white",  boxShadow:" 5px 5px 5px #808080b5", padding: "20px", display: "none" }}  >
                    <div className="anim" style={{ width: "100%" }} >
                        <i class="fa-solid fa-cloud" style={{ fontSize: "100px", color: "black" }} ></i>
                        <p>Nothing To Show You</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orderminilist;