import Orderminilist from "../Menu/Orderminilist";

const FinalOrdercard = (props) => {

     console.log(props.name)
    return (
        <>
    

        <Orderminilist />

            <section className='d-flex justify-content-center align-items-center' style={{ margin: "20px 0px" }}>
                <div style={{ width: "55%", height: "250px", boxShadow:"#80808047 5px 5px 5px", backgroundColor: "white" }} className="d-flex justify-content-start align-items-center" >
                    <img src={props.src} alt="sdad" width="300px" height="200px" />

                    <div style={{ width: "50%" }} >
                        <div className='d-flex justify-content-around align-items-center' >
                            <p><span className='font-weight-bold' style={{ fontWeight: "bold" }} >Price : </span> $350 </p>
                            <p><span className='font-weight-bold' style={{ fontWeight: "bold" }} >Rating:  </span>
                                <span style={{ background: "green", color: "white", padding: "2px 5px" }} >
                                    4.5 &#9733;
                                </span>
                            </p>
                        </div>

                        <div className='d-flex justify-content-around align-items-center' >
                            <p><span className='font-weight-bold' style={{ fontWeight: "bold" }} >Disheh : </span>{props.name}</p>
                            <p>1000+ : daily order
                                <br /> placed from here</p>
                        </div>

                        <div className='d-flex justify-content-around align-items-center' >
                            <p><span className='font-weight-bold' style={{ fontWeight: "bold" }} >Totla :</span> {props.price} $</p>
                            <p>  <i class="fa-solid fa-trash" style={{ fontSize: "25px", color: "red" }} ></i></p>
                        </div>

                        <div className='d-flex  align-items-center' style={{ marginLeft: "40%", marginTop: "10px" }} >
                            <button style={{ padding: "4px 10px", border: "1px solid grey", margin: "10px", marginRight: "10px" }} >+</button>
                            4
                            <button style={{ padding: "4px 10px", border: "1px solid grey", marginLeft: "10px" }} >-</button>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default FinalOrdercard;