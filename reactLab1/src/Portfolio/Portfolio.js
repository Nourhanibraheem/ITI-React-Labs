import React from "react";
import "./Portfolio.css"
class Portfolio extends React.Component {


    constructor() {
        super();
    }

    render() {
        let cards = [
            { cardTitle: "PYTHON", color: "#c6c5b9" },
            { cardTitle: "BACK END", color: "#353535" },
            { cardTitle: "WEB DESIGN", color: "#c6c5b9" },
            { cardTitle: "FULL STACK", color: "#353535" },
            { cardTitle: "WEB DEVELOPMENT", color: "#c6c5b9" },
            { cardTitle: "FRONT END", color: "#353535" },

        ];
        return (
            <>
                <h3 className="offset-1 fs-1 p-3 text-start"> Portfolio</h3>
                <div className="container portcards">
                    {cards.map((item) => {
                        return (
                            
                                <div className="col-3 m-3" style={{ "background-color" :`${item.color}` }}>
                                    <div className="card h-100" style={{ "background-color" :`${item.color}` }}>
                                        <div className="card-body"style={{ "background-color" :`${item.color}` }} >
                                            <h5 className="port card-title">{item.cardTitle}</h5>
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })}

                </div>
            </>
        );
    }
}

export default Portfolio;