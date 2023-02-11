import ChefsCardv from "./ChefsCard";


const ChefsSelection = () => {
    return (<>
        <section className="section">
            <h1>chef's selection</h1>
            <div className="cards">
                <ChefsCardv img="img/a.jpg" name="vegitable reomone " price="12$" />
                <ChefsCardv img="img/b.jpg" name="Curry rice" price="11$" />
                <ChefsCardv img="img/c.jpg" name="Miso Soup" price="08$" />
                <ChefsCardv img="img/d.jpg" name="Sashimi" price="17$" />
                <ChefsCardv img="img/ee.jpg" name="Udon Noodles" price="13$" />
            </div>
        </section>
    </>)
}

export default ChefsSelection;